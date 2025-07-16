import { NavLink } from 'react-router-dom';
import { Icons } from '../common/Icons';
import Button from '../common/Button';

const Sidebar = ({ onLogout }) => {
  return (
    <aside className="w-63 h-[calc(100vh-4rem)] dark:border-t-1 dark:border-royalblue-dark bg-white dark:bg-skytint-dark text-white p-6 flex flex-col justify-between">

      {/* Navigation buttons */}
      <nav className='navbar'>
        <ul className="space-y-1 font-semibold">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block p-3 flex rounded transition duration-300 no-underline ${
                  isActive
                    ? 'bg-royalblue-primary text-white dark:bg-white dark:text-skytint-dark'
                    : 'bg-white text-royalblue-primary dark:bg-skytint-dark dark:text-mistywhite-dark hover:bg-skytint-primary hover:text-royalblue-primary dark:hover:bg-snowdrift-dark dark:hover:text-white'
                }`
              }
            >
              <Icons.FaChartBar className="mr-4 mt-1" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/beneficiaries"
              className={({ isActive }) =>
                `block p-3 flex rounded transition duration-300 no-underline ${
                  isActive
                    ? 'bg-royalblue-primary text-white dark:bg-white dark:text-skytint-dark'
                    : 'bg-white text-royalblue-primary dark:bg-skytint-dark dark:text-mistywhite-dark  hover:bg-skytint-primary hover:text-royalblue-primary dark:hover:bg-snowdrift-dark dark:hover:text-white'
                }`
              }
            >
              <Icons.FaUser className="mr-4 mt-1" />
              Beneficiaries
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* Logout Button */}
      <Button onClick={onLogout} baseStyle='base' variant="outline">
        Logout
      </Button>
    </aside>
  );
};

export default Sidebar;
