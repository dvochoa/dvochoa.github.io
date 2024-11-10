import styles from './page.module.css';
import SectionsHeader from "./components/sections-header";

export default function HomePage() {
    return (
        <div className={styles["grid-container"]}>
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
            <SectionsHeader className={styles.header}/>
            <main className={styles.main}>
                <h1>Daniel Ochoa</h1>
                Software Engineer
            </main>
        </div>
    );
}