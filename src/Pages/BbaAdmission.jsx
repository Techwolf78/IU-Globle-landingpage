import React from "react";
import BbaAdmissionHero from "../Components/BbaAdmission/BbaAdmissionHero";
import BbaAdmissionPointers from "../Components/BbaAdmission/BbaAdmissionPointers";
import BbaAdmissionOverview from "../Components/BbaAdmission/BbaAdmissionOverview";
import BbaAdmissionCourses from "../Components/BbaAdmission/BbaAdmissionCourses";
import BbaAdmissionJoin from "../Components/BbaAdmission/BbaAdmissionJoin";
import BbaAdmissionInfra from "../Components/BbaAdmission/BbaAdmissionInfra";
import BbaAdmissionTestimonials from "../Components/BbaAdmission/BbaAdmissionTestimonials";
import Recruiter from "../Pages/Recruiter";
import BbaAdmissionTopPlacement from "../Components/BbaAdmission/BbaAdmissionTopPlacement";
import BbaDomainCertifications from "../Components/BbaAdmission/BbaDomainCertifications";
import BBAAdmissionProcess from "../Components/BbaAdmission/BbaAdmissionProcess";
import BbaAdmissionFAQ from "../Components/BbaAdmission/BbaAdmissionFAQ";
import About from "../Components/BbaAdmission/About";
import Whatwhyhow from "../Components/BbaAdmission/Whatwhyhow";
import Overview from "../Components/BbaAdmission/Overview";
import GlobalImmersionComponents from "../Components/BbaAdmission/GlobalImmersionComponents";
import Whychoose from "../Components/BbaAdmission/Whychoose";
function BbaAdmission() {
  return (
    <div>
      <BbaAdmissionHero />
      <BbaAdmissionPointers />
      <Overview />
      <GlobalImmersionComponents />
      <BbaAdmissionTopPlacement />
      <Recruiter />
      <About />
      <Whychoose />
      <BbaAdmissionOverview />
      <BbaAdmissionCourses />
      {/* <BbaDomainCertifications /> */}
      <Whatwhyhow />
      <BbaAdmissionInfra />
      <BbaAdmissionJoin />
      {/* <BbaAdmissionTestimonials /> */}
      <BBAAdmissionProcess />
      <BbaAdmissionFAQ />
      {/* <BbaAdmissionFaculty /> */}
    </div>
  );
}

export default BbaAdmission;
