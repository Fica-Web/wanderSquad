import React from 'react';

const ReusableButton = ({ content, handleClick, color = 'border-white text-white' }) => {
  return (
    <button
      onClick={handleClick}
      className={`${color} border-2 p-3 px-7 md:text-lg font-semibold font-mono hover:scale-105 uppercase`}
    >
      {content}
    </button>
  );
};

export default ReusableButton;