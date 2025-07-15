import React from 'react';
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../common/Logout';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white min-w-screen h-screen overflow-hidden">
      {/* Fixed Header */}
      <Header />

      <div className="flex pt-16">
        {/* Static Sidebar (doesn't collapse) */}
        <Sidebar onLogout={() => handleLogout(navigate)} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-xl font-bold text-gray-700 mb-4">Welcome to the Dashboard!</h2>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
