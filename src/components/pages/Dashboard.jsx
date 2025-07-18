import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-body-primary dark:bg-body-dark overflow-y-auto custom-scrollbar">
      <Header />

      <div className="pt-16 px-4 md:px-6 lg:px-8">
        <main className="flex-1 p-6">
          <p className="text-3xl font-bold text-black dark:text-white mb-6">Admin Dashboard</p>

          {/* Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <StatCard label="Total Users" value="120" />
            <StatCard label="Boys" value="70" />
            <StatCard label="Girls" value="50" />
            <StatCard label="Active Today" value="35" />
            <StatCard label="Scans Today" value="18" />
            <StatCard label="Total Feedback" value="24" />
            <StatCard label="Pending Verifications" value="3" />
            <StatCard label="Admins" value="1" />
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DataTable
              title="Recent Scans"
              columns={['User', 'Leaf Type', 'Result', 'Date']}
              rows={[
                ['Juan Dela Cruz', 'Arabica', 'Healthy', '2025-07-18'],
                ['Maria Clara', 'Robusta', 'Rust Detected', '2025-07-17'],
                ['Pedro Penduko', 'Excelsa', 'Healthy', '2025-07-17'],
              ]}
            />

            <DataTable
              title="Latest Feedback"
              columns={['User', 'Message', 'Date']}
              rows={[
                ['Maria Clara', 'Great app, very helpful!', '2025-07-18'],
                ['Juan Dela Cruz', 'More info on diseases please.', '2025-07-17'],
                ['Carla Santos', 'The results were accurate.', '2025-07-16'],
              ]}
            />
          </div>

          {/* Registered Users */}
          <div className="bg-white dark:bg-base-dark shadow-md rounded-xl p-4 mt-10">
            <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">Registered Users</h2>
            <div className="overflow-x-auto custom-scrollbar">
              <table className="min-w-full text-sm text-left text-black dark:text-gray-300">
                <thead className="bg-gray-100 dark:bg-gray-800 uppercase text-xs text-black dark:text-gray-400">
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Role</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {[
                    ['Juan Dela Cruz', 'juan@email.com', 'Active', 'Employee'],
                    ['Maria Clara', 'maria@email.com', 'Active', 'Employee'],
                    ['Carla Santos', 'carla@email.com', 'Inactive', 'Employee'],
                    ['Pedro Penduko', 'pedro@email.com', 'Active', 'Employee'],
                    ['Admin User', 'admin@email.com', 'Active', 'Admin'],
                  ].map(([name, email, status, role], i) => (
                    <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                      <td className="px-4 py-3">{name}</td>
                      <td className="px-4 py-3">{email}</td>
                      <td className="px-4 py-3">
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                          status === 'Active'
                            ? 'bg-green-100 text-green-600 dark:bg-green-800 dark:text-green-300'
                            : 'bg-red-100 text-red-600 dark:bg-red-800 dark:text-red-300'
                        }`}>
                          {status}
                        </span>
                      </td>
                      <td className="px-4 py-3">{role}</td>
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

// Stat Card Component
const StatCard = ({ label, value }) => (
  <div className="bg-white dark:bg-base-dark shadow-md rounded-xl p-6 dark:bg-base-dark">
    <p className="text-black dark:text-gray-400 text-sm">{label}</p>
    <h2 className="text-2xl font-semibold mt-2 text-black dark:text-white">{value}</h2>
  </div>
);

// Reusable Table Component
const DataTable = ({ title, columns, rows }) => (
  <div className="bg-white dark:bg-base-dark shadow-md rounded-xl p-4">
    <h2 className="text-lg font-semibold mb-4 text-black dark:text-white">{title}</h2>
    <div className="overflow-x-auto custom-scrollbar">
      <table className="min-w-full text-sm text-left text-black dark:text-gray-300">
        <thead className="bg-gray-100 dark:bg-gray-800 uppercase text-xs text-black dark:text-gray-400">
          <tr>
            {columns.map((col, idx) => (
              <th key={idx} className="px-4 py-2">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {rows.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-gray-700">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-3 truncate max-w-xs">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Dashboard;
