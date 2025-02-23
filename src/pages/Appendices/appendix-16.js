import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixSixteen = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Dietary Prohibitions"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 16 - Dietary Prohibitions</h4>
            </div>

            <p>
              The Quran teaches that God is extremely displeased with those who prohibit anything that was not specifically prohibited in the Quran (16:112-116). The upholding of any prohibitions not specifically mentioned in the Quran is tantamount to idolatry (6:142-152). Such prohibitions represent some other god(s) besides God. If you worship God ALONE, you will uphold His teachings ALONE and honor the commandments and prohibitions instituted only by Him.
              <br/><br/>
              The absolute specificity of dietary prohibitions in the Quran is best illustrated in 6:145-146. We learn from these two verses that when God prohibits "meat," He prohibits "meat" and nothing else, and when He prohibits "fat," that is what He specifically prohibits. These two verses inform us that "the meat" of pigs is prohibited, not "the fat." Obviously, God knew that in many countries, lard would be used in baked goods and other food products, and that such usage does not render the foods Haraam (prohibited). The Quran specifically prohibits four meats (2:173, 5:3, 6:142-145, and 16:112):
              <br/><br/>
              Say, "I do not find in what was revealed to me anything prohibited for any eater unless it is (1) carrion, (2) running blood, (3) the meat of pigs, for it is unclean, and (4) meat blasphemously dedicated to other than God." If one is forced to eat these without being malicious or deliberate, then your Lord is Forgiver, Most Merciful. [ 6:145 ]
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-15'} btnText={"Religious Duties: A Gift From God"}/>
            <LinkButton btnLink={'/chapters/appendix-17'} btnText={"Death"}/>
        </div>
    </div>
  )
}

export default AppendixSixteen