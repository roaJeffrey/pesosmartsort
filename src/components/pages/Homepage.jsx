import React from 'react';
import { account } from '../../appwrite/AppwriteConfig';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await account.deleteSession('current');
      navigate('/'); // Go back to login
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-2xl font-bold">
      <p>Welcome to the Homepage!</p>
      <button
        onClick={handleLogout}
        className="px-6 py-2 bg-red-600 text-white text-base font-medium rounded-md hover:bg-red-700 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Homepage;
