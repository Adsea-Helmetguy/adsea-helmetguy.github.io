import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.tsx";

interface NavItemProps {
  hrefs: string;
  title: string;
  classNames?: string;
}

//const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
function NavBarPortofilo({ hrefs, title, classNames }: NavItemProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default jump

    const targetElement = document.getElementById(hrefs);

    // // Smooth scroll to it
    targetElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      className={`transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#fff] hover:scale-110 ${classNames}`}
      href={hrefs}
      onClick={handleClick}
    >
      {title}
    </a>
  );
}

function NavBarItem({ hrefs, title, classNames }: NavItemProps) {
  // // Get the target element
  // const targetId = hrefs.replace("#", "");
  // const targetElement = document.getElementById(targetId);

  // // Smooth scroll to it
  // targetElement?.scrollIntoView({ behavior: "smooth" });

  return (
    <li
      className={`transition-all duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-150 ${classNames}`}
    >
      <a href={hrefs}>{title}</a>
    </li>
  );
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavBarPortofilo hrefs="/" title="Portfoilo" classNames={styles.title} />
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <NavBarItem hrefs="#about" title="About" />
          <NavBarItem hrefs="#experience" title="Experience" />
          <NavBarItem hrefs="#projects" title="Projects" />
          <NavBarItem hrefs="#contact" title="Contact" />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
