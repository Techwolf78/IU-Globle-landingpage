import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import NPFWidget from '../Components/NPFWidget';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'min(440px, calc(100vw - 24px))',
  maxHeight: 'calc(100vh - 32px)',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: '16px',
  boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  p: 1.5,
  outline: 'none',
};

function ApplyNowButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="fixed right-[-48px] top-1/2 transform -translate-y-1/2 z-50">
      <button
        onClick={handleOpen}
        className="bg-gradient-to-r from-[#990000] via-[#011E5A] to-[#051D58] text-white py-1 px-6 shadow-lg transition duration-300 flex items-center justify-center transform -rotate-90 hover:bg-[#011E5A] hover:underline hover:scale-105 cursor-pointer font-sans text-sm font-semibold tracking-wider rounded-t-md"
      >
        Apply Now
      </button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="relative">
            {/* Header & Close Button */}
            <div className="flex justify-between items-center mb-2 pb-1 border-b border-gray-100">
              <h3 className="text-lg sm:text-xl font-bold text-[#011E5A] font-sans">
                Admissions Open 2026
              </h3>
              <button 
                onClick={handleClose}
                className="text-gray-400 hover:text-[#990000] transition-colors p-1.5 rounded-lg hover:bg-gray-50 flex items-center justify-center"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <NPFWidget />
          </div>
        </Box>
      </Modal>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        style={{
          position: "fixed",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
          textAlign: "center",
        }}
      />
    </div>
  );
}

export default ApplyNowButton;
