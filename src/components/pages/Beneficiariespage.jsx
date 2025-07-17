import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../layout/Header';
import Table from '../layout/Table';
import { Icons } from '../common/Icons';

const Beneficiariespage = () => {
  const navigate = useNavigate();
    const [search, setSearch] = useState("");

  // Define columns (structure only, no data yet)
  const columns = [
    { header: "Last Name", accessor: "lastName" },
    { header: "First Name", accessor: "firstName" },
    { header: "Middle Name", accessor: "middleName" },
    { header: "Street and Barangay Name", accessor: "address" },
    { header: "Contact No.", accessor: "contact" },
    { header: "Occupation", accessor: "occupation" },
    {
      header: "",
      accessor: () => (
        <button className="text-gray-500 hover:text-gray-700 mt-1">
          <span className="text-xl">
            <Icons.BsThreeDots className="size-5" />
          </span>
        </button>
      ),
    },
  ];

  // Empty array for now (you’ll fetch this from Appwrite)
  const beneficiariesData = [
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Bill",
      address: "Zone 1, Barangay 2",
      contact: "09111111111",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 2, Barangay 1",
      contact: "09111111112",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Son",
      address: "Zone 1, Barangay 3",
      contact: "09111111113",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 2, Barangay 1",
      contact: "09111111112",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 2, Barangay 1",
      contact: "09111111112",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 2, Barangay 1",
      contact: "09111111112",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 2, Barangay 1",
      contact: "09111111112",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 2, Barangay 1",
      contact: "09111111112",
      occupation: "Student"
    },
    {
      lastName: "Doe",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 2, Barangay 1",
      contact: "09111111112",
      occupation: "Student"
    },

  ];

    const filteredData = beneficiariesData.filter((item) => {
    const fullText = `${item.firstName} ${item.lastName} ${item.middleName} ${item.address} ${item.contact} ${item.occupation}`.toLowerCase();
    return fullText.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-body-primary dark:bg-base-dark overflow-y-auto">
      <Header />

      <div className="pt-16 px-4 md:px-6 lg:px-8">
        <main className="flex-1">
          <p className="text-3xl font-bold my-4 text-black">Beneficiaries</p>
            <Table
              columns={columns} 
              data={filteredData} 
              search={search}
              setSearch={setSearch}
            />
        </main>
      </div>
    </div>
  );
};

export default Beneficiariespage;
