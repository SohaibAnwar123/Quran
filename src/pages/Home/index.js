import React from 'react'
import Banner from './BannerSection'
import AboutSection from './AboutSection'
import VideosSection from './VideosSection'
import VerseGenerator from './VerseGenerator'
import NewsletterSection from './NewsletterSetion'
import InfoBannerSection from './InfoBannerSection'
import ProclamationSection from './ProclamationSection'

const Home = () => {
  return (
    <div className='home-page'>
      <Banner/>
      <AboutSection/>
      <VideosSection/>
      <VerseGenerator/>
      <NewsletterSection/>
      <InfoBannerSection/>
      <ProclamationSection/>
    </div>
  )
}

export default Home