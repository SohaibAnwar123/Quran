import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTwentyFive = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"End Of The World"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 25 - End Of The World</h4>
            </div>

            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary mx-auto'>
              <p>(God is) the Knower of the future; He does not permit anyone to unveil such knowledge. Only through the messengers that He chooses does He reveal future and past events." [ 72:27 ]</p>
            </div>
            <p className='mt-6'>Among the duties charged to me as God's Messenger of the Covenant is unveiling the end of the world (Page 415). We learn from 18:7-8 and 69:13-15 that this world will come to an end. A new earth and new heavens will replace the present heavens and earth (14:48).</p>
            <h5 className='my-3 text-black mt-10'>Signs of the Approaching End of the World</h5>
            <p>The Quran provides many signs, and states that the means for unveiling the end of the world have been given (47:18). The signs given in the Quran include:</p>

            <ul className='ms-5 list-decimal'>
              <li><b>The splitting of the moon:</b> This already happened in June 1969 when we landed on the moon and brought back moon rocks. People on earth can go now to many museums, colleges and observatories to look at pieces of the moon.</li>
              <li><b>Discovering the Quran's 19-based mathematical code</b> (74:30-37): Fulfilled in 1969-1974.</li>
              <li><b>The creature</b> (27:82): "Made from the earth, it alerts the people that they have been oblivious to their Creator." The Creature, made from the earth, did appear and was instrumental in unveiling the Quran's numerical code, and proclaiming that the world has neglected God's message; the creature is the computer. Note that the digits that make up 27:82 add up to 19.</li>
              <li><b>Appearance of God's Messenger of the Covenant</b> (3:81): As detailed in Appendix 2, a consolidating messenger, prophesied in the Quran, comes after all the prophets have delivered the scriptures, to purify and unify. This prophecy was fulfilled in Ramadan 1408.</li>
              <li><b>The Smoke</b> (44:10): occurs after God's Messenger of the Covenant has delivered the unified message and proclaimed Islam (Submission) as the only religion acceptable by God.</li>
              <li><b>Gog and Magog:</b> they re-appear, in accordance with God's plan, in the year 1700 AH (2271 AD). Gog and Magog are mentioned in 18:94 and 21:96. If you count the verses from 18:94 to the end of Sura 18, you find them 17. If you count the verses from 21:96 to the end of Sura 21, you find them also 17. This is the Quran's sign that Gog and Magog will re-appear in 1700 AH.</li>
            </ul>

            <h5 className='my-3 text-black mt-10'>It Will Not Remain Hidden [20:15]</h5>
            <p>Verse 15 of Sura 20 informs us that the end of the world will be revealed by God before the end of the world, and Sura 15, Verse 87, gives the time for that event:</p>

            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary mb-6 max-w-screen-md mx-auto'>
              <p>"We have given you the seven pairs, and the great Quran." [ 15:87 ]</p>
            </div>

            <p>The seven pairs are the 14 Quranic Initials. The total gematrical value of these profound pillars of the Quran's miracle pinpoints the year of the end of the world. It is noteworthy that Verse 85 of Sura 15 states: "The end of the world will surely come to pass." The next verse, 15:86, tells us that God is the Creator of this world, and, of course, He knows when it will end. The following verse, 15:87, tells us when the world will end. As shown in Table 1, the gematrical values of "The Seven Pairs" of Quranic Initials total 1709 (see also Table 1 of Appendix 1). According to 15:87, the world will survive for 1709 lunar years from the time this prophecy is stated in the Quran. This means that the world will end in the year 1710 AH. This number is a multiple of 19; 1710 = 19x90.</p>

            <div className='flex flex-col lg:flex-row gap-5 my-5'>
              <div className='basis-2/5'>
                <h5 className='my-3 text-black text-center italic'>Table 1: Total Gematrical Value of "The Seven Pairs" of Quranic Initials</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase' colSpan={3}>Quranic Initial	Gematrical Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Q</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>100</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>N</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>50</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>S (Saad)</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>90</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>H.M.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>48</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Y.S.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>70</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>T.H.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>T.S.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>69</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A.L.M.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>71</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A.L.R.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>231</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>T.S.M.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>`A.S.Q.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>230</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A.L.M.S.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>161</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A.L.M.R.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>271</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>K.H.Y.`A.S.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>195</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1709</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-3/5'>
                <p>
                  The unveiling of this information took place in the year 1400 AH, 309 years before the prophesied end of the world (1709-1400=309). The number 309 is a Quranic number (18:25), and is connected with the end of the world (18:21). The peculiar way of writing 309 in 18:25, "Three hundred years, increased by nine," indicates that the 309 are lunar years. The difference between 300 solar years and 300 lunar years is 9 years.
                  <br/><br/>
                  The year of this discovery, 1400 AH, coincided with 1980 AD, and 1980 plus 300 solar years is 2280, also a multiple of 19, 19x120. Thus the world ends in 1710 AH, 19x90, which coincides with 2280 AD, 19x120. For the disbelievers who do not accept these powerful Quranic proofs, the end of the world will come suddenly (6:31, 44, 47; 7:95, 187; 12:107; 21:40, 22:55; 26:202; 29:53; 39:55; 43:66; and 47:18).
                  <br/><br/>
                  While Hadith is forbidden as a source of religious teachings (Appendix 19), it can be a useful source of history. We can derive a lot of information about historical events and local customs and traditions during the early centuries of Islam. The books of Hadith indicate that the Quranic Initials were believed to determine the life span of the Muslim Ummah. The classic exegesis by Al-Baydaawy cites the following historical event as a possible explanation of the Quranic Initials. The same event is detailed in Al-Suyooty's ITQAAN, First Printing, 1318 AH, Vol 2, Page 10:
                </p>
                <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary my-4'>
                  <p>The Jews of Medina went to the Prophet and said, "Your Quran is initialed with A.L.M., and these Initials determine the life span of your religion. Since `A' is 1, `L' is 30, and `M' is 40, this means that your religion will survive only 71 years." Muhammad said, "We also have A.L.M.S." They said, "The `A' is 1, the `L' is 30, the `M' is 40, and the `S' is 90. This adds up to 161. Do you have anything else?" The Prophet said, "Yes, A.L.M.R." They said, "This is longer and heavier; the `A' is 1, `L' is 30, `M' is 40, and `R' is 200, making the total 271." They finally gave up, saying, "We do not know how many of these Initials he was given!" [Al-Suyuty's Famous Reference ITQAAN]</p>
                </div>
              </div>
            </div>

            <p>Although this narration is well known, many scholars have been reluctant to accept the unmistakable connection between the Quranic Initials and the end of the world. They could not bring themselves to deal with this subject for the simple reason that the calculation makes the end of the world, and judgment, a reality.</p>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-24'} btnText={"Tampering With the Word of God"}/>
            <LinkButton btnLink={'/chapters/appendix-26'} btnText={"The Three Messengers of Islam"}/>
        </div>
    </div>
  )
}

export default AppendixTwentyFive