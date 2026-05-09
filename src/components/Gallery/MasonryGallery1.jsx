import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';
import ModalImage from 'react-modal-image';

import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';

const categoryMenu = [
    {
    title: 'Spiti Circuit',
    category: 'spiticircuit',
  },
 {
    title: 'Vanjangi',
    category: 'vanjangi',
  },
  {
    title: 'Tarabu',
    category: 'tarabu',
  },
  {
    title: 'Camping31stnight',
    category: '31stnightcamp',
  },
   {
    title: 'lamtaput Picnic',
    category: 'lamtaputpicnic',
  },
];

export default function MasonryGallery1() {

  const [active, setActive] = useState('all');

  const [portfolioData, setPortfolioData] = useState([]);

  const [nextCursor, setNextCursor] = useState(null);

  const [hasMore, setHasMore] = useState(true);

  // INITIAL FETCH

 useEffect(() => {

  setPortfolioData([]);

  setNextCursor(null);

  setHasMore(true);

  fetchImages(true);

}, [active]);

  // FETCH IMAGES

  const fetchImages = async (reset = false) => {

  try {

    let url =
      `http://localhost:5000/gallery/2025?category=${active}`;

    if (nextCursor && !reset) {
      url += `&cursor=${nextCursor}`;
    }

    const res = await axios.get(url);

    if (reset) {

      setPortfolioData(res.data.images);

    } else {

      setPortfolioData((prev) => [
        ...prev,
        ...res.data.images,
      ]);
    }

    setNextCursor(res.data.next_cursor);

    if (!res.data.next_cursor) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }

  } catch (err) {

    console.log(err);

  }
};

 

  return (
    <>

      <Div className="container">

        <Div className="cs-portfolio_1_heading">

          <SectionHeading
            title="Spiti High Passes"
            subtitle="Highlight"
          />

          <Div className="cs-filter_menu cs-style1">

            <ul className="cs-mp0 cs-center">

              <li
                className={
                  active === 'all' ? 'active' : ''
                }
              >

                <span onClick={() => setActive('all')}>
                  All
                </span>

              </li>

              {categoryMenu.map((item, index) => (

                <li
                  key={index}
                  className={
                    active === item.category
                      ? 'active'
                      : ''
                  }
                >

                  <span
                    onClick={() =>
                      setActive(item.category)
                    }
                  >
                    {item.title}
                  </span>

                </li>

              ))}

            </ul>

          </Div>

        </Div>

      </Div>

      <Spacing lg="90" md="45" />

      <InfiniteScroll
        dataLength={portfolioData.length}
        next={fetchImages}
        hasMore={hasMore}
        loader={
          <h4 style={{ textAlign: 'center' }}>
            Loading...
          </h4>
        }
        endMessage={
          <p style={{ textAlign: 'center' }}>
            No more photos
          </p>
        }
        scrollThreshold={0.9}
        style={{ overflow: 'hidden' }}
      >

        <Div className="cs-masonry_4_col">

          {portfolioData.map((item, index) => (

            <Div
              key={index}
            >

              <Div
                className="cs-portfolio cs-style1 cs-type2"
                style={{
                  height: `${item.height}px`,
                }}
              >

                <Div className="cs-lightbox_item">

                  <ModalImage
                    small={item.src}
                    large={item.srcLg}
                    alt={item.title}
                  />

                </Div>

                <Div className="cs-portfolio_hover" />

                <span className="cs-plus" />

                <Div
                  className="cs-portfolio_bg cs-bg"
                  style={{
                    backgroundImage: `url("${item.src}")`,
                  }}
                />

                <Div className="cs-portfolio_info">

                  <Div className="cs-portfolio_info_bg cs-accent_bg" />

                  <h2 className="cs-portfolio_title">
                    {item.title}
                  </h2>

                  <Div className="cs-portfolio_subtitle">
                    {item.subtitle}
                  </Div>

                </Div>

              </Div>

            </Div>

          ))}

        </Div>

      </InfiniteScroll>

    </>
  );
}