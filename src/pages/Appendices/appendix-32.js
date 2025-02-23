import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixThirtyTwo = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"The Crucial Age of 40"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            <div className='page-title mb-8'>
                <h4>Appendix 32 - The Crucial Age of 40</h4>
            </div>

            <p>
              What is the age of responsibility? If a child dies at the age of 12, without even hearing about God, does this child go to Heaven or Hell? What if the child is 15 years old, or 21, or 25? At what age will the human being be held responsible for his or her beliefs? This question has puzzled researchers of all religions for a long time.
              <br/><br/>
              The Quran sets the age of responsibility at 40; anyone who dies before this age goes to Heaven (46:15). If the person believed in God and benefitted from belief by nourishing and developing the soul (see Appendix 15), he or she goes to the High Heaven. Otherwise, the person goes to the Lower Heaven.
              <br/><br/>
              Your first reaction to this piece of information is objection: "What if the person was really bad, evil, and an atheist, will he go to Heaven if he died before the age of 40?" This is because you are mean, while God is the Most Merciful. Our tendency is to "put them all in Hell."
              <br/><br/>
              People who objected strongly to this Divine mercy cannot come up with a cut-off age of responsibility. They ask questions like, "What if the person was really wicked?" The answer is, "Does God know that this person was wicked?" "Yes." "Does God know that this person does not deserve to go to Heaven?" "Yes." "Therefore, this person will not die before the age of 40." As simple as that. God is the only one who terminates our lives on this earth. He knows exactly who deserves to go Heaven and who deserves to go to Hell.
              <br/><br/>
              Early in 1989 a man by the name of Theodore Robert Bundy was executed for killing a number of women. The whole nation agreed that he was one of the most vicious criminals in history. So much so that his execution was one of the rare occasions where the opponents of capital punishment did not protest. On the contrary, many people actually celebrated his execution. Numerous journalists, editorials, and politicians lamented the fact that justice took eleven years to execute Ted Bundy. They stated that Bundy should have been executed within a maximum of six years after his conviction. According to the Quran, this would have been the greatest favor anyone could have done to Bundy. He was 42 years old when executed. Had he been executed five years earlier, at the age of 37, he would have gone straight to Heaven, and he did not deserve that.
              <br/><br/>
              As it turns out, Bundy was one of the signs God has given us to confirm that anyone who dies before 40 goes to Heaven. Bundy's name, Theodore Robert Bundy, consists of 19 letters, and he confessed to killing 19 women just one day before his execution. There were many other signs from God.
              <br/><br/>
              Delivering this important piece of information is one of the responsibilities given to me as God's Messenger of the Covenant. It is not my personal opinion.
              <br/><br/>
              It is noteworthy that both Martin Luther King and Malcolm X were assassinated just a couple of months before their 40th birthdays.
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-31'} btnText={"Evolution: Divinely Controlled"}/>
            <LinkButton btnLink={'/chapters/appendix-33'} btnText={"Why Did God Send A Messenger Now?"}/>
        </div>
    </div>
  )
}

export default AppendixThirtyTwo