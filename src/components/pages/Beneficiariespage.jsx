import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../common/Logout';
import Sidebar from '../layout/Sidebar';
import Header from '../layout/Header';

const Beneficiariespage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-snowdrift-primary dark:bg-royalblue-dark min-w-screen h-screen overflow-hidden">
      {/* Fixed Header */}
      <Header />

      <div className="flex pt-16">
        {/* Static Sidebar (doesn't collapse) */}
        <Sidebar onLogout={() => handleLogout(navigate)} />

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="overflow-x-auto rounded-xl shadow-lg bg-white max-w-6xl mx-auto p-4">
            <table className="min-w-full text-sm text-left text-gray-700">
              <thead className="bg-gray-100 uppercase text-xs text-gray-500">
                <tr>
                  <th className="px-6 py-3">Name</th>
                  <th className="px-6 py-3">Email</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">John Doe</td>
                  <td className="px-6 py-4">john@example.com</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-green-100 text-green-600 px-2 py-1 text-xs rounded-full">Active</span>
                  </td>
                  <td className="px-6 py-4">Admin</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Jane Smith</td>
                  <td className="px-6 py-4">jane@example.com</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-yellow-100 text-yellow-600 px-2 py-1 text-xs rounded-full">Pending</span>
                  </td>
                  <td className="px-6 py-4">User</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4">Michael Brown</td>
                  <td className="px-6 py-4">michael@example.com</td>
                  <td className="px-6 py-4">
                    <span className="inline-block bg-red-100 text-red-600 px-2 py-1 text-xs rounded-full">Inactive</span>
                  </td>
                  <td className="px-6 py-4">Guest</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Beneficiariespage;
