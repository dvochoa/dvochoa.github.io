import styles from './sections-header.module.css';
import Link from 'next/link';

const SectionsHeader = ({ className }) => {
    return (
        <div className={className}>
            <Link href="/" id={styles.first} className={styles["header-link"]}>Home</Link>
            <Link href="/contact" id={styles.last} className={styles["header-link"]}>Contact</Link>
         </div>
      ); 
};

export default SectionsHeader
