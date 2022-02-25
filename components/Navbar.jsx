import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.hamburger}>
        {toggleMenu ? (
          <Image
            src="/images/icon-close.svg"
            width={20}
            height={20}
            alt=""
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <Image
            src="/images/icon-hamburger.svg"
            width={20}
            height={20}
            alt=""
            onClick={() => setToggleMenu(true)}
          />
        )}
      </div>
      <div className={styles.logo}>
        <Link href="/">room</Link>
      </div>

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <Link href="/">home</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">shop</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">about</Link>
        </li>
        <li className={styles.listItem}>
          <Link href="/">contact</Link>
        </li>
      </ul>

      {toggleMenu && (
        <ul className={styles.listMenu}>
          <li className={styles.listMenuItem}>
            <Link href="/">home</Link>
          </li>
          <li className={styles.listMenuItem}>
            <Link href="/">shop</Link>
          </li>
          <li className={styles.listMenuItem}>
            <Link href="/">about</Link>
          </li>
          <li className={styles.listMenuItem}>
            <Link href="/">contact</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
