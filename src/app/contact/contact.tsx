import './contact.css';
import Link from 'next/link';
import Image from 'next/image';

const iconWidth = 60;
const iconHeight = 60;

export default function Contact() {
  return (
    <div> 
      <Link href="mailto:danny@dannyochoa.net" target="_blank" rel="noopener noreferrer">
        <Image src="/images/gmail-icon.svg" width={iconWidth} height={iconHeight} alt="Mail icon" className="contact-icon" id="icon-mail"/>
      </Link>

      <Link href="https://github.com/dvochoa" target="_blank" rel="noopener noreferrer">
        <Image src="/images/github-icon.svg" width={iconWidth} height={iconHeight} alt="GitHub icon" className="contact-icon" id="icon-github"/>
      </Link>

      <Link href="https://www.linkedin.com/in/daniel-ochoa-8b2416a9/" target="_blank" rel="noopener noreferrer">
        <Image src="/images/linkedin-icon.svg" width={iconWidth} height={iconHeight} alt="LinkedIn icon" className="contact-icon" id="icon-linkedin"/>
      </Link>

      <Link href="https://www.strava.com/athletes/71613920" target="_blank" rel="noopener noreferrer">
        <Image src="/images/strava-icon.svg" width={iconWidth} height={iconHeight} alt="Strava icon" className="contact-icon" id="icon-strava"/>
      </Link>
    </div>
  );
}