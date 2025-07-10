import React, { useState } from 'react';
import { Icons } from '../common/icons';
import PesoLogo from '../../assets/PESO Logo.png';
import { account } from '../../appwrite/AppwriteConfig';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [user, setUser] = useState(null);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');

  if (!formData.email || !formData.password) {
    setError('Invalid credentials. Please check the email and password.');
    return;
  }

  try {
    await account.createEmailPasswordSession(formData.email, formData.password);
    const userData = await account.get();
    setUser(userData);
    navigate('/home');
  } catch (err) {
    // Always show same error regardless of cause
    setError('Invalid credentials. Please check the email and password.');
    console.error('Login failed:', err);
  }
};


  return (
    <div className="min-h-screen flex flex-col items-center justify-center pt-0 px-4">
      {/* Logo */}
      <img
        src={PesoLogo}
        alt="PESO Logo"
        className="size-35 object-contain mb-6"
      />

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-10 mb-25"
      >
        <h2 className="text-2xl sm:text-2xl -mt-2 font-bold text-gray-800 text-center mb-5">
          Welcome!
        </h2>

        {/* Error Message */}
        {error && (
          <p className="text-red-600 text-sm text-center mb-4">{error}</p>
        )}

        {/* Email */}
        <div className="relative mb-4">
          <span className="absolute inset-y-0 left-4 pt-1 flex items-center text-gray-400">
            <Icons.FaRegUser />
          </span>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            required
            onChange={handleChange}
            className="mt-1 text-black w-full pl-12 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative mb-5">
          <span className="absolute inset-y-0 left-4 pt-1 flex items-center text-gray-400">
            <Icons.FaLock />
          </span>
          <input
            id="password"
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
            onChange={handleChange}
            className="mt-1 text-black w-full pl-12 px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span
            className="absolute right-3 top-5 -translate-y-1 transform cursor-pointer text-gray-500"
            onClick={togglePassword}
          >
            {showPassword ? <Icons.FaEyeSlash /> : <Icons.FaEye />}
          </span>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-5 bg-blue-800 text-white font-semibold rounded-md hover:bg-blue-700 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
