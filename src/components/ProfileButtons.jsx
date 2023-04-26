const ProfileButtons = () => {
  return (
    <div className="flex w-[23.438rem] h-[5rem] mt-10 mx-auto gap-5 items-center justify-center">
      <button
        type="submit"
        className="w-[9.875rem] font-medium flex px-5 h-[2.75rem] text-[0.75rem] border rounded-md bg-[#FFE071] text-[#3D3D3D] items-center place-content-center"
      >
        Download CV <i className="fa-solid fa-download px-2"></i>
      </button>
      <button
        type="submit"
        className="w-[9.875rem] font-medium px-5 h-[2.75rem] text-[0.75rem] border rounded-md bg-[#171F26] text-[#A3ABB2] items-center place-content-center"
      >
        Contact Me
      </button>
    </div>
  );
};

export default ProfileButtons;
