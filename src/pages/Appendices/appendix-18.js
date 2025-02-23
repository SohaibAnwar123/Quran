import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixEighteen = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Quran: All You Need For Salvation"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 18 - Quran: All You Need For Salvation</h4>
            </div>

            <p>
              The words of the Quran speak in 19:64, saying, "We come down in accordance with the commandments of your Lord. To Him belongs the past, present, and the future. Your Lord never forgets." God did not forget, for example, to tell us how to sleep (18:109, 31:27). Yet, the fabricators of such false doctrine as Hadith & Sunna have come up with religious teachings dictating to their followers how to sleep, and even how to cut your nails. The Sacred Mosque in Mecca and the illegal "Sacred Mosque" of Medina, hire some individuals to seek out the exhausted visitors and beat them with a stick if they fall asleep on the wrong side!
              <br/><br/>
              The Quran proclaims that the Quran is complete, perfect, and fully detailed (6:19, 38, 114, 115; 50:45), and that religious regulations not specifically instituted in the Quran constitute a religion other than Islam, i.e., Submisssion (42:21, 17:46). The true believers uphold the Quran, the whole Quran, and nothing but the Quran. This principle is confirmed by the Quran's mathematical code. Verse 46 of Sura 17 proclaims that we shall uphold the Quran ALONE. The word "ALONE" occurs in the Quran 6 times: 7:70, 17:46, 39:45, 40: 12 & 84, and 60:4. All these occurrences refer to God, except 17:46. When we add the numbers of suras and verses which refer to "GOD ALONE," we get 361, 19x19. This proves that 17:46 refers to "the Quran ALONE."
            </p> 

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-17'} btnText={"Death"}/>
            <LinkButton btnLink={'/chapters/appendix-19'} btnText={"Hadith & Sunna: Satanic Innovations"}/>
        </div>
    </div>
  )
}

export default AppendixEighteen