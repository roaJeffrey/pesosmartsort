import React from 'react';
import LoginForm from '../layout/Loginform';

const LoginPage = () => {
  return (
    <div className="min-w-screen flex items-center justify-center bg-gradient-to-br from-green-500 to-blue-400 p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
