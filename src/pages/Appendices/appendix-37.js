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
        <PageBanner bgUrl={bannerImg } longTitle={"Criminal Justice"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 37 - Criminal Justice</h4>
            </div>

            <p>
                If a thief steals a thousand dollars from you, and they put him in prison, what do you get? If the thief has a wife and children, what is their crime? Why should they be deprived of their father?
                <br/><br/>
                The Quran solves this problem, as well as the problems associated with the criminal justice systems prevalent in today's world.
            </p>
            <h5 className='my-3 text-black mt-10 text-center'>Equivalence is the Law [2:178-179]</h5>
            <p>
                According to the Quranic criminal justice, the thief who is convicted of stealing a thousand dollars from you must work for you until you are fully paid for the thousand dollars you lost, plus any other damage and inconvenience the theft may have caused you. At the same time, the thief's innocent wife and children are not deprived of their man, and the expensive prison system is eliminated. Imprisonment is a cruel and inhumane punishment that has proven useless to all concerned.
                <br/><br/>
                Contrary to common belief, the thief's hand shall not be cut off. Thank God for His mercy and His mathematical miracle in the Quran, we know now that the thief's hand is to be marked. Marking the hand of the thief is stated in 5:38. The sura and verse numbers add up to 5+38 = 43. The other place in the Quran where "the hand is cut" is found in 12:31. This is where we see the women who admired Joseph so much, they "cut" their hands. Obviously, they did not sever their hands; no one can do that. The sura and verse numbers add up to 12+31=43, the same total as in 5:38. This gives mathematical confirmation that the Quranic law calls for marking the hand of the thief, not severing it. Additional mathematical confirmation is provided: 19 verses after 12:31, we see the "cutting of the hand" again. Punishment in Islam (Submission) is based on equivalence and social pressure (2:178, 5:38, 24:2).
                <br/><br/>
                The blasphemy called "Hadith & Sunna" has instituted stoning to death as the punishment for married adulterers. This is not God's law. As stated in 24:2, the punishment for adultery is whipping in public; a hundred symbolic lashes. As pointed out above, the basic punishment is social pressure and scandalizing the criminal. Whipping in public achieves this goal.
                <br/><br/>
                In dealing with murder, the Quran definitely discourages capital punishment (2:179). "The free for the free, the slave for the slave, and the female for the female" (2:178). Due to human meanness and injustice, many people cannot even imagine what this Quranic law says. They refuse to accept the clear injunctions that strict equivalence must be observed - if a woman kills a man, or a man kills a woman, or a slave kills a free person, or a free person kills a slave, capital punishment cannot be applied. The Quran prefers that the murderer compensate the victim's family. Killing the murderer does not bring the victim back, nor does the family of the victim benefit from executing the murderer. The compensation, however, must be sufficient to be a deterrent for others. In Islam (Submission), the victim and/or the victim's family are the judges for all crimes; they decide what the punishment shall be under the supervision of a person who knows the Quran.
            </p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-36'} btnText={"What Price A Great Nation"}/>
            <LinkButton btnLink={'/chapters/appendix-38'} btnText={"The Creator's Signature"}/>
        </div>
    </div>
  )
}

export default AppendixThirty