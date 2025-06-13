import React from "react";

const Modal = ({ show, onClose, title, content }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-2xl rounded p-6 relative">

        {/* Netflix Logo Header */}
        <header className="flex items-center justify-between mb-4">
          <img src="/netflix-logo.png" alt="Netflix Logo" className="w-32 md:w-40" />
          <button
            onClick={onClose}
            className="text-2xl font-bold text-gray-700 hover:text-black"
          >
            &times;
          </button>
        </header>

        {/* Modal Content */}
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <div className="text-gray-800">{content}</div>

        {/* Optional bottom close button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
