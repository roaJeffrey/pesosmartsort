import React, { useState } from 'react';
import { Icons } from '../common/icons';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Logging in with:', formData);
  };

  return (
    <div className="h-dvh flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-2xl shadow-lg p-8 sm:p-10"
      >
        <h2 className="text-2xl sm:text-2xl font-bold text-gray-800 text-center mb-6">
          Welcome to PESO's SmartSort
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            onChange={handleChange}
            className="mt-1 text-black w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="mb-6 relative">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            required
            onChange={handleChange}
            className="mt-1 text-black w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-9 cursor-pointer text-gray-500"
            onClick={togglePassword}
          >
            {showPassword ? <Icons.FaEyeSlash /> : <Icons.FaEye />}
          </span>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
