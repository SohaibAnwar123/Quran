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
        <PageBanner bgUrl={bannerImg } longTitle={"Drugs & Alcohol"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            <div className='page-title mb-8'>
                <h4>Appendix 35 - Drugs & Alcohol</h4>
            </div>

            <p>There is no compromise whatsoever regarding illicit drugs and alcoholic beverages; they are called "abominations and the work of Satan" (5:90). In 2:219 and 5:90, we see that "intoxicants, gambling, the idols' altars, and games of chance" are strictly prohibited. The word used for intoxicants is "Khamr" from the root word "Khamara" which means "to cover." Thus, anything that covers or hinders the mind is prohibited. This includes anything that alters the mind, such as marijuana, heroin, cocaine, alcohol, hashish, and anything else that affects the mind.</p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-34'} btnText={"Virginity"}/>
            <LinkButton btnLink={'/chapters/appendix-36'} btnText={"What Price A Great Nation"}/>
        </div>
    </div>
  )
}

export default AppendixThirty