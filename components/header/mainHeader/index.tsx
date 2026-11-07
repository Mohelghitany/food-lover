import MainHeaderBackGround from "../mainHeaderBg";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import NavLink from "../NavLink";
import { Suspense } from "react";
import navStyles from "../NavLink/nav.module.css";
function NavLinksSuspense() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/meals">Meals</Link>
        </li>
        <li>
          <Link href="/community">Community</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackGround />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={LogoImg} alt="Food Lover Logo" priority />
          Food Lover
        </Link>
        <div className={styles.navLinks}>
          <Suspense fallback={<NavLinksSuspense />}>
            <NavLink href={"/meals"}>Meals</NavLink>
            <NavLink href={"/community"}>Community</NavLink>
          </Suspense>
        </div>
      </header>
    </>
  );
}
