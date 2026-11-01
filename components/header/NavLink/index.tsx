"use client";
import { usePathname } from "next/navigation";

import styles from "./nav.module.css";
import Link from "next/link";

export default function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            href={href}
            className={`${styles.navLink} ${pathname.includes(href) ? styles.active : undefined}`}
          >
            {children}
          </Link>
        </li>
      </ul>
    </nav>
  );
}
