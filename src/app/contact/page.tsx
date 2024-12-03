import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

import styles from "./contact.module.css";
import SectionsHeader from "@/components/sections-header";

const iconWidth = 60;
const iconHeight = 60;

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className={`${styles["grid-container"]} h-lvh grid lg:grid-cols-3`}>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <SectionsHeader className="justify-self-center row-start-2 lg:col-start-3" />

      <div className="grid row-start-3 grid-cols-9 lg:grid-cols-1 lg:col-start-1 lg:col-span-3 lg:justify-self-center">
        <main className="text-center col-start-5 lg:col-start-1">
          <Link href="mailto:danny@dannyochoa.net" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/gmail-icon.svg"
              width={iconWidth}
              height={iconHeight}
              alt="Mail icon"
              className={`${styles["contact-icon"]} lg:mx-1`}
            />
          </Link>

          <Link href="https://github.com/dvochoa" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/github-icon.svg"
              width={iconWidth}
              height={iconHeight}
              alt="GitHub icon"
              className={`${styles["contact-icon"]} lg:mx-1`}
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
              className={`${styles["contact-icon"]} lg:mx-1`}
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
              className={`${styles["contact-icon"]} lg:mx-1`}
            />
          </Link>
        </main>
      </div>
    </div>
  );
}
