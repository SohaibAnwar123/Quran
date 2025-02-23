import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixSeventeen = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Death"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 17 - Death</h4>
            </div>

            <p>
              Death is a great mystery to most people. Not so for the students of the Quran. We learn that death is exactly like sleeping; complete with dreams (6:60, 40:46). The period between death and resurrection passes like one night of sleep (2:259; 6:60; 10:45; 16:21; 18:11, 19, 25; 30:55).
              <br/><br/>
              At the moment of death, everyone knows his or her destiny; Heaven or Hell. For the disbelievers, death is a horrible event; the angels beat them on the faces and rear ends as they snatch away their souls (8:50, 47:27, 79:1).
              <br/><br/>
              Consistently, the Quran talks about two deaths, the first death took place when we failed to make a stand with God's absolute authority (Appendix 7). That first death lasted until we were born into this world. The second death terminates our life in this world (2:28, 22:66, 40:11).
              <br/><br/>
              Note: The following is a reproduction of the lead article from the February, 1990 issue of the Submitters Perspective, the monthly bulletin of United Submitters International. This was the second to last issue that was written by Dr. Khalifa. It was completed and mailed ahead of time, in December, 1989. Dr. Khalifa was martyred on January 31, 1990 and his soul was taken directly to Paradise.
            </p>
            <p className='my-5'>[Here is an excerpt from the issue linked above]</p>
            <hr/>

            <h5 className='my-3 text-black mt-10'>The Righteous Do Not Really Die They Go Straight to Heaven</h5>
            <p>
              Give good news to those who believe and work righteousness that they will have gardens with flowing streams. When provided with provisions of fruits therein, they will say, "This is what was given to us in the past." They will be given similar provisions, and they will have pure spouses therein. They abide therein forever. (2:25)
              <br/><br/>
              Do not think that those who are killed in the cause of God are dead; they are alive at their Lord, being provided for. (3:169)
              <br/><br/>
              Do NOT say about those who are killed in the cause of God, "They are dead." For they are alive, but you do not perceive. (2:154)
              <br/><br/>
              O you who believe, you shall respond to God and the messenger when he invites to what keeps you alive. (8:24)
              <br/><br/>
              Those who emigrate in the cause of God, then get killed or die, God will surely provide for them a good provision. (22:58)
              <br/><br/>
              They do not taste death, beyond the first death, and God spares them the retribution of Hell. (44:56)
              <br/><br/>
              He was told, "Enter Paradise." He said, "I wish my people (on earth) know; that my Lord has forgiven me and honored me." (36:26-27)
            </p>
            <div className='pt-4 pb-1 rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <p className='text-center mb-0'>The wages of sin is death [Romans 6:23]</p>
            </div>

            <p>As stated in 3:81 and 46:9, God's Messenger of the Covenant does not bring anything new; everything I receive and pass on to you is already in the Quran. However, the Quran is full of information that is kept by Almighty God for revelation at a specific time. Now is the time to look at the verses shown above and learn the great news: THE RIGHTEOUS DO NOT DIE; when their lives on this earth come to the predetermined end, the angel of death simply invites them to leave their earthly bodies and move on to Heaven, the same Paradise where Adam and Eve once lived. Heaven has been in existence since Adam and Eve. We learn from 89:27-30 that God invites the believers' souls: "Enter My Paradise.</p>

            <h5 className='my-3 text-black mt-10'>MY OWN EXPERIENCE</h5>
            <p>When God's covenant with the prophets was fulfilled in accordance with 3:81, I was taken to Heaven where the righteous live NOW (4:69). While my body was down here on earth, I was in the same Paradise of Adam & Eve.</p>

            <h5 className='my-3 text-black mt-10'>THE DISBELIEVERS</h5>
            <p>As for the disbelievers, they know at the moment of death that they are destined for Hell. The angels beat them up on the faces and rear ends (8:50 & 47:27), order them to evict their souls (6:93), then "snatch their souls" (79:1). The Quran teaches that the disbelievers go through 2 deaths (2:28 & 40:11). They will be put to death - a state of nothingness during which they see Hell day and night in a continuous nightmare that lasts until the Day of Judgment (40:46). Hell is not yet in existence (40:46, 89:23).</p>

            <h5 className='my-3 text-black mt-10'>Of Course, the Righteous Depart</h5>
            <p>As far as people are concerned, the righteous "die." People do not realize that the righteous simply leave their bodies, and move on to Paradise. The verses shown above are self explanatory. They tell us that the righteous die only once - the one death we have already experienced as a consequence of the great fued (38:69). In 36:26-27, we see the best evidence that the righteous go to Paradise, while their friends and relatives are still living on earth. Like going to Hawaii and waiting for us there. See also 16:32 & 6:60-62.</p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-16'} btnText={"Dietary Prohibitions"}/>
            <LinkButton btnLink={'/chapters/appendix-18'} btnText={"Quran: All You Need For Salvation"}/>
        </div>
    </div>
  )
}

export default AppendixSeventeen