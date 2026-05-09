import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Hero7 from '../Hero/Hero7';

const heroSocialLinks = [
  {
    name: 'Instagram',
    links: '/',
  },
  {
    name: 'x',
    links: '/',
  },
];

const showcaseData = [
  {
    title: '2O24  <br />Valleys of Koraput',
    imgUrl: '/images/v3nu5/slider_1.webp',
    href: '/Gallery2024',
  },
  {
    title: '2025 <br />Riding The Himalayas',
    imgUrl: '/images/v3nu5/slider_2.webp',
    href: '/Gallery2025',
  },
  {
    title: '2026 <br />The Northern Escape',
    imgUrl: '/images/v3nu5/slider_3.webp',
    href: '/Gallery2026',
  },
  
];

export default function CaseStudyShowcaseHome() {
  pageTitle('v3nu5-page');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero7
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow"
        showcaseData={showcaseData}
      />
    </>
  );
}
