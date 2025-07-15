import { account } from '../../appwrite/AppwriteConfig';

export const handleLogout = async (navigate) => {
  try {
    await account.deleteSession('current');
    navigate('/');
  } catch (error) {
    console.error('Logout failed:', error);
  }
};