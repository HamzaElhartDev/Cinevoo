import React from "react";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="mt-6 flex items-center justify-center w-[500px] bg-[#0F0D23] rounded-sm p-1 relative h-12">
      <button className="absolute left-0 top-0 bottom-0 rounded-l-sm w-10 flex items-center justify-center bg-[#0F0D23]  hover:bg-[#464647be]  transition-colors cursor-pointer">
        <IoIosSearch className="text-xl text-white" />
      </button>
      <input
        type="text"
        placeholder="Search through 300+ movies online"
        className="w-full h-full pl-12 pr-4 bg-transparent text-white placeholder-gray-400 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
