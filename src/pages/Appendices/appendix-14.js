import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixFourteen = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Predestination"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 14 - Predestination</h4>
            </div>

            <p>
              We are absolutely free to believe or disbelieve in God. It is God's will that we will (18:29, 25:57, 73:19, 74:37, 76:29, 78:39, 80:12).
              <br/><br/>
              After committing our original sin (Appendix 7), God gave us a chance to denounce our crime and accept His absolute authority (33:72). But we decided that we wanted to see a demonstration of Satan's competence as a god. Many people protest the fact that God has created them, to put them through this gruesome test. Obviously, such people are not aware that [1] they have committed a horrendous crime (Introduction & Appendix 7), and [2] that they were given a chance to denounce their crime and redeem themslves, but they chose to go through the test.
              <br/><br/>
              We learn from 57:22 that our lives, along with everything else around us, are pre-recorded on something like a videotape. God fully knows what kind of decision each of us is destined to make; He knows which of us are going to Heaven and which are going to Hell. Even before we were born into this world, God knew which souls are good and which souls are evil. As far as God's omniscience is concerned, we can imagine a stamp on everyone's forehead that says "Heaven" or "Hell." Yet, as far as we are concerned, we are totally free to side with God's absolute authority, or Satan's polytheistic views. Predestination, therefore, is a fact as far as God is concerned, not as far as we are concerned.
              <br/><br/>
              This understanding explains the numerous verses stating that "God guides whomever He wills, and misleads whomever He wills." Based on His knowledge, God assigns our souls to the circumstances that we deserve. When God said to the angels, "I know what you do not know" (2:30), this meant that some of us deserved a chance to redeem ourselves. One example of God's guidance for those who deserve guidance is found in 21:51: "We granted Abraham his guidance, for we were fully aware of him." In other words, God knew that Abraham was a good soul who deserved to be guided, and God granted him his guidance and understanding. Another good example is stated in 12:24. Joseph fell for the Egyptian nobleman's wife, and almost committed adultery "if it were not that he saw a sign from his Lord." God teaches us in 12:24 that He "diverted evil and sin from Joseph, for he was one of My devoted worshipers." Was it Joseph who controlled his lust? Or, was it God's protection from sin that rendered him chaste? Such is predestination.
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-13'} btnText={"The First Pillar of Islam (Submission)"}/>
            <LinkButton btnLink={'/chapters/appendix-15'} btnText={"Religious Duties: A Gift From God"}/>
        </div>
    </div>
  )
}

export default AppendixFourteen