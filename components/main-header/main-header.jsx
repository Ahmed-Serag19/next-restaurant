import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image priority src={logoImg} alt="A plate with food on it" />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals" children="Browse Meals" />
            </li>
            <li>
              <NavLink href="/community" children="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
