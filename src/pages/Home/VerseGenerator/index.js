import React, { useEffect, useState } from 'react'
import QuoteIcon from '../../../components/icons/quoteIcon'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './index.scss'

const VerseGenerator = () => {
    const [verses, setVerses] = useState(["", "", ""]);
  
    const fetchTextFile = async () => {
        const response = await fetch('./public-assets/documents/quran.txt');
        const text = await response.text();
        return text.split('\n');
    };

    function getSplitText(text) {
        if(text){
            const parts = text.split('|');      
            return (
              <>
                {parts[0]}
                <br />
                {parts[1]}
              </>
            );
        }
    }
    

    const getRandomVerses = async () => {
        const allVerses = await fetchTextFile();
        let randomVerses = [];
        for (let i = 0; i < 3; i++) {
            const randomIndex = Math.floor(Math.random() * allVerses.length);
            randomVerses.push(allVerses[randomIndex]);
        }
        setVerses(randomVerses);
    };

    useEffect(()=>{
        getRandomVerses();
    }, [])
  return (
    <section className='random-verse-section py-10'>
        <div className='section-content content-container'>
            <h5 className='text-center text-primary'>Random Quranic Verse Generator</h5>
            <h2 className='text-center text-grey2'>Random Quran verse</h2>

            <div className='refresh-btn-con text-center my-6'>
                <button className='flex gap-2 items-center text-primary text-[22px] font-semibold mx-auto'
                onClick={getRandomVerses}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <mask id="mask0_70_797" style={{ masktype: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="40" height="40">
                            <rect width="40" height="40" fill="#D9D9D9" />
                        </mask>
                        <g mask="url(#mask0_70_797)">
                            <path d="M19.9999 35.8334C18.0341 35.8334 16.1922 35.4616 14.4743 34.718C12.7563 33.9744 11.2584 32.9637 9.98067 31.686C8.70292 30.4082 7.69225 28.9104 6.94867 27.1924C6.20506 25.4745 5.83325 23.6326 5.83325 21.6668C5.83325 21.3121 5.95292 21.0151 6.19225 20.7758C6.43156 20.5365 6.72856 20.4168 7.08325 20.4168C7.43795 20.4168 7.73495 20.5365 7.97425 20.7758C8.21356 21.0151 8.33321 21.3121 8.33321 21.6668C8.33321 24.9168 9.46515 27.6737 11.729 29.9376C13.9929 32.2015 16.7499 33.3335 19.9999 33.3335C23.2499 33.3335 26.0068 32.2015 28.2707 29.9376C30.5346 27.6737 31.6665 24.9168 31.6665 21.6668C31.6665 18.4168 30.5346 15.6598 28.2707 13.396C26.0068 11.1321 23.2499 10.0001 19.9999 10.0001H19.5575L21.3268 11.7694C21.5747 12.0172 21.697 12.3073 21.6938 12.6395C21.6906 12.9718 21.5683 13.2672 21.3268 13.5257C21.0683 13.7843 20.7713 13.9178 20.4358 13.9264C20.1004 13.9349 19.8034 13.8099 19.5448 13.5514L15.798 9.78862C15.4968 9.48734 15.3461 9.13584 15.3461 8.73412C15.3461 8.33242 15.4968 7.98094 15.798 7.67966L19.5769 3.91687C19.8247 3.66901 20.119 3.54667 20.4598 3.54987C20.8006 3.55309 21.1003 3.68396 21.3589 3.94249C21.6003 4.20105 21.7253 4.49378 21.7339 4.8207C21.7424 5.14762 21.6174 5.44034 21.3589 5.69887L19.5575 7.50016H19.9999C21.9657 7.50016 23.8076 7.87196 25.5255 8.61558C27.2434 9.35916 28.7413 10.3698 30.0191 11.6476C31.2968 12.9254 32.3075 14.4232 33.0511 16.1412C33.7947 17.8591 34.1665 19.701 34.1665 21.6668C34.1665 23.6326 33.7947 25.4745 33.0511 27.1924C32.3075 28.9104 31.2968 30.4082 30.0191 31.686C28.7413 32.9637 27.2434 33.9744 25.5255 34.718C23.8076 35.4616 21.9657 35.8334 19.9999 35.8334Z"  fill="#FF9822"/>
                        </g>
                    </svg>
                    Refresh
                </button>
            </div>
            <div>
                <Carousel
                    showArrows={false}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={7000}
                    className='facts_carousel'
                >
                    
                    <div className='carousel-item verse-item'>
                        <div className='flex justify-center'> <QuoteIcon/> </div>
                        <div className='text-center my-3'>
                            <p className='mx-auto'>{getSplitText(verses[0])}</p>
                        </div>
                    </div>
                    <div className='carousel-item verse-item'>
                        <div className='flex justify-center'> <QuoteIcon/> </div>
                        <div className='text-center my-3'>
                            <p className='mx-auto'>{getSplitText(verses[1])}</p>
                        </div>
                    </div>
                    <div className='carousel-item verse-item'>
                        <div className='flex justify-center'> <QuoteIcon/> </div>
                        <div className='text-center my-3'>
                            <p className='mx-auto'>{getSplitText(verses[2])}</p>
                        </div>
                    </div>
                </Carousel>
            </div>

        </div>
    </section>
  )
}

export default VerseGenerator