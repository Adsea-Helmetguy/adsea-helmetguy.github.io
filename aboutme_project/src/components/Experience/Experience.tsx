import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
//import history from "../../data/history.json";
import { getImageUrl } from "../../utils";
import { useEffect, useState } from "react";

interface programmingInteface {
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
}: programmingInteface) {
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
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <SkillsLearnt />
    </section>
  );
};

export default Experience;
/*
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
*/
//
/*
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
*/
