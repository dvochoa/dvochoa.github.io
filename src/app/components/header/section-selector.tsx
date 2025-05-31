import LinkWithUnderline from "@/components/link-with-underline/link-with-underline";

export enum Section {
  Unknown,
  Home,
  About,
  Contact,
}

export const SectionSelector = ({ selectedSection }: { selectedSection: Section }) => {
  return (
    <div>
      <LinkWithUnderline
        href="/"
        text="Home"
        openInNewTab={false}
        className="mr-4"
        selected={selectedSection == Section.Home}
      ></LinkWithUnderline>
      <LinkWithUnderline
        href="/about"
        text="About"
        openInNewTab={false}
        className="mr-4"
        selected={selectedSection == Section.About}
      ></LinkWithUnderline>
      <LinkWithUnderline
        href="/contact"
        text="Contact"
        openInNewTab={false}
        selected={selectedSection == Section.Contact}
      ></LinkWithUnderline>
    </div>
  );
};
