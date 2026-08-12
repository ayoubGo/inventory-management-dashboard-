"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsDarkMode, setIsSideBarCollapsed } from "@/state";
import { Bell, Menu, Moon, Search, Settings, Sun } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSideBarCollapsed,
  );

  const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
  console.log(isDarkMode);
  const toggleDarkMode = () => {
    console.log("clicked");
    dispatch(setIsDarkMode(!isDarkMode));
  };

  const toggleSidebar = () => {
    dispatch(setIsSideBarCollapsed(!isSidebarCollapsed));
  };
  return (
    <div className="flex justify-between items-center w-full mb-7 ">
      {/* {left side } */}
      <div className="flex justify-between items-center gap-5">
        <button
          className="px-3 py-3 bg-gray-100 rounded-lg hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="relative">
          <input
            type="search"
            placeholder="Start type to search groups & products"
            className="pl-10 pr-4 py-2 w-50 md:w-70 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />

          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="text-gray-500" size={20} />
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className="flex justify-between items-center gap-5">
        <div className="hidden md:flex justify-between items-center gap-5">
          <div>
            <button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <Sun className="cursor-pointer text-gray-500 " size={24} />
              ) : (
                <Moon className="cursor-pointer text-gray-500 " size={24} />
              )}
            </button>
          </div>

          <div className="relative ">
            <Bell className="text-gray-500 cursor-pointer" size={24} />
            <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-[0.4rem] py-1 text-xs font-semibold leading-none text-red-100 bg-red-400 rounded-full">
              3
            </span>
          </div>
          <hr className="w-0 h-7 border border-solid border-l mx-3 border-gray-300" />
          <div className="flex items-center gap-3 cursor-pointer ">
            <Image
              src="https://s3-inventorymanagement.s3.eu-west-3.amazonaws.com/profile2.jpg"
              alt="profile"
              width={50}
              height={50}
              className="rounded-full h-full object-cover"
            />
            <span className="font-semibold">Ayoub Go</span>
          </div>
        </div>

        <Link href="/settings">
          <Settings className="cursor-pointer text-gray-500" size={24} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
