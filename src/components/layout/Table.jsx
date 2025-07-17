import { Icons } from "../common/Icons";

const Table = ({ columns = [], data = [], search, setSearch }) => {
  return (
    <div className="h-[75vh] p-6 rounded-lg bg-white overflow-hidden">
      {/* Search Bar */}
      <div className="relative flex justify-between items-center mb-4">
        <Icons.IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="w-full text-gray-600 md:w-1/3 pl-11 px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-royalblue-primary"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Header unified */}
      <div className="rounded-lg overflow-hidden border">
        <table className="w-full table-auto">
          <thead className="bg-body-primary text-black dark:bg-white dark:text-base-dark">
            <tr>
              <th className="px-2 py-2 text-left rounded-tl-lg whitespace-nowrap w-[40px]">#</th>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-2 py-2 text-left font-medium whitespace-nowrap ${
                    idx === columns.length - 1 ? "rounded-tr-lg text-right w-[60px]" : ""
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
        </table>

        {/* Scrollable Body */}
        <div className="max-h-[calc(75vh-140px)] overflow-y-auto custom-scrollbar">
          <table className="w-full table-auto">
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="text-md odd:bg-white even:bg-table-primary dark:odd:bg-skytint-dark dark:even:bg-snowdrift-dark hover:bg-hover-primary dark:hover:bg-body-dark transition duration-200"
                >
                  <td className="px-2 py-2 text-left w-[40px]">
                    <input type="checkbox" />
                  </td>
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-2 py-2 text-left text-black ${
                        colIndex === columns.length - 1 ? "text-right w-[60px]" : ""
                      }`}
                    >
                      {typeof col.accessor === "function"
                        ? col.accessor(row)
                        : row[col.accessor]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Table;
