// import React from 'react'
import { useEffect, useState } from "react";
import typescriptLogo from "/typescript.svg";
import tailwindLogo from "/tailwindcss.svg";
import viteLogo from "/vite.svg";
import reactLogo from "../../assets/react.svg";

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

interface ProgrammingDetails {
  classNames?: string;
  hrefs: string;
  src: string;
  altLabel: string;
  extraImgClass?: string;
}

function ProgrammingIcons({
  classNames,
  hrefs,
  src,
  altLabel,
  extraImgClass = "",
}: ProgrammingDetails) {
  return (
    <div
      className={`transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-150 ${classNames}`}
    >
      <a href={hrefs} target="_blank">
        <img
          src={src}
          alt={altLabel}
          className={`flex justify-center h-25 m-0 p-[1.5em] \
                      transition-opacity delay-1000 duration-1000 ease-in ${extraImgClass}`}
        />
      </a>
    </div>
  );
}

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
      <p className={styles.programLanguagedescription}>
        Programming languages used here
      </p>
      <div className={`${styles.programminglanguage}`}>
        <ProgrammingIcons
          hrefs="https://vite.dev"
          src={viteLogo}
          altLabel="ViteLogo"
          extraImgClass={visible ? "opacity-100" : "opacity-0"}
        />
        <ProgrammingIcons
          hrefs="https://www.typescriptlang.org/"
          src={typescriptLogo}
          altLabel="TypescriptLogo"
          extraImgClass={visible ? "opacity-100" : "opacity-0"}
        />
        <ProgrammingIcons
          hrefs="https://react.dev"
          src={reactLogo}
          altLabel="ReactLogo"
          extraImgClass={`animate-[spin_20s_linear_infinite] ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        />
        <ProgrammingIcons
          classNames={`animate-pulse hover:animate-none`}
          hrefs="https://tailwindcss.com/"
          src={tailwindLogo}
          altLabel="tailwindCSSLogo"
          extraImgClass={visible ? "opacity-100" : "opacity-0"}
        />
      </div>
    </div>
  );
};

export const HeroBody = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.bodytitle}>Hi, I'm Novelius!</h1>
        <p className={styles.description}>
          I'm a Frontend Developer! I have some experience such as React,
          Typescript and TailwindCSS! Reach out if you want to learn more! I can
          also talk about books~
        </p>
        <SkillsLearnt />
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("novelius/Novelius_profile.png")}
        alt="HeroImageProfile"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default HeroBody;
