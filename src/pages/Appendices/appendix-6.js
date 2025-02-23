import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import universeImg from '../../assets/images/universes.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixSix = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Greatness of God"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 6 - Greatness of God</h4>
            </div>

            <p>We learn from Verse 39:67 that God's greatness is far beyond human comprehension - the verse states that all seven universes are "folded within God's hand."</p>

            <p>
              Supported by the Quran's formidable mathematical code, we are taught that our universe is the smallest and innermost of seven universes (41:12, 55:33, 67:5, & 72:8-12). Meanwhile, our scientific advances have shown us that our galaxy, the Milky Way, is 100,000 light years across, and that our universe contains a billion such galaxies and a billion trillion stars, plus countless decillions of heavenly bodies. Our universe is estimated to span distances in excess of 20,000,000,000 light years.
            </p>

            <h5 className='my-3 text-black mt-10'>Count the Stars!</h5>
            <p>If we take only a quintillion [1,000,000,000,000,000,000] of the stars and simply count them [from 0 to quintillion] one count per second, day and night, this will take 32 billion years (more than the age of the universe). That is how long it will take to just "count" them; but God "created" them. Such is the greatness of God.</p>

            <div className='flex flex-col lg:flex-row gap-1 mb-3'>
              <div className='basis-3/5'>
                We can appreciate the vastness of our universe if we imagine going on a space odyssey. When we leave the planet Earth towards the sun, at the speed of light, we reach the sun after 93,000,000 miles and 8 minutes. It will take us more than 50,000 years at the speed of light to exit our galaxy. From the outer limit of the Milky Way, our planet Earth is invisible. Not even the most powerful telescope can detect our tiny "Earth."
                <br/><br/>
                We have to spend more than 2,000,000 years at the speed of light to reach our next-door galaxy. At least 10,000,000,000 years, at the speed of light, must be spent to reach the outer limit of our universe. From the outer limit of our universe, even the Milky Way is like a speck of dust in a large room.
              </div>
              <div className='basis-2/5'>
                <div className='p-4 rounded-[10px] border-[1px] border-primary mx-auto max-w-screen-md'>
                  <img src={universeImg} alt='Universe' className='w-full object-contain'/>
                </div>
              </div>
            </div>
            <p>The second universe surrounds our universe. The third universe is larger than the second, and so on. More accurately, our universe should be considered the seventh universe, surrounded by the sixth universe, which is surrounded by the fifth universe, and so on. Can you imagine the vastness of the first, outermost universe? No number exists to describe the circumference of the first universe. This incomprehensible vastness is "within the fist of God's hand." From the outer limit of the outermost universe, where is the planet Earth? How significant is it? On the infinitesimal mote called Earth, such minuscule creatures as Mary, Jesus, and Muhammad lived. Yet, some people set up these powerless humans as gods!</p>
            <p>God's greatness is represented not only by the fact that He holds the seven universes in His hand, but also by the fact that He fully controls every atom, even subatomic components, everywhere in the greater universe (6:59, 10:61, & 34:3).</p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-5'} btnText={"Heaven and Hell"}/>
            <LinkButton btnLink={'/chapters/appendix-7'} btnText={'Why Were We Created?'}/>
        </div>
    </div>
  )
}

export default AppendixSix