import * as React from 'react';
import ContentLoader from 'react-content-loader';

const Loader: React.FC = () => (
  <ContentLoader height={600} width={600} speed={2} primaryColor="#d5d4d6" secondaryColor="#bcbbbd">
    <rect x="6" y="23" rx="0" ry="0" width="85" height="65" />
    <rect x="127" y="27" rx="0" ry="0" width="206" height="19" />
    <rect x="126" y="59" rx="0" ry="0" width="126" height="24" />
    <rect x="123" y="111" rx="0" ry="0" width="170" height="26" />
    <rect x="121" y="144" rx="0" ry="0" width="317" height="25" />
    <rect x="5" y="229" rx="0" ry="0" width="216" height="21" />
    <rect x="441" y="330" rx="0" ry="0" width="153" height="26" />
    <rect x="76" y="334" rx="0" ry="0" width="270" height="28" />
    <rect x="78" y="366" rx="0" ry="0" width="192" height="26" />
    <circle cx="35" cy="358" r="23" />
  </ContentLoader>
);

export default Loader;
