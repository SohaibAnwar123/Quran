import React from 'react'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import LinkButton from '../../components/Buttons/LinkButton'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const Proclaimation = () => {
  return (
    <div className='proclamaiton-page'>
        <PageBanner bgUrl={bannerImg} longTitle={'Proclaiming one unified religion for all the people'} />

        <div className='page-content content-container py-10'>
            <SubPageHeader/>

            <div className='mt-[60px] mb-[54px] px-[30px] py-[25px] bg-[#F9FAFB] rounded-[10px]'>
                <h6 className='text-center text-black font-semibold'>
                    All religions of the world - Judaism, Christianity, Islam, Hinduism, Buddhism, and others - have been severely corrupted through innovations, traditions, and the idolization of humans such as the prophets and the saints.
                </h6>
            </div>

            <div className='text-content'>
                <p className='text-black text-[18px] leading-normal'>
                    God's plan, as stated in the Old Testament (Malachi 3:1), the New Testament (Luke 17:22-36 & Matthew 24:27), and this Final Testament (3:81), calls for the sending of God's Messenger of the Covenant after all the scriptures have been delivered. The main function of God's Messenger of the Covenant is to purify the scriptures and unify them into one universal message to this world from the Creator and Sustainer of this world.
                    <br/>
                    This major scriptural prophecy has now been fulfilled. God's Messenger of the Covenant has arrived, supported by overwhelming tangible proof (see Appendix Two). The purification and unification process has begun. God's plan is supported by God's invisible forces, and the enormous dimensions of this divine plan is manifest in the recent exposure of false religionists, and the removal of such anti-freedom barriers as the Berlin Wall, the Iron Curtain, and the bamboo curtain.
                    <br/>
                    Henceforth, there is only one religion acceptable to God - Submission. Anyone who submits to God and devotes the worship to God ALONE is a "Submitter." Thus, one may be a Jewish Submitter, a Christian Submitter, a Buddhist Submitter, a Hindu Submitter, or a Muslim Submitter.
                    <br/>
                </p>
                <ul className='list-disc ms-5 text-primary md:max-w-[80%]'>
                    <li className='leading-normal text-[14px] md:text-[16px]'><span className='text-black'>The only religion acceptable to God is Submission. [3:19]</span></li>
                    <li className='leading-normal text-[14px] md:text-[16px]'><span className='text-black'>Anyone who seeks other than Submission as his religion, it will not be accepted from him and, in the Hereafter, he will be with the losers. [3:85]</span></li>
                </ul>
                <p className='text-blueDark italic font-medium'>- Rashad Khalifa, November, 1989</p>

                <div className='flex justify-end mt-3'>
                    <LinkButton btnText={'Introduction'} btnLink={'/introduction'}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proclaimation