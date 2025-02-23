import React from 'react'
import LinkButton from '../../components/Buttons/LinkButton'
import LinkButtonPrev from '../../components/Buttons/LinkButtonPrev'
import PageBanner from '../../layout/PageBanner'
import bannerImg from '../../assets/images/proclaimationImg.png'
import SubPageHeader from '../../components/SubPageHeader'
import './index.scss'

const AppendixThirtyOne = () => {
  return (
    <div className=''>
        <PageBanner bgUrl={bannerImg } longTitle={"Evolution: Divinely Controlled"}/>
        <div className='sub-page-content content-container py-6 md:py-12'>
          <SubPageHeader/>
            <div className='page-title mb-8'>
                <h4>Appendix 31 - Evolution: Divinely Controlled</h4>
            </div>

            <p>We learn from the Quran that evolution is a divinely designed fact:</p>
            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <p className='center'>Life began in water: "From water we initiated all living things." (21:30, 24:45)</p>
            </div>
            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <p>
                Humans not descendants of monkeys: "He started the creation of man mud." (32:7)
                <br/><br/>
                Man created from "aged" mud: "I am creating the human being from aged' clay." (15:28)
              </p>
            </div>
            <p>Evolution is possible only within a given species. For example, the navel orange evolved from seeded oranges, not from apples. The laws of probablity preclude the possibility of haphazard evolution between species. A fish cannot evolve into a bird; a monkey can never evolve into a human.</p>
            <h5 className='my-3 text-black mt-10 text-center'>Probability Laws Preclude Darwin's Evolution</h5>

            <p>
              In this computer age, we have mathematical laws that tell us whether a certain event is probable or not. If we throw five numbered cubes up in the air and let them fall into a guided straight line, the probability laws tell us the number of possible combinations we can get: 1x2x3x4x5=120 combinations. Thus, the probability of obtaining any combination is 1 in 120, or 1/120, or 0.0086. This probability diminishes fast when we increase the number of cubes. If we increase them by one, the number of combinations becomes 1x2x3x4x5x6=720, and the probability of getting any combination diminishes to 1/720, 0.0014. Mathematicians, who are very exacting scientists, have agreed that the probability diminishes to "Zero" when we increase the number of cubes to 84. If we work with 84 cubes, the probability diminishes to 209x10 (raised to the power of) -50, or 0.00000000000000000000000000000000000000000000000000209
              <br/><br/>
              Darwin's famous statement that "life began as a `simple' cell" is laughable. As recently as 50 years ago, Wells, Huxley, and Wells wrote in their classic textbook that "nothing can be seen inside the nucleus but clear fluid." We know now that the cell, is an extremely complex unit, with billions of nucleotides in the gene material inside the nucleus, and millions of biochemical reactions. The probability laws tell us that the probability of the haphazard creation of the exacting sequences of nucleotides into DNA is Zero, many times over. We are not talking about 84 nucleotides; we are talking about billions of nucleotides that must be arranged in a specific sequence.
              <br/><br/>
              Some evolutionists have stated that the human gene and the monkey's gene are 90% similar. However, even if the similarity was 99%, we are still talking about 300,000,000 nucleotides that must be haphazardly re-arranged to change the monkey into a human. The probability laws preclude this as an utter impossibility. The human gene contains 30,000,000,000 nucleotides; 1% of that is 300,000,000.
              <br/><br/>
              A fitting quote here is that of Professor Edwin Conklin; he stated:
            </p>

            <div className='px-4 pt-4 pb-1 rounded-[10px] border-[1px] border-primary max-w-screen-md mx-auto my-5'>
              <p>
                The probability of life originating from accident is comparable to the probability of the Unabridged Dictionary resulting from an explosion in a printing factory.
              </p>
            </div>

        </div>

        <div className='flex justify-center gap-4 my-6 content-container'>
            <LinkButtonPrev btnLink={'/chapters/appendix-30'} btnText={"Polygamy"}/>
            <LinkButton btnLink={'/chapters/appendix-32'} btnText={"The Crucial Age of 40"}/>
        </div>
    </div>
  )
}

export default AppendixThirtyOne