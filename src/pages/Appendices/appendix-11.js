import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixEleven = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"The Day of Resurrection"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
          <div className='page-title mb-8'>
              <h4>Appendix 11 - The Day of Resurrection</h4>
          </div>
          <div className='p-4 rounded-[10px] border-[1px] border-primary mx-auto max-w-screen-md my-6'>
            <p>
              The horn is blown, whereupon everyone in the heavens and the earth is struck unconscious, except those spared by God. Then it is blown a second time, whereupon they rise up. [39:68]
            </p>
          </div>

          <p>
            All generations of humans and jinns will be resurrected on this earth; about 150 billion of them. But we will not be earthbound. God teaches us through the example of the caterpillar; it turns into a pupa in the cocoon (grave), then exits the cocoon as an airborne butterfly. Similarly, we live here on earth, and when we exit the grave on the Day of Resurrection we will not be earthbound; like the butterfly (101:4).
            <br/><br/>
            The earth will shine with the light of God (39:69) as He comes to our universe, together with the angels (89:22). Since our universe is a temporary dominion for Satan, it cannot stand the physical presence of God (7:143). As the Almighty approaches, the stars will crash into one another (77:8, 81:2), and the earth will shatter under our feet (69:14, 89:21). These horrors will not worry the believers (21:103).
          </p>
          
          <h5 className='my-3 text-black mt-10'>The High Heaven</h5>
          <p>Upon arrival of Almighty God, all the humans and jinns will be automatically stratified according to their degree of growth and development. Those who nourished their souls through worshiping God alone, believing in the Hereafter, and leading a righteous life will be strong enough to stay close to God; they will occupy the highest ranks (see Appendix 5).</p>
          <h5 className='my-3 text-black mt-10'>The Lower Heaven</h5>
          <p>Those who developed their souls to a lesser degree, as well as those who die before the age of forty, will move downward to the Lower Heaven. They will go to the location where they can be as close to God as their degree of growth and development permits them to be.</p>
          <h5 className='my-3 text-black mt-10'>The Purgatory</h5>
          <p>There will be people who nourished their souls just enough to spare them Hell, but not enough to enter the Lower Heaven. They are neither in Hell, nor in Heaven. They will implore God to admit them into the Lower Heaven (7:46-50). God will have mercy on them, and will merge the Purgatory into the Lower Heaven.</p>
          <h5 className='my-3 text-black mt-10'>Hell</h5>
          <p>A new, eighth universe will be created to house those who run away from God due to their weakness; they failed to nourish and develop their souls (69:17). God does not put a single being in Hell; they go to it on their own volition (Appendix 5).</p>


        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-10'} btnText={"God's Usage of the Plural Tense"}/>
            <LinkButton btnLink={'/chapters/appendix-12'} btnText={"Role of the Prophet Muhammad"}/>
        </div>
    </div>
  )
}

export default AppendixEleven