import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar'; // adjust path if needed

const Outline = () => {
  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
            <main className="flex-1 overflow-y-auto">
            <Outlet />
            </main>
        </div>
    </div>
  );
};

export default Outline;
