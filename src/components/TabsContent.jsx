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
    <div className="flex w-[100%] flex-col md:w-[30rem] md:grid md:grid-cols-2 pt-[2rem] pb-[1.25rem] gap-y-5 md:gap-x-5 rounded-sm justify-center items-center mx-auto ">
      <a
        href="https://www.bigvick-mini-insta.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={insta}
          alt="Mini Instagram"
          title="Mini Instagram Project"
          className="w-[100%] bg-cover center   rounded-lg bg-white"
        />
      </a>
      <a
        href="https://www.bigvickz-entertainment.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Movies}
          alt="Movie website"
          title="Api Based Movie website"
          className="w-[100%] bg-cover center   rounded-lg bg-[#0C151D]"
        />
      </a>
      <a
        href="https://www.bigvikz-blog.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Blogr}
          alt="Blogr"
          title="mini blog site"
          className="w-[100%] bg-cover center  rounded-lg bg-[#0C151D]"
        />
      </a>
      <a
        href="https://www.Bigvickz-restcountries.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={country}
          alt="Country search"
          title="Api Based country search Project"
          className="w-[100%] bg-cover center  rounded-lg bg-[#0C151D]"
        />
      </a>
      <a
        href="https://www.bigvikz-dictionaryapp.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={Dictionary}
          alt="Dictionary Site"
          title="Web based Api driven Dictionary website"
          className="w-[100%] bg-cover center  rounded-lg bg-[#0C151D]"
        />
      </a>
      <a
        href="https://www.bigvickz-react-todo-app.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={todoApp}
          alt="todoAPp"
          title="React todo App"
          className="w-[100%] bg-cover center  rounded-lg bg-[#0C151D]"
        />
      </a>
      <a
        href="https://www.bigvick-mini-insta.netlify"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={advise}
          alt="advise generator"
          title="Random advice generator"
          className="w-[100%] bg-cover center  rounded-lg bg-[#0C151D]"
        />
      </a>
      <a
        href="https://www.multistepfrontend-ass.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={multistep}
          alt="multistep site"
          title="Multistep CSS Project"
          className="w-[100%] bg-cover center   rounded-lg bg-[#0C151D]"
        />
      </a>
    </div>
  );
};

export default TabsContent;
