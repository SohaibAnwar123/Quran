import React from 'react'
import './index.scss'

const PageBanner = ({ bgUrl, title, subTitle, longTitle }) => {
    return (
      <section
        className='page-banner-section h-[280px] md:h-[400px] bg-cover bg-no-repeat bg-center pt-[94px]'
        style={{ backgroundImage: `url(${bgUrl})` }}
      >
        <div className='flex flex-col items-center justify-center h-[100%] relative '>
            <h2 className='text-[30px] md:text-[48px] lg:text-[60px] text-white text-center uppercase'>{title}</h2>
            <h4 className='text-[20px] md:text-[30px] lg:text-[32px] text-primary text-center  capitalize font-poppins'>{subTitle}</h4>
            <h3 className={`text-[20px] md:text-[30px] lg:text-[32px] xl:text-[40px] max-w-[843px] text-white text-center  capitalize font-meriweather`}>{longTitle}</h3>
        </div>
      </section>
    );
  };
  

export default PageBanner