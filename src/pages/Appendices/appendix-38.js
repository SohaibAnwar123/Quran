import React from 'react'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixThirty = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"The Creator's Signature"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 38 - The Creator's Signature</h4>
            </div>

            <p>The scriptures are not the only mathematically composed creations of God where the number 19 is the common denominator. It is profound indeed that Galileo made his famous statement: "Mathematics is the language with which God created the universe." A plethora of scientific findings have now shown that the number 19 represents God's signature upon certain creations. This divine stamp appears throughout the universe in much the same manner as the signature of Michelangelo and Picasso identify their works. For example:</p>
            <ul className='ms-5 list-decimal'>
                <li>The sun, the moon, and the earth become aligned in the same relative positions once every 19 years (see ENCYCLOPEDIA JUDAICA under "Calendar").</li>
                <li>Halley's comet, a profound heavenly phenomenon, visits our solar system every 76 years, 19x4.</li>
                <li>God's stamp on you and me is manifested in the fact that the human body contains 209 bones, 19x11.</li>
                <li>LANGMAN'S MEDICAL EMBRYOLOGY, by T. W. Sadler, is used as a textbook in most of the Medical Schools in the U.S.A. On Page 88 of the Fifth edition, we read the following statement: "In general the length of pregnancy for a full term fetus is considered to be 280 days or 40 weeks after onset of the last menstruation, or more accurately, 266 days or 38 weeks after fertilization." The numbers 266 and 38 are both multiples of 19.</li>
            </ul>

        </div>

        <div className='flex justify-start my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-37'} btnText={'Criminal Justice'}/>
        </div>
    </div>
  )
}

export default AppendixThirty