import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../layout/Header';
import Table from '../../layout/Table';
import { Icons } from '../../common/Icons';

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
      lastName: "Smith",
      firstName: "John",
      middleName: "Rex",
      address: "Zone 5, Barangay 4",
      contact: "09192223344",
      occupation: "Engineer"
    },
    {
      lastName: "Doe",
      firstName: "James",
      middleName: "Lee",
      address: "Zone 2, Barangay 3",
      contact: "09187776655",
      occupation: "Student"
    },
    {
      lastName: "Taylor",
      firstName: "Michael",
      middleName: "Jude",
      address: "Zone 4, Barangay 1",
      contact: "09193456789",
      occupation: "Teacher"
    },
    {
      lastName: "Garcia",
      firstName: "John",
      middleName: "Paul",
      address: "Zone 1, Barangay 2",
      contact: "09181112233",
      occupation: "Nurse"
    },
    {
      lastName: "Lopez",
      firstName: "Chris",
      middleName: "Albert",
      address: "Zone 3, Barangay 5",
      contact: "09190001234",
      occupation: "Engineer"
    },
    {
      lastName: "Johnson",
      firstName: "Luke",
      middleName: "Son",
      address: "Zone 6, Barangay 1",
      contact: "09195554433",
      occupation: "Technician"
    },
    {
      lastName: "Reyes",
      firstName: "Mark",
      middleName: "Bill",
      address: "Zone 2, Barangay 4",
      contact: "09189998877",
      occupation: "Student"
    },
    {
      lastName: "Torres",
      firstName: "John",
      middleName: "Kyle",
      address: "Zone 3, Barangay 3",
      contact: "09196667788",
      occupation: "Engineer"
    },
    {
      lastName: "Cruz",
      firstName: "Steven",
      middleName: "Rex",
      address: "Zone 5, Barangay 2",
      contact: "09194443322",
      occupation: "Student"
    },
    {
      lastName: "Lee",
      firstName: "David",
      middleName: "Michael",
      address: "Zone 4, Barangay 2",
      contact: "09193332211",
      occupation: "Teacher"
    },
    {
      lastName: "Adams",
      firstName: "Robert",
      middleName: "James",
      address: "Zone 1, Barangay 5",
      contact: "09198887766",
      occupation: "Technician"
    },
    {
      lastName: "Walker",
      firstName: "Daniel",
      middleName: "Chris",
      address: "Zone 6, Barangay 3",
      contact: "09192225566",
      occupation: "Nurse"
    },
    {
      lastName: "Brown",
      firstName: "Anthony",
      middleName: "Lee",
      address: "Zone 2, Barangay 1",
      contact: "09197775511",
      occupation: "Student"
    },
    {
      lastName: "Martinez",
      firstName: "Joseph",
      middleName: "Clark",
      address: "Zone 3, Barangay 2",
      contact: "09196664433",
      occupation: "Engineer"
    }
  ];

    const filteredData = beneficiariesData.filter((item) => {
    const fullText = `${item.firstName} ${item.lastName} ${item.middleName} ${item.address} ${item.contact} ${item.occupation}`.toLowerCase();
    return fullText.includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen p-6 bg-body-primary dark:bg-body-dark overflow-y-auto">
      <Header />

      <div className="pt-12 px-4 md:px-6 lg:px-8">
        <main className="flex-1">
          <p className="text-3xl font-bold my-4 text-black dark:text-white">Beneficiaries</p>
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
