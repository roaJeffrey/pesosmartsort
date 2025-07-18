import { useState } from 'react';
import PesoLogo from '../../assets/PESO Logo.png';
import Button  from '../common/Button';
import { Icons } from '../common/Icons';

const Header = () => {
  const[isDark, setDark] = useState(false);

  const toggleTheme = () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const newTheme = current === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-base-dark shadow flex px-6">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img src={PesoLogo} alt="PESO Logo" className="size-13 object-contain" />

        {/* System name */}
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          PESO SmartSort
        </h2>

        {/* Dark and light theme toggle button */}
        <Button 
          onClick={(e) => {
            toggleTheme();
            e.currentTarget.blur(); // removes focus
          }} 
          baseStyle='circle' 
          variant="secondary" 
          className='absolute right-10 group'
        >
          <Icons.FaMoon className="text-black group-hover:text-base-primary dark:text-white dark:hover:text-base-dark dark:group-hover:text-base-dark" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
