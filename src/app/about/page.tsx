import type { Metadata } from "next";

import styles from "./about.module.css";
import { Section, SectionsHeader } from "@/components/sections-header";
import LinkWithUnderline from "@/components/link-with-underline";
import ThemeToggle from "@/components/theme-toggle";

export const metadata: Metadata = { title: "About Me" };

export default function AboutPage() {
  return (
    <div className={`${styles["grid-container"]} h-lvh grid`}>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <ThemeToggle />

      <SectionsHeader
        className="row-start-2 col-start-2 lg:col-start-4 justify-self-center"
        selectedSection={Section.About}
      />

      <main className="row-start-3 col-start-2 lg:col-start-2">
        <h1 className="text-4xl font-bold">Hey ദ്ദി(˵ •̀ ᴗ - ˵ ) ✧</h1>
        <br></br>
        <p className="text-xl">Thank you for visiting my website,</p>
        <p className="text-xl">I hope you like what i've done with the place.</p>
        <br></br>
        <p className="text-xl">Lots of empty space.</p>
        <br></br>
        <p className="text-xl">
          I've been a software engineer for 6 years, coding for 10, and have worked at Google,
          Strava, and now Spotify. Most of that time has been spent doing backend work but i've also
          had experience in full stack and data engineering roles.
        </p>
        <br></br>
        <p className="text-xl">Outside of work I am into running, cycling, and electronic music.</p>
        <br></br>
        <p className="text-xl">Catch me in Brooklyn if you're ever around!</p>
        <br></br>
        <p className="text-xl">
          Here's my{" "}
          <LinkWithUnderline
            href="/documents/resume.pdf"
            text="resume"
            openInNewTab={true}
            selected={true}
          ></LinkWithUnderline>{" "}
          ദ്ദി ˉ͈̀꒳ˉ͈́ )✧
        </p>
        <br></br>
      </main>
    </div>
  );
}
