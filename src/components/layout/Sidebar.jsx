import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { Icons } from '../common/Icons';
import Button from '../common/Button';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };

  return (
    <aside className="w-64 h-screen flex-shrink-0 bg-white dark:bg-base-dark mt-16 p-6 flex flex-col justify-between overflow-hidden">

      {/* Navigation buttons */}
      <nav className='navbar'>
        <ul className="space-y-1 font-semibold">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `block p-3 flex rounded transition duration-300 no-underline ${
                  isActive
                    ? 'bg-base-primary text-white dark:bg-white dark:text-base-dark'
                    : 'bg-white text-black dark:bg-base-dark dark:text-altwhite-dark hover:bg-hover-primary hover:text-base-primary dark:hover:bg-hover-dark dark:hover:text-white'
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
                    ? 'bg-base-primary text-white dark:bg-white dark:text-hover-dark'
                    : 'bg-white text-black dark:bg-base-dark dark:text-altwhite-dark hover:bg-hover-primary hover:text-base-primary dark:hover:bg-hover-dark dark:hover:text-white'
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
      <Button onClick={logout} baseStyle='base' variant="outline"className="text-left mb-17 p-3 pl-4 text-black hover:text-white">
        <Icons.FaPowerOff className="mr-4" />
          Logout
      </Button>
    </aside>
  );
};

export default Sidebar;
