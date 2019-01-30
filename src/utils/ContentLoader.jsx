import React from 'react';
import ContentLoader from "react-content-loader";
const MyLoader = props => (
  <ContentLoader 
    rtl
    height={100}
    width={205}
    speed={6}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="74.41" y="2.67" rx="0" ry="0" width="0" height="0" /> 
    <rect x="51.66" y="0.67" rx="0" ry="0" width="193.17" height="121.71" /> 
    <rect x="204.41" y="55.67" rx="0" ry="0" width="0" height="0" />
  </ContentLoader>
)
export default MyLoader;