import './sections-header.css';
import Link from 'next/link';

export default function SectionsHeader() {
    return (
        <div className="sections-header">
            <Link href="/" className="hover-underline-animation" id="first">Home</Link>
            <Link href="/contact" className="hover-underline-animation">Contact</Link>
         </div>
      );
}
