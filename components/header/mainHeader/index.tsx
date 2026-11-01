import MainHeaderBackGround from "../mainHeaderBg";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import NavLink from "../NavLink";

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
          <NavLink href={"/meals"}>Meals</NavLink>

          <NavLink href={"/community"}>Community</NavLink>
        </div>
      </header>
    </>
  );
}
