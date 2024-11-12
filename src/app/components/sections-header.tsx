import styles from './sections-header.module.css';
import Link from 'next/link';

const SectionsHeader = ({ className }) => {
    return (
        <div className={className}>
            <Link href="/" className={`${styles["header-entry"]} font-bold inline-block relative ml-0`}>Home</Link>
            <Link href="/contact" className={`${styles["header-entry"]} font-bold inline-block relative mr-0`}>Contact</Link>
         </div>
      ); 
};

export default SectionsHeader
