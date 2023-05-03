import { useSpring, animated } from "react-spring";

const Bio = () => {
  const animatedProps = useSpring({
    from: { opacity: 0, transform: "translateX(50px)" },
    to: { opacity: 1, transform: "translateX(0)" },
    config: { duration: 2000 },
  });
  return (
    <div className="">
      <p className="text-[2rem] text-[#F1F2F4] font-medium">Victor Okeke</p>
      <animated.h2
        style={animatedProps}
        className="text-[#A3ABB2] text-[0.875rem]"
      >
        Frontend Engineer
      </animated.h2>
      <div className="flex mt-7 gap-10 place-content-center">
        <a
          href="https://www.github.com/okekevicktur"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-github cursor-pointer"></i>
        </a>
        <a
          href="https://www.twitter.com/Vicscot1"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-twitter cursor-pointer"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/okeke-victor"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-linkedin cursor-pointer"></i>
        </a>
        <a
          href="https://www.youtube.com/@victorokeke1153"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-youtube cursor-pointer"></i>
        </a>
      </div>
    </div>
  );
};

export default Bio;
