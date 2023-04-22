import styles from "../styles/header.module.css";
import Link from "next/link";
import Image from "next/image";

import logo from "../assets/shared/desktop/logo.svg";
import MobileNav from "./ui/MobileNav";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <Image src={logo} alt="" />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href={"/stories"}>Stories</Link>
          </li>
          <li>
            <Link href={"/features"}>Features</Link>
          </li>
          <li>
            <Link href={"/pricing"}>Pricing</Link>
          </li>
        </ul>
      </nav>
      <button className={styles.Button}>Get an invite</button>
      <MobileNav />
    </header>
  );
};

export default Header;
