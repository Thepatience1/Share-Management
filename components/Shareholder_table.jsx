import { useState } from "react";
import Link from "next/link";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";

const ShareholderTable = ({ shareholders }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [displayColumns, setDisplayColumns] = useState(25); // default to display all columns //5
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // number of items to display per page

  // filter shareholders based on search term
  const filteredShareholders = shareholders.filter((shareholder) =>
    shareholder.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // calculate total number of pages
  const totalPages = Math.ceil(filteredShareholders.length / itemsPerPage);

  // calculate index of first and last items to display on current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // slice the array of filtered shareholders to display only the current page's items
  const currentShareholders = filteredShareholders.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // reset to first page when search term changes
  };

  // handle column display option change
  const handleDisplayColumnsChange = (event) => {
    setDisplayColumns(parseInt(event.target.value));
  };

  // handle previous page button click
  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  // handle next page button click
  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="">
     <div className="flex">
      <div className="w-16 mt-1 h-9 border border-black bg-blue-600 text-center">
          <Link
            className="  text-blue-600"
            href="/shareholder_registration"
          >
            <span className=" text-white ">New</span>
          </Link>
        </div>
        <div className="flex items-center mb-4">
          <div className="sm:ml-96">
          <label htmlFor="search" className="mr-2 font-bold sm:ml-40">
            Search Shareholder:
          </label>
          </div>
          <input
            type="text"
            id="search"
            className="border border-gray-400 rounded px-2 py-1"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
     </div>

        <table className="w-full text-left">
          <thead>
            <tr>
            <th className={`py-2 ${displayColumns < 5 ? "hidden" : ""}`}>
                No
              </th>
              <th className={`py-2 ${displayColumns < 5 ? "hidden" : ""}`}>
                Shareholder Name
              </th>
              <th className={`py-2 ${displayColumns < 4 ? "hidden" : ""}`}>
                Number of Shares
              </th>
              <th className={`py-2 ${displayColumns < 4 ? "hidden" : ""}`}>
                Percentage of Ownership
              </th>
              <th className={`py-2 ${displayColumns < 3 ? "hidden" : ""}`}>
                Dividend
              </th>
              {/* <th className={`py-2 ${displayColumns < 2 ? "hidden" : ""}`}>
                Edit
              </th>
              <th className={`py-2 ${displayColumns < 2 ? "hidden" : ""}`}>
                Delete
              </th> */}
             {/* <th> <button className={`py-2 ${displayColumns < 2 ? "hidden" : ""}`}>
                    <Link className="flex text-center" href="/edit_shareholder">
                      <FaEdit className="mt-1 mr-2 ml-1" /> Edit
                    </Link>{" "}
                  </button></th>
                  <th><button className={`py-2 ${displayColumns < 2 ? "hidden" : ""}`}>
                    <Link className="flex text-center" href="/delete_shareholder">
                      <RiDeleteBin6Fill className="mt-1 mr-2 ml-1" /> Delete
                    </Link>
                  </button></th> */}
                  <th className={`py-2 text-center${displayColumns < 2 ? "hidden" : ""}`}>
                Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentShareholders.map((shareholder) => (
              <tr key={shareholder.id}>
                <td
                  className={`border py-2 ${
                    displayColumns < 5 ? "hidden" : ""
                  }`}
                >
                  {shareholder.No}
                </td>
                <td
                  className={`border py-2 ${
                    displayColumns < 5 ? "hidden" : ""
                  }`}
                >
                  {shareholder.name}
                </td>
                <td
                  className={`border py-2 ${
                    displayColumns < 4 ? "hidden" : ""
                  }`}
                >
                  {shareholder.numberOfShares}
                </td>
                <td
                  className={`border py-2 ${
                    displayColumns < 4 ? "hidden" : ""
                  }`}
                >
                  {shareholder.percentageOfOwnership}
                </td>
                <td
                  className={`border py-2 ${
                    displayColumns < 3 ? "hidden" : ""
                  }`}
                >
                  {shareholder.dividend}
                </td>
                {/* <td
                  className={`border py-2 ${
                    displayColumns < 2 ? "hidden" : ""
                  }`}
                >
                  Edit
                </td>
                <td
                  className={`border py-2 ${
                    displayColumns < 2 ? "hidden" : ""
                  }`}
                >
                  Delete
                </td> */}
                <td className={`py-2 text-center ${displayColumns < 2 ? "hidden" : ""}`}>
                   <button>
                    <Link className="flex text-center ml-2 bg-green-700" href="/edit_shareholder">
                      <FaEdit className="mt-1 mr-2 ml-1" /> Edit
                    </Link>{" "}
                  </button>
                  <button className="">
                    <Link className="flex text-center ml-4 bg-red-700" href="/delete_shareholder">
                      <RiDeleteBin6Fill className="mt-1 mr-2 ml-1" /> Delete
                    </Link>
                  </button></td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-between mt-4">

        <div>
            <label htmlFor="displayColumns" className="mr-2 font-bold">
              Display:
            </label>
            <select
              id="displayColumns"
              className="border border-gray-400 rounded px-2 py-1"
              value={displayColumns}
              onChange={handleDisplayColumnsChange}
            >
              <option value="5">All</option>
              <option value="4">4 Columns</option>
              <option value="3">3 Columns</option>
              <option value="2">2 Columns</option>
            </select>
          </div>
          <div>
            <button
              className={`px-2 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              onClick={handlePrevClick}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              className={`ml-2 px-2 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-blue-500 hover:bg-blue-600 text-white"
              }`}
              onClick={handleNextClick}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default ShareholderTable;
