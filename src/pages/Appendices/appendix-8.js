import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixEight = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"The Myth of Intercession"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 8 - The Myth of Intercession</h4>
            </div>

            <p>
              To believe that anyone, other than God, can intercede on our behalf to have our sins forgiven or our wishes fulfilled, is to set up partners with God. This is idolatry. The Quran proclaims that "All intercession belongs to God" (39:44), and that there will be "no intercession on the Day of Judgment" (2:254).
              <br/><br/>
              The myth of intercession is one of Satan's most effective tricks to dupe millions of people into idol worship. Millions of Christians believe that Jesus will intercede for them at God, and millions of Muslims believe that Muhammad will intercede on their behalf. Consequently, these people idolize Jesus and Muhammad.
              <br/><br/>
              The concept of intercession is utterly illogical. Those who believe in Muhammad's intercession, for example, claim that he will ask God to forgive them and admit them into Paradise. They imagine Muhammad on the Day of Judgment choosing the candidates for his intercession. If you ask those who believe in intercession: "How will Muhammad recognize those who deserve his intercession?" they tell you, "God will tell him!" According to this concept, a person will go to Muhammad and request his intercession. Muhammad will then ask God whether this person deserves his intercession or not. God will inform Muhammad that the person deserves to go to Paradise. Muhammad will then turn around and tell God that the person deserves to go to Paradise! The blasphemy is obvious; those who believe in intercession make God a secretary of their idol Muhammad. God be glorified.
              <br/><br/>
              Since the Quran is the most accurate book, it acknowledges that everyone in Paradise will intercede on behalf of his or her loved ones: "Please God, admit my mother into Paradise." This intercession will work if the person's mother deserves to go to Paradise (2:255, 20:109, 21:28). Thus, intercession, though it will take place in this manner, is utterly useless.
              <br/><br/>
              We learn from the Quran that Abraham, God's beloved servant, could not intercede on behalf of his father (9:114). Noah could not intercede on behalf of his son (11:46). Muhammad could not intercede on behalf of his uncle (111:1-3) or relatives (9:80). What makes anyone think that a prophet or a saint will intercede on behalf of a perfect stranger?! See 2:48, 123; 6:51, 70, 94; 7:53; 10:3; 19:87; 26:100; 30:13; 32:4; 36:23; 39:44; 40:18; 43:86; 53:26 & 74:48. Muhammad's intercession is in 25:30.
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-7'} btnText={"Why Were We Created?"}/>
            <LinkButton btnLink={'/chapters/appendix-9'} btnText={'Abraham: Original Messenger of Islam'}/>
        </div>
    </div>
  )
}

export default AppendixEight