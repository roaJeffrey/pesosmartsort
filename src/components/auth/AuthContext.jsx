import { createContext, useState, useContext, useEffect } from 'react';
import { account } from '../../appwrite/AppwriteConfig';
import { Icons } from '../common/Icons';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Stores the authenticated user
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); // Tracks authentication errors

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userSession = await account.get(); 
        setUser(userSession);
      } catch (err) {
        setUser(null); // No valid session
      } finally {
        setLoading(false); // Done checking
      }
    };

    checkAuth();
  }, []);

  // Login function
  const login = async (email, password) => {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      setUser(await account.get()); // Update user with current session info
      setError(null); // Clear errors
      return session;
    } catch (err) {
      setError('Invalid login credentials.'); // Set an error message
      throw err; // Re-throw for the caller to handle
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await account.deleteSession('current'); // Delete the current session
      setUser(null); // Clear the user state
    } catch (err) {
      setError('Failed to log out.'); // Set an error if logout fails
      throw err;
    }
  };

  // Context value to provide
  const value = {
    user, // The logged-in user
    setUser, // Ensure setUser is included in the context value
    login, // Login function
    logout, // Logout function
    loading, // Loading state
    error, // Error message
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading ? (
        children
      ) : (
        <div className="flex flex-col bg-white dark:bg-royalblue-dark justify-center items-center h-screen w-screen relative">
          {/* Loading spinner */}
          <div className="flex justify-center items-center mb-5">
            <Icons.AiOutlineLoading className="text-6xl text-royalblue-primary dark:text-white animate-spin" />
          </div>
        </div>
      )}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
