import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import typescriptLogo from "/typescript.svg";
import "./App.css";

import { Fragment } from "react/jsx-runtime";

function App() {
  // const [count, setCount] = useState(0)
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // triggers re-render with opacity-100
    }, 50); // 50ms delay

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);

  return (
    <Fragment>
      <div className="grid grid-rows-3 gap-8">
        <div className="flex items-center">
          <h1>Hello and Welcome to my Portofilo!</h1>
        </div>
        <div className="flex flex-col items-center">
          <p className="text-2xl">Programming languages that i use:</p>
          <div className="flex flex-row">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <div className="transition-filter duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#6366f1aa]">
              <a href="https://www.typescriptlang.org/" target="_blank">
                <img
                  src={typescriptLogo}
                  className={`flex justify-center max-h-[6em] m-0 p-[1.5em] \
                            transition-opacity delay-1000 duration-1000 ease-in ${
                              visible ? "opacity-100" : "opacity-0"
                            }`}
                  alt="Typescript logo"
                />
              </a>
            </div>
          </div>
        </div>
        <div>
          <p>My name is Marcus and i am a frontend web developer!</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;

//the drop-shadow is following:"drop-shadow-[<value>]" for custom value
