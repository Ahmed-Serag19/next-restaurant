import logoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import classes from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={classes.header}>
      <Link href="/" className={classes.logo}>
        <Image priority src={logoImg} alt="A plate with food on it" />
        NextLevel Food
      </Link>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals"> Browse Meals</Link>
          </li>
          <li>
            <Link href="/community"> Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
