import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixFive = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Heaven and Hell"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 5 - Heaven and Hell</h4>
            </div>

            <p>
            The descriptions of Heaven and Hell throughout the Quran are allegorical. And the Quran tells us so whenever such descriptions occur as independent statements, not within a general subject. See 2:24-26, 13:35, and 47:15. The word "Mathal" (allegory) is used in these verses. Linguistically, the word "Mathal" in these verses can be removed, and we still have perfect sentences. But it is there because the descriptions of Heaven and Hell are allegorical.
            </p>
            <p>
                What Heaven and Hell are really like is far beyond our comprehension. Hence the need for allegory.
                <br/><br/>
                How can one describe, for example, the taste of chocolate to a person who never tasted chocolate? Allegory will have to be used. The person has to wait to actually taste chocolate in order to know what chocolate tastes like. Whatever allegory we use to describe the taste of chocolate can never approximate the real thing.
                <br/><br/>
                Heaven already exists, since Adam and Eve were placed in it during their days of innocence (2:35). We learn from Sura 55 that there are two "High Heavens" - one for the humans and one for the jinns - and two "Lower Heavens" - one for the humans and one for the jinns (see Appendix 11 for more details).
                <br/><br/>
                Hell is not created yet. It will be created on the Day of Judgment (69:17 & 89:23). More details are given in Appendix 11.
            </p>

            <h5 className='my-3 text-black mt-10'>The High Heaven vs. The Lower Heaven</h5>  
            <p>
                There are profound differences between the High Heaven and the Lower Heaven. Allegorically, water in the High Heaven flows freely (55:50), while the water of the Lower Heaven needs to be pumped out (55:66).
                <br/><br/>
                Allegorically, the High Heaven has all kinds of fruit (55:52), while the Lower Heaven has a limited variety of fruits (55:68).
                <br/><br/>
                Allegorically, the pure spouses readily join their spouses in the High Heaven (55:56), while the dwellers of the Lower Heaven must go fetch their spouses (55:72).
                <br/><br/>
                Yet, even the Lower Heaven is an incredibly fantastic prize for those who are fortunate enough to escape Hell and end up in the Lower Heaven (3:185) - going to the Lower Heaven is a great triumph. People who depart this life before reaching their 40th birthday, and did not sufficiently develop their souls, will go to the Lower Heaven (46:15, Appendices 11 & 32). The High Heaven is reserved for those who believed, led a righteous life, and developed their souls sufficiently.
            </p>

            <div className='p-4 rounded-[10px] border-[1px] border-primary mx-auto max-w-screen-md my-5'>
              <p>
                Whoever succeeds in barely missing Hell, and is admitted into Heaven, has attained a great triumph. [3:185]
              </p>
            </div>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-4'} btnText={"We Made the Quran Easy [54:17]"}/>
            <LinkButton btnLink={'/chapters/appendix-6'} btnText={'Heaven and Hell'}/>
        </div>
    </div>
  )
}

export default AppendixFive