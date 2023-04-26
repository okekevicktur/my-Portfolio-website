import TabsContent from "./TabsContent";

const Tabs = () => {
  return (
    <>
      <div className=" flex w-[23.438rem] h-[5.25rem] p-2 mt-10 mx-auto content-center items-center justify-center">
        <div className="flex w-[20.625rem] h-[4rem] gap-3 bg-[#171F26] items-center content-center rounded-md justify-center">
          <button
            type="submit"
            className="w-[9.625rem] px-5 h-[3.144rem] text-[0.875] font-medium rounded-md bg-[#0C151D] text-[#A3ABB2] items-center place-content-center"
          >
            Portfolio
          </button>
          <button className="w-[9.875rem] px-5 h-[2.75rem] text-[0.875] font-medium rounded-md bg-[#171F26] text-[#A3ABB2] items-center place-content-center">
            Skills
          </button>
        </div>
      </div>
      <TabsContent />
    </>
  );
};

export default Tabs;
