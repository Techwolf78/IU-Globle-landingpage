import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ASSETS_DIR = path.resolve("src/assets");
const TEXT_TARGETS = [
  path.resolve("src"),
  path.resolve("index.html"),
];
const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const TEXT_EXTENSIONS = new Set([".jsx", ".js", ".css", ".html"]);
const QUALITY = 70;
const EFFORT = 3;

sharp.cache(false);

async function pathExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles(entryPath, predicate) {
  const stats = await fs.stat(entryPath);

  if (stats.isFile()) {
    return predicate(entryPath) ? [entryPath] : [];
  }

  if (!stats.isDirectory()) {
    return [];
  }

  const entries = await fs.readdir(entryPath, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map((entry) => collectFiles(path.join(entryPath, entry.name), predicate)),
  );

  return nested.flat();
}

async function convertImage(filePath) {
  const parsed = path.parse(filePath);
  const outputPath = path.join(parsed.dir, `${parsed.name}.avif`);
  const [inputStats, outputExists] = await Promise.all([
    fs.stat(filePath),
    pathExists(outputPath),
  ]);

  if (outputExists) {
    const outputStats = await fs.stat(outputPath);
    if (outputStats.mtimeMs >= inputStats.mtimeMs && outputStats.size > 0) {
      return {
        input: filePath,
        output: outputPath,
        skipped: true,
      };
    }
  }

  await sharp(filePath)
    .rotate()
    .avif({
      quality: QUALITY,
      effort: EFFORT,
    })
    .toFile(outputPath);

  return {
    input: filePath,
    output: outputPath,
    skipped: false,
  };
}

async function deleteOriginal(filePath) {
  let lastError;

  for (let attempt = 1; attempt <= 10; attempt += 1) {
    try {
      await fs.chmod(filePath, 0o666);
      await fs.unlink(filePath);
      return;
    } catch (error) {
      lastError = error;

      if (error.code !== "EPERM" && error.code !== "EBUSY") {
        throw error;
      }

      await new Promise((resolve) => setTimeout(resolve, attempt * 250));
    }
  }

  throw lastError;
}

async function updateTextReference(filePath) {
  const original = await fs.readFile(filePath, "utf8");
  let updated = original.replace(/\.(jpe?g|png)(?=(['")?#]|$))/gi, ".avif");

  if (path.basename(filePath) === "index.html") {
    updated = updated.replace(
      /<meta property="og:image" content="[^"]*" \/>/,
      '<meta property="og:image" content="/src/assets/hero.avif" />',
    );
  }

  if (updated !== original) {
    await fs.writeFile(filePath, updated);
    return true;
  }

  return false;
}

async function main() {
  if (!(await pathExists(ASSETS_DIR))) {
    throw new Error(`Assets directory not found: ${ASSETS_DIR}`);
  }

  const imageFiles = await collectFiles(ASSETS_DIR, (filePath) =>
    IMAGE_EXTENSIONS.has(path.extname(filePath).toLowerCase()),
  );

  const conversions = [];
  const failedDeletes = [];
  const failedConversions = [];
  for (const imageFile of imageFiles) {
    let conversion;
    try {
      conversion = await convertImage(imageFile);
    } catch (error) {
      failedConversions.push({
        file: imageFile,
        reason: error.message,
      });
      continue;
    }

    try {
      await deleteOriginal(conversion.input);
    } catch (error) {
      failedDeletes.push({
        file: conversion.input,
        reason: error.message,
      });
    }
    conversions.push(conversion);
  }

  const textFilesNested = await Promise.all(
    TEXT_TARGETS.map((target) =>
      collectFiles(target, (filePath) => TEXT_EXTENSIONS.has(path.extname(filePath).toLowerCase())),
    ),
  );

  const textFiles = [...new Set(textFilesNested.flat())];
  const updatedFiles = [];
  for (const textFile of textFiles) {
    if (await updateTextReference(textFile)) {
      updatedFiles.push(textFile);
    }
  }

  const convertedCount = conversions.filter((conversion) => !conversion.skipped).length;
  const skippedCount = conversions.length - convertedCount;

  console.log(`Converted ${convertedCount} image(s) to AVIF.`);
  console.log(`Skipped ${skippedCount} already-converted image(s).`);
  console.log(`Failed to convert ${failedConversions.length} source image(s).`);
  console.log(`Failed to delete ${failedDeletes.length} locked original image(s).`);
  console.log(`Updated ${updatedFiles.length} source reference file(s).`);

  if (conversions.length > 0) {
    console.log("Sample conversions:");
    for (const conversion of conversions.slice(0, 10)) {
      console.log(`- ${path.relative(process.cwd(), conversion.input)} -> ${path.relative(process.cwd(), conversion.output)}`);
    }
  }

  if (failedDeletes.length > 0) {
    console.log("Locked originals not deleted:");
    for (const failedDelete of failedDeletes.slice(0, 20)) {
      console.log(`- ${path.relative(process.cwd(), failedDelete.file)}`);
    }
  }

  if (failedConversions.length > 0) {
    console.log("Source images not converted:");
    for (const failedConversion of failedConversions.slice(0, 20)) {
      console.log(`- ${path.relative(process.cwd(), failedConversion.file)}: ${failedConversion.reason}`);
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
