import React, {useState, useEffect, useMemo} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import CustomDropdown from '../CustomDropdown';

const SubPageHeader = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedTitle, setSelectedTitle] = useState('Select a chapter');

    const handleSelectChange = (linkValue) => {
        navigate(linkValue);
    };
    const currentPath = location.pathname;

    const chapters = useMemo(()=>{
        return [
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
    },[])

    useEffect(()=>{
        const selectedChapter = chapters.find(chapter => chapter.link === currentPath);

        if (selectedChapter) {
            setSelectedTitle(selectedChapter.title)
        }
    }, [chapters, currentPath])

    const handleSelect = option => {
        handleSelectChange(option.link)
    };

  return (
    <div className='flex flex-col md:flex-row items-center mb-10 gap-5 md:gap-0'>
        <div className='flex-1'>
            <h5 className='text[13px] md:text-[16px] lg:text-[22px] mb-1'>Select to View an Appendix</h5>
            <CustomDropdown options={chapters} onSelect={handleSelect} selectedTitle={selectedTitle}/>
        </div>
        <h5 className='text[13px] md:text-[16px] lg:text-[18px] md:text-[22px] flex-none px-4 w-32 text-center'>OR</h5>
        <div className='flex-none'>
            <div className='flex items-center gap-5 md:gap-9'>
                <span>
                    <svg width="116" height="116" viewBox="0 0 116 116" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="116" height="116" rx="10" fill="#E5252A" fillOpacity="0.1"/>
                        <path d="M58.009 62.3976L93.4188 47.7723C93.4585 47.7558 93.5014 47.75 93.5394 47.7359V47.5442C93.5394 47.2748 93.4735 47.0094 93.3475 46.7712C93.2214 46.533 93.039 46.3293 92.8162 46.1778C92.5934 46.0262 92.3368 45.9315 92.069 45.9018C91.8012 45.8721 91.5301 45.9083 91.2795 46.0073L90.2343 46.4205V38.6534C90.2343 38.3759 90.1644 38.1029 90.0311 37.8596C89.8978 37.6162 89.7054 37.4103 89.4716 37.2609C89.2378 37.1115 88.9702 37.0233 88.6933 37.0046C88.4165 36.9859 88.1394 37.0371 87.8876 37.1536C84.6453 38.6707 78.8059 41.2363 75.3611 41.8106C70.4033 42.6369 61.3141 44.2895 58.009 52.5524C54.7038 44.2895 45.6146 42.6369 40.6569 41.8106C37.2121 41.2322 31.3727 38.6707 28.1303 37.1528C27.8785 37.0363 27.6014 36.985 27.3246 37.0038C27.0478 37.0225 26.7801 37.1107 26.5463 37.2601C26.3125 37.4095 26.1201 37.6154 25.9868 37.8587C25.8536 38.1021 25.7837 38.3751 25.7837 38.6525V46.4197L24.7384 46.0065C24.4876 45.9074 24.2163 45.8712 23.9483 45.901C23.6803 45.9308 23.4236 46.0258 23.2007 46.1776C22.9779 46.3295 22.7955 46.5335 22.6696 46.772C22.5437 47.0105 22.4781 47.2762 22.4785 47.5459V47.7376C22.5182 47.7516 22.5611 47.7574 22.5992 47.774L58.009 62.3976Z" fill="#E5252A"/>
                        <path d="M93.7356 49.372L58.0093 64.1262L22.283 49.372C22.032 49.2686 21.7593 49.2286 21.4891 49.2556C21.2189 49.2826 20.9595 49.3757 20.7339 49.5267C20.5082 49.6777 20.3232 49.882 20.1952 50.1215C20.0672 50.361 20.0002 50.6283 20 50.8998V51.4468C19.9999 51.774 20.0969 52.0938 20.2787 52.3658C20.4605 52.6377 20.719 52.8496 21.0213 52.9746L50.3306 65.0806L29.4197 76.6172C29.2591 76.7057 29.1324 76.8451 29.0597 77.0134C28.987 77.1818 28.9723 77.3695 29.018 77.5471C29.0638 77.7247 29.1673 77.882 29.3122 77.9943C29.4572 78.1066 29.6354 78.1675 29.8188 78.1674H38.1941C38.7267 78.1674 39.2514 78.0387 39.7235 77.7922L58.0093 68.2519L76.2951 77.7922C76.7673 78.0387 77.292 78.1674 77.8246 78.1674H86.1999C86.3833 78.1677 86.5616 78.1069 86.7068 77.9947C86.8519 77.8825 86.9555 77.7251 87.0013 77.5475C87.0472 77.3699 87.0326 77.182 86.9599 77.0136C86.8872 76.8452 86.7605 76.7057 86.5998 76.6172L65.688 65.0806L94.9974 52.9746C95.2997 52.8496 95.5582 52.6377 95.74 52.3658C95.9218 52.0938 96.0188 51.774 96.0187 51.4468V50.8998C96.0187 50.6282 95.9518 50.3608 95.8238 50.1212C95.6959 49.8816 95.5109 49.6772 95.2852 49.5262C95.0594 49.3751 94.8 49.282 94.5297 49.2551C94.2594 49.2282 93.9867 49.2684 93.7356 49.372Z" fill="#E5252A"/>
                    </svg>
                </span>
                <h5 className='text[13px] md:text-[16px] lg:text-[18px] max-w-[370px]'>Read the Authorized English version of the Quran online</h5>
            </div>
        </div>
    </div>
  )
}

export default SubPageHeader