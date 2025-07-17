import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/pages/Loginpage';
import { AuthProvider } from './components/auth/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import Outline from './components/layout/Outline'; 
import Dashboard from './components/pages/Dashboard';
import Beneficiariespage from './components/pages/Beneficiariespage';

const App = () => {
  return (
    <AuthProvider>  
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          
          <Route
            element={
              <ProtectedRoute>
                <Outline />
              </ProtectedRoute>
            }
          >
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/beneficiaries" element={<Beneficiariespage />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
