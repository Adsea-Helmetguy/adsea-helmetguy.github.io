// import React from 'react'

import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const HeroBody = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.bodytitle}>Hi, I'm Novelius!</h1>
        <p className={styles.description}>
          I'm a Frontend Developer! Reach out if you want to learn more! I can
          also talk about books~ :3
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
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default HeroBody;
