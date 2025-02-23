import React from 'react'
import { Link } from 'react-router-dom'

const LinkButtonPrev = ({btnLink, btnText}) => {
  return (
    <Link to={btnLink} className='flex items-center border-[1px] border-[#FF9822] rounded-[10px] px-[27px] py-[15px] text-[10px] md:text-[14px] lg:text-[16px] text-black font-medium leading-normal gap-[10px]'>
        <span>
            <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 31 28" width="28" height="25">
                <path className="a" d="m20.8 13.8l9.6-10.7q0.8-1 0.2-2-0.7-1.1-2.2-1.1-0.6 0-1.2 0.2-0.5 0.2-0.8 0.6l-11.6 13 11.6 12.9q0.3 0.4 0.8 0.6 0.6 0.2 1.2 0.2 1.5 0 2.1-1 0.7-1.1-0.1-2.1zm-14.7 0l9.6-10.6q0.8-1 0.2-2.1-0.7-1-2.2-1-0.6 0-1.2 0.2-0.5 0.2-0.8 0.6l-11.6 12.9 11.6 13q0.3 0.4 0.8 0.6 0.6 0.2 1.2 0.2 1.5 0 2.1-1.1 0.7-1-0.1-2z" fill="#FF9822"/>
            </svg>
        </span>
        {btnText}
    </Link>
  )
}

export default LinkButtonPrev