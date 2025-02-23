import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTwenty = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Quran: Unlike Any Other Book"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 20 - Quran: Unlike Any Other Book</h4>
            </div>

            <p>
              The Quran is God's Final Testament to the world, and He has pledged to protect it from the slightest distortion (15:9). Thus, the Quran is surrounded by invisible forces that guard it and serve it (13:39, 41:42, 42:24).
              <br/><br/>
              Unlike any other book, the Quran is taught by God (55:1-2); He teaches us what we need at the time we need it. This is why we read the Quran hundreds of times without getting bored. We can read a novel, for example, only once. But the Quran can be read an infinite number of times, and we derive new and valuable information from it every time. On the other hand, the insincere readers - those who read the Quran to find fault with it - are diverted from the Quran (7:146, 17:45, 18:57, 41:44). In fact, God's invisible forces help them find the faults they seek. Since the Quran is perfect, such "faults" serve only to reveal the stupidity of God's enemies.
              <br/><br/>
              God uses His own attributes to describe the Quran; He calls the Quran " `Azeem = Great" (15:87), "Hakeem = Full of wisdom" (36:2), "Majid = Glorious" (50:1), and "Karim = Honorable" (56:77). What can we say?
              <br/><br/>
              Since the Quran is God's message to all the people, regardless of their language, the Quran is accessible to the believers, regardless of their language (41:44). This explains a profound phenomenon: the believers who do not know Arabic know the Quran better than the Arabic speaking unbelievers. Because of the invisible forces serving the Quran, it is readily and enjoyably accessible to the sincere believers, and utterly inaccessible to the unbelievers (17:45, 18:57, 56:79).
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-19'} btnText={"Hadith & Sunna: Satanic Innovations"}/>
            <LinkButton btnLink={'/chapters/appendix-21'} btnText={"Satan: Fallen Angel"}/>
        </div>
    </div>
  )
}

export default AppendixTwenty