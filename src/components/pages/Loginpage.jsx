import React from 'react';
import LoginForm from '../layout/Loginform';
import BgImage from '../common/Bgimage';

const Loginpage = () => {
  return (
    <div className="relative min-w-screen h-screen overflow-hidden">
      <BgImage />

      {/* Login form wrapper */}
      <div className="relative z-10 flex items-center justify-center w-full h-full px-4">
        <div className="w-full max-w-md p-6 sm:p-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Loginpage;
