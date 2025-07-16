import { useState } from 'react';
import PesoLogo from '../../assets/PESO Logo.png';
import Button  from '../common/Button';
import { Icons } from '../common/Icons';

const Header = () => {
  const[isDark, setDark] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setDark(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme ? 'dark' : 'light');
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white dark:bg-skytint-dark shadow flex px-6">
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <img src={PesoLogo} alt="PESO Logo" className="size-13 object-contain" />

        {/* System name */}
        <h2 className="text-xl font-bold text-gray-800 dark:text-white">
          PESO SmartSort
        </h2>

        {/* Dark and light theme toggle button */}
        <Button onClick={toggleTheme} baseStyle='circle' variant="secondary" className='absolute right-10'>
          <Icons.FaMoon className='text-royalblue-primary dark:text-white' />
        </Button>
      </div>
    </header>
  );
};

export default Header;
