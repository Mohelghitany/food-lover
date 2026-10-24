import MainHeaderBackGround from "../mainHeaderBg";
import LogoImg from "@/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackGround />
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image src={LogoImg} alt="Food Lover Logo" priority />
          Food Lover
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href={"/meals"}>Meals</Link>
            </li>
            <li>
              <Link href={"/community"}>Community</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
