// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import typescriptLogo from "/typescript.svg";
// import tailwindLogo from "/tailwindcss.svg";
import { AppHeader } from "./components/Header.tsx";
import { AppBody } from "./components/Body.tsx";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <AppBody />
    </>
  );
}

export default App;

//the drop-shadow is following:"drop-shadow-[<value>]" for custom value
//When em is used for font-size, it’s based on the parent’s font size, while rem uses root
