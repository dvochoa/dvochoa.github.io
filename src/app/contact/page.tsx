import SectionsHeader from "@/components/sections-header"
import Contact from "./contact";

export default function ContactPage() {
    return (
        <div className="app">
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
            <SectionsHeader/>
            <main>
                <Contact/>
            </main>
        </div>
    );
}
