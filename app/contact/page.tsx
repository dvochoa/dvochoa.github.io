import Sections from "../ui/sections"
import Socials from "./socials";

export default function ContactPage() {
    return (
        <div className="app">
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
            <Sections/>
            <main>
                <Socials/>
            </main>
        </div>
    );
}
