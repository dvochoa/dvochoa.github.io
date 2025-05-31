import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./contact.module.css";

const iconWidth = 60;
const iconHeight = 60;

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="pt-[15vh] md:pt-[25vh] w-full">
      <main className="flex flex-col md:flex-row items-center justify-center">
        <Link href="mailto:danny@dannyochoa.net" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/gmail-icon.svg"
            width={iconWidth}
            height={iconHeight}
            alt="Mail icon"
            className={`${styles["contact-icon"]} lg:mx-1 dark:invert dark:brightness-100`}
          />
        </Link>

        <Link href="https://github.com/dvochoa" target="_blank" rel="noopener noreferrer">
          <Image
            src="/images/github-icon.svg"
            width={iconWidth}
            height={iconHeight}
            alt="GitHub icon"
            className={`${styles["contact-icon"]} lg:mx-1 dark:invert dark:brightness-100`}
          />
        </Link>

        <Link
          href="https://www.linkedin.com/in/daniel-ochoa-8b2416a9/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/linkedin-icon.svg"
            width={iconWidth}
            height={iconHeight}
            alt="LinkedIn icon"
            className={`${styles["contact-icon"]} lg:mx-1 dark:hover:invert dark:invert dark:brightness-100`}
          />
        </Link>

        <Link
          href="https://www.strava.com/athletes/71613920"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/images/strava-icon.svg"
            width={iconWidth}
            height={iconHeight}
            alt="Strava icon"
            className={`${styles["contact-icon"]} lg:mx-1 dark:hover:invert dark:invert dark:brightness-100`}
          />
        </Link>
      </main>
    </div>
  );
}
