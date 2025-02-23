import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTen = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"God's Usage of the Plural Tense"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 10 - God's Usage of the Plural Tense</h4>
            </div>

            <p>
                In the English speaking world, where the trinity doctrine is prevalent, some people are intrigued by God's usage of the plural tense in the Quran. The overwhelming message of the Quran, where there is absolutely no compromise is that "GOD IS ONE" (2:133, 163; 4:171; 5:73; 6:19; 9:31; 12:39; 13:16; 14:48, 52; 16:22, 51; 18:110; 21:108; 22:34; 37:4; 38:65; 39:4; 40:16; 41:6; 112:1).
                <br/><br/>
                Whenever the first person plural form is used by the Almighty, it invariably indicates participation of other entities, such as the angels. For example, the revelation of this Quran involved participation of the angel Gabriel and the prophet Muhammad. Hence the use of the plural form in 15:9: "We revealed this scripture, and we will preserve it." The plural form here simply reflects the fact that the angel Gabriel and the prophet Muhammad participated in the process of delivering the Quran.
                <br/><br/>
                Another example has to do with blowing the breath of life into Adam and Jesus. The creation of Adam took place in heaven and God directly blew into him the breath of life. Thus, the first person singular form is consistently used: "I blew into Adam from My spirit" (15:29, 38:72). The creation of Jesus, on the other hand, took place on earth, and Gabriel carried God's "word" to Mary. The plural form is consistently used when referring to the creation of Jesus (21:91, 66:12).
                <br/><br/>
                When God spoke to Moses directly, without the mediation of angels, we see that God is speaking exclusively in the singular tense: "I am God. There is no other god besides Me. You shall worship Me alone, and observe the regular contact prayers (Salat) to commemorate Me." (20:12-14).
                <br/><br/>
                Whenever the worship of God is mentioned, the singular tense is used (51:56).
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-9'} btnText={"Abraham: Original Messenger of Islam"}/>
            <LinkButton btnLink={'/chapters/appendix-11'} btnText={" The Day of Resurrection"}/>
        </div>
    </div>
  )
}

export default AppendixTen