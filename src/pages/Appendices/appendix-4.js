import React from 'react'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixFour = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Why Was the Quran Revealed in Arabic?"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 4 - Why Was the Quran Revealed in Arabic?</h4>
            </div>

            <p>
            We learn from 41:44 that the sincere believers have access to the Quran, regardless of their mother tongue. The disbelievers, on the other hand, are not permitted access to the Quran, even if they are professors of the Arabic language (17:45, 18:57, 41:44, & 56:79).
            </p>
            <p>
                Arabic is the most efficient language in the world, especially when it comes to the precise statement of laws. Since the Quran is a Statute Book, it was crucial that such laws must be clearly stated. God chose Arabic for His Final Testament because of the obvious reason that it is the most suitable language for that purpose. Arabic is unique in its efficiency and accuracy. For example, the word "they" in English does not tell you if "they" are males or females. In Arabic there is a "they" for the males, "HUM," and a "they" for the females, "HUNNA." There is even a "they" for two males, "HUMAA," and a "they" for two females, "HAATAAN." This feature does not exist in any other language in the world. I came to appreciate this efficiency of the Arabic language when I translated, for example, 2:228. This verse enjoins the divorcee to give up her own wishes to divorce her husband, if she discovers that she is pregnant, and the husband wishes to reconcile - the welfare of the child takes a priority. The efficiency of the Arabic language was extremely helpful in stating this law. Any other language would have made it almost impossible to point out whose wishes are to be superseded, at least not in such a few words as we see in 2:228.
                <br/><br/>
                The word "Qaalataa" of 28:23, for example, translates into four English words: "the two women said." Such is the efficiency of the Arabic language.
                <br/><br/>
                Another possible reason for choosing Arabic is the fact that "He" and "She" do not necessarily imply natural gender. Thus, when God is referred to as "He," this does not imply gender at all. God be glorified; He is neither male, nor female. The usage of "He" to refer to God in the English language, for example, has contributed to a false image of God. This was not helped by such distorted expressions as "Father" when referring to God. You never find such a reference to God in the Quran.
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-3'} btnText={"We Made the Quran Easy [54:17]"}/>
            <LinkButton btnLink={'/chapters/appendix-5'} btnText={'Heaven and Hell'}/>
        </div>
    </div>
  )
}

export default AppendixFour