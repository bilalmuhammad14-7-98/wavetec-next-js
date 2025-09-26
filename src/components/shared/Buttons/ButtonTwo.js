import React from 'react';

function ButtonTwo({ title, icon, className }) {
  return (
    <button
      className={`bg-[#0040C1] dark:bg-blue-700 cursor-pointer text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 dark:hover:bg-blue-600 transition ${className}`}
    >
      {icon} {title}
    </button>
  );
}

export default ButtonTwo;
