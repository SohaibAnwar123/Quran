import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTwentyEight = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Muhammad Wrote God's Revelations With His Own Hand"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 28 - Muhammad Wrote God's Revelations With His Own Hand</h4>
            </div>

            <p>
            The first revelation was "Read," and included the statement "God teaches by means of the pen" (96:1-4), and the second revelation was "The Pen" (68:1). The only function of the pen is to write.
            <br/><br/>
            Ignorant Muslim scholars of the first two centuries after the Quran could not understand the Quran's challenge to produce anything like it. They had no idea about the Quran's mathematical composition, and they knew that many literary giants could have composed works comparable to the Quran. In fact, many such literary giants did claim the ability to produce a literary work as excellent as the Quran. The latest claim came from Taha Hussein, the renowned Egyptian writer.
            <br/><br/>
            The ignorant Muslim scholars then decided to proclaim Muhammad an illiterate man! They figured that this would make the Quran's extraordinary literary excellence truly miraculous. The word they relied on to bestow illiteracy upon the Prophet was "UMMY." Unfortunately for those "scholars," this word clearly means "Gentile," or one who does not follow any scripture (Torah, Injeel, or Quran) [see 2:78, 3:20 & 75, 62:2]; it does NOT mean "illiterate."
            <br/><br/>
            The Prophet was a successful merchant. The "Muslim scholars" who fabricated the illiteracy lie forgot that there were no numbers during the Prophet's time; the letters of the alphabet were used as numbers. As a merchant dealing with numbers every day, the Prophet had to know the alphabet, from one to one-thousand.
            <br/><br/>
            The Quran tells us that Muhammad wrote down the Quran - Muhammad's contemporaries are quoted as saying, "These are tales from the past that he wrote down. They are being dictated to him day and night" (25:5). You cannot "dictate" to an illiterate person. The Prophet's enemies who accuse him of illiteracy abuse Verse 29:48, which relates specifically to previous scriptures.
            <br/><br/>
            On the 27th night of Ramadan 13 B.H. (Before Hijerah), Muhammad the soul, the real person, not the body, was summoned to the highest universe and the Quran was given to him (2:97, 17:1, 44:3, 53:1-18, 97:1-5). Subsequently, the angel Gabriel helped Muhammad release a few verses of the Quran at a time, from the soul to Muhammad's memory. The Prophet wrote down and memorized the verses just released into his mind. When the Prophet died, he left the complete Quran written down with his own hand in the chronological order of revelation, along with specific instructions as to where to place every verse. The divine instructions recorded by the Prophet were designed to put the Quran together into the final format intended for God's Final Testament to the world (75:17). The early Muslims did not get around to putting the Quran together until the time of Khalifa Rashed `Uthmaan. A committee was appointed to carry out this task. Read Appendix 24 for the details.
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-27'} btnText={"Who Is Your God?"}/>
            <LinkButton btnLink={'/chapters/appendix-29'} btnText={"The Missing Basmalah"}/>
        </div>
    </div>
  )
}

export default AppendixTwentyEight