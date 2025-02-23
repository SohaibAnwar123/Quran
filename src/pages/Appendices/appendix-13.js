import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import arabicImg from '../../assets/images/app13_01.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixThirteen = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"The First Pillar of Islam (Submission)"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
              
            <div className='page-title mb-8'>
                <h4>Appendix 13 - The First Pillar of Islam (Submission)</h4>
            </div>

            <h5 className='my-3 text-black mt-10'>"Laa Elaaha Ellaa Allah" (No god except God)</h5>
            <p>
              Verse 3:18 states the First Pillar of Islam (Submission): "God bears witness that there is no other god besides Him, and so do the angels and those who possess knowledge."
              <br/><br/>
              This most crucial pillar has been distorted. Millions of Muslims have adopted Satan's polytheistic version, and insist upon mentioning the name of Muhammad besides the name of God. However, the Quran's great criterion in 39:45 stamps such Muslims as disbelievers: "When God ALONE is mentioned, the hearts of those who do disbelieve in the Hereafter shrink with aversion, but when others are mentioned with Him, they become satisfied."
              <br/><br/>
              I have conducted extensive research into this criterion, and I have reached a startling conclusion: the idol worshipers who do not uphold the First Pillar of Islam as dictated in 3:18 are forbidden by God from uttering the correct Shahadah. They simply cannot say: "Ash-hadu Allaa Elaaha Ellaa Allah" by itself, without mentioning the name of Muhammad. Try it with any idol worshiper who claims to be a Muslim. Challenge them to say: "Ash-hadu Allaa Elaaha Ellaa Allah." They can never say it. Since this is the religion of Abraham (2:130, 135; 3:95; 4:125; 6:161; 12:37-38; 16:123; 22:78; Appendix 9), the ONLY creed must be "LAA ELAAHA ELLAA ALLAH (there is no god except the One God)". Muhammad did not exist on earth before Abraham.
            </p>

            <h5 className='my-3 text-black mt-10'>A Gross Blasphemy</h5>
            <p>There is no greater blasphemy than distorting the Quran to idolize the prophet Muhammad against his will. Verse 19 of Sura "Muhammad" (47:19) states: "You shall know that there is no god except the one God." Shown below is a photocopy of the regular logo of a Muslim publication THE REVIEW OF RELIGIONS (The London Mosque, 16 Gressenhall Road, London SW18 5QL, England.) Using the Quran's calligraphic style, the publishers of THE REVIEW OF RELIGIONS added the phrase "Muhammad Rasool Allah" in such a way that gives a false impression that such is the Quranic statement of 47:19. What a blasphemy!</p>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
              <div>
                <div className='p-4 rounded border-[1px] border-primary'>
                  <img src={arabicImg} alt='Arabic' className='w-3/5 mx-auto'/>
                </div>
              </div>
              <div>
                <div className='p-4 rounded border-[1px] border-primary'>
                  <p>You shall know that there is no god besides the One God, Allah. Muhammad is a messenger of God.</p>
                  <p className='text-end'>[ The blasphemy ]</p>
                </div>
              </div>
            </div>
            <p className='text-center mt-4 italic'>Typical Example of the Distorted Islam</p>


        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-12'} btnText={"Role of the Prophet Muhammad"}/>
            <LinkButton btnLink={'/chapters/appendix-14'} btnText={"Predestination"}/>
        </div>
    </div>
  )
}

export default AppendixThirteen