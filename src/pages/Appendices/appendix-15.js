import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import arabicImg from '../../assets/images/app15_01.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixFifteen = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Religious Duties: A Gift From God"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            
            <div className='page-title mb-8'>
                <h4>Appendix 15 - Religious Duties: A Gift From God</h4>
            </div>

            <p>When Abraham implored God in 14:40, he did not ask for wealth or health; the gift he implored for was: "Please God, make me one who observes the contact prayers (Salat)." The religious duties instituted by God are in fact a great gift from Him. They constitute the nourishment required for the growth and development of our Souls. Without such nourishment, we cannot survive the immense energy associated with God's physical presence on the Day of Judgment. Belief in God does not by itself guarantee our redemption; we must also norish our souls (6:158, 10:90-92). Additionally, 15:99 states that observing the religious duties instituted by God is our means of attaining certainty: "Worship your Lord in order to attain certainty."</p>
            <h5 className='my-3 text-black mt-10'>The Contact Prayers (Salat)</h5>
            <p>The five daily contact prayers are the main meals for the soul. While a soul may attain some growth and development by leading a righteous life, and without observing the contact prayers, this would be like surviving on snacks without regular meals.</p>
            <p>We learn from 2:37 that we can establish contact with God by uttering the specific Arabic words given to us by God. Sura 1, The Key, is a mathematically composed combination of sounds that unlocks the door between us and God:</p>

            <ul className='ms-5 list-decimal'>
              <li>The Dawn Prayer must be observed during two hours before sunrise (11:114, 24:58).</li>
              <li>The Noon Prayer is due when the sun declines from its highest point at noon (17:78).</li>
              <li>The Afternoon Prayer can be observed during the 3-4 hours preceding sunset (2:238).</li>
              <li>The Sunset Prayer becomes due after sunset (11:114).</li>
              <li>The Night Prayer can be observed after the twilight disappears from the sky (24:58).</li>
            </ul>
            <p className='ms-5'>* The Friday noon congregational prayer is an obligatory duty upon every Submitting man and woman (62:9). Failure to observe the Friday Prayer is a gross offense.</p>

            <p>
              Each contact prayer is valid if observed anytime during the period it becomes due until the next prayer becomes due. Once missed, a given contact prayer is a missed opportunity that cannot be made up; one can only repent and ask forgiveness. The five prayers consist of 2, 4, 4, 3, and 4 units (Rak'ahs), respectively.
              <br/><br/>
              The proof that Salat was already established through Abraham is found in 8:35, 9:54, 16:123, & 21:73. This most important duty in Islam (Submission) has been so severely distorted that the contact prayers (Salat) have become a practice in idolatry for the vast majority of Muslims. Although the Quran commands that our contact prayers must be devoted to God alone (20:14; 39:3, 45), today's Muslims insist on commemorating "Muhammad and his family" and "Abraham and his family" during their prayers. This renders the prayers null and void (39:65).
              <br/><br/>
              The following text, pertaining to the miracles confirming the contact prayers, is excerpted from the January 1990 issues of the Submitter's Perspective (the regular and special bonus issues), as written by Dr. Rashad Khalifa:
            </p>

            <h5 className='my-3 text-black mt-10'>AWESOME MATHEMATICAL MIRACLE CONFIRMS ALL THE 5 CONTACT PRAYERS</h5>

            <p>
              [1] Sura 1 is God's gift to us, to establish contact with Him (Salat). Write the sura number and the number of verses next to each other and you get 17, the total number of units in the 5 daily prayers.
              <br/><br/>
              [2] Let us write down the sura number, followed by the number of every verse in the sura. This is what we get:
              1 1 2 3 4 5 6 7. This number is a multiple of 19.
            </p>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <p>
                  [3] Now, let us replace each verse number by the number of letters in that verse. This is what we get: 1 19 17 12 11 19 18 43 also a multiple of 19. Theoretically, one can alter the letters of Sura 1, and still keep the same number of letters, however, the following mathematical phenomena rule out that possibility. For the gematrical value of every single letter is taken into consideration. Here it is:
                  <br/><br/>
                  [4] Let us include the gematrical value of every verse, and write it down following the number of letters in each verse: 1 19 786 17 581 12 618 11 241 19 836 18 1072 43 6009 also a multiple of 19.
                  <br/><br/>
                  [5] Now, let us add the number of each verse, to be followed by the number of letters in that verse, then the gematrical value of that verse. This is what we get: 1 1 19 786 2 17 581 3 12 618 4 11 241 5 19 836 6 18 1072 7 43 6009 a multiple of 19.
                </p>
              </div>
              <div className='basis-2/5'>
              <h5 className='my-3 text-black text-center italic'>Properties of Sura 1, The Key</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th style={{ width: '25%' }} className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Verse No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Letters</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Gematrical Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>786</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>581</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>618</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>241</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>836</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>18</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1072</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>43</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6009</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p>
              [6] Instead of the gematrical value of every verse, let us write down the gematrical values of every individual letter in Sura 1. This truly awesome miracle, shows that the resulting long number, consisting of 274 digits, is also a multiple of 19. ALLAHU AKBAR. 1 7 1 19 2 60 40 1 30 30 5 1 30 200 8 40 50 1 30 200 8 10 40 2 17 ... 50
              <br/><br/>
              This number starts with the sura number, followed by the number of verses in the sura, followed by the verse number, followed by the number of letters in this verse, followed by the gematrical values of every letter in this verse, followed by the number of the next verse, followed by the number of letters in this verse, followed by the gematrical values of every letter in this verse, and so on to the end of the sura. Thus, the last component is 50, the value of "N" (last letter).
              <br/><br/>
              [7] Since I cannot write very long numbers here, let us substitute [*] for the long number consisting of the number of every verse, followed by the number of letters in the verse, followed by the gematrical value of every individual letter in the verse. If we write down the number of the sura, followed by its number of verses, we get 17, the number of units (Rak'aas) in the 5 daily prayers. Next to the 17, write down the number of the first prayer (1), followed by its number of Rak'aas, which is 2, then two [*]'s, followed by the number of the second prayer (2), followed by the number of Rak'aas in the second prayer (4), followed by four [*]'s, and so on. Not only is the resulting long number a multiple of 19, but also the number of its component digits is 4636 (19x244) .... Please note that any representation of Sura 1 can replace the [*]'s without affecting the outcome; all of them give multiples of 19. For example, a short representation of "The Key" consists of the Sura number (1), followed by the verses (7), followed by the total number of letters in Sura 1 (139), followed by the total gematrical value of the whole sura (10143). The resulting number (1713910143) can also represent [*].
            </p>

            <h5 className='my-3 text-black mt-10 text-center'>1712[*][*]24[*][*][*][*]34[*][*][*][*]43[*][*][*]54[*][*][*][*]</h5>
            <h5 className='my-3 text-black mb-10 text-center'>CONFIRMATION OF FRIDAY PRAYERS</h5>

            <p>[8] Since the Friday prayer consists of two sermons and two Rak'aas (total is still 4 units), we read only 15 "Keys" on Friday, compared with 17 on the other days. Abdullah Arik discovered that if we replace the 17 by 15 in the long number in [7] and remove two "Keys" from the noon prayer, we still get a multiple of 19. This confirms the Friday Prayer, at noon, with 2 "Keys." The long number shown below represents Friday's five prayers; it is a multiple of 19.</p>

            <h5 className='my-3 text-black mt-10 text-center'>1512[*][*]24[*][*]34[*][*][*][*]43[*][*][*][*]54[*][*][*][*]</h5>
            <h5 className='my-3 text-black mb-10 text-center'>"THE KEY" (Al-Fateha) MUST BE RECITED IN ARABIC</h5>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <p>
                  [3] Now, let us replace each verse number by the number of letters in that verse. This is what we get: 1 19 17 12 11 19 18 43 also a multiple of 19. Theoretically, one can alter the letters of Sura 1, and still keep the same number of letters, however, the following mathematical phenomena rule out that possibility. For the gematrical value of every single letter is taken into consideration. Here it is:
                  <br/><br/>
                  [4] Let us include the gematrical value of every verse, and write it down following the number of letters in each verse: 1 19 786 17 581 12 618 11 241 19 836 18 1072 43 6009 also a multiple of 19.
                  <br/><br/>
                  [5] Now, let us add the number of each verse, to be followed by the number of letters in that verse, then the gematrical value of that verse. This is what we get: 1 1 19 786 2 17 581 3 12 618 4 11 241 5 19 836 6 18 1072 7 43 6009 a multiple of 19.
                </p>
              </div>
              <div className='basis-2/5'>
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th style={{ width: '60px' }} className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'></th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Word</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Letter</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Value</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Bism</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>B</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Bism</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Rahman</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4.	</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Rahim</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Al-Hamdu</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Rub</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>B</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>`Alamin</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Rahman</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Rahim</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Malik</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Yawm</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Na'budu</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>B</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Mustaqim</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Mustaqim</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>An`amta</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>`Alayhim</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Maghdub</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>18.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Maghdub</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>B</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>`Alayhim</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Total:</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>608 (19x32)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h5 className='my-3 text-black mt-10 '>CONFIRMATION OF THE 5 DAILY PRAYERS, NUMBER OF BOWINGS (Ruku'), PROSTRATIONS (Sujood), AND TASHAHHUD</h5>
            <p>
              [10] One of the common challenges...is: "If the Quran is complete and fully detailed (as claimed in 6:19, 38 & 114), where are the details of the Contact Prayers (Salat)?" These people ask this question because they are not aware that the Quran informs us that the Contact Prayers came from Abraham (21:73 & 22:78). If we write down the numbers of the prayers with their bowings, prostrations and Tashahhuds, we get:
              <br/><br/>
              1 1 2 2 4 1 2 4 4 8 2 3 4 4 8 2 4 3 3 6 2 5 4 4 8 2
              <br/><br/>
              This long number consists of the sura that we recite in the 5 prayers (1) followed by the number of the first prayer (1), then the number of "Keys" that we recite in this prayer (2), then the number of bowings (Ruku`) (2), then the number of prostrations (4), then the number of Tashahhuds (in the sitting position) (1), then the number of the second prayer (2), then the number of "Keys" that we recite in the second prayer (4), then the number of bowings (Ruku`) in this prayer (4), then the number of prostrations (8), then the number of Tashahhuds (2), then the number of the third prayer (3), and so on to the last prayer. This long number is a multiple of 19, and this confirms the minutest details of the prayers, even in the number of Ruku`, Sujud, and Tashahhud.
            </p>

            <h5 className='my-3 text-black mt-10 '>The Obligatory Charity (Zakat)</h5>
            <p>
              Zakat must be given away "on the day of harvest" (6:141). Whenever we receive "net income," we must set aside 2.5% and give it to the specified recipients - the parents, relatives, orphans, the poor, and the traveling alien, in this order (2:215). The vital importance of Zakat is reflected in God's law: "My mercy encompasses all things, but I will specify it for the righteous who give Zakat" (7:156).
              <br/><br/>
              Zakat must be carefully calculated and given away on a regular basis whenever we receive any income. Government taxes should be deducted, but not other expenses such as debts, mortgages, and living expenses. If one does not know needy persons, he or she may give the Zakat to a mosque or charitable organization with the distinct purpose of helping poor people. Charities given to mosques or hospitals or organizations cannot be considered Zakat.
            </p>

            <h5 className='my-3 text-black mt-10 '>Fasting</h5>
            <p>The full details of fasting are given in 2:183-187.</p>

            <h5 className='my-3 text-black mt-10 '>Pilgrimage: Hajj & `Umrah</h5>
            <p>
              Once in a lifetime, Hajj and `Umrah are decreed for those who can afford it. Pilgrimage commemorates Abraham's exemplary submission to God (Appendix 9), and must be observed during the four Sacred Months - Zul-Hijjah, Muharram, Safar, & Rabi` I (12th, 1st, 2nd, 3rd months) (2:197, 9:2, 36). `Umrah can be observed any time. Like all other duties in Islam, Hajj has been distorted. Most Muslims observe Hajj only during a few days in Zul-Hijjah, and they consider Rajab, Zul-Qi'dah, Zul-Hijjah, and Muharram (7th, 11th, 12th, 1st months) to be the Sacred Months. This is a distortion that is strongly condemned (9:37).
              <br/><br/>
              The pilgrimage begins with a bath or shower, followed by a state of sanctity called "Ihraam," where the male pilgrim wears seamless sheets of material, and the woman wears a modest dress (2:196). Throughout Hajj, the pilgrim abstains from sexual intercourse, vanities such as shaving and cutting the hair, arguments, misconduct, and bad language (2:197). Cleanliness, bathing, and regular hygiene practices are encouraged. Upon arrival at the Sacred Mosque in Mecca, the pilgrim walks around the Ka`bah seven times, while glorifying and praising God (2:125, 22:26-29). The common formula is: "Labbayka Allaahumma Labbayk" (My God, I have responded to You). "Labbayka Laa Shareeka Laka Labbayk" (I have responded to You, and I proclaim that there is no other god besides You; I have responded to You). The next step is to walk the half-mile distance between the knolls of Safa and Marwah seven times, with occasional trotting (2:158). This completes the `Umrah portion of the pilgrimage.
              <br/><br/>
              The pilgrim then goes to `Arafat to spend a day of worship, meditation, and glorification of God, from dawn to sunset (2:198). After sunset, the pilgrim goes to Muzdalifah where the Night Prayer is observed, and 21 pebbles are picked up for the symbolic stoning of Satan at Mina. From Muzdalifah, the pilgrim goes to Mina to spend two or three days (2:203). On the first morning at Mina, the pilgrim offers an animal sacrifice to feed the poor and to commemorate God's intervention to save Ismail and Abraham from Satan's trick (37:107, Appendix 9). The stoning ceremonies symbolize rejection of Satan's polytheism and are done by throwing seven pebbles at each of three stations, while glorifying God (15:34). The pilgrim then returns to Mecca and observes a farewell circumvolution of the Ka`bah seven times.
              <br/><br/>
              Unfortunately, most of today's Muslim pilgrims make it a custom to visit the prophet Muhammad's tomb where they commit the most flagrant acts of idolatry and thus nullify their Hajj. The Quran consistently talks about "The Sacred Mosque," while today's Muslims talk about "The Two Sacred Mosques!" In a glaring act of idolatry, the Muslims have set up Muhammad's tomb as another "Sacred Mosque!" This is a blasphemous violation of the Quran, and, ironically, even violates Hadith. The Hadith shown below illustrates this strange irony:
            </p>

            <div className='rounded-[10px] p-4 border-[1px] border-primary max-w-screen-lg mx-auto my-5 md:my-10'>
              <img src={arabicImg} alt='False Satement' className='w-full'/>
              <p className='text-center my-4'>Translation of this false statement: "God has cursed the Jews and Christians for turning the tombs of their prophets into mosques." [Bukhari, Nawawi Edition, Vol. 6, Page 14]</p>
            </div>

            <h5 className='my-3 text-black mt-10'>Physical Benefits</h5>
            <p>
              In addition to their invaluable spiritual benefits, there is a plethora of physical, economic, and health benefits from observing the contact prayers (Salat), obligatory charity (Zakat), fasting during the month of Ramadan, and Hajj.
              <br/><br/>
              Observing the Dawn prayer interrupts long periods of stillness during sleep; this is now proven to help prevent arthritis. Also, getting up early in the morning helps combat depression and other psychological problems. The prostration position which is repeated during the contact prayers expands the blood vessels in our brains to accommodate more blood, and this prevents headaches. The repeated bending of the back and the joints is a healthful exercise. All these are scientifically established facts.
              <br/><br/>
              The ablutions required prior to the contact prayers encourage us to use the toilet more frequently. This habit protects us from a common and devastating cancer, colon cancer. Harmful chemicals are excreted in the urine and fecal matter. If these excretions are kept in the colon for prolonged periods of time, the harmful materials are re-absorbed into the body, and cause cancer.
              <br/><br/>
              Fasting during the month of Ramadan restores our expanded stomachs to their normal sizes, lowers our blood pressure through temporary dehydration, rids the body of harmful toxins, gives our kidneys a much needed rest, and reduces our weight by removing excessive and harmful fat.
              <br/><br/>
              Zakat charity and Hajj pilgrimage have far reaching economic and social benefits.
            </p>


        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-14'} btnText={"Predestination"}/>
            <LinkButton btnLink={'/chapters/appendix-16'} btnText={"Dietary Prohibitions"}/>
        </div>
    </div>
  )
}

export default AppendixFifteen