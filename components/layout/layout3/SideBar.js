import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import {HiDocumentReport} from "react-icons/hi";
import {BsFillChatLeftFill} from "react-icons/bs";
import {BsListTask} from "react-icons/bs";
import { BsHouseAddFill } from "react-icons/bs";
import { BsCameraFill } from "react-icons/bs";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";
const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
   <div className="">
    <div ref={ref} className="object-cover fixed w-56 bg-sky-700 shadow-sm scroll-mb-20 top-0 left-0 bottom-0 max-h-screen mt-14 overflow-y-auto ">
      <div className="flex justify-center mt-6 mb-10">
        <picture>
          <img
            className="w-28 h-auto rounded-3xl"
            src="/th.jpg"
            alt="company logo"
          />
        </picture>
        
      </div>
      <div className="-mt-7 text-center font-bold underline mb-6 text-xl">
            <h2>Warkaw Aksion</h2>
        </div>

      <div className="flex flex-col ">
        <Link href="/shareholder/dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/dashboard"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/shareholder/myshare">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/myshare"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>My share</p>
            </div>
          </div>
        </Link>
       
        <Link href="/shareholder/news">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/news"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>News</p>
            </div>
          </div>
        </Link>
       
        <Link href="/shareholder/report">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/report"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <HiDocumentReport className="h-5 w-5" />
            </div>
            <div>
              <p>Reports</p>
            </div>
          </div>
        </Link>
        <Link href="/shareholder/tasks">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/tasks"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <BsListTask className="h-5 w-5" />
            </div>
            <div>
              <p>Tasks</p>
            </div>
          </div>
        </Link>
        <Link href="/shareholder/chat">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/chat"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <BsFillChatLeftFill className="h-5 w-5" />
            </div>
            <div>
              <p>Chat</p>
            </div>
          </div>
        </Link>
        <Link href="/shareholder/AppLetter">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/AppLetter"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <BsHouseAddFill className="h-5 w-5" />
            </div>
            <div>
              <p>App Letter</p>
            </div>
          </div>
        </Link>
        <Link href="/shareholder/meeting">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/shareholder/meeting"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <BsCameraFill className="h-5 w-5" />
            </div>
            <div>
              <p>Meeting</p>
            </div>
          </div>
        </Link>
        <Link href="/shareholder/settings">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/settings"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-400 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <Cog8ToothIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Settings</p>
            </div>
          </div>
        </Link>
        
      </div>
    </div>
   </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
