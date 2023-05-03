import React from "react";
import Link from "next/link";
import { BsPlusSquareFill } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
function shareholder() {
  return (
    <div>
      <div className=" mt-6 border border-gray-600 w-full pr-16">
        <div className="w-16 mt-3 ml-4 h-9 border border-black bg-blue-600 text-center">
          <Link
            className="ml-2  text-blue-600"
            href="/shareholder_registration"
          >
            <span className=" text-white ">New</span>
          </Link>
        </div>
        <div className="flex">
          <div className="flex mt-4 space-x-2">
            <h3 className="ml-2">Show</h3>
            <input
              type=""
              value="10"
              className=" w-16 h-7 border border-blue-600"
            />
            <h3>entries</h3>
          </div>
          <div className="flex ml-96">
            <h3 className="ml-44">Search:</h3>
            <input type="text" className="h-7 w-48 ml-2 border border-gray-200" />
          </div>
        </div>
        <div className="mt-4">
          <table className="  h-5/6 border-2 border-gray-300 ml-7 border-collapse">
            <thead className="">
              <tr className="space-x-60 border-b-2">
                <th className="border-r-2 border-slate-200">No</th>
                <th className="border-r-2 border-slate-200">ID</th>
                <th className="border-r-2 border-slate-200">Fname</th>
                <th className="border-r-2 border-slate-200">Lname</th>
                <th className="border-r-2 border-slate-200">photo</th>
                <th className="border-r-2 border-slate-200">profit</th>
                <th className="border-r-2 border-slate-200">date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b-2">
                <td className="border-r-2 border-slate-200">1</td>
                <td className="border-r-2 border-slate-200">90909090</td>
                <td className="border-r-2 border-slate-200">Abdelhalim</td>
                <td className="border-r-2 border-slate-200">Adem</td>
                <td className="border-r-2 border-slate-200">334</td>
                <td className="border-r-2 border-slate-200">423</td>
                <td className="border-r-2 border-slate-200">02/04/2034</td>

                <td className="flex ml-20">
                  <button className="ml-5 mb-3 text-white bg-green-600 flex">
                    <Link className="flex text-center "  href="/edit_shareholder">
                      <FaEdit className="mt-1 mr-2 ml-1" /> Edit
                    </Link>{" "}
                  </button>
                  <button className="ml-5 mb-3 text-white bg-red-600">
                    <Link className="flex text-center" href="/delete_shareholder">
                      <RiDeleteBin6Fill className="mt-1 mr-2 ml-1" /> Delete
                    </Link>
                  </button>
                
                </td>
              </tr>
              <tr className="border-b-2 ">
                <td className="border-r-2 border-slate-200">2</td>
                <td className="border-r-2 border-slate-200">703903959</td>
                <td className="border-r-2 border-slate-200">8390</td>
                <td className="border-r-2 border-slate-200">13</td>
                <td className="border-r-2 border-slate-200">334</td>
                <td className="border-r-2 border-slate-200">423</td>
                <td className="border-r-2 border-slate-200">4w4</td>
                <td className="border-r-2 border-slate-200 ml-20 flex">
                  <button className="ml-5 mb-3 text-white bg-green-600">
                    <Link className="flex text-center" href="/edit_shareholder">
                      <FaEdit className="mt-1 mr-2 ml-1" /> Edit
                    </Link>{" "}
                  </button>
                  <button className="ml-5 mb-3 text-white bg-red-600">
                    <Link className="flex text-center" href="/delete_shareholder">
                      <RiDeleteBin6Fill className="mt-1 mr-2 ml-1" /> Delete
                    </Link>
                  </button>
                 
                </td>
              </tr>
              <tr className="border-b-2">
                <td className="border-r-2 border-slate-200">3</td>
                <td className="border-r-2 border-slate-200">80069049</td>
                <td className="border-r-2 border-slate-200">8390</td>
                <td className="border-r-2 border-slate-200">13</td>
                <td className="border-r-2 border-slate-200">334</td>
                <td className="border-r-2 border-slate-200">423</td>
                <td className="border-r-2 border-slate-200">4w4</td>
                <td className="ml-20 flex">
                  <button className="ml-5 mb-3 text-white bg-green-600">
                    <Link className="flex text-center" href="/edit_shareholder">
                      <FaEdit className="mt-1 mr-2 ml-1" /> Edit
                    </Link>{" "}
                  </button>
                  <button className="ml-5 mb-3 text-white bg-red-600">
                    <Link className="flex text-center" href="/delete_shareholder">
                      <RiDeleteBin6Fill className="mt-1 mr-2 ml-1" /> Delete
                    </Link>
                  </button>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-2 ml-4">
          <h3>Showing 3 to 3 of 3 entries</h3>
        </div>
        <div className="-mt-5 ml-96 flex ">
         <div className="flex ml-96 w-44 h-9 border border-gray-300 mb-5 bg-white text-lg text-center">
         <button className="mr-2">Previous</button>
          <h3 className="w-10 h-9 border border-gray-300 bg-blue-600 text-center text-white">2</h3>
          <button className="ml-2">Next</button>
         </div>
        </div>
      </div>
      <div className="mt-40 flex mb-2 w-full h-12 border border-gray-200">
        <div className="mt-2">
          <p>Copyright c 2023 Warkaw Aksion</p>
        </div>
        <div className="mt-2 ml-60">
          <p className="ml-72">All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default shareholder;
