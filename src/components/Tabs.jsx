const Tabs = () => {
  return (
    <>
      <div className=" w-[100%] md:w-[85%] h-[5.25rem] mt-10 mx-auto content-center items-center justify-center">
        <div className="p-2 w-[100%] md:w-full grid grid-cols-2 h-[4rem] gap-3 bg-[#171F26] items-center content-center rounded-md justify-center">
          <button
            type="submit"
            className="w-[100%] sm:w-full px-5 h-[3.144rem] text-[0.875] font-medium rounded-md bg-[#0C151D] text-[#A3ABB2] items-center place-content-center"
          >
            Portfolio
          </button>
          <button className="w-[100%] md:w-full px-5 h-[2.75rem] text-[0.875] font-medium rounded-md bg-[#171F26] text-[#A3ABB2] items-center place-content-center">
            Skills
          </button>
        </div>
      </div>
    </>
  );
};

export default Tabs;
