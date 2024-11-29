import styles from "./link-with-underline-animated.module.css";
import Link from "next/link";

const LinkWithUnderlineAnimated = ({
  href,
  text,
  openInNewTab,
  className = "",
}: {
  href: string;
  text: string;
  openInNewTab: boolean;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      target={openInNewTab ? "_blank" : undefined}
      className={`${styles.link} font-bold inline-block relative ${className}`}
    >
      {text}
    </Link>
  );
};

export default LinkWithUnderlineAnimated;
