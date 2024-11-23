import React from 'react';

const Input = ({ label, type, name, error, register, trigger, ...props }) => {
  return (
    <div>
      <label
        htmlFor="email"
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        type={label}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
        placeholder="ornek@email.com"
        {...register(name)}
        onBlur={() => trigger(name)}
      />
      {error && <span className="text-red-600">{error}</span>}
    </div>
  );
};

export default Input;
