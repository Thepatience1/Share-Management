import React from "react";

function edit_shareholder() {
  return (
    <div className="text-center">
      <div className="text-xl font-bold m-3">Edit Shareholder</div>
      <div className="w-5/6 h-5/6 border border-gray-400 mr-5">
        <div className="-ml-48 mt-3 ">
          <h2>Id of shareholder</h2>
        </div>
        <form action="">
          <div className="flex mt-4 ml-6 mr-6">
            <label className=" text-lg text-gray-600 font-bold" htmlFor="">
              Name
            </label>
            <input
              className="w-80 h-8 ml-3  border-gray-600 border"
              type="text"
              id="fname"
              placeholder="First Name"
            />
            <input
              className="w-80 h-8 ml-3 border-gray-600 border"
              type="text"
              id="sname"
              placeholder="Middle Name"
            />
            <input
              className="w-80 h-8 ml-3 border-gray-600 border"
              type="text"
              id="sname"
              placeholder="Last Name"
            />
          </div>
          <div className="flex mt-4 ml-6 mr-6">
            <label className=" text-lg text-gray-600 font-bold " htmlFor="">
              Email
            </label>
            <input
              className="ml-3 w-80 h-8  border-gray-600 border"
              type="text"
              placeholder="example@gmaill.com"
            />
            <label className=" text-lg text-gray-600 font-bold " htmlFor="">
              phone Number
            </label>
            <input
              className="ml-3 w-80 h-8  border-gray-600 border"
              type="text"
              placeholder="### ### ####"
            />
            <label className="ml-2 text-lg text-gray-600 font-bold" htmlFor="">
              Password
            </label>
            <input
              className="ml-3 w-80 h-8 border-gray-600 border"
              type="password"
            />
          </div>
          <div className="flex mt-4 ml-6 mr-6">
            <label className=" text-lg text-gray-600 font-bold mt-3" htmlFor="">
              Address
            </label>
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
              placeholder="street Adress"
            />
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
              placeholder="street Address Line 3"
            />
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
              placeholder="city"
            />
          </div>
          <div className="flex ml-36 mr-4">
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
              placeholder="postal/Zip Code"
            />
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
              placeholder="Country"
            />
          </div>
          <div className="flex ml-6 mt-4">
            <label className=" text-lg text-gray-600 font-bold mt-3" htmlFor="">
              photo
            </label>
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="file"
              placeholder="choose files or drag here"
            />
          </div>
          <div className="flex ml-6 mt-4 mr-6">
            <label className=" text-lg text-gray-600 font-bold mt-3" htmlFor="">
              Detailed Description
            </label>
            <textarea
              className="ml-1 border border-gray-600"
              name=""
              id=""
              cols="80"
              rows="10"
            ></textarea>
          </div>
          <div className="flex ml-6 mt-4 mr-6">
            <label className=" text-lg text-gray-600 font-bold mt-1" htmlFor="">
              yyyyyyyyy
            </label>
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
            />
            <label className=" text-lg text-gray-600 font-bold mt-3" htmlFor="">
              aksion value
            </label>
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
            />
          </div>
          <div className="flex ml-6 mr-6">
            <label className="text-lg text-gray-600 font-bold mt-3" htmlFor="">
              others
            </label>
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
            />
            <label
              className="ml-4 text-lg text-gray-600 font-bold mt-3"
              htmlFor=""
            >
              xxxxxxxx
            </label>
            <input
              className="w-80 h-8 mt-4 ml-4 border-gray-600 border"
              type="text"
            />
          </div>

          <div className="flex ml-72 mb-8 text-center mt-8">
            <button
              type="submit"
              className="-ml-32 w-48 h-12 border border-gray-600 bg-gray-400 text-white mt-4 hover:bg-slate-700"
            >
              close
            </button>
            <button
              type="submit"
              className="ml-40 w-48 h-12 border border-gray-600 bg-blue-600 text-white mt-4 hover:bg-blue-800"
            >
              Update
            </button>
          </div>
        </form>
      </div>
      <div className="mt-7 flex mb-2 w-full h-12 border border-gray-200">
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

export default edit_shareholder;
