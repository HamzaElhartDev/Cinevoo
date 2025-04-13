import React from "react";
import SearchBar from "../SearchBar";
import Trending from "./Trending";

const Hero = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center justify-center p-3 mt-5">
        <img src="/assets/logo.png" alt="logo" className="w-14" />
      </div>

      <div className="flex items-center justify-center p-3.5 gap-2 mt-5">
        <div className="bg-[url(/assets/movies/1.webp)] bg-cover w-[250px] h-[270px] rounded-2xl translate-x-[80px] translate-y-[10px] -rotate-[8deg] shadow-2xl"></div>
        <div className="bg-[url(/assets/movies/2.webp)] bg-cover w-[300px] h-[270px] rounded-2xl z-10 translate-y-[-10px] shadow-2xl"></div>
        <div className="bg-[url(/assets/movies/4.webp)] bg-cover w-[250px] h-[270px] rounded-2xl translate-x-[-80px] translate-y-[10px] -rotate-[-8deg] shadow-2xl"></div>
      </div>

      <div className="flex items-center justify-center text-center mt-8 w-full">
        <h3 className="font-mono text-2xl w-1/2">
          Find <span className="text-violet-500 font-bold">Movies</span> You'll
          Love Without The Hassle
        </h3>
      </div>

      <div className="flex items-center justify-center">
        <SearchBar></SearchBar>
      </div>

      <div className="mt-10 flex items-center justify-center">
        <Trending></Trending>
      </div>
    </div>
  );
};

export default Hero;
