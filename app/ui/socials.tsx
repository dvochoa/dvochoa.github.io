'use client';

import './socials.css';

export default function Socials() {
    return (
        <div className="socials">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossOrigin="anonymous"></link>
            <div id="socials-list">
              <a href="mailto:danny@dannyochoa.net" id="mail" data-testid="mail"><i className="fas fa-envelope fa-2x font-awesome"></i></a>
              <a href="https://github.com/dvochoa" id="github" data-testid="github" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-2x font-awesome"></i></a>
              <a href="https://www.linkedin.com/in/daniel-ochoa-8b2416a9/" id="linkedin" data-testid="linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x font-awesome"></i></a>
              <a href="https://www.strava.com/athletes/71613920" id="strava" data-testid="strava" target="_blank" rel="noopener noreferrer"><i className="fab fa-strava fa-2x font-awesome"></i></a>
            </div>
         </div>
      );
}