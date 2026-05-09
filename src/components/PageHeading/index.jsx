import React from 'react';
import { Link } from 'react-router-dom';
import Div from '../Div';

export default function PageHeading({
  title,
  bgSrc,
  pageLinkText,
  pageLink,
}) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">
            {title}
          </h1>

          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>

           <li className="breadcrumb-item active">
  <a
    href={pageLink}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: '#fff',
      textDecoration: 'underline',
      fontWeight: '600',
    }}
  >
    {pageLinkText}
  </a>
</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}