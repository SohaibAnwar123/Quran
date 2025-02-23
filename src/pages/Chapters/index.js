import React from 'react'
import PageBanner from '../../layout/PageBanner'
import { Link } from 'react-router-dom'
import bannerImg from '../../assets/images/chaptersImg.png'
import './index.scss'

export const Chapters = () => {
    const chapters = [
        {
            title:'One of the Great Miracles [74:35]', 
            link: '/chapters/appendix-1'
        },
        {
            title:"God's Messenger of the Covenant [3:81]", 
            link: "/chapters/appendix-2"
        },
        {
            title:"We Made the Quran Easy [54:17]", 
            link: "/chapters/appendix-3"
        },
        {
            title:"Why Was the Quran Revealed in Arabic?", 
            link: "/chapters/appendix-4"
        },
        {
            title:"Heaven and Hell", 
            link: "/chapters/appendix-5"
        },
        {
            title:"Greatness of God", 
            link: "/chapters/appendix-6"
        },
        {
            title:"Why Were We Created?", 
            link: "/chapters/appendix-7"
        },
        {
            title:"The Myth of Intercession", 
            link: "/chapters/appendix-8"
        },
        {
            title:"Abraham: Original Messenger of Islam", 
            link: "/chapters/appendix-9"
        },
        {
            title:"God's Usage of the Plural Tense", 
            link: "/chapters/appendix-10"
        },
        {
            title:"The Day of Resurrection", 
            link: "/chapters/appendix-11"
        },
        {
            title:"Role of the Prophet Muhammad", 
            link: "/chapters/appendix-12"
        },
        {
            title:"The First Pillar of Islam (Submission)", 
            link: "/chapters/appendix-13"
        },
        {
            title:"Predestination", 
            link: "/chapters/appendix-14"
        },
        {
            title:"Religious Duties: Gift From God", 
            link: "/chapters/appendix-15"
        },
        {
            title:"Dietary Prohibition", 
            link: "/chapters/appendix-16"
        },
        {
            title:"Death", 
            link: "/chapters/appendix-17"
        },
        {
            title:"Quran is All You Need", 
            link: "/chapters/appendix-18"
        },
        {
            title:"Hadith and Sunna: Satanic Innovations", 
            link: "/chapters/appendix-19"
        },
        {
            title:"Quran: Unlike Any Other Book", 
            link: "/chapters/appendix-20"
        },
        {
            title:"Satan: Fallen Angel", 
            link: "/chapters/appendix-21"
        },
        {
            title:"Jesus", 
            link: "/chapters/appendix-22"
        },
        {
            title:"Chronological Order of Revelation", 
            link: "/chapters/appendix-23"
        },
        {
            title:"Two False Verses Removed from the Quran", 
            link: "/chapters/appendix-24"
        },
        {
            title:"End Of The World", 
            link: "/chapters/appendix-25"
        },
        {
            title:"The Three Messengers of Islam", 
            link: "/chapters/appendix-26"
        },
        {
            title:"Who Is Your God?", 
            link: "/chapters/appendix-27"
        },
        {
            title:"Muhammad Wrote God's Revelations With His Own Hand", 
            link: "/chapters/appendix-28"
        },
        {
            title:"The Missin g Basmalah", 
            link: "/chapters/appendix-29"
        },
        {
            title:"Polygamy", 
            link: "/chapters/appendix-30"
        },
        {
            title:"Evolution: A Divinely Guided Process", 
            link: "/chapters/appendix-31"
        },
        {
            title:"The Crucial Age of 40", 
            link: "/chapters/appendix-32"
        },
        {
            title:"Why Did God Send A Messenger Now?", 
            link: "/chapters/appendix-33"
        },
        {
            title:"Virginity/Chastity: A Trait of the True Believers", 
            link: "/chapters/appendix-34"
        },
        {
            title:"Drugs & Alcohol", 
            link: "/chapters/appendix-35"
        },
        {
            title:"What Price A Great Nation ", 
            link: "/chapters/appendix-36"
        },
        {
            title:"Criminal Justice in Islam", 
            link: "/chapters/appendix-37"
        },
        {
            title:"The Creator's Signature", 
            link: "/chapters/appendix-38"
        },
    ]
  return (
    <>
        <PageBanner bgUrl={bannerImg} longTitle={'The Quran Online with Clarifying Explanations from the Messenger of the Covenant'}/>
        <section className='proclamation-section pt-4 pb-10 max-w-8xl mx-auto px-4 sm:px10 lg:ps-[65px] lg:px-[60px]'>
        <Link to='/proclaimation' className='text-black flex items-center underline font-bold ms-3'>Proclamation or Introduction</Link>
            <div className='proclamation-items mt-[22px] columns-1 sm:columns-2  md:columns-3'>
                {chapters.map((chapter, index) => (
                    <div key={index} className='proclamation-item flex items-center min-h-[54px] mb-7'>
                        <Link to={chapter.link} className='text-black flex items-center'>
                            <span className='item-num text-white inline-block me-[18px]'>{index + 1}</span>
                            <span className='item-text text-black underline'>{chapter.title}</span>
                        </Link>
                    </div> 
                ))}
            </div>
           
        </section>
    </>
  )
}
