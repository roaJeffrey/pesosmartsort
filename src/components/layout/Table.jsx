import { useState } from "react";
import { Icons } from "../common/Icons";

const Table = ({ columns = [], data = [], search, setSearch }) => {
  const [checkedRows, setCheckedRows] = useState(new Set());

  const toggleCheckbox = (index) => {
    const newChecked = new Set(checkedRows);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedRows(newChecked);
  };

  return (
    <div className="h-[75vh] p-6 rounded-lg bg-white dark:bg-base-dark overflow-hidden">
      {/* Search Bar */}
      <div className="relative flex justify-between items-center mb-4">
        <Icons.IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-altwhite-dark" />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-gray-600 md:w-1/3 pl-11 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-gray-800 dark:bg-body-dark dark:placeholder-altwhite-dark"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Scrollable Table */}
      <div className="overflow-y-auto max-h-100 custom-scrollbar dark:custom-scrollbar-dark rounded-lg">
        <table className="w-full table-auto">
          <thead className="bg-body-primary text-black dark:bg-table-header-dark dark:text-altwhite-dark sticky top-0 z-10">
            <tr>
              <th className="px-2 text-left w-3"> 
                <Icons.MdCheckBoxOutlineBlank className="text-black text-xl dark:text-altwhite-dark" /> 
              </th>
              <th className="text-left w-20">Last Name</th>
              <th className="py-3 text-left w-20">First Name</th>
              <th className="py-3 text-left w-20">Middle Name</th>
              <th className="py-3 text-left w-35">Current Address</th>
              <th className="py-3 text-left w-10">Contact No.</th>
              <th className="py-3 text-left w-10">Occupation</th>
              <th className="w-1"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="text-md text-black dark:text-white odd:bg-white dark:odd:bg-base-dark even:bg-table-primary dark:even:bg-body-dark hover:bg-hover-primary dark:hover:bg-hover-dark transition duration-200"
              >
                <td className="px-2 text-left w-3">
                  <button
                    onClick={(e) => {
                      e.currentTarget.blur();
                      toggleCheckbox(rowIndex);
                    }}
                    disabled={row.status === "inactive"}
                    className="text-black dark:text-white text-xl focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {checkedRows.has(rowIndex) ? (
                      <Icons.IoIosCheckbox />
                    ) : (
                      <Icons.MdCheckBoxOutlineBlank />
                    )}
                  </button>
                </td>
                <td className="py-2 text-left w-20">{row.lastName}</td>
                <td className="py-2 text-left w-20">{row.firstName}</td>
                <td className="py-2 text-left w-20">{row.middleName}</td>
                <td className="py-2 text-left w-35">{row.address}</td>
                <td className="py-2 text-left w-10">{row.contact}</td>
                <td className="py-2 text-left w-10">{row.occupation}</td>
                <td className="pr-2 text-right ">
                  <button className="pr-2 text-gray-500 dark:text-altwhite-dark hover:text-gray-700">
                    <Icons.BsThreeDots className="size-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
