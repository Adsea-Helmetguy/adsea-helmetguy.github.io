import { useEffect, useState } from "react";
import typescriptLogo from "/typescript.svg";
import tailwindLogo from "/tailwindcss.svg";
import viteLogo from "/vite.svg";
import reactLogo from "../assets/react.svg";
import "../App.css";

export const AppBody = () => {
  const [visible, setVisible] = useState(false);
  //const toRotate = [ "Frontend Developer", "inspiring Full stack developer" ];

  //useEffect runs AFTER the entire code finish rendering.
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // triggers re-render with opacity-100
    }, 50); // 50ms delay

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  return (
    <>
      <div className="grid place-items-center border min-h-screen border-yellow-800">
        <div className="grid grid-rows-3 gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-8xl font-bold text-left">Hi, I'm Marcus</p>
            <p className="max-w-lg text-lg text-left">
              I am a Frontend Developer and a student at 42 Singapore! I have
              some experience with coding and uses programming languages such as
              React, Typescript and TailwindCSS! I look forward to getting to
              know you as well!👋~
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-2xl">Programming languages that i use:</p>
            <div className="flex flex-row">
              <div className="transition-filter duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-150">
                <a href="https://vite.dev" target="_blank">
                  <img
                    src={viteLogo}
                    className={`flex justify-center h-25 m-0 p-[1.5em] \
                                transition-opacity delay-1000 duration-1000 ease-in ${
                                  visible ? "opacity-100" : "opacity-0"
                                }`}
                    alt="ViteLogo"
                  />
                </a>
              </div>
              <div className="transition-filter duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-150">
                <a href="https://www.typescriptlang.org/" target="_blank">
                  <img
                    src={typescriptLogo}
                    className={`flex justify-center h-25 m-0 p-[1.5em] \
                                transition-opacity delay-1000 duration-1000 ease-in ${
                                  visible ? "opacity-100" : "opacity-0"
                                }`}
                    alt="TypescriptLogo"
                  />
                </a>
              </div>
              <div className="transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-150">
                <a href="https://react.dev" target="_blank">
                  <img
                    src={reactLogo}
                    className={`flex justify-center h-25 m-0 p-[1.5em] animate-[spin_20s_linear_infinite] \
                                transition delay-1000 duration-1000 ease-in ${
                                  visible ? "opacity-100" : "opacity-0"
                                }`}
                    alt="ReactLogo"
                  />
                </a>
              </div>
              <div className="transition-all duration-300 ease-in-out animate-pulse hover:animate-none hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-150">
                <a href="https://tailwindcss.com/" target="_blank">
                  <img
                    src={tailwindLogo}
                    className={`flex justify-center h-25 m-0 p-[1.5em]  \
                                transition delay-1000 duration-1000 ease-in ${
                                  visible ? "opacity-100" : "opacity-0"
                                }`}
                  />
                </a>
              </div>
            </div>
          </div>
          <div>
            <p className="top-0">
              Why not scroll down and see more of my works in progress?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppBody;
