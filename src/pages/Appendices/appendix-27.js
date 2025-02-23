import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTwentySeven = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Who Is Your God?"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 27 - Who Is Your God?</h4>
            </div>

            <p>Most people are outraged upon hearing this question. "What do you mean, `Who is your god?' they ask, `My god is the Creator of the heavens and the earth.' " And most of these people will be shocked to find out that their proclamation that their god is the Creator of the heavens and the earth is no more than lip service, and that they are in fact destined for Hell (12:106).</p>
            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary mb-6 max-w-screen-md mx-auto'>
              <p className='text-center'>Your god is whoever or whatever occupies your mind most of the time.</p>
            </div>

            <p>Your god can be your children (7:190), your spouse (9:24), your business (18:35), or your ego (25:43). This is why we note that one of the most important and most repeated commandments in the Quran is:</p>
            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary mb-6 max-w-screen-md mx-auto'>
              <p className='text-center'>"O you who believe, you shall remember God frequently; glorify Him day and night." [33:41]</p>
            </div>

            <p>To put this commandment into practice, we must establish certain habits whereby we guarantee that God occupies our minds more than anything else. The Quran helps us establish such soul saving habits:</p>

            <ul className='ms-5 list-decimal'>
              <li><span className='underline'>The Contact Prayers (Salat):</span>&nbsp; those who observe the 5 daily prayers come a long way towards commemorating God a significant proportion of their waking hours. Salat helps us remember God not only during the few minutes of prayer, but also throughout the times of anticipation. At 11:00 AM, one may look at his or her watch to see if the noon prayer is due yet. This act causes one to think about God, and one is credited accordingly (20:14).</li>
              <li><span className='underline'>Commemorate God before eating:</span>&nbsp; Verse 6:121 enjoins us to mention God's name before we eat: "You shall not eat from that upon which God's name has not been mentioned."</li>
              <li><span className='underline'>God Willing (IN SHAA ALLAH):</span>&nbsp; "You shall not say, `I will do this or that tomorrow,' without saying, `God willing' (IN SHAA ALLAH). If you forget to do this, then apologize and say, `May my Lord guide me to do better next time.'" [18:24]. This is a direct commandment that we must carry out, no matter who we are talking with.</li>
              <li><span className='underline'>God's Gift (MAA SHAA ALLAH): </span>&nbsp;To invoke God's protection for our beloved objects - our children, our cars, our homes, etc. - we are enjoined in 18:39 to say "MAA SHAA ALLAH" (This is God's gift).</li>
              <li><span className='underline'>Glorify God day and night:</span>&nbsp; When we eat anything, we shouldn't be like animals; we must reflect on God's creation of the food we are eating - the flavor, our enjoyment due to the senses God has given us, the perfect packaging of the banana or the orange, the varieties of sea foods created by God, etc. - and glorify Him as we enjoy His provisions. When we see a beautiful flower, or animal, or sunsets, we must glorify God. We must seize every possible opportunity to remember and glorify God, so that God may be our God.</li>
              <li><span className='underline'>First Utterance:</span>&nbsp; Make it a habit to say: "In the name of God, Most Gracious, Most Merciful. There is no other god besides God," the moment you wake up every morning. If you establish this good habit, this is what you will utter when you are resurrected.</li>
            </ul>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-26'} btnText={"The Three Messengers of Islam"}/>
            <LinkButton btnLink={'/chapters/appendix-28'} btnText={"Muhammad Wrote God's Revelations With His Own Hand"}/>
        </div>
    </div>
  )
}

export default AppendixTwentySeven