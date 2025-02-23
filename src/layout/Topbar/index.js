import React from 'react'
import { useLocation } from 'react-router-dom';
const Topbar = () => {
  const location = useLocation();
  let topNav,topNavText;
  if(location.pathname==='/quran-reader'){
    topNav = 'p-[12px]';
    topNavText = 'md:text-[16px]';
  }
  else{
    topNav = 'p-[23px]';
    topNavText = 'text-[12px] sm:text-[14px] md:text-[18px]';
  }
  return (
    <div className={`topbar bg-grey ${topNav}`}>
        <h6 className={`text-white text-center  font-inter ${topNavText}`}>In the Name of God, Most Gracious, Most Merciful</h6>
    </div>
  )
}

export default Topbar