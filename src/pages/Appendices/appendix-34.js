import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixThirty = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Virginity"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 34 - Virginity</h4>
            </div>

            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary max-w-screen-lg mx-auto my-5'>
              <p>Sons and daughters of the true believers must be taught that their happiness throughout their lives depends on following God's law and preserving their chastity. This means that they must keep themselves for their spouses only, and never allow anyone else to touch them in a sexual manner (23:5-6, 24:30, 33:35, 70:29-30).</p>
            </div>
            <p>
                Today's society is replete with powerful temptations. In America's society of the eighties, even parents start talking about boyfriends for their daughters and girlfriends for their sons. When they reach their teens, many parents even supply birth control means to their children. An alarming percentage of teen-agers are sexually active, even though they are not physiologically mature, and without any moral limitations. Millions of illicit pregnancies and the tragedies associated with them, plus millions of tragic abortions, happen every month in the USA.
                <br/><br/>
                Among the results of this moral breakdown: unwanted and unsupported children, delinquent and irresponsible fathers, criminals who have no regard for people's lives or properties, millions of social misfits, incurable genital herpes, incurable genital warts, devastating syphilis and gonorrhea, dysplasia, the killer AIDS, and new diseases never known before.
                <br/><br/>
                What most people do not know is that this moral breakdown costs them dearly throughout their lives. For the only law that rules the world is God's law, and these flagrant violations of God's law cost them a lot of misery and problems (20:124).
                <br/><br/>
                The true believers who care about their children will advise them and remind them repeatedly and persistently (20:132) to keep their chastity. This means staying a virgin until their wedding night, then staying loyal to one's spouse - never committing adultery - for their own happiness. God's advice to keep our chastity, before and after marriage, is for our own good. God is the one who controls our health, wealth, and happiness or misery (53:43, 48).
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-33'} btnText={"Why Did God Send A Messenger Now?"}/>
            <LinkButton btnLink={'/chapters/appendix-35'} btnText={"Drugs & Alcohol"}/>
        </div>
    </div>
  )
}

export default AppendixThirty