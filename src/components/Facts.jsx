const Facts = () => {
  return (
    <div className="relative flex w-[100%] mt-[2rem] md:w-[30rem] h-[6.625rem] gap-[0.55rem] place-content-center md:p-[1.25rem]  items-center mx-auto justify-between">
      <div className="animate-slide-up-slow">
        <p className="text-[#C3C7CB]">2</p>
        <span className=" leading-[1.313rem] flex-wrap break-words text-[0.875rem]">
          Years of work experience
        </span>
      </div>
      <div className="animate-slide-up-slow">
        <p className="text-[#C3C7CB]">2+</p>
        <span className=" leading-[1.313rem] flex-wrap break-words text-[0.875rem] font-medium">
          Completed Projects
        </span>
      </div>
      <div className="animate-slide-up-slow">
        <p className="text-[#C3C7CB]">10+</p>
        <span className="leading-[1.313rem] flex-wrap break-words text-[0.875rem] font-medium">
          Personal side projects
        </span>
      </div>
    </div>
  );
};

export default Facts;
