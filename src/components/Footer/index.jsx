import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import './footer.scss';
const copyrightLinks = [
  {
    title: 'Terms of Use',
    href: '/',
  },
  {
    title: 'Privacy Policy',
    href: '/',
  },
];

const serviceMenu = [
  {
    title: 'UI/UX design',
    href: '/service/service-details',
  },
  {
    title: 'WP development',
    href: '/service/service-details',
  },
  {
    title: 'Digital marketing',
    href: '/service/service-details',
  },
  {
    title: 'React development',
    href: '/service/service-details',
  },
];

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">V3NU5 © 2026</Div>
          </Div>
          
        </Div>
      </Div>
    </footer>
  );
}
