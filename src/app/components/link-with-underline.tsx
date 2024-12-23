import Link from "next/link";

import styles from "./link-with-underline.module.css";

const LinkWithUnderline = ({
  href,
  text,
  openInNewTab,
  className = "",
  selected = false,
}: {
  href: string;
  text: string;
  openInNewTab: boolean;
  className?: string;
  selected?: boolean;
}) => {
  const selectedClass = selected ? styles.selected : "";
  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      className={`${styles.link} ${selectedClass} font-bold inline-block relative lg:after:bg-black lg:dark:after:bg-white ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkWithUnderline;
