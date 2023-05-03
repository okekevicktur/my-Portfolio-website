import victorOkekeCV from "/victorOkekeCV.pdf";

const ProfileButtons = () => {
  return (
    <div className="w-[100%]  grid grid-cols-2 md:w-[30rem] h-[3.5rem] mt-10 mx-auto gap-x-3 md:gap-16 items-center justify-center">
      <a
        href={victorOkekeCV}
        download="/victorOkekeCV.pdf"
        className="h-full w-[100%] font-medium flex px-2 md:px-5 text-[0.85rem] border rounded-md bg-[#FFE071] text-[#3D3D3D] items-center place-content-center hover:bg-[#dfc35b]"
      >
        <button type="submit">
          Download CV <i className="fa-solid fa-download px-2"></i>
        </button>
      </a>
      <button
        type="submit"
        className="h-full w-[100%]  font-medium px-2 md:px-5 text-[0.85rem] border rounded-md bg-[#171F26] text-[#A3ABB2] items-center place-content-center"
      >
        Contact Me
      </button>
    </div>
  );
};

export default ProfileButtons;
