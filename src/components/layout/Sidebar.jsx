import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="w-63 h-[calc(100vh-4rem)] shadow bg-white text-white p-6 flex flex-col justify-between">
      <nav class='navbar'>
        <ul className="space-y-1 font-semibold">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block p-3 flex rounded transition duration-300 no-underline ${
                  isActive
                    ? 'bg-white text-royalblue'
                    : 'bg-royalblue text-white hover:bg-deepindigo'
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/beneficiaries"
              className={({ isActive }) =>
                `block p-3 flex rounded transition duration-300 no-underline ${
                  isActive
                    ? 'bg-white text-[#1301cc]'
                    : 'bg-[#1301cc] text-white hover:bg-deepindigo'
                }`
              }
            >
              Beneficiaries
            </NavLink>
          </li>
        </ul>
      </nav>

      <button
        onClick={onLogout}
        className="w-full text-royalblue mt-4 py-2 bg-white hover:bg-red-600 hover:text-white rounded text-sm font-medium"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
