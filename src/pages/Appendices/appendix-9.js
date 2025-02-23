import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixNine = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Abraham: Original Messenger of Islam"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 9 - Abraham: Original Messenger of Islam</h4>
            </div>

            <p>One of the prevalent myths is that Muhammad was the founder of Islam. Although Islam, total submission to God alone, is the only religion recognized by God since the time of Adam (3:19, 85), Abraham is reported in the Quran as the first user of the word "Islam" and the one who called us "Muslims" (22:78). Abraham's exemplary submission to God is demonstrated by his famous willingness to sacrifice his only son, Ismail, when he thought that that was God's command. As it turns out, such a command was in fact from Satan.</p>
            <h5 className='my-3 text-black mt-10'>God Never Ordered Abraham to Sacrifice His Son</h5>
            <p>God is the Most Merciful. He never violates His own law (7:28). Any person who believes that the Most Merciful ordered Abraham to kill his son cannot possibly make it to God's Heaven. Such evil thought about God is grossly blasphemous. Nowhere in the Quran do we see that God ordered Abraham to kill his son. On the contrary, God intervened to save Abraham and Ismail from Satan's plot (37:107), and He told Abraham: "You believed the dream" (37:105). Undoubtedly, it was a dream inspired by Satan. God's irrevocable law is: "God never advocates sin" (7:28)</p>
            <h5 className='my-3 text-black mt-10'>Millat Ibrahim</h5>
            <p>
              Islam is called "Millat Ibrahim" (The Religion of Abraham) throughout the Quran (2:130, 135; 3:95; 4:125; 6:161; 12:37-38; 16:123; 21:73; 22:78). Moreover, the Quran informs us that Muhammad was a follower of Abraham (16:123).
              <br/><br/>
              Due to a general unawareness of the fact that Abraham was the original messenger of Islam, many so-called Muslims challenge God: "If the Quran is complete and fully detailed (as claimed by God), where can we find the number of Rak`ahs (units) in each contact prayer (Salat)?" We learn from the Quran that all religious practices of Islam were already established before the Quran's revelation (8:35, 9:54, 16:123, 21:73, 22:27, 28:27). Verse 16:123 is direct proof that all religious practices in Islam were intact when Muhammad was born. Muhammad was enjoined to "follow the religion of Abraham." If I ask you to buy a color TV, it is assumed that you know what a color TV is. Similarly, when God enjoined Muhammad to follow the practices of Abraham (16:123), such practices must have been well known.
              <br/><br/>
              Another proof of divine preservation of the Islamic practices given to Abraham is the "Universal Acceptance" of such practices. There is no dispute concerning the number of Rak`ahs in all five daily prayers. This proves the divine preservation of Salat. The Quran's mathematical code confirms the number of Rak`ahs in the five prayers 2, 4, 4, 3, and 4, respectively. The number 24434 is a multiple of 19.
              <br/><br/>
              The Quran deals only with practices that were distorted. For example, the distorted ablution is restored in 5:6 to its original four steps. The tone of voice during the contact prayers (Salat) was distorted - many Muslims pray silently. This was corrected in the Quran, 17:110. The fasting during Ramadan was modified in the Quran to allow intercourse during the night (2:187). Zakat is restored in 6:141, and Hajj is restored to the four correct months (see Appendix 15).
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-8'} btnText={"The Myth of Intercession"}/>
            <LinkButton btnLink={'/chapters/appendix-10'} btnText={"God's Usage of the Plural Tense"}/>
        </div>
    </div>
  )
}

export default AppendixNine