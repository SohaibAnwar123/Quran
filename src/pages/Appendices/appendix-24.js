import React from 'react'
import { Link } from 'react-router-dom'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import hadithImg from '../../assets/images/hadith.png'
import suraImg from '../../assets/images/sura9.png'
import quranImg from '../../assets/images/QuranImg.jpeg'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTwentyFour = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Tampering With the Word of God"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 24 - Tampering With the Word of God</h4>
            </div>

            <div className='p-4 rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <p>
                A superhuman mathematical system pervades the Quran and serves to guard and authenticate every element in it.
                <br/>
                Nineteen years after the Prophet's death, some scribes injected two false verses at the end of Sura 9, the last sura revealed in Medina. The evidence presented in this Appendix incontrovertibly removes these human injections, restores the Quran to its pristine purity, and illustrates a major function of the Quran's mathematical code, namely, to protect the Quran from the slightest tampering. Thus, the code rejects ONLY the false injections 9:128-129.
              </p>
            </div>
            <div className='p-4 rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <p className='text-center'>Surely, we have revealed this scripture, and surely, we will preserve it. [15:9 ]</p>
            </div>

            <p>
              The Quran is God's Final Testament. Hence the divine pledge to keep it perfectly preserved. To assure us of both the divine authorship, and the perfect preservation of the Quran, the Almighty author has rendered the Quran mathematically composed. As proven by the physical evidence in Appendix 1, such mathematical composition is far beyond human capabilities. The slightest violation of God's Final Testament is destined to stand out in glaring disharmony. A deviation by only 1 - one sura, one verse, one word, even one letter - is immediately exposed.
              <br/><br/>
              Nineteen years after the Prophet Muhammad's death, during the reign of Khalifa `Uthman, a committee of scribes was appointed to make several copies of the Quran to be dispatched to the new Muslim lands. The copies were to be made from the original Quran which was written by Muhammad's hand (Appendix 28). 
              <br/><br/>
              This committee was supervised by `Uthman Ibn `Affaan, `Ali Ibn Abi Taaleb, Zeid Ibn Thaabet, Ubayy Ibn Ka`ab, `Abdullah Ibn Al-Zubair, Sa`eed Ibn Al-`Aas, and `Abdul Rahman Ibn Al-Haareth Ibn Heshaam. The Prophet, of course, had written the Quran in its chronological order of revelation (Appendix 23), together with the necessary instructions to place every piece in its proper position. The last sura revealed in Medina was Sura 9. Only Sura 110, a very short sura, was revealed after Sura 9, in Mina.
              <br/><br/>
              The committee of scribes finally came to Sura 9, and put it in its proper place. One of the scribes suggested adding a couple of verses to honor the Prophet. The majority of scribes agreed. `Ali was outraged. He vehemently maintained that the word of God, written down by the hand of His final prophet, must never be altered.
              <br/><br/>
              Ali's protest is documented in many references, but I cite and reproduce here the classic reference AL ITQAAN FEE 'ULUM AL QURAN by Jalaluddin Al-Suyuty, Al-Azhareyyah Press, Cairo, Egypt, 1318 AH, Page 59 [see Insert 1].
            </p>

            <div className='rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <div className='p-4'>
                <img src={hadithImg} alt='Hadith' className='w-full mx-auto'/>
              </div>
              <p className='border-t-[1px] border-primary pt-3 px-4'>Translation: `Ali was asked: "Why are you staying home?" He said, "Something has been added to the Quran, and I have pledged never to put on my street clothes, except for the prayer, until the Quran is restored."[ Insert 1 ]</p>
            </div>
            <p>The horrendous dimensions of this crime can be realized once we look at the consequences:</p>
            <ul className='ms-5 list-decimal'>
              <li>`Uthman was assassinated, and `Ali was installed as the fourth Khalifa.</li>
              <li>A 50-year war erupted between the new Khalifa and his supporters on one side, and the Mohammedan distorters of the Quran on the other side.</li>
              <li>`Ali was martyred, and eventually his family, the prophet Muhammad's family, except for some women and children, were killed.</li>
              <li>The disaster culminated in the infamous Battle of Karbala, where `Ali's son, Hussein, and his family were massacred.</li>
              <li>The Muslims were deprived of the pure, unaltered, Quran for 1400 years.</li>
            </ul>

            <p>
              The distorters of the Quran finally won the war, and the "official" history that came to us represented the victors' point of view. This apparent victory for God's enemies was, of course, in accordance with God's will. In just two decades after the Prophet's death, the idol worshipers who were defeated by the Prophet in the conquest of Mecca (632 AD) reverted to idolatry. Ironically, this time around their idol was the Prophet himself. Such idol worshipers obviously did not deserve to possess the pure Quran. Hence the blessed martyrdom of the true believers who tried to restore the Quran, and the apparent victory for the distorters of God's word.
              <br/><br/>
              The first peace time ruler after this lengthy and disastrous war was Marwan Ibn Al Hakam (died 65 AH/684 AD). One of the first duties he performed was to destroy the original Quran, the one that was so scrupulously written by the Prophet's own hand, "fearing it might become the cause of NEW disputes" [see `ULUM AL-QURAN, by Ahmad von Denffer, Islamic Foundation, Leicester, United Kingdom, 1983, Page 56.]. The question an intelligent person must ask is: "If the original Quran were identical to the Quran in circulation at that time, why did Marwan Ibn Al-Hakam have to destroy it?!"
              <br/><br/>
              Upon examining the oldest Islamic references, we realize that the false injections, 9:128-129, were always suspect. For example, we read in Bukhary's famous Hadith, and Al-Suyuty's famous Itqaan, that every single verse in the Quran was verified by a multiplicity of witnesses "except Verses 128 and 129 of Sura 9; they were found only with Khuzeimah Ibn Thaabet Al-Ansaary." When some people questioned this improper exception, someone came up with a Hadith stating that "the testimony of Khuzeimah equals the testimony of two men!!!"
            </p>

            <p>(see what Bukhary had about this. Volume 6, Book 61, Number 511 <Link to='' className='text-primary'>click here</Link>)</p>
            <p>Strangely, the false injections 9:128-129 are labeled in the traditional Quran printings as "Meccan" [see Insert 2].</p>
            <div className='rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <div className='p-4'>
                <img src={suraImg} alt='Hadith' className='w-full mx-auto'/>
              </div>
              <p className='border-t-[1px] border-primary pt-3 px-4'>The Title Figure of Sura 9 from a standard Quran, showing that this sura is Medinan, "except for the last two verses; they are Meccan"!!![Insert 2]</p>
            </div>

            <p>How could these `Meccan' verses be found with Khuzeimah, a late `Medinan' Muslim?! How could a Medinan sura contain Meccan verses, when the universal convention has been to label as `Medinan' all revelations after the Prophet's Hijerah from Mecca??!! Despite these discrepancies, plus many more glaring contradictions associated with Verses 9:128-129, no one dared to question their authenticity. The discovery of the Quran's mathematical code in 1974, however, ushered in a new era where the authenticity of every element in the Quran is proven (<Link to='/chapters/appendix-1' className='text-primary'>Appendix 1</Link>).</p>
            <p>As it turns out, the injection of the two false Verses 9:128-129 resulted in:</p>

            <ul className='ms-5 list-decimal'>
              <li>demonstrating the major function of the Quran's mathematical system, and</li>
              <li>producing an awesome miracle in its own right, and</li>
              <li>distinguishing the true believers from the hypocrites (they uphold traditions).</li>
            </ul>

            <p>The translation of the two false verses is shown in Insert 3:</p>
            <div className='p-4 rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <p>
                "A messenger has come to you from among you who wants no hardship to afflict you, and cares about you, and is compassionate towards the believers, merciful. If they turn away, then say, 'Sufficient for me is God, there is no god except He. I put my trust in Him. He is the Lord with the great throne.' "
                <br/>
                [Insert 3]
              </p>
            </div>
            <h5 className='my-3 text-black mt-10'>THE PHYSICAL EVIDENCE</h5>
            <p>[1] The first violation of the Quran's code by Verses 9:128-129 appeared when the count of the word "God" (Allah) in the Quran was found to be 2699, which is not a multiple of 19, unless we remove one. The count of the word "God" is shown at the bottom of each page in this translation. The total shown at the end of the Quran is 2698, 19x142, because the false injections 9:128-129 have been removed.</p>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <p>
                  [2] The sum of all the verse numbers where the word "God" occurs is 118123, or 19x6217. This total is obtained by adding the numbers of verses wherever the word "God" is found. If the false Verse 9:129 is included, this phenomenon disappears.
                  <br/><br/>
                  [3] As shown at the end of Sura 9 in this translation, the total occurrence of the word "God" to the end of Sura 9 is 1273, 19x67. If the false injections 9:128-129 were included, the total would have become 1274, not a multiple of 19.
                  <br/><br/>
                  [4] The occurrence of the word "God" from the first Quranic initial ("A.L.M." of 2:1) to the last initial ("N." of 68:1) totals 2641, or 19x139. Since it is easier to list the suras outside the initialed section of the Quran, Table 1 shows the the 57 occurrences of the word "God" in that section. Subtracting 57 from the total occurrence of the word "God" gives us 2698- 57 = 2641 = 19x139, from the first initial to the last initial.
                  <br/><br/>
                  If the human injections 9:128 and 129 were included, the count of the word "God" in the initialed section would have become 2642,
                  <br/><br/>
                  [5] Sura 9 is an un-initialed sura, and if we look at the 85 un-initialed suras, we find that the word "God" occurs in 57 of these suras, 19x3. The total number of verses in the suras where the word "God" is found is 1045, 19x55. If 9:128-129 were included, the verses containing the word "God" would increase by 1.
                  <br/><br/>
                  [6] The word "God" from the missing Basmalah (Sura 9) to the extra Basmalah (Sura 27) occurs in 513 verses, 19x27, within 19 suras (Table 2). If the false Verses 9:128-129 were included, the number of verses containing the word "God" would have become 514, and this phenomenon would have disappeared.
                  <br/><br/>
                  [7] The word "Elaah" which means "god" occurs in Verses 9:129. The total occurrence of this word in the Quran is 95, 19x5. The inclusion of 9:128-129 causes this word to increase by 1, to 96.
                  <br/><br/>
                  [8] The INDEX TO THE WORDS OF THE QURAN, lists 116 "Rasool" (Messenger) words. One of these words is in 9:128. By removing this false verse, 115 "Rasool" words remain. Another "Rasool" word which must be excluded from counting is in 12:50, since it refers to the "messenger of Pharaoh," not the messenger of God. Thus, the total occurrence of "Rasool" of God is 114, 19x6.
                  <br/><br/>
                  [9] Another important word that occurs in the false Verses 9:128-129 is the word "Raheem" (Merciful). This word is used in the Quran exclusively as a name of God, and its total count is 114, 19x6, after removing the word "Raheem" of 9:128, which refers to the prophet. According to 7:188, 10:49, and 72:21 the Prophet did not possess any power of mercy.
                  <br/><br/>
                  [10] The INDEX lists 22 occurrences of the word " `Arsh" (Throne). After removing the false injection 9:129, and the " `Arsh" of Joseph which occurs in 12:100, and the " `Arsh" of the Queen of Sheba (27:23), we end up with 19 " `Arsh" words. This proves that the word " `Arsh" of 9:129 does not belong in the Quran.
                  <br/><br/>
                  [11] The Quranic command "Qul" (Say) occurs in the Quran 332 times. Also, the word "Qaaloo" (They said) occurs the same number of times, 332. Since the false Verse 9:129 contains the word "Qul" (Say), its inclusion would have destroyed this typical Quranic phenomenon.
                  <br/><br/>
                  [12] The Quran contains 6234 numbered verses and 112 un-numbered verses (Basmalahs). Thus, the total number of verses in the Quran is 6346, 19x334. The false Verses 9:128-129 violate this important criterion of the Quran's code.
                  <br/><br/>
                  [13] In addition to violating the numbers of words as listed above, 9:128-129 violate the Quran's mathematical structure. When we add the number of verses in each sura, plus the sum of verse numbers (1+2+3+... +n, where n=number of verses), plus the number of each sura, the cumulative total for the whole Quran comes to 346199, or 19x19x959. This phenomenon confirms the authenticity of every verse in the Quran, while excluding 9:128-129. Table 3 is an abbreviated illustration of the calculations of Item 13. This phenomenon is impossible if the false Verses 9:128-129 are included.
                </p>
              </div>
              <div className='basis-2/5'>
                <h5 className='my-3 text-black text-center italic'>Table 1: Occurrence of the word "God" outside the initialed section</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of "God"</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of "God"</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>84</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>69</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>85</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>70</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>87</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>72</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>91</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>73</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>95</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>74</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>96</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>76</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>98</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>79</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>104</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>81</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>110</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>82</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>112</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>57</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19 x 3</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 className='my-3 text-black text-center mt-10 italic'>Table 2: The word "God" from the missing Basmalah to the extra Basmalah.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th style={{ width: '60px' }} className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses with "God"</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>100</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>49</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>33</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12	</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>34</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13	</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>23</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>28</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>64</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17	</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>18	</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>50</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>23</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>24</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>50</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>25</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>18.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19.</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>342</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>513</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='p-4 text-black text-[12px] md:text-[14px] text-start' colSpan={3}>
                          No. of suras = 19,<br/>
                          Total of sura numbers = 342 = 19x8<br/>
                          Total of verses = 513 = 19x27<br/>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                
              </div>
            </div>

            <h5 className='my-3 text-black text-center mt-10 italic'>Table 3: Mathematical coding of the Quran's suras & verses, based on "19"</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th style={{ width: '60px' }} className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses with "God"</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>28</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>36</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>286</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>41041</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>41329</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8264</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>141</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6555</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6234</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>333410</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>346199</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>(19 x 19 x 959)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            

            <p>
                [14] When we carry out the same calculations as in Item 13 above, but for the 85 un-initialed suras only, which include Sura 9, the cumulative total is also a multiple of 19. The cumulative total for all un-initialed suras is 156066, or 19x8214. This result depends on the fact that Sura 9 consists of 127 verses, not 129. The data are shown in Table 4. The false verses would have destroyed this criterion.
            </p>
            <p>
              [15] By adding the sura numbers of all un-initialed suras (85 suras), plus their number of verses, from the beginning of the Quran to the end of Sura 9 we get 703, 19x37. The detailed data are shown in Table 5.
              <br/><br/>
              This phenomenon depends on the fact that Sura 9 consists of 127 verses.
            </p>

            <div className='flex flex-col lg:flex-row gap-5 mt-4'>
              <div className='basis-1/2'>
                <h5 className='mb-3 text-black text-center mt-0 italic'>Table 4: Mathematical coding of the Quran's 85 un-initialed suras.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>28</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>36</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>176	</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15576</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15756</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8264</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>141</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>156066</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>156066 = (19x8214)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-1/2'>
                <div className='basis-1/2'>
                <h5 className='mb-3 text-black text-center mt-0 italic'>Table 5: Un-initialed suras and their verses from the beginning to Sura 9.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura </th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'># Verses</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>176</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>180</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>120</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>125</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>165</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>171</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>75</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>83</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>136</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={3}>703</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={3}>(19x37)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>

            <p>
              [16] By adding the sura number of the un-initialed suras, plus the number of verses, plus the sum of verse numbers from the missing Basmalah (9:1) to the end of the Quran, the grand total comes to 116090, or 19x6110. These data are in Table 6. If Verses 9:128-129 are included, the number of verses for Sura 9 becomes 129, and the grand total becomes 116349, not a multiple of 19.
              <br/><br/>
              [17] When the same calculations of Item 16 are done for all the verses from the missing Basmalah of Sura 9 to the extra Basmalah of Sura 27, the grand total comes to 119966, or 19x6314. This phenomenon would be destroyed, and the total would no longer be divisible by 19,if the number of verses in Sura 9 were 129. Since this phenomenon is also related to the absence of Basmalah from Sura 9, it is explained and the detailed data are given in table form in Appendix 29.
              <br/><br/>
              [18] When the same calculations of Items 16 and 17 are carried out from the missing Basmalah (9:1) to the verse where the number 19 is mentioned (74:30), we find that the grand total comes to 207670, or 19x10930 (Table 7). Sura 9 must consist of 127 verses.
              <br/><br/>
              [19] Sura 9 consists of 127 verses. The digits of 127 add up to 1+2+7 = 10. Let us look at all the verses whose digits add up to 10, from the missing Basmalah of Sura 9, to the extra Basmalah of Sura 27. If Sura 9 consisted of 129 verses, the grand total would be 2472, instead of 2470 (19x130); 2472 is not a multiple of 19, and this phenomenon would have disappeared. The data are in Table 8.
            </p>

            <div className='flex flex-col lg:flex-row gap-5 mt-4'>
              <div className='basis-1/2'>
                <h5 className='mb-3 text-black text-center mt-0 italic'>Table 6: The un-initialed suras & their verses from missing Basmalah (Sura 9) to the end of the Quran.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8264</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8256</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8400</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>113</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>133</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>141</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>116090</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>(19 x 6110)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-1/2'>
                <div className='basis-1/2'>
                <h5 className='mb-3 text-black text-center mt-0 italic'>Table 7: The suras and verses from the missing Basmalah to 74:30.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura </th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8264</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>73</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>210</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>303</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>74</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>30</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>465</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>569</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2739</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4288</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>200643</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>207670</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>(19x10930)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              </div>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <p>
                  [20] The falsifiers wanted us to believe that Sura 9 consists of 129 verses. The number 129 ends with the digit "9."
                  <br/><br/>
                  Let us look at the first sura and the last sura whose number of verses ends with the digit "9."
                  <br/><br/>
                  These are Sura 10 and Sura 104. By adding the sura number, plus the number of verses, plus the sum of verse numbers, from Sura 10 to Sura 104, we get a grand total that equals 23655, or 19x1245. The details are shown in Table 9.
                  <br/><br/>
                  The inclusion of Sura 9 with the wrong number of verses, 129, would have altered both the sum of verse numbers and the cumulative total - the sum of verse numbers would have become 627+129=756, and the cumulative total would not be 23655 - and the Quran's code would have been violated (Table 9).
                  <br/><br/>
                  [21] The false injection consisted of Verses 128 and 129 at the end of Sura 9. If we look at the numbers 128 and 129, we see two 1's, two 2's, one 8, and one 9.
                  <br/><br/>
                  Now let us look at all the verses in the Quran, and count all the 1's we see. This means the 1's we see in verses 1, 10, 11, 12, 13... 21, 31, and so on.
                  <br/><br/>
                  The total count of the 1's is 2546 (19x134), provided the correct number of verses in Sura 9, 127, is used. If 128 and 129 are included, the grand total becomes 2548, which is not a multiple of 19 (Table 11).
                  <br/><br/>
                  [22] Since Sura 9 is an un-initialed sura, let us look at all the verse numbers in the 85 un-initialed suras and count all the 1's we see.
                  <br/><br/>
                  As shown in Table 10, the total count of the digit "1" in the un-initialed suras is 1406, or 19x74. Obviously, if Sura 9consisted of 129 verses, we would see two additional 1's, from 128 and 129, and the code would be violated.
                  <br/><br/>
                  [23] Following the same process explained in Items 22 and 23 for the digit "1," let us count all the 2's, 8's and 9's in all the verse numbers of the whole Quran.
                  <br/><br/>
                  As shown in Table 11, the total count of all the 2's, 8's, and 9'sis 3382, or 19x178. This makes the grand total of all the 1's, 2's, 8's, and 9's 2546+3382 = 5928, 19x312.
                  <br/><br/>
                  In this remarkable phenomenon, we considered every single verse in the Quran, and examined the individual digits that make up Verses 128 and 129. Since 128 and 129 contain 6 digits, the inclusion of these human injections causes the total count of these digits in the whole Quran to be 5928+6 = 5934, not a multiple of 19.
                </p>
              </div>
              <div className='basis-2/5'>
                <h5 className='my-3 text-black text-center italic'>Table 8: The verses whose digits add up to 10 from 9:1 to 27:29.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No.of Verses</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>How many add up to 10</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>148</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>145</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>111</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>133</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>43</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>59</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>52</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>70</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>99</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>156</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>111</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>138</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>18</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>110</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>138</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>98</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>126</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>135</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>167</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>112</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>143</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>78</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>107</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>23</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>118</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>152</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>24</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>64</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>94</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>25</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>77</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>227</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>275</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>58</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>342</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1951</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>177</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2470</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center' colSpan={4}>342 = 19x18 & 2470 = 19x130</td>
                      </tr>
                      
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-[52%]'>
                <h5 className='my-3 text-black text-center italic'>Table 9: All the suras whose number of verses ends with "9."</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No.of Verses</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                        <th style={{ width: '20%' }} className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5995</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'> 6114</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>99</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4950</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5064</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>69</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2415</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2513</td>
                      </tr>

                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>43</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>89</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4005</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4137</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>44</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>59</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1770</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1873</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>48</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>435</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>512</td>
                      </tr>

                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>52</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>49</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1225</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1326</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>57</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>435</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>521</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>81</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>435</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>545</td>
                      </tr>

                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>82</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>291</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>87</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>296</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>96</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>305</td>
                      </tr>

                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>104</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>45</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>158</td>
                      </tr>
                      <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>748</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>627</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22280</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>23655 (19x1245)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-[48%]'>
                <h5 className='my-3 text-black text-center italic'>Table 10: Counting all the 1's in the 85 un-initialed suras.</h5>
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                    <table className='w-full border-0'>
                      <thead className='bg-primary'>
                        <tr>
                          <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                          <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'># of Verses</th>
                          <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'># of 1's</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        </tr>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>176</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>115</td>
                        </tr>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        </tr>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>61</td>
                        </tr>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        </tr>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>113</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        </tr>

                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        </tr>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        </tr>
                        <tr className='border-[1px]'>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                          <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1406 (19x74)</td>
                        </tr>
                      </tbody>
                    </table>
                </div>
              </div>
              
            </div>


            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-[52%]'>
                <h5 className='my-3 text-black text-center italic'>Table 11: Counting the digits that make up 128 and 129 in the whole Quran.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of 1'</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of 2's</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of 8's</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of 9's</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>0</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>0</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>159</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>146</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>55</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>48</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>408</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>61</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>31</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>136</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>31</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>94</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>0</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>0</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-----</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>------</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-----</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                      </tr>
                      <tr className='border-[1px]'>

                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2546</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1641</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>908</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>833</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5928</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='p-4 text-black text-[12px] md:text-[14px] text-start whitespace-nowrap'>(19 x 134)</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>(19 x 312)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-[48%]'>
                <h5 className='my-3 text-black text-center italic'>Table 12: Sum of digits of all suras & verse numbers in the whole Quran.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sum of Suras</th>
                        <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Digits of Verses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>286</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>200</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>975</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>906</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>975+906 = 1881 = 19x99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p>
              [24] The total count of all the digits (1 through 9) in all the verse numbers of the 85 un-initialed suras, including Sura 9 with 127 verses, is 27075, or 19x19x75.
              <br/><br/>
              [25] Adding up the digits of the Quran's suras and verses produces a multiple of 19, provided the correct number of verses for Sura 9, 127, is taken. To do this, you make a list of the Quran's 114 suras and the number of verses in each sura. Add the digits of every sura number. The sum of digits of 10=1, 11=2, 12=3, 99=18, and so on. The total for all the suras is 975. The same thing is done for the numbers of verses in every sura. For example, Sura 2 consists of 286 verses. The digits of 286 add up to 2+8+6=16. For Sura 9, the digits of its number of verses add up to 1+2+7=10. The total for all 114 suras is 906. Thus, the grand total for the sum of digits of all the suras and verses is 975+906 = 1881 = 19x99. Naturally, this observation would not be possible if Sura 9 consisted of 129 verses. Table 12 is abbreviated to illustrate the calculations.
              <br/><br/>
              [26] Miraculously, if we calculate the sum of digits for every sura in the Quran, and multiply the sum for each sura by the sum of digits of its number of verses, instead of adding, we still end up with a grand total that is a multiple of 19. For example, Sura 2 has 286 verses. The sum of digits of 2+8+6=16. So you multiply 2 by 16, and you get 32, instead of adding 2+16 as we did in Item 26. This is done for every sura in the Quran. The grand total for all the suras is 7771, or 19x409. Once again, every single verse in the Quran is confirmed, while the false verses are utterly rejected. See Table 13.
            </p>

            <p>
                [27] Another truly awesome phenomenon: Sura 9 is an odd-numbered sura, and if we carry out the calculations described above for the odd-numbered suras only, we find that the total for the suras is 513 (19x27), the total for the verses is 437 (19x23), and the grand total for both is 513+437 = 950 (19x50).
                <br/><br/>
                Table 14 illustrates this remarkable phenomenon.
            </p>

            <h5 className='my-3 text-black text-center italic'>Table 13: Multiplication of the sum of digits of the Quran's suras and verses.</h5> 
            <div className='table-con my-5 max-w-screen-lg mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase' rowSpan={2}>Sura No.</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase' rowSpan={2}>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase' colSpan={3}>Sum of Digits of</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase' rowSpan={2}></th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase' rowSpan={2}>Multiplication Product</th>
                  </tr>
                  <tr>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'></th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sum of Digits of</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>x</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>=</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>7</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>286</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>x</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>16</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>=</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>32</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>200</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>x</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>=</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>6</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>127</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>x</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>10</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>=</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>90</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>x</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>=</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>36</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>-----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>------</td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>975</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'>906</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center'> 7771 (19x409)
                    </td>
                  </tr>
                  <tr>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-center' colSpan="7">975+906 = 1881 = 19x99</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className='my-3 mt-10 text-black text-center italic'>Table 14: Same data as in Table 12, but only for the odd-numbered suras.</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Sura</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>No. of Suras</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Digits of Verses</th>
                    <th className='border-0 p-4 text-white text-center text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>200</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                  </tr>

                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>113</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                  </tr>

                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>513 (19x27)</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>437 (19x23)</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>950 (19x50)</td>
                  </tr>
                </tbody>

              </table>
            </div>
            
            <div className='flex flex-col lg:flex-row gap-5 mt-8 items-center'>
              <div className='basis-3/5'>
                <p>
                  [28] Let us take all the suras that consist of 127 verses or less. There are 105 such suras. The sum of the sura numbers of these 105 suras, plus the sum of their verse numbers is 10963, or 19x577.  Sura 9 is the only sura that has 127 verses. See Table 15.
                  <br/><br/>
                  If Sura 9 did consist of 129 verses, it would not be included in this list of suras, the total would be 10827 (10963-136), this phenomenon would have disappeared, and the Quran's code would have been violated.
                  <br/><br/>
                  [29] Since Sura 9 is odd-numbered, and its number of verses is also odd, let us look at all the odd-numbered suras whose number of verses is also odd. This gives us 27 suras: 1, 9, 11, 13, 15, 17, 25, 27, 29, 33, 35, 39, 43, 45, 57, 63, 81, 87, 91, 93, 97, 101, 103, 105, 107, 111, and 113. They consist of 7, 127, 123, 43, 99, 111, 77, 93, 69, 73, 45, 75, 89, 37, 29, 11, 29, 19, 15, 11, 5, 11, 3, 5, 7, 5, and 5 verses, respectively. The sum of these sura numbers, plus their sum of verse numbers is 2774, 19x146. If we take the wrong number of verses for Sura 9 , i.e., 129, this miracle disappears.
                </p>
              </div>
              <div className='basis-2/5'>
                <h5 className='mb-3 text-black text-center mt-0 italic'>Table 15: Mathematical coding of all suras consisting of 127 verses or less.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>120</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>125</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>75</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>83</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>136</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>113</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>118</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>120</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6434</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4529</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10963 (19x577)</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>
            </div>

            <p>
              [30] The correct number of verses in Sura 9 is 127, and this is a prime number - it is not divisible by any number except 1, and itself.
              <br/><br/>
              Let us look at all the suras whose number of verses is a prime number. These are Suras 1, 9, 13, 33, 43, 45, 57, 63, 81, 87, 93, 97, 101, 103, 105, 107, 111, and 113. The numbers of verses in these suras are 7, 127, 43, 73, 89, 37, 29, 11, 29, 19, 11, 5, 11, 3, 5, 7, 5, and 5, respectively. If you add the digits of these suras, you get 137, while the digits of the verses add up to 129. This makes the grand total of all the digits 137+129 = 266 = 19x14.
              <br/><br/>
              [31] The distorters added two false verses to Sura 9, and this caused the sura to have 129 verses. Since 129 consists of 3 digits, and is divisible by 3, let us look at the suras whose number of verses is divisible by 3, and consists of 3 digits. The total of these sura numbers is 71, and the total number of verses is 765. This produces a grand total of 71 + 765 = 836, or 19x44. The data are shown in Table 16.
              <br/><br/>
              If Sura 9 had 129 verses, it would have been included in this table, and would have destroyed this phenomenon.
              <br/><br/>
              [32] If Sura 9 consisted of 129 verses, as the falsifiers would like us to believe, then let us look at all the suras which consist of 129 verses or more. There are 8 such suras. Their data are shown Table 17.
              <br/><br/>
              If Sura 9 consisted of 129 verses, the total number of verses would have been 1577 + 129 = 1706, not a multiple of 19.
            </p>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-[60%]'>
                <h5 className='my-3 text-black text-center italic'>Table 16: All suras whose number of verses is 3 digit, and is divisible by 3</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>120</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>125</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>165</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>171</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>134</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>111</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>111</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>135</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>155</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>71</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>765</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>836 (19x44)</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>
              <div className='basis-[40%]'>
                <h5 className='my-3 text-black text-center italic'>Table 17: All the suras that consist of 129 verses or more.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>286</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>200</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>176</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>165</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>206</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>

                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>135</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>227</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>182</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1577 (19x83)</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>
            </div>
            
            <p>
              [33] The numbers 127, 128 and 129 have two digits in common, "1" and "2." Let us consider all the suras whose number of verses contains the digits 1 and 2. By adding the sura numbers plus the numbers of verses, we get 1159, 19x61.
              See Table 18.
              <br/><br/>
              If Sura 9 consisted of 129 verses, the total would have become 1159+2 = 1161, not a multiple of 19.
              <br/><br/>
              [34] Sura 9 is a single-digit sura whose number of verses contains the digits 1 and 2. There is only one other sura that possesses these traits: Sura 5 is a single-digit sura, and it consists of 120 verses. As shown in Table 19, the number of verses in these two suras is 120+127 = 247 = 19x13.
              <br/><br/>
              If Sura 9 consisted of 129 verses, the total would have been 247+2 = 249, not a multiple of 19.
            </p>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-[50%]'>
                <h5 className='my-3 text-black text-center italic'>Table 18: Suras whose final verse have the numerals "1" and "2" in common with the verses in question (127, 128, and 129).</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>120</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>125</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>136</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>134</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>144</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>112</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>133</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>182</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>219</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>65</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>77</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>66</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>78</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>92</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>113</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>322</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>837</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1159 (19x61)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-[50%]'>
                <h5 className='my-3 text-black text-center italic'>Table 19: The only suras whose number is a single digit, and the number of verses contains the numerals "1" and "2."</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>120</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>247 &nbsp;(19x13)</td>
                      </tr>
                    </tbody>


                  </table>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5 items-center'>
              <div className='basis-[55%]'>
                <p>
                  [35] We looked at all the suras whose number of verses contains "1" and "2." Let us now look at all the suras whose number of verses begins with the digit "1." There are 30 suras that possess this quality: Suras 4, 5, 6, 9, 10, 11, 12, 16, 17, 18, 20, 21, 23, 37, 49, 60, 61, 62, 63, 64, 65, 66, 82, 86, 87, 91, 93, 96, 100, and 101.
                  <br/><br/>
                  Their numbers of verses are 176, 120, 165, 127, 109, 123, 111, 128, 111, 110, 135, 112, 118, 182, 18, 13, 14, 11, 11, 18, 12, 12, 19, 17, 19, 15, 11, 19, 11, and 11. The sum of verse numbers (1+2+3+...+n) for these 30 suras is 126122, or 19x6638.
                  <br/><br/>
                  If Sura 9 consisted of 129 verses, the sum of their verse numbers would have been 126122 + 128 + 129 = 126379, and this total is not a multiple of 19.
                  <br/><br/>
                  [36] Sura 9 consists of 127 verses, and 9+1+2+7 equals 19. Let us look at all the suras whose digits of sura and verses add up to 19. There are 10 suras that meet this specification, and the total of their sura numbers and numbers of verses is 1216, or 19x64. The data are shown in Table 20.
                </p>
              </div>
              <div className='basis-[45%]'>
                <h5 className='my-3 text-black text-center italic'>Table 20: All the suras where the digits of sura number and number of verses add up to 19.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>136</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>78</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>100</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>227</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>253</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>45</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>82</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>54</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>55</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>64</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>18</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>82</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>72</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>28</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>100</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>77</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>50</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>78</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>118</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>84</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>25</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>531</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>685</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1216 (19x64)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h5 className='my-3 text-black mt-10 text-center'>Mr. Gatut Adisoma of Masjid Tucson made the following two discoveries.</h5>

            <div className='flex flex-col lg:flex-row gap-5 items-center'>
              <div className='basis-[55%]'>
                <p>
                  [37] Sura 9 consists of 127 verses, and (9) plus (1+2+7) add up to 19. There are three other suras in the whole Quran whose sura digits add up to 9 and the digits of their number of verses add up to 10. These are suras 9, 45, 54, and 72. They consist of 127, 37, 55, and 28 verses, respectively. The total number of verses in these three suras is 247, 19x13.
                  <br/><br/>
                  If Sura 9 consisted of 129 verses, it would not be included in this table to begin with. See Table 21.
                  <br/><br/>
                  [38] If Sura 9 consisted of 129 verses as the distorters claimed, then there is only one other sura in the whole Quran whose sura digits add up to 9, and its number of verses' digits add up to 12, namely Sura 27.
                  <br/><br/>
                  As shown in Table 22, this combination, with 129 verses for Sura 9, does not conform with the Quran's code.
                  <br/><br/>
                  [39] Let us assume for awhile that Sura 9 consists of 129 verses. Since the number 129 ends with the digit "9," let us look at all the suras where the number of verses ends with the digit "9."
                  <br/><br/>
                  We find 13 suras in the Quran whose number of verses ends with the digit "9." They are Suras 10, 15, 29, 43, 44, 48, 52, 57, 81, 82, 87, 96, and 104. Their numbers of verses are 109, 99, 69, 89, 59, 29, 49, 29, 29, 19, 19, 19, and 9, respectively.
                  <br/><br/>
                  As illustrated by Table 23, many conform with the Quran's code only if Sura 9 is excluded; it does not consist of 129 verses. Without Sura 9, the total number of verses in these 13 suras is 627, 19x33.
                  <br/><br/>
                  Additionally, the sura number, plus the number of verses, plus the sum the sum of verse numbers, add up to 23655, or 19x1245. These phenomena would have disappeared if Sura 9 consisted of 129 verses.
                </p>
              </div>
              <div className='basis-[45%]'>
                <h5 className='my-3 text-black text-center italic'>Table 21: All the suras where the digits of sura number add up to 9 and the digits of number of verses add up to 10</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>45</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>54</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>55</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>72</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>28</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>247 (19x13)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <h5 className='my-3 text-black text-center italic mt-6 lg:mt-10'>Table 22: The suras where the digits of sura number add up to 9, and the digits of number of verses add up to 12, assuming that Sura 9 is 129 verses.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>93</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>222 <br/>(not a multiple of 19)</td>
                      </tr>
                    </tbody>

                  </table>
                </div>
              </div>
            </div>

            <h5 className='my-3 text-black text-center italic mt-6 lg:mt-10'>Table 23: All suras whose number of verses end with the digit "9."</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sum of Verse #'s</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5995</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6114</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>99</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4950</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5064</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>69</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2415</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2513</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>43</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>89</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4005</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4137</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>44</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>59</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1770</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1873</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>48</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>435</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>512</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>52</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>49</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1225</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1326</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>57</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>435</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>521</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>81</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>435</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>545</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>82</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>291</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>87</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>296</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>96</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>305</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>104</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>45</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>158</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>748</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>627 (19x33)</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22280</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>23655 (19x1245)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              [40] Sura 9 is an odd-numbered sura whose number of verses ends with the digit "9." Let us now look at all the odd-numbered suras whose number of verses ends with "9." As shown in Table 24, the total of sura number and number of verses in these suras is 646, or 19x34. If Sura 9 had 129 verses, it would have been included in this group, and the total would have been 646+129+9 = 784, which is not a multiple of 19.
              <br/><br/>
              [41] By now, it is incontrovertibly proven that Sura 9 consists of 127 verses. Let us now look at the suras whose number of verses ends with "7."
              <br/><br/>
              There are 7 such suras; they are Suras 1, 9, 25, 26, 45, 86, and 107. Their numbers of verses are 7, 127, 77, 227, 37, 17, and 7 verses, respectively. The grand total of sura numbers plus number of verses for these seven suras is 798, 19x42. The details are shown in Table 25. Thus, every sura whose number of verses ends with the digit "7," including Sura 9, conforms with the code.
            </p>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-1/2'>
                <h5 className='my-3 text-black text-center italic'>Table 24: Odd numbered suras whose number of verses ends with "9."</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>99</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>69</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>98</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>43</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>89</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>132</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>57</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>86</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>81</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>110</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>87</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>106</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>--</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>--</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>--</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>312</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>334</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'> 646 (19x34)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-1/2'>
                <h5 className='my-3 text-black text-center italic'>Table 25: The suras whose number of verses ends with the digit "7."</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>136</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>25</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>77</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>102</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>227</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>253</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>45</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>82</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>86</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>103</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>107</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>299</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>499</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>798 (19x42)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p>
              [42] The last two verses of Sura 9 are 126 and 127. Since the falsifiers added two verses, let us look at the last two verses of every sura in the Quran, and count the digit "7," all of them, among these last two verses.
              <br/><br/>
              As shown in Table 26, the total number of the digit "7" among the last two verses of every sura in the Quran is 38, 19x2.
              <br/><br/>
              If the last verse in Sura 9 was 129 instead of 127, the number of occurrences of the digit "7" would have been 37, not 38, and this criterion would have been destroyed.
              <br/><br/>
              [43] Assuming that Sura 9 consists of 129 verses, let us look at all the suras that contain a verse No. 129. This means that we look at all the suras that consist of 129 or more verses. For example, Sura 2 consists of 286 verses. Therefore, it contains a verse that is assigned the number "129." We then take this verse and add it to all the other verses assigned the number 129 throughout the Quran. Under this assumption, there are 9 suras that contain a verse No. 129. Interestingly, we find that the total of sura numbers of these 9 suras is a multiple of 19 (114), while the total for the nine 129's can be a multiple of 19 if 2 is deducted from their total. In other words, we are told that one of of these 9 suras contains 2 extra verses. The details are in Table 27.
              <br/><br/>
              When we add 114, plus 1161, and remove 2, we get 1273, or 19x67. Compare this total (1273) with the total reported in the Item 44 below. Of the 9 suras listed in Table 27, which one has the extra 2 verses? The answer is provided in Item 44.
              <br/><br/>
              [44] To pinpoint the location of these two false verses, let us look at all the suras that contain a verse No. 128, while continu- ing to assume that Sura 9 consists of 129 verses. This will give us the same list of suras as in Table 27, and also bring in Sura 16 which has precisely 128 verses.
              <br/><br/>
              As shown in Table 28, Sura 9 stands out in glaring disharmony; it is singled out as the sura that contains the false verses. The total of suras and verses becomes divisible by 19 only if Sura 9 is removed. Note that the divisible total, after removing Sura 9, is 1273, 19x67, which is the same total obtained in Item 43 above after removing 2 verses. This remarkable phenomenon proves that Sura 9 could not contain a verse No. 128.
              <br/><br/>
              [45] Sura 9 is an un-initialed sura whose last two verses are 126 and 127. Let us take the 85 un-initialed suras, and add up the numbers of the last two verses in each sura. For example, the last two verses in Sura 1 are 6 and 7. Add 6+7 and you get 13. The next un-initialed sura is Sura 4; its last two verses are 175 and 176. Add 175+176 and you get 351. Do this for all un-initialed suras. The data are in Table 29. Thus, the last two verses of Sura 9 are confirmed to be 126 and 127.
              <br/><br/>
              [46] Let us now take the last two verses in every sura in the Quran, initialed and un-initialed, and add the digits of the last two verses in each sura (Table 30). It is readily obvious that the last two verses of every sura in the Quran are divinely fixed, and divinely guarded through this intricate mathematical code. The last two verses of Sura 9 are confir- med to be 126 & 127, not 128 & 129.
            </p>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <h5 className='my-3 text-black text-center italic'>Table 26: The total number of the digit "7" among the last two verses of every sura in the Quran.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Lt 2 Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>7's in Last 2 Verses</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6,7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>285,286</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>0</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>199,200</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>0</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>175,176</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>126,127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>25</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>76,77</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5,6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>0</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>38</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-2/5'>
                <h5 className='my-3 text-black text-center italic'>Table 27: All suras which contain a verse number "129</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Verse No.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>

                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>

                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>

                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1161</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={2}>(114+1161-2 = 1273) = (19x67)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <h5 className='my-3 text-black text-center italic'>Table 26: The total number of the digit "7" among the last two verses of every sura in the Quran.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Last 2 Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>

                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>130</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1280</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='p-4 text-black text-[12px] md:text-[14px] text-start' colSpan={2}> (130+1280 = 1410 <br />
                          not a multiple of 19)<br />
                          If we remove Sura 9, with its 128 verses, <br />
                          we get 1410-9-128 = 1273 = 19 x 67
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-2/5'>
                <h5 className='my-3 text-black text-center italic'>Table 29: Abbreviated table of the last two verses in the un-initialed suras</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Last 2 Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6+7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>175+176</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>351</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>119+120</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>239</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>126+127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>253</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5+6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={3}>6897 (19x363)
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <p>
              [47] Sura 9 consists of 127 verses, and 127 consists of 3 digits. Let us look at all the suras whose number of verses consists of 3 digits; these are suras 2, 3, 4, 5, 6, 7, 9, 10, 11, 12, 16, 17, 18, 20, 21, 23, 26, and 37. Their verse numbers are 286, 200, 176, 120, 165, 206, 127, 109, 123, 111, 128, 111, 110, 135, 112, 118, 227, and 182, respectively. By taking the last digit in each number of verses, and adding up these digits, we get 6+0+6+0+5+ 6+7+9+ 3+ 1+8+ 1+0+5+2+8+7+2 = 76 = 19x4.
              <br/><br/>
              If Sura 9 consisted of 129 verses, the last digit in its number of verses would be 9 instead of 7, and the total of last digits would be 78 instead of 76, and this phenomenon would disappear.
            </p>
            <h5 className='my-3 text-black text-center italic'>Table 30: Sum of digits of the last two verses of every sura in the Quran</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Last 2 Verses</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sum of the Digits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6,7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6 + 7</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>285,286</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2+8+5+2+8+6</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>199,200</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1+9+9+2+0+0</td>
                  </tr>

                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>126,127</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1+2+6+1+2+7</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>113</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4,5</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4 + 5</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>114</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5,6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5 + 6</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>------</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={3}>1824 = 19x96</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <p>
                  [48] Let us look at the list of suras shown in Item 47 above. Since the number of verses in Sura 9 is an odd number, let us now consider the odd-numbered verse numbers. There are 8 suras with a 3-digit, odd number of verses: Suras 6, 9, 10, 11, 12, 17, 20, and 26. Their numbers of verses are 165, 127, 109, 123, 111, 111, 135, & 227.
                  <br/><br/>
                  The last digits in these numbers of verses are 5, 7, 9, 3, 1, 1, 5, and 7, respectiv- ely, and the sum of these digits is 38, or 19x2. Obviously, if Sura 9 consisted of 129 verses, its last digit would be 9, not 7, and the sum of the last digits would be 40, not a multiple of 19. The detailed data are shown in Table 31. Thus, we are getting more and more specific, as we zoom in on the last digit in the number of verses.
                  <br/><br/>
                  [49] Let us continue to work with the same group of suras of Items 47 and 48. Since Sura 9 is an odd-numbered sura, let us now remove all the even-numbered suras from the list of suras shown in Item 47. Now we have odd-numbered suras, with odd- numbered verses. There are only three such suras in the whole Quran: 9, 11, and 17. Their numbers of verses are 127, 123, and 111 (Table 32). If Sura 9 consisted of 129 verses, this remarkable phenomenon would have been destroyed.
                  <br/><br/>
                  [50] Let us continue to work with the three suras listed in Item 49. These are all the suras in the Quran whose number is odd (like Sura 9), their number of verses consists of 3 digits (like Sura 9), and their number of verses is also odd (like Sura 9).
                  <br/><br/>
                  As shown in Table 32, the verse numbers of these 3 suras are 127, 123, and 111. Just add the individual digits, and you get 1 + 2 + 7 + 1 + 2 + 3 + 1 + 1 + 1=19.
                  <br/><br/>
                  Obviously, this phenomenon depends on the now proven truth that Sura 9 consists of 127 verses. If Sura 9 consisted of 129 verses, the only suras in the Quran that possess the above stated qualities would have added up to 1+2+9+1+2+3+1+1+1 = 21. In other words, this important component of the Quran's mathematical code would have disappeared.
                </p>
              </div>
              <div className='basis-2/5'>
                <h5 className='my-3 text-black text-center italic'>Table 31: All suras whose number of verses is odd, and consists of 3 digits</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Last Digit</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>165</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>109</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>111</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>111</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>135</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>227</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>38 (19x2)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h5 className='my-3 text-black text-center italic mt-6'>Table 32: Odd numbered suras whose number of verses is odd and consists of 3 digits.</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>111</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>361 (19 x 19)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              [51] There are three suras (1) whose numbers are odd, (2) their numbers of verses are odd, and (3) the number of verses consists of 3 digits. They are Suras: 9, 11, and 17 (see Items 48 through 50 for the flow of this point). Just add the individual digits that make up the three sura numbers, and you get 9+1+1+1+7=19.
              <br/><br/>
              [52] The number 129 is divisible by 3. If Sura 9 consisted of 129 verses as the distorters claimed, then it would be (1) an odd-numbered sura that (2) consists of a 3-digit number of verses, (3) the number of verses is odd, and (4) the number of verses is divisible by 3. There are only two suras in the whole Quran that possess these qualities: Sura 11 with 123 verses, and Sura 17 with 111 verses. The sum of digits of both sura numbers and the numbers of verses comes to 1+1+1+2+3+1+7+1+1+1 = 19. This can be observed only if Sura 9 consists of 127 verses.
              <br/><br/>
              [53] Sura 9 is (1) odd-numbered, (2) its number of verses is odd, (3) its number of verses ends with the digit "7," (4) its number of verses is a prime number, and (5) the sura number is divisible by 3 & 9. The only two suras that possess these qualities are: Sura 9 (127 verses), and Sura 45 (37 verses). Just add the digits you see:
            </p>

            <div className='pt-4 pb-1 border-[1px] max-w-screen-sm border-primary rounded-[10px] mx-auto'>
              <p className='text-center'>9+1+2+7=19 & 4+5+3+7=19; Total for both suras = 19+19 = 38</p>
            </div>

            <p className='mt-5'>
              [54] Let us assume that Sura 9 does have 129 verses. In that case we will have only two suras in the whole Quran whose number begins with 9, and their number of verses ends with 9: Sura 9 (129 verses) and Sura 96 (19 verses). As detailed in Table 33, the grand total of sura number, plus the number of verses, plus the sum of verse numbers is 8828, not a multiple of 19.
              <br/><br/>
              Now let us remove the false verses (128 & 129) from Sura 9, and repeat the same calculations. The result of this correction is shown in Table 34. The grand total becomes 8569, 19x451.
              <br/><br/>
              [55] Let us assume that Sura 9 consists of 129 verses. The total of these digits is 9+1+2+9=21. Let us look at all the suras where the digits of their number of verses add up to 21. There are 7 such suras: 9, 25, 27, 37, 68, 94, and 97.
              <br/><br/>
              By adding the sura numbers, plus the number of verses in each sura, plus the sum of verse numbers, the grand total comes to 34744, not a multiple of 19 (Table 35).
              <br/><br/>
              Now, let us use the correct number of verses for Sura 9, 127, and repeat the same calculations as in Table 35. This causes the grand total to become 34485, or 19x1815. See Table 36.
              <br/><br/>
              [56] For the last time, let us assume that Sura 9 consists of 129 verses. We have here a sura that (1) is an odd numbered sura, (2) its number is divisible by 3, (3) the number of verses, 129, is also divisible by 3, and (4) the number of verses ends with the digit "9." There is only one sura that possesses these qualities: Sura 15 is divisible by 3, its number of verses is 99, which is divisible by 3 and ends with the digit "9." If Sura 9 consisted of 129, and we added the sura and verse numbers for these two suras, we would end up with the following results: 9 + 129 + 15 + 99 = 252 - not a multiple of 19.
              <br/><br/>
              If we throw away the false number 129, we have one sura in the Quran whose number is odd, and its number of verses is divisible by 3 and ends with the digit 9 - Sura 15. Now we have the following result:
            </p>
            <div className='pt-4 pb-1 border-[1px] max-w-screen-sm border-primary rounded-[10px] mx-auto'>
              <p className='text-center'>15 + 99 = 114 = 19x6</p>
            </div>

            <p className='mt-5'>
              [57] For some time now, we have been dealing with numbers. Let us now look at specific words and letters that occur in the false injections 9:128-129. The last statement in 9:127 describes the disbelievers as "LAA YAFQAHOON" (they do not comprehend).
              <br/><br/>
              Thus, the last letter in Sura 9 is "N" (Noon). According to the falsifiers, the last verse is 129, and the last letter is "M" (Meem), since the last false word is "AZEEM."
              <br/><br/>
              Now let us look at the first letter and the last letter of every sura from the beginning of the Quran to Sura 9, and calculate their gematr- ical (numerical) values. Table 37 shows that the last true letter in Sura 9 must be "N," not "M."
            </p>

            <h5 className='my-3 text-black text-center italic mt-5'>Table 33: Suras whose numbers begins with "9" and their number of verses ends with "9."</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8385</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8523</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>96</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>305</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>105</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>148</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8575</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8828 (Not multiple of 19)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className='my-3 text-black text-center italic mt-5'>Table 34: Same data as in Table 33, after correcting the number of verses in Sura 9.</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8264</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>96</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>190</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>305</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>105</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>146</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8318</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8569 (19x451)
                    </td>
                  </tr>
                </tbody>

              </table>
            </div>

            <h5 className='my-3 text-black text-center italic mt-5'>Table 35: Suras whose digits of sura numbers and verse numbers add up to 21, assuming that Sura 9 consists of 129 verses.</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>129<b>?</b></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8385</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8523</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>25</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>77</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3003</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3105</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>93</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4371</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4491</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>182</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16653</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16872</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>68</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>52</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1378</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1498</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>94</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>36</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>138</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>97</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>117</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>357</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>546</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>33841</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>34744 (Not divisible by 19)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className='my-3 text-black text-center italic mt-5'>Table 36: Calculations of Table 35, after correcting the verses in Sura 9.</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. of Verses</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8264</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>25</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>77</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3003</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3105</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>93</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4371</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4491</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>37</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>182</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16653</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16872</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>68</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>52</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1378</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1498</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>94</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>36</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>138</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>97</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>117</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>357</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>544</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>33584</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>34485 (19x1815)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className='my-3 text-black text-center italic mt-5'>Table 37: Gematrical value of the first and last letters of every sura from the beginning of the Quran to Sura 9.</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>First Letter</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Last Letter</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>B = 2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>N = 50</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>52</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A = 1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>N = 50</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>51</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A = 1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>N = 50</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>51</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Y = 10</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M = 40</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>50</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Y = 10</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>R = 200</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>210</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A = 1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M = 40</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>41</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>A = 1</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>N = 50</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>51</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>Y = 10</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>M = 40</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>50</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>B = 2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>N = 50</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>52</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>38 (19x2)</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>570 (19x30)</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>608 (19x32)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              [58] Sister Ihsan Ramadan of Masjid Tucson counted all the suras in the Quran which end with the letter "N" (Noon), the last letter in Sura 9.
              <br/><br/>
              She found that 43 suras end with the same letter as Sura 9 (N) - suras 1, 2, 3, 7, 9, 10, 11, 12, 15, 16, 21, 23, 26, 27, 28, 29, 30, 32, 36, 37, 38, 39, 40, 43, 44, 46, 49, 51, 58, 61, 62, 63, 66, 67, 68, 70, 77, 81, 83, 84, 95, 107, and 109. Just add the sura numbers + number of suras that end with "N", and you get:
            </p>
            <div className='pt-4 pb-1 border-[1px] max-w-[100px] border-primary rounded-[10px] mx-auto'>
              <p className='text-center'>1919</p>
            </div>

            <p className='mt-5'>
              Thus, the last letter in Sura 9 is once again confirmed to be "N," not "M."
              <br/><br/>
              [59] Now let us look at the crucial expression "LA ELAAHA ELLA HOO" (There is no god except He). This phrase occurs in the false injection 9:129.
              <br/><br/>
              This very special expression occurs 29 times in 19 suras (Table 38).
            </p>
            <p className='mt-5'>
              By adding the sura numbers of  the 19 suras, plus the verse num- bers where the phrase "LAA ELAAHA ELLA HOO" occurs, plus the number of occurrences of this crucial phrase, the grand total comes to 2128, or 19x112. This awesome result is dependent on the fact that 9:128-129 do not belong in the Quran.
              <br/><br/>
              Obviously, if 9:129 were included, the crucial expression "LA ELAAHA ELLA HOO," the First Pillar of Islam, would not conform with the mathematical code.
              <br/><br/>
              [60] The first occurrence of "LA ELAAHA ELLA HOO" is in 2:163, and the last occurrence is in 73:9. If we add the sura number, plus the number of verses, plus the sum of verse numbers from the first occur- rence to the last occurrence, the grand total comes to 316502, or 19x16658.
              <br/><br/>
              Table 39 presents the detailed data. Naturally, if "LAA ELAAHA ELLA HOO" of the false verse 129 were includ- ed, this phenomenon would have dis- appeared.
              <br/><br/>
              [61] The phrase "LAA ELAAHA ELLA HOO" occurs 7 times between the missing Basmalah of Sura 9 and the extra Basmalah of Sura 27, in 9:31, 11:14, 13:30, 20:8, 20:98, 23:116, and 27:26. By adding the numbers of the 7 verses, we get 323, or 19x17. The detailed data are shown in Table 40.
              <br/><br/>
            </p>

            <h5 className='my-3 text-black text-center italic mt-8'>Table 38: List of all occurrences of the crucial phrase:"LAA ELAAHA ELLA HOO" (There is no other god besides Him), after removing 9:129</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Verses with the key phrase</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Frequency of the phrase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>163,255</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2,6,18(2x)</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>87</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>102, 106</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>158</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>31</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>30</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8,98</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>10.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>23</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>116</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>12.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>28</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>70,88</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>35</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>39</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>40</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3,62,65</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>44</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>17.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>59</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>22,23</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>18.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>64</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>19.</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>73</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>507</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>1592</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>29</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-end' colSpan={4}>507+1592+29 = 2128 = 19x112</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className='my-3 text-black text-center italic mt-8'>Table 39: All suras and verses from the first occurrence to the last occurrence of "LAA ELAAHA ELLA HOO"</h5> 
            <div className='table-con my-5 max-w-screen-md mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Verses with the key phrase</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Frequency of the phrase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>123 (286-163)</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27675</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27800</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>200</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20100</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20303</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8264</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>72</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>28</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>406</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>506</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>73</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>45</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-----</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>-----</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2700</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5312</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>308490</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>316502 (19x16658)</td>
                  </tr>
                </tbody>
              </table>
            </div>



            <h5 className='my-3 text-black text-center italic mt-8'>Table 40: Occurrences of the phrase"LAA ELAAHA ELLA HOO" from the missing Basmalah tothe extra Basmalah.</h5> 
            <div className='table-con my-5 max-w-screen-sm mx-auto'>
              <table className='w-full border-0'>
                <thead className='bg-primary'>
                  <tr>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                    <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Verse Numbers With Phrase</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>31</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>11</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>14</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>30</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>20</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>98</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>23</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>116</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>27</td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>26</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                    <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>323 (19x17)</td>
                  </tr>
                  <tr className='border-[1px]'>
                    <td className='p-4 text-black text-[12px] md:text-[14px] text-start' colSpan="2">
                      If 9:129 were part of the Quran, the total in Table 40 would have <br />
                      been: 323 + 129 = 452, not a multiple of 19. God rejects what <br />
                      the hypocrites utter, even if it is the truth (63:1).
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h5 className='my-3 text-black mt-8'>The Ultimate Quranic Miracle</h5>
            <p>
              [62] Brother Abdullah Arik has discovered what I consider to be the ultimate Quranic miracle. This miraculous phenomenon incontrovertibly authenticates every single verse in the Quran - the number of verses in every sura, and the numbers assigned to every single verse in the Quran - while exposing and rejecting the false injections, 9:128-129. To witness this great phenomenon, see <Link to='/chapters/appendix-1' className='text-primary underline'>Appendix 1</Link> (under the heading: Superhuman Numerical Combinations). Puting the number of every verse in the Quran in sequence from the beginning to the end, with the number of verses in each sura ahead of the verse numbers of each sura, the final number consists of 12692 digits (19x668), and the number itself is also a multiple of 19. If the wrong number of verses for Sura 9 was used - 129 instead of 127 - neither the number of digits, nor the number itself would be divisible by 19.
              <br/><br/>
              [63] Since the subject of this Appendix is Sura 9 and its number of true verses, it is noteworthy that if we write down the number of the  sura, 9, followed by the correct number of verses, 127, followed by the numbers of all the verses from 1 to 127, the resulting long number is a multiple of 19. Needless to say, if the wrong number of verses is used, i.e., 129 instead of 127, this remarkable miracle would have disappeared:
            </p>

            <div className='pt-4 pb-1 border-[1px] max-w-screen-sm border-primary rounded-[10px] mx-auto'>
              <p className='text-center'>
                9 127 1 2 3 4 5 ..... 122 123 124 125 126 127. <br/>
                The total number of verses in Sura 9 is followed by the numbers of
                every verse in the sura from 1 to 127. The resulting long number is
                a multiple of 19.
              </p>
            </div>

            <p className='mt-5'>
              [64] The number of verses in Sura 9, 127, is an odd number. The falsifiers added two fake verses, and this made the number of verses 129, which is also an odd number. Mr. Arik used the same computer program he devised for Item 62 above to check all odd-numbered verses in the Quran. Thus, the number of verses in every sura was written down, followed only by the last digit of each of the odd-numbered verses in that sura. Sura 1 was represented by the number 71357. Sura 2 was represented by the number 28613579.....5, and so on through the last sura. The result is a long number, with 3371 digits, that is divisble by 19. Obviously, Sura 9 was represented by the number 12713579......7:
            </p>

            <div className='pt-4 pb-1 border-[1px] max-w-screen-sm border-primary rounded-[10px] mx-auto'>
              <p className='text-center'>
                7 1 3 5 7 286 1 3 5 ... 3 5 ...... 5 1 3 5 6 1 3 5.<br/>
                The number of verses in every sura is followed by the numbers of the
                odd-numbered verses. The resulting long number, 3371 digits, is a
                multiple of 19.
              </p>
            </div>

            <p className='mt-5'>
              [65] Since Sura 9 is an un-initialed sura, Mr. Arik applied the same computer program to all 85 un-initialed suras. The number of every verse in each of the 85 suras was written down, without the number of verses in the sura. Thus, Sura 1 was represented by the number 1234567, not 71234567. This was done with all un-initialed suras. The final result is a number that consists of 6635 digits, and is a multiple of 19. These awesome phenomena would be destroyed if we used the wrong number of verses for Sura 9, i.e., 129 instead of 127.
            </p>

            <h5 className='my-3 text-black mt-8'>God's Messenger of the Covenant</h5>
            <h6 className='my-3 text-black'>Destined to Purify the Quran</h6>
            <p>
              [66] Finally, in a profound demonstration of the foreknowledge of the Almighty Author of the Quran, it is mathematically coded that "The person destined to prove that Sura 9 consists of 127 verses is Rashad Khalifa, God's Messenger of the Covenant" (see Appendix 2). The item presented here is another one of those numerous proofs; it is chosen for its relevance to this Appendix.
              <br/><br/>
              The gematrical value of the word "Rashad," as written in the Quran (40:29, 38) is 505 (R=200, Sh=300, A=1, and D=4). The gematrical value of the word "Khalifa," as written in the Quran (38:26) is 725 (Kh=600, L=30, I=10, F=80, and H=5). By writing down the value of "Rashad," followed by the value of "Khalifa," followed by the number of Sura 9, followed by the correct number of verses in this sura, the product is 5057259127. This number is a multiple of 19; it equals 19x266171533.
              <br/><br/>
              [67] The number of verses from 3:81, where God's Messenger of the Covenant is prophesied, to 9:127, the end of Sura 9, is 988 (19x52). Table 41.
              <br/><br/>
              [68] The sum of verse numbers from 3:81 to 9:127 is also a multiple of 19 (Table 41).
              <br/><br/>
              [69] In Verse 3:78, just 3 verses before proclaiming God's Messenger of the Covenant, the word "God" number 361 (19x19) occurs. This verse (3:78) informs us that some falsifiers will "add falsehood to the Quran, then claim that it is part of the Quran; they attribute lies to God, knowingly."
              <br/><br/>
              [70] The word "God" occurs 912 times (19x48) from Verse 3:78, which exposes the falsifiers, to 9:127.
              <br/><br/>
              [71] The number of letters, plus the number of words in 3:78 and in the false verses 9:128-129, give the same total, 143. Verse 3:78
              <br/><br/>
              consists of 27 words and 116 letters, & 9:128-129 consist of 115 letters and 28 words.
            </p>

            <div className='max-w-screen-md my-6 mx-auto'>
              <img src={quranImg} alt='Quran' className='object-contain mx-auto'/>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
              <div className='basis-3/5'>
                <h5 className='my-3 text-black text-center italic'>Table 41: The number of verses from 3:81 to the end of Sura 9.</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>No. Verses</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sum of Verse #s</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>119</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>16860</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>176</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>15576</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>120</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7260</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>165</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>13695</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>206</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>21321</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>75</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>2850</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>127</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8128</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>---</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>988 (19x52)</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>85690 (19x4510)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className='basis-2/5'>
                <h5 className='my-3 text-black text-center italic'>Table 42: Occurrence of the word "God" from 3:78 to the end of Sura 9</h5> 
                <div className='table-con my-5 max-w-screen-md mx-auto'>
                  <table className='w-full border-0'>
                    <thead className='bg-primary'>
                      <tr>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Sura No.</th>
                        <th className='border-0 p-4 text-white text-start text-[12px] md:text-[14px] uppercase'>Frequency of "God"</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>3</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>132</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>4</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>229</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>5</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>147</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>6</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>87</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>7</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>61</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>8</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>88</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>9</td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>168</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>----</td>
                      </tr>
                      <tr className='border-[1px]'>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'></td>
                        <td className='px-4 py-2 text-black text-[12px] md:text-[14px] text-start'>912 (19x48)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <h5 className='my-3 text-black mt-8'>What Can We Say?</h5>
            <p>
              The overwhelming physical evidence provided by the Almighty to protect and authenticate His message leaves no doubt that: (1) no distortion of any kind can enter the Quran, (2) Verses 9:128-129 do not belong in the Quran, and (3) every element in the Quran is mathematically structured far beyond human capabilities - the number of suras, the number of verses, the numbers assigned to the suras and verses, the frequency of occurrence of key expressions, the number of words, the number of letters, and the unique and often uncommon spelling of certain words.
              <br/><br/>
              This Appendix documents a profound miracle in its own right. Vast and utterly overwhelming as it is, it does not surpass or even match the overall mathematical miracle of the Quran which is detailed in Appendix One. This merely confirms the fact that the Almighty Author of the Quran has deliberately permitted the blasphemous addition of two verses to Sura 9 in order to:
            </p>

            <div className='pt-4 pb-1 px-4 border-[1px] max-w-screen-sm border-primary rounded-[10px] mx-auto'>
              <p>
                (1) Demonstrate an essential function of the Quran's mathematical composition. <br/>
                (2) Prove the impossibility of tampering with the Quran. <br/>
                (3) Fulfill God's promise to distinguish the believers and expose the hypocrites.
              </p>
            </div>

            <h5 className='my-3 text-black mt-8'>Why Did God Permit It For 1400 Years ??</h5>
            <p>
              Due to the mass corruption of Islam shortly after the prophet Muhammad's death, God obviously has fulfilled His pledge in 47:38. A divine decree issued in Sura 47, which is entitled "Muhammad," Verse 38 (19x2), stipulates that "if the Arabs failed to uphold the Quran, God will dismiss them from His grace, and substitute other people in their place."
              <br/><br/>
              When the Arabs distorted the Quran a few years after the Prophet's death, and exterminated the Prophet's family in the process, they incurred God's pledge of 47:38, and no longer deserved to possess the Quran; the true Quran. The evidence is irrefutable that the Arabs have abandoned the Quran en masse.
              <br/><br/>
              For example, there is not a single mosque in the so-called Muslim world today (1989) that upholds the crucial commandment: "The mosques belong to God; you shall not invoke anyone else besides God" (72:18).
              <br/><br/>
              The call to prayer (Azan) and the prayer itself are no longer devoted to God alone; Muhammad's name is invariably invoked along with the name of God.
              <br/><br/>
              The "First Pillar of Islam" is clearly stated in the Quran, 3:18 & 47:19, and its words are decreed to be: LAA ELAAHA ELLA ALLAH (There is no other god besides God). But the Muslims, as early as the first century AH, do not want God if Muhammad is not invoked along with Him. This is easily demonstrable today by going into any mosque and declaring: "LAA ELAAHA ELLA ALLAH;" this will actually enrage today's Muslims. This behavior is documented in the Quran, 39:45. Moreover, my own research has now convinced me that the traditional Muslims are forbidden by God from uttering the Quranic, divinely dictated Shahaadah: "Ash-hadu Allaa Elaaha Ellaa Allah." They can never say this Shahaadah (without invoking Muhammad's name). Test them yourself. The First Pillar of the distorted Islam, LAA ELAAHA ELLA ALLAH, MUHAMMAD RASOOL ALLAH, does not conform with God's commandments that came to us through Muhammad (see Appendix 13).
              <br/><br/>
              A number of other commandments are violated as well by this Mohammedan Shahaadah. For example, the Quran enjoins us repeatedly from making any distinction among God's messengers (2:136, 285; 3:84). The distorted Shahaadah gives more distinction to Muhammad, against his will. Despite the Quran's repeated assertions that it is "complete, perfect, and fully detailed" (6:19, 38, & 114), the "Muslims" have refused to believe their Creator; they uphold such ridiculous and nonsensical sources as Hadith and Sunna. This unanimous rebellion against God and His messenger, and the mass reversion to glaring idolatry - idolizing the Prophet and the saints - called for fulfillment of God's pledge in 47:38.
              <br/><br/>
              In view of the incontrovertible divine evidence presented here, and in Appendices 1, 2, and 26, one can truly appreciate the following verses:
            </p>

            <div className='pt-4 pb-1 px-4 border-[1px] max-w-screen-sm border-primary rounded-[10px] mx-auto'>
              <p>
                Surely, we have revealed this message,
                and surely, we will preserve it. [ 15:9 ]
                Say, "If all the humans, and all the jinns,
                banded together, in order to produce a Quran like this,
                they will surely fail, no matter how much assistance
                they lend one another." [ 17:88 ]
                <br/><br/>
                The disbelievers rejected this message
                when it came to them, though it is a profound scripture.
                No falsehood can enter it,
                through addition or deletion.
                For it is a revelation from
                the Most Wise, Most Praiseworthy. [ 41:41-42 ]
                <br/><br/>
                If we revealed this Quran to a mountain,
                you would see it trembling,
                crumbling, out of reverence for God. [ 59:21 ]
              </p>
            </div>

            <div className='pt-4 pb-1 px-4 border-[1px] max-w-screen-sm border-primary rounded-[10px] mx-auto mt-6'>
              <p>
                I acknowledge with thanks the valuable contributions of Mahmoud
                Ali Abib, Gatut Adisoma, Abdullah Arik, Ihsan Ramadan, Lisa Spray,
                and Edip Yuksel. Some of the astounding mathematical facts
                presented in this Appendix were discovered by these hard working
                researchers at Masjid Tucson.
              </p>
            </div>
            

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-23'} btnText={"Chronological Sequence of Revelation"}/>
            <LinkButton btnLink={'/chapters/appendix-25'} btnText={"End Of The World"}/>
        </div>
    </div>
  )
}

export default AppendixTwentyFour