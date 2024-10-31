import Socials from "./ui/socials";

export default function HomePage() {
    return (
        <div className="app">
            <meta charSet="utf-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta> 
            <main>
                <div className="app-header">
                    Welcome.
                </div>
                <Socials/>
            </main>
        </div>
    );
}