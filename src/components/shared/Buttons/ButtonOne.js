import React from 'react';

function ButtonOne({ title, icon, className }) {
  return (
    <button
      className={`bg-white cursor-pointer  dark:bg-gray-100 text-gray-900 dark:text-black border border-gray-300 dark:border-gray-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 dark:hover:bg-gray-200 transition ${className}`}
    >
      {icon} {title}
    </button>
  );
}

export default ButtonOne;
