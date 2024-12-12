import LinkWithUnderline from "@/components/link-with-underline";

export enum Section {
  Home,
  About,
  Contact,
}

export const SectionsHeader = ({
  className = "",
  selectedSection,
}: {
  className?: string;
  selectedSection: Section;
}) => {
  return (
    <div className={className}>
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
