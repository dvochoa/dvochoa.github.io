import './sections.css';
import Link from 'next/link';

export default function Sections() {
    return (
        <div className="sections">
            <Link href="/" className="hover-underline-animation" id="first">Home</Link>
            <Link href="/contact" className="hover-underline-animation">Contact</Link>
         </div>
      );
}
