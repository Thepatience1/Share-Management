import Head from 'next/head';
import { useState } from 'react';

export default function shareholder_registration() {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [subcity, setSubcity]=useState('');
  const [wereda,setWereda]=useState('');
  const [email, setEmail] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [password, setPassword] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [houseNo, setHouseNo] = useState('');
  const [roll, setRoll] = useState('');
  const [paidBirr, setPaidBirr] = useState('');
  const [shareAmount, setShareAmount] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <Head>
        <title>Shareholder Registration Form</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-2xl font-bold mb-4">Shareholder Registration</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-x-4">
          <div>
            <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="middleName" className="block text-gray-700 font-bold mb-2">
             Middle Name
            </label>
            <input
              type="text"
              id="middleName"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={middleName}
              onChange={(event) => setMiddleName(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="number" className="block text-gray-700 font-bold mb-2">
           Roll No
          </label>
          <input
            type="number"
            id="roll"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={roll}
            onChange={(event) => setRoll(event.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="phoneNo" className="block text-gray-700 font-bold mb-2">
            Phone No
          </label>
          <input
            type="tel"
            id="phoneNo"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={phoneNo}
            onChange={(event) => setPhoneNo(event.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="address1" className="block text-gray-700 font-bold mb-2">
            Address Line 1
          </label>
          <input
            type="text"
            id="address1"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={address1}
            onChange={(event) => setAddress1(event.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="address2" className="block text-gray-700 font-bold mb-2">
            Address Line 2
          </label>
          <input
            type="text"
            id="address2"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={address2}
            onChange={(event) => setAddress2(event.target.value)}
          />
        </div>

        <div className="grid grid-cols-2 gap-x-4 mt-4">
          <div>
            <label htmlFor="city" className="block text-gray-700 font-bold mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
              Subcity
            </label>
            <input
              type="text"
              id="subcity"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={subcity}
              onChange={(event) => setSubcity(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="state" className="block text-gray-700 font-bold mb-2">
              Wereda
            </label>
            <input
              type="text"
              id="wereda"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={wereda}
              onChange={(event) => setWereda(event.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-x-4 mt-4">
          <div>
            <label htmlFor="houseNo" className="block text-gray-700 font-bold mb-2">
              houseNo
            </label>
            <input
              type="text"
              id="houseNo"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={houseNo}
              onChange={(event) => setHouseNo(event.target.value)}
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-gray-700 font-bold mb-2">
              Country
            </label>
            <input
              type="text"
              id="country"
              className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={country}
              onChange={(event) => setCountry(event.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="paidBirr" className="block text-gray-700 font-bold mb-2">
            Paid Birr
          </label>
          <input
            type="number"
            id="paidBirr"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={paidBirr}
            onChange={(event) => setPaidBirr(event.target.value)}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="shareAmount" className="block text-gray-700 font-bold mb-2">
            Share Amount
          </label>
          <input
            type="number"
            id="shareAmount"
            className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value={shareAmount}
            onChange={(event) => setShareAmount(event.target.value)}
          />
        </div>

        <div className="mt-8">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}