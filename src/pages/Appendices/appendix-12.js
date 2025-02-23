import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import arabicImg1 from '../../assets/images/app12_01.png'
import arabicImg2 from '../../assets/images/app12_02.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTwelve = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Role of the Prophet Muhammad"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 12 - Role of the Prophet Muhammad</h4>
            </div>

            <p>
              The Prophet's sole mission was to deliver Quran, the whole Quran, and nothing but Quran (3:20; 5:48-50, 92, 99; 6:19; 13:40; 16:35, 82; 24:54; 29:18; 42:48; 64:12).
              <br/><br/>
              Delivering the Quran was such a momentous and noble mission that the Prophet did not have any time to do anything else. Moreover, the Prophet was enjoined in the strongest words from issuing any religious teachings besides the Quran (69:38-47). He was even enjoined from explaining the Quran (75:15-19) - God is the only teacher of the Quran (55:1-2) and the Quran is the best Hadith (39:23 & 45:6).
              <br/><br/>
              These Quranic facts are manifested in the historical reality that the words and actions (Hadith & Sunna) attributed to the Prophet did not appear until the second century after his death. The Quran has prophesied the fabrication of Hadith and Sunna by the Prophet's enemies (6:112-115). The Quran teaches us that it was God's will to permit the invention of Hadith and Sunna to serve as criteria for exposing those who believe only with their lips, not in their hearts. Those who are attracted to Hadith and Sunna are proven to be false believers (6:113). Ironically, the books of Hadith report the Prophet's orders to write down nothing from him except the Quran! Shown below are two such Hadiths taken from the Hadithists' most reliable sources, Sahih Muslim and Is-haah Ahmad Ibn Hanbal:
            </p>
            <div className='rounded-[10px] border-[1px] border-primary mx-auto max-w-screen-md my-6 overflow-hidden'>
              <img src={arabicImg1} alt='Hadeeth-1' className='w-full object-contain m-3'/>
              <p className='p-3 border-t-[1px] border-primary text-[13px]'>
                The Prophet said, "Do not write down anything from me except the Quran." [Ahmed, Vol. 1, Page 171, and Sahih Muslim]
              </p>
            </div>
            <div className='rounded-[10px] border-[1px] border-primary mx-auto max-w-screen-md my-6 overflow-hidden'>
              <img src={arabicImg2} alt='Hadeeth-2' className='w-full object-contain m-3'/>
              <p className='p-3 border-t-[1px] border-primary text-[13px]'>
                This Hadith states that the Prophet maintained his anti-Hadith stand until death. [Ahmed, Vol. 1, Page 192]
              </p>
            </div>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-11'} btnText={"The Day of Resurrection"}/>
            <LinkButton btnLink={'/chapters/appendix-13'} btnText={"The First Pillar of Islam (Submission)"}/>
        </div>
    </div>
  )
}

export default AppendixTwelve