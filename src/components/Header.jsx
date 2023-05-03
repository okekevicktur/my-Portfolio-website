// import React from 'react'
import profile from "../profile.jpg";
import Bio from "./Bio";
import Facts from "./Facts";
import Footer from "./Footer";
import ProfileButtons from "./ProfileButtons";
import Tabs from "./Tabs";
import TabsContent from "./TabsContent";
import Theme from "./Theme";

const Header = () => {
  return (
    <>
      <div className="md:w-[40rem] w-[100%] md:px-8  mx-auto">
        <Theme />
        {/* className="h-auto bg-black flex flex-col mt-7 mx-auto gap-x-[2.5rem] md:gap-x-[1rem] md:flex-row md:w-[full] items-center p-[1rem]" */}
        <div className="md:w-[90%] items-center grid-cols-1 grid md:grid-cols-2 mt-7 md:px-12 mx-auto">
          <div className="flex  w-[8.95rem] h-[8.95rem]  mx-auto rounded-full justify-center items-center  border-4 border-solid border-[#FFE071]">
            <img
              src={profile}
              alt="profileImage"
              className="w-[7.688rem] h-[7.688rem] rounded-full"
            />
          </div>
          <Bio />
        </div>
        <Facts />
        <ProfileButtons />
        <Tabs />
        <TabsContent />
        <Footer />
      </div>
    </>
  );
};

export default Header;
