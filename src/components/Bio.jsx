const Bio = () => {
  return (
    <div>
      <p className="text-[2rem] text-[#F1F2F4] font-medium">Victor Okeke</p>
      <span className="text-[#A3ABB2] text-[0.875rem]">Frontend Engineer</span>
      <div className="flex mt-7 gap-10 place-content-center">
        <i className="fa-brands fa-github cursor-pointer"></i>
        <i className="fa-brands fa-twitter cursor-pointer"></i>
        <i className="fa-brands fa-linkedin cursor-pointer"></i>
        <i className="fa-brands fa-youtube cursor-pointer"></i>
      </div>
    </div>
  );
};

export default Bio;
