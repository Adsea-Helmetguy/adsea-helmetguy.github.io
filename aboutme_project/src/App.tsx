// import { useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import typescriptLogo from "/typescript.svg";
// import tailwindLogo from "/tailwindcss.svg";
// import { AppNavBar } from "./components/Navbar.tsx";
/*
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
*/
import { Navbar } from "./components/Navbar/NavbarTutorial.tsx";
import { HeroBody } from "./components/HeroSection/Hero.tsx";
import { Experience } from "./components/Experience/Experience.tsx";
import { ContactMe } from "./components/Contact/Contact.tsx";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar />
        <HeroBody />
        <Experience />
        <ContactMe />
      </div>
    </>
  );
}

export default App;

//      {/* <AppNavBar /> */}
//<AppBody />
//the drop-shadow is following:"drop-shadow-[<value>]" for custom value
//When em is used for font-size, it’s based on the parent’s font size, while rem uses root
