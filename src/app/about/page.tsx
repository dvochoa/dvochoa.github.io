import type { Metadata } from "next";
import Link from "next/link";

import styles from "./about.module.css";
import SectionsHeader from "@/components/sections-header";

export const metadata: Metadata = { title: "About Me" };

export default function HomePage() {
  return (
    <div className={`${styles["grid-container"]} h-lvh grid`}>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <SectionsHeader className="row-start-2 col-start-2 lg:col-start-4 justify-self-center" />
      <main className="row-start-3 col-start-2 lg:col-start-2">
        <h1 className="text-4xl font-bold">Hey ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</h1>
        <br></br>
        <p className="text-xl">Thank you for visiting my website,</p>
        <p className="text-xl">I hope you like what i've done with the place</p>
        <br></br>
        <p className="text-xl">Lots of empty space</p>
        <br></br>
        <p className="text-xl">
          I've been a software engineer for 6 years. Mostly backend but i've also had experience in
          full stack and data engineering roles. Outside of work I am into running, cycling, and
          electronic music.
        </p>
        <br></br>
        <p className="text-xl">Catch me in Brooklyn if you're ever around</p>
        <br></br>
        <p className="text-xl">
          Here's my{" "}
          <Link
            href="/documents/resume.pdf"
            target="_blank"
            className={`${styles["header-entry"]} font-bold inline-block relative`}
          >
            resume
          </Link>{" "}
          ദ്ദി ˉ͈̀꒳ˉ͈́ )✧
        </p>
      </main>
    </div>
  );
}
