// import React from 'react'
import profile from "../profile.jpg";
import Bio from "./Bio";
import Facts from "./Facts";
import Footer from "./Footer";
import ProfileButtons from "./ProfileButtons";
import Tabs from "./Tabs";

const Header = () => {
  return (
    <>
      <div className=" grid  container cursor-pointer text-[1.5rem] font-bold text-center w-[3rem] h-[3rem] mx-auto rounded-full content-center items-center bg-[#171f26]">
        <i className="fa-regular fa-moon items-center"></i>
      </div>
      <div className=" h-auto flex flex-col mt-7 gap-[2.5rem]">
        <div className="flex w-[8.95rem] h-[8.95rem] mx-auto rounded-full justify-center items-center  border-4 border-solid border-[#FFE071]">
          <img
            src={profile}
            alt="profileImage"
            className="w-[7.688rem] h-[7.688rem] rounded-full  bg-[#0C151D]"
          />
        </div>
        <Bio />
        <Facts />
      </div>
      <ProfileButtons />
      <Tabs />
      <Footer />
    </>
  );
};

export default Header;
