import LinkWithUnderline from "@/components/link-with-underline";

const SectionsHeader = ({
  className,
  selectedIndex,
}: {
  className: string;
  selectedIndex: number;
}) => {
  return (
    <div className={className}>
      <LinkWithUnderline
        href="/"
        text="Home"
        openInNewTab={false}
        className="mr-4"
        selected={selectedIndex == 0}
      ></LinkWithUnderline>
      <LinkWithUnderline
        href="/about"
        text="About"
        openInNewTab={false}
        className="mr-4"
        selected={selectedIndex == 1}
      ></LinkWithUnderline>
      <LinkWithUnderline
        href="/contact"
        text="Contact"
        openInNewTab={false}
        selected={selectedIndex == 2}
      ></LinkWithUnderline>
    </div>
  );
};

export default SectionsHeader;
