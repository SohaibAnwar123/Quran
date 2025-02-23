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
        <PageBanner bgUrl={bannerImg } longTitle={"Polygamy"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
          
            <div className='page-title mb-8'>
                <h4>Appendix 30 - Polygamy</h4>
            </div>

            <p>
              Polygamy was a way of life until the Quran was revealed 1400 years ago. When the earth was young and under-populated, polygamy was one way of populating it and bringing in the human beings needed to carry out God's plan. By the time the Quran was revealed, the world had been sufficiently populated, and the Quran put down the first limitations against polygamy.
              <br/><br/>
              Polygamy is permitted in the Quran, but under strictly observed circumstances. Any abuse of this divine permission incurs severe retribution. Thus, although polygamy is permitted by God, it behooves us to examine our circumstances carefully before saying that a particular polygamous relationship is permissible.
              <br/><br/>
              Our perfect example here is the prophet Muhammad. He was married to one wife, Khadijah, until she died. He had all his children, except one, from Khadijah. Thus, she and her children enjoyed the Prophet's full attention for as long as she was married to him; twenty-five years. For all practical purposes, Muhammad had one wife - from the age of 25 to 50. During the remaining 13 years of his life, he married the aged widows of his friends who left many children. The children needed a complete home, with a fatherly figure, and the Prophet provided that. Providing a fatherly figure for orphans is the only specific circumstance in support of polygamy mentioned in the Quran (4:3).
              <br/><br/>
              Other than marrying widowed mothers of orphans, there were three political marriages in the Prophet's life. His close friends Abu Bakr and Omar insisted that he marry their daughters, Aisha and Hafsah, to establish traditional family ties among them. The third marriage was to Maria the Egyptian; she was given to him as a political gesture of friendship from the ruler of Egypt.
              <br/><br/>
              This perfect example tells us that a man must give his full attention and loyalty in marriage to his wife and children in order to raise a happy and wholesome family.
              <br/><br/>
              The Quran emphasizes the limitations against polygamy in very strong words: "If you fear lest you may not be perfectly equitable in treating more than one wife, then you shall be content with one." (4:3) "You cannot be equitable in a polygamous relationship, no matter how hard you try." (4:129)
              <br/><br/>
              The Quranic limitations against polygamy point out the possibility of abusing God's law. Therefore, unless we are absolutely sure that God's law will not be abused, we had better resist our lust and stay away from polygamy. If the circumstances do not dictate polygamy, we had better give our full attention to one wife and one set of children. The children's psychological and social well-being, especially in countries where polygamy is prohibited, almost invariably dictate monogamy. A few basic criteria must be observed in contemplating polygamy:
            </p>

            <ul className='ms-5 list-decimal'>
              <li>It must alleviate pain and suffering and not cause any pain or suffering.</li>
              <li>If you have a young family, it is almost certain that polygamy is an abuse.</li>
              <li>Polygamy to substitute a younger wife is an abuse of God's law (4:19).</li>
            </ul>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-29'} btnText={"The Missing Basmalah"}/>
            <LinkButton btnLink={'/chapters/appendix-31'} btnText={"Evolution: Divinely Controlled"}/>
        </div>
    </div>
  )
}

export default AppendixThirty