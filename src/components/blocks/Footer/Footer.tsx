import React from 'react';

import './Footer.css';

const githubIcon = require('../../../images/githubicon.png');
const linkedinIcon = require('../../../images/linkedinicon.png');

  
function Footer(): JSX.Element {
    return (
        <footer className="footer">
        <p className="footer__copyright">© 2021 CodeWithDragos, Powered by Omdb API</p>
        <div className="footer__link-zone">
        <a className='footer__link footer__link-zone-left' href='https://isawabi.com/about/' target="_blank">Isabelle Cuisset</a>
        <ul className="footer__link-zone-right footer__link-list">
        <li className="footer__link-listitem">
        <a className='footer__icon' href="https://github.com/Icuisset/" target="_blank"><img src={githubIcon} alt="GitHub icon" /></a>
        </li>
        <li className="footer__link-listitem">
        <a className='footer__icon' href="https://www.linkedin.com/in/isabelle-cuisset/" target="_blank"><img src={linkedinIcon} alt="LinkedIn icon" /></a>
        </li>
        </ul>
        </div>
        </footer>
    )
  };

export default Footer;