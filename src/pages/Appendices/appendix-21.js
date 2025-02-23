import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTwentyOne = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Satan: Fallen Angel"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 21 - Satan: Fallen Angel</h4>
            </div>

            <p>
              In God's kingdom, certain creatures are necessarily given the powers needed to perform their duties. Satan believed that his God-given powers qualified him to function as an independent god. As evidenced by the prevalence of misery, disease, accidents, and war in his dominion, we now know that Satan is incompetent.
              <br/><br/>
              The Quran clearly states that Satan was an angel, by virtue of the immense powers and rank bestowed upon him. This is why he is addressed as an angel (2:34, 7:11, 15:29, 17:61, 18:50, 20:116, 38:71) prior to his fall. By definition, a jinn is a fallen angel (18:50). Satan's rebellion teaches us that the angels were created with minds of their own, and absolute freedom of choice (2:34).
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-20'} btnText={"Quran: Unlike Any Other Book"}/>
            <LinkButton btnLink={'/chapters/appendix-22'} btnText={"Jesus"}/>
        </div>
    </div>
  )
}

export default AppendixTwentyOne