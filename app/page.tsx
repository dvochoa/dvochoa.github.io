import SectionsHeader from "./ui/sections-header";

export default function HomePage() {
    return (
        <div className="app">
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
            <SectionsHeader/>
            <main>
                <h1>Daniel Ochoa</h1>
                Software Engineer
            </main>
        </div>
    );
}