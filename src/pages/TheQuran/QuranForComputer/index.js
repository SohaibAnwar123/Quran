import React from 'react'
import { Link } from 'react-router-dom'
import sectionImg from '../../../assets/images/QuranForComputer.png'

const QuranForComputer = () => {
  return (
    <section className='newsletter-section py-8'>
        <div className='section-content content-container'>
            <div className='flex flex-col gap-10 md:gap-0 md:flex-row items-center'>
                <div className='flex-1 about-text md:pr-6 md:ps-0'>
                    <h5 className='text-end text-primary mb-2'>Read Quran Online</h5>
                    <h4 className='text-end text-black'>Quran for your Computer</h4>
                    <p className='text-end text-black mt-[14px] max-w-[576px] ms-auto'>
                        Full-featured Windows Based software with search facility to read Quran The Final Testament (Authorized English Version translated from the Original by Rashad Khalifa, PhD). Contains all the appendices including the description of the mathematical miracle. Many user customizable and advanced options including for search and viewing. Includes: topic management, article editing, long number division (by 19), gematrical value calculation, and print options (prints both plain and formatted output).”
                    </p>
                    <div className='flex justify-end mt-[25px]'>
                        <Link to='' className='btn btn-sm btn-primary'>Download Quran Explorer v1.9 now</Link>
                    </div>
                </div>
                <div className='flex-1 about-img md:ps-10 md:pr-6'>
                    <img src={sectionImg} className='w-full rounded-[10px] h-auto md:h-[auto] xl:h-[449px] object-cover' alt='About Quran Alone'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default QuranForComputer