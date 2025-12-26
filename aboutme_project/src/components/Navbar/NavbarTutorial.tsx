import { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils.tsx";

interface NavItemProps {
  hrefs: string;
  title: string;
  classNames?: string;
}

function NavBarItem({ hrefs, title, classNames = "" }: NavItemProps) {
  return (
    <li
      className={`transition-filter duration-300 ease-in-out hover:drop-shadow-[0_0_2em_#6366f1aa] hover:scale-150 ${classNames}`}
    >
      <a href="#about">{title}</a>
    </li>
  );
}

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Portfoilo
      </a>
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
