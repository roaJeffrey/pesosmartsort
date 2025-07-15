import React from 'react';
import PesoLogo from '../../assets/PESO Logo.png';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-white shadow flex items-center px-6 justify-between">
      <div className="flex items-center space-x-4">
        <img src={PesoLogo} alt="PESO Logo" className="size-13 object-contain" />
        <h2 className="text-xl font-bold text-gray-800">PESO SmartSort</h2>
      </div>
    </header>
  );
};

export default Header;
