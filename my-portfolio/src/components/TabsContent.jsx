import advise from "../assets/advise.png";
import Blogr from "../assets/Blogr.png";
import country from "../assets/country.png";
import Dictionary from "../assets/Dictionary.png";
import insta from "../assets/insta.png";
import Movies from "../assets/Movies.png";
import multistep from "../assets/multistep.png";
import todoApp from "../assets/todoApp.png";

const TabsContent = () => {
  return (
    <div className="flex flex-col pb-[1.25rem] gap-5 rounded-sm justify-center items-center px-[1.25rem]">
      <img
        src={insta}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />
      <img
        src={Movies}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />
      <img
        src={Blogr}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />
      <img
        src={country}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />
      <img
        src={Dictionary}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />
      <img
        src={todoApp}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />
      <img
        src={advise}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />{" "}
      <img
        src={multistep}
        alt="adviseImage"
        className="w-[21.25rem] h-[13.125rem] rounded-lg bg-[#0C151D]"
      />
    </div>
  );
};

export default TabsContent;
