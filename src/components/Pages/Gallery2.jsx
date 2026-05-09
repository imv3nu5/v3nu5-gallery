import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import MasonryGallery from '../Gallery/MasonryGallery1';
import Spacing from '../Spacing';

export default function Gallery2() {
  pageTitle('Gallery2025');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="2025 Gallery"
        bgSrc="/images/contact_hero_bg.jpeg"
        
      />
      <Spacing lg="145" md="80" />
     
       <MasonryGallery />
      <Spacing lg="125" md="80" />

    </>
  );
}
