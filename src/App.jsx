import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/Loginpage';
import Dashboard from './components/pages/Dashboard';
import Beneficiariespage from './components/pages/Beneficiariespage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/beneficiaries" element={<Beneficiariespage />} />
      </Routes>
    </Router>
  );
};

export default App;