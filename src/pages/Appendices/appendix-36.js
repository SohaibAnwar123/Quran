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
        <PageBanner bgUrl={bannerImg } longTitle={"What Price A Great Nation"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
            <div className='page-title mb-8'>
                <h4>Appendix 36 - What Price A Great Nation</h4>
            </div>

            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary max-w-screen-lg mx-auto my-5'>
                <p>
                    "If the people of the scripture (Jews, Christians, and Muslims) believe and maintain a righteous life, we will remit their sins and admit them into the blissful Heaven. Had they observed the Torah, the Gospel, and what is revealed herein from their Lord, they would have enjoyed provisions from above them, and from beneath their feet. Some of them are righteous, but most of them are evil doers." [5:65-66]
                    <br/><br/>
                    "If only the people of the various communities believed and maintained a righteous life, we would have showered them with blessings from the heaven and the earth" [7:96]
                    <br/><br/>
                    "God is the One who controls your happiness, or misery. .... God is the One who makes you rich or poor." [53:43, 48]
                </p>
            </div>
            <p>A nation that upholds God's laws is guaranteed prominence among the nations of the world, victory, prosperity, and happiness (10:62-64, 16:97, 24:55, 41:30-31). On the other hand, a nation that violates God's laws incurs a miserable life (20:124). A nation that upholds God's laws is guaranteed to be a great nation. This is not a mere idealistic dream; since God is in full control (10:61), His guarantees and promises are done. A nation that upholds God's laws is characterized by:</p>

            <ul className='ms-5 list-decimal'>
                <li>Maximum freedom for the people - freedom of religion, freedom of expression, freedom to travel, and freedom of economy (2:256, 10:99, 88:21-22).</li>
                <li>Guaranteed human rights for all the people, regardless of their race, color, creed, social status, financial situation, or political affiliation (5:8, 49:13).</li>
                <li> Prosperity for all the people. God's economic system is based on constant circulation of wealth, no usury, and productive investment. Non-productive economy such as gambling, lottery, and high interest loans are not permitted (2:275-7, 59:7).</li>
                <li>Social justice for all. Because of the obligatory charity (Zakat), no one will go hungry or un-sheltered (2:215, 70:24-25, 107:1-7).</li>
                <li>A political system that is based on unanimous consensus. Through mutual consultation and freedom of expression, one side of any given issue convinces all participants in the discussion. The end result is a unanimous agreement, not the opinion of a 51% majority rammed down the throat of the 49% minority (42:38).</li>
                <li>A society that upholds and maintains the highest standards of moral behavior. There will be a strong family, no alcoholism, no illicit drugs, no illegitimate pregnancies, no abortions, and practically no divorce.</li>
                <li>Maximum regard for people's lives and properties. Therefore, there will be no crime against the people's lives or properties.</li>
                <li>Prevalence of love, courtesy, peace, and mutual respect among the people, and between this nation and other world communities (3:110, 60:8-9).</li>
                <li>Environmental protection is guaranteed through conservation and prohibition of wasteful practices (30:41).</li>
            </ul>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-35'} btnText={"Drugs & Alcohol"}/>
            <LinkButton btnLink={'/chapters/appendix-37'} btnText={"Criminal Justice"}/>
        </div>
    </div>
  )
}

export default AppendixThirty