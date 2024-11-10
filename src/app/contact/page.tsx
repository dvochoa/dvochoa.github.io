import styles from './contact.module.css';
import SectionsHeader from "@/components/sections-header"

import Link from 'next/link';
import Image from 'next/image';

const iconWidth = 60;
const iconHeight = 60;

export default function ContactPage() {
    return (
        <div className={styles["grid-container"]}>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
            <SectionsHeader className={styles.header}/>
            <main className={styles.main}>
                <Link href="mailto:danny@dannyochoa.net" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/gmail-icon.svg" width={iconWidth} height={iconHeight} alt="Mail icon" className={styles["contact-icon"]}/>
                </Link>

                <Link href="https://github.com/dvochoa" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/github-icon.svg" width={iconWidth} height={iconHeight} alt="GitHub icon" className={styles["contact-icon"]}/>
                </Link>

                <Link href="https://www.linkedin.com/in/daniel-ochoa-8b2416a9/" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/linkedin-icon.svg" width={iconWidth} height={iconHeight} alt="LinkedIn icon" className={styles["contact-icon"]}/>
                </Link>

                <Link href="https://www.strava.com/athletes/71613920" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/strava-icon.svg" width={iconWidth} height={iconHeight} alt="Strava icon" className={styles["contact-icon"]}/>
                </Link>
            </main>
        </div>
    );
}
