import React from 'react';

const Input = ({ label, placeholder, value, onChange }) => {
  return (
    <div className="flex flex-col">
      {label && <label className="mb-1 font-bold">{label}</label>}
      <input
        type="text"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
