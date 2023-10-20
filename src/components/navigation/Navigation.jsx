"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";
import { usePathname } from "next/navigation";
import staticData from "@/utils/staticData";
import { useState } from "react";

function Navigation() {
  const path = usePathname();
  const { navigation } = staticData;
  const [toggleNavMobile, setToggleNavMobile] = useState(false);
  return <></>;
  return (
    <div className={styles.navigation}>
      <div className={styles.navigation__logo}>
        <Image src={"/logo.png"} alt="Logo" width={40} height={40} />
        <p>Frontend Assessment</p>
      </div>

      <div
        className={`${styles.navigation__nav} ${
          toggleNavMobile ? styles.active : ""
        }`}
      >
        <ul>
          {navigation.navs.map((link) => (
            <li key={link.url}>
              <Link
                className={path == link.url ? styles.active : ""}
                href={link.url}
                title={link.title}
                onClick={() => setToggleNavMobile(false)}
              >
                {link.desc}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={styles.navigation__toggle}
        onClick={() => setToggleNavMobile((prevState) => !prevState)}
      >
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default Navigation;
