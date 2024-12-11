import type { Metadata } from "next";

import styles from "./page.module.css";
import SectionsHeader from "./components/sections-header";
import ThemeToggle from "./components/theme-toggle";

export const metadata: Metadata = { title: "Home" };

export default function HomePage() {
  return (
    <div className={`${styles["grid-container"]} h-lvh grid lg:grid-cols-3`}>
      <meta charSet="utf-8"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <ThemeToggle />

      <SectionsHeader
        className="row-start-2 lg:col-start-3 justify-self-center"
        selectedIndex={0}
      />

      <main className="row-start-3 lg:col-start-2 text-center">
        <h1 className="text-3xl font-bold">Daniel Ochoa</h1>
        Software Engineer
      </main>
    </div>
  );
}
