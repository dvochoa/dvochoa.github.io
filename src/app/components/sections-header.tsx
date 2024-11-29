import LinkWithUnderlineAnimated from "@/components/link-with-underline-animated";

const SectionsHeader = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      <LinkWithUnderlineAnimated
        href="/"
        text="Home"
        openInNewTab={false}
        className="mr-4"
      ></LinkWithUnderlineAnimated>
      <LinkWithUnderlineAnimated
        href="/about"
        text="About"
        openInNewTab={false}
        className="mr-4"
      ></LinkWithUnderlineAnimated>
      <LinkWithUnderlineAnimated
        href="/contact"
        text="Contact"
        openInNewTab={false}
      ></LinkWithUnderlineAnimated>
    </div>
  );
};

export default SectionsHeader;
