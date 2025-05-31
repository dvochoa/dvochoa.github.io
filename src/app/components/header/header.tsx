"use client";

import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";

import ThemeToggle from "./theme-toggle";
import { Section, SectionSelector } from "./section-selector";

export default function Header() {
  const pathname = usePathname();

  let selectedSection: Section = Section.Unknown;
  switch (pathname) {
    case "/":
      selectedSection = Section.Home;
      break;
    case "/about":
      selectedSection = Section.About;
      break;
    case "/contact":
      selectedSection = Section.Contact;
      break;
  }

  return (
    <nav className="h-[15vh] shrink-0 lg:h-[10vh] flex w-full items-center justify-between px-7">
      <ThemeProvider attribute="class">
        <ThemeToggle />
      </ThemeProvider>

      <SectionSelector selectedSection={selectedSection} />
    </nav>
  );
}
