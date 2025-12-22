// import React from 'react'
import { useEffect, useState } from "react";
import typescriptLogo from "/typescript.svg";
import tailwindLogo from "/tailwindcss.svg";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const SkillsLearnt = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // triggers re-render with opacity-100
    }, 50); // 50ms delay

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);
  return (
    <div>
      <p className={styles.description}>Programming languages that i use:</p>
      <div className={styles.programminglanguage}>
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
  );
};

export const HeroBody = () => {
  return (
    <section className={styles.container}>
      <div className={styles.topRow}>
        <div className={styles.content}>
          <h1 className={styles.bodytitle}>Hi, I'm Novelius!</h1>
          <p className={styles.description}>
            I'm a Frontend Developer! I have some experience such as React,
            Typescript and TailwindCSS! Reach out if you want to learn more! I
            can also talk about books~ :3
          </p>
          <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact me
          </a>
        </div>
        <img
          src={getImageUrl("novelius/Novelius_profile.png")}
          alt="HeroImageProfile"
          className={styles.heroImg}
        />
      </div>
      <SkillsLearnt />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default HeroBody;

/*
<div className={styles.programminglanguage}>
        <p className={styles.description}>Programming languages that i use:</p>
        <div className={styles.programminglanguage}>
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
*/
