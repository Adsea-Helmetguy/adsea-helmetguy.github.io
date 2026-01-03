// import React from 'react'
import { useEffect, useState } from "react";
import linkedinLogo from "../../../Assets/Social_Medias/linkedin-svgrepo-com.svg";
import githubLogo from "../../../Assets/Social_Medias/github-svgrepo-com.svg";
import emailLogo from "../../../Assets/Social_Medias/email-svgrepo-com.svg";
import styles from "./Contact.module.css";

interface PlatformDetails {
  classNames?: string;
  hrefs: string;
  src?: string;
  altLabel: string;
  extraImgClass?: string;
  details?: string;
}

function ProgrammingIcons({
  classNames,
  hrefs,
  src,
  altLabel,
  extraImgClass = "",
  details,
}: PlatformDetails) {
  return (
    <div className={`${classNames}`}>
      <a href={hrefs} target="_blank">
        <div className="flex flex-row gap-5">
          <p className="text-6xl">.</p>
          <img
            src={src}
            alt={altLabel}
            className={`flex justify-center h-25 m-0 p-[1.5em] transition-all duration-300 ease-in-out \
                      hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-90 ${extraImgClass}`}
          />
        </div>
        <button>{details}</button>
      </a>
    </div>
  );
}

const SocialMedias = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true); // triggers re-render with opacity-100
    }, 50); // 50ms delay

    return () => clearTimeout(timer); // cleanup if component unmounts
  }, []);
  return (
    <div className={styles.socialMediaContainer}>
      <p className={styles.socialMediaDescription}>Find me here:</p>
      <div className={`${styles.socialMediaLinks}`}>
        <ProgrammingIcons
          hrefs="mailto:myemail@email.com"
          src={emailLogo}
          altLabel="EmailLogo"
          extraImgClass={visible ? "opacity-100" : "opacity-0"}
          details="marcuslowsj@gmail.com"
        />
        <ProgrammingIcons
          hrefs="https://github.com/Adsea-Helmetguy"
          src={githubLogo}
          altLabel="GithubLogo"
          extraImgClass={visible ? "opacity-100" : "opacity-0"}
          details="https://github.com/Adsea-Helmetguy"
        />
        <ProgrammingIcons
          hrefs="https://www.linkedin.com/in/marcus-lowsj/"
          src={linkedinLogo}
          altLabel="LinkedinLogo"
          extraImgClass={visible ? "opacity-100" : "opacity-0"}
          details="https://www.linkedin.com/in/marcus-lowsj/"
        />
      </div>
    </div>
  );
};

export const ContactMe = () => {
  return (
    <section className={styles.container}>
      <div className="flex flex-col">
        <p className="text-6xl">Contacts!</p>
        <p className="text-2xl">Feel Free to reach out to me!</p>
      </div>
      <SocialMedias />
    </section>
  );
};

export default ContactMe;
