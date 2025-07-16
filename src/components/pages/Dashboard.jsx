import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../common/Logout';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-snowdrift-primary dark:bg-royalblue-dark min-w-screen h-screen overflow-hidden">
      {/* Header */}
      <Header />

      <div className="flex pt-16">
        {/* Static Sidebar */}
        <Sidebar onLogout={() => handleLogout(navigate)} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Admin Dashboard</h2>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {["Total Users", "Scans Today", "Total Feedback", "Pending Verifications"].map((label, idx) => (
              <div key={idx} className="bg-white shadow-md rounded-xl p-6">
                <p className="text-gray-500 text-sm">{label}</p>
                <h2 className="text-2xl font-semibold mt-2">--</h2>
              </div>
            ))}
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Scans Table */}
            <div className="bg-white shadow-md rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-4">Recent Scans</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-700">
                  <thead className="bg-gray-100 uppercase text-xs text-gray-500">
                    <tr>
                      <th className="px-4 py-2">User</th>
                      <th className="px-4 py-2">Leaf Type</th>
                      <th className="px-4 py-2">Result</th>
                      <th className="px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[...Array(3)].map((_, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3">---</td>
                        <td className="px-4 py-3">---</td>
                        <td className="px-4 py-3">---</td>
                        <td className="px-4 py-3">---</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Feedback Table */}
            <div className="bg-white shadow-md rounded-xl p-4">
              <h2 className="text-lg font-semibold mb-4">Latest Feedback</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-left text-gray-700">
                  <thead className="bg-gray-100 uppercase text-xs text-gray-500">
                    <tr>
                      <th className="px-4 py-2">User</th>
                      <th className="px-4 py-2">Message</th>
                      <th className="px-4 py-2">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {[...Array(3)].map((_, i) => (
                      <tr key={i} className="hover:bg-gray-50">
                        <td className="px-4 py-3">---</td>
                        <td className="px-4 py-3 truncate max-w-xs">---</td>
                        <td className="px-4 py-3">---</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Users Table */}
          <div className="bg-white shadow-md rounded-xl p-4 mt-10">
            <h2 className="text-lg font-semibold mb-4">Registered Users</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100 uppercase text-xs text-gray-500">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[...Array(5)].map((_, i) => (
                    <tr key={i} className="hover:bg-gray-50">
                      <td className="px-4 py-3">---</td>
                      <td className="px-4 py-3">---</td>
                      <td className="px-4 py-3">
                        <span className="inline-block bg-gray-200 text-gray-500 text-xs px-2 py-1 rounded-full">---</span>
                      </td>
                      <td className="px-4 py-3">---</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
