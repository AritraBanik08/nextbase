import React, { FormEvent } from "react";

interface SlidePageProps {
  onClose: () => void;
}

const SlidePage: React.FC<SlidePageProps> = ({ onClose }) => {
  const handleFormSubmit = (event: FormEvent): void => {
    event.preventDefault();
    onClose();
    // handle form submission here
  };

  return (
    <div className="fixed top-0 right-0 h-screen w-64 bg-white p-4 shadow-lg">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 m-2 text-gray-800"
      >
        X
      </button>
      <form onSubmit={handleFormSubmit}>
        {/* Add your form fields here */}
        <button
          type="submit"
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Enter
        </button>
      </form>
    </div>
  );
};

export default SlidePage;
