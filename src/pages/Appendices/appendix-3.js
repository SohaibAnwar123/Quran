import React from 'react'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixTree = () => {
  return (
    <div className='made-the-quran-easy-page'>
        <PageBanner bgUrl={bannerImg } longTitle={"We Made the Quran Easy"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
            <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 3 - We Made the Quran Easy [54:17]</h4>
            </div>

            <p>
                Verse 11:1 informs us that the Quran's Miracle involves [1] the superhuman mathematical design of its physical structure and [2] the simultaneous composition of a literary work of extraordinary excellence.
            </p>
            <p>
                One may be able to meet the numerical distribution requirements of a simple mathematical pattern. However, this is invariably accomplished at the expense of the literary quality. The simultaneous control of the literary style and the intricate mathematical distribution of individual letters throughout the Quran (Appendix 1) is evident in the fact that the Quran is made easy to memorize, understand, and enjoy. Unlike a human-made book, the Quran is enjoyable to read over and over, infinitely.
                <br/><br/>
                The title of this Appendix is repeated in Sura 54, verses 17, 22, 32, and 40. As it turns out, the Quran's Arabic text is composed in such a way as to remind the reader or the memorizer of the next correct expression, or the next verse. God created us and He knows the most efficient way for fixing literary materials into our memory. Memorization of the Quran has played a vital role in preserving the original text generation after generation at a time when written books were a rarity.
                <br/><br/>
                Without even realizing it, the person who memorizes the Quran is divinely helped by an intricate literary system as he utters the sounds of the Quranic words. Almost every verse in the Quran contains what I call "Memory Bells." Their function is to remind the reader of what comes next. This system is so vast, I will give only two illustrative examples:
            </p>
            <ul className='list-decimal ms-5'>
                <li>
                    In Sura 2, Verses 127, 128, and 129 end with two different names of God each. These pairs of names are "Al-Samee` Al-`Aleem (The Hearer, the Omniscient)," "Al-Tawwaab Al-Raheem (The Redeemer, Most Merciful)", and "Al-`Azeez Al-Hakeem (The Almighty, Most Wise)," respectively. If this were a regular book, one would easily mis-match these six names. Not so in the Quran. Each one of these pairs is preceded in the same verse by a "Memory Bell" that reminds us of the correct pair of names. Thus, Verse 127 talks about Abraham and Ismail raising the foundations of the Ka`abah. The verse ends with the names "Al-Samee` Al-`Aleem." The prominent sounds here are the "S," "M," and " `Ayn." These three letters are prominent in the word "Ismail." We find that this word is conspicuously delayed in the sentence, while improving its literary quality. Thus, we find that the verse goes like this: "When Abraham raised the foundations of the Ka`abah, together with Ismail ..." Normally, a human writer would say, "When Abraham and Ismail raised the foundations of the Ka`abah...." But delaying the sounds in "Ismail" brings them closer to the end of the verse, and thus reminds us that the correct names of God in this verse are "Al-Samee` Al-`Aleem."
                    <br/><br/>
                    Verse 128 has the prominent word "Tubb" just before the names "Al- Tawwaab Al-Raheem." The word "Tubb" thus serves as the memory bell. The names of God at the end of 2:129 are "Azeez, Hakeem." The prominent sounds here are "Z" and "K." Obviously, the memory bell in this verse is the word "Yuzakkeehim."
                </li>
                <li>
                    Another good example is found in 3:176, 177, & 178, where the retribution for disbelievers is described as " `Azeem (Terrible)," "Aleem (Painful)," and "Muheen (Humiliating)," respectively. In a human-made book, the memorizer could easily mix up these three descriptions. But we find that each of these adjectives is preceded by powerful memory bells that prevent such a mix-up. The word " `Azeem" of Verse 176 is preceded by the word "Huzzun," which is characterized by a stressed letter "Z." This serves to remind us of the particular adjective at the end of this verse. The word "Aleem" of Verse 177 is preceded by the sound of the word "Iman" to serve as a memory bell, and the word "Muheen" of 3:178 is preceded by an abundance of "M" and "H" throughout this verse.
                    <br/><br/>
                    Other examples of memory bells include the ending of 3:173 and the beginning of 3:174, the ending of 4:52 and the beginning of 4:53, the ending of 4:61 and the beginning of 4:62, the ending of 18:53 and the beginning of 18:54, and many more.
                </li>
            </ul>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-2'} btnText={"God's Messenger of the Covenant"}/>
            <LinkButton btnLink={'/chapters/appendix-4'} btnText={'Why Was the Quran Revealed in Arabic?'}/>
        </div>
    </div>
  )
}

export default AppendixTree