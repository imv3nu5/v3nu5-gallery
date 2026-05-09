import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import PageHeading from '../PageHeading';
import MasonryGallery from '../Gallery/MasonryGallery';
import Spacing from '../Spacing';

export default function Gallery1() {
  pageTitle('Gallery2024');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <PageHeading
        title="2024 Gallery"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLink="https://v3nu5-my.sharepoint.com/:f:/g/personal/asit_v3nu5_world/IgDx84ccHLGqQ706T_ARmF7iAew3hqw3fKGCh3CbAaGq6V0?e=UunNxs"
      />
       
      <Spacing lg="145" md="80" />
       
       <MasonryGallery />
      <Spacing lg="125" md="80" />

    </>
  );
}
