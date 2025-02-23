import React from 'react'
const chapters = ['The Key', 'The Heifer', 'The Amramites', 'Women', 'The Feast', 'Livestock', 'The Purgatory', 'Spoils of War', 'Ultimatum', 'Jonah', 'Hood', 'Joseph', 'The Thunder', 'Abraham', 'Al-Hijr Valley', 'The Bee', 'The Children of Israel', 'The Cave', 'Mary', 'Ta-Ha', 'The Prophets', 'The Pilgrimage', 'The Believers', 'Light', 'The Statute Book', 'The Poets', 'The Ant', 'History', 'The Spider', 'The Romans', 'Luqman', 'The Prostration', 'The Parties', 'Sheba', 'Initiator', 'Ya-Sin', 'The Arrangers', 'Sad', 'The Throngs', 'Forgiver', 'Detailed', 'Consultation', 'Ornaments', 'Smoke', 'Kneeling', 'The Dunes', 'Muhammad', ' Victory', 'The Walls', 'Q', ' Drivers of the Winds', ' Mount Sinai', 'The Stars', ' The Moon', 'Most Gracious', 'The Inevitable', 'Iron', 'The Debate', 'Exodus', 'The Test', 'The Column', 'Friday', 'The Hypocrites', 'Mutual Blaming', 'Divorce', 'Prohibition', 'Kingship', 'The Pen', 'The Pen', 'The Heights', 'Noah', 'The Jinn', 'Cloaked', 'The Hidden Secret', 'Resurrection', 'The Human', 'Dispatched', 'The Event', 'The Snatchers', 'He Frowned', 'The Rolling', 'The Shattering', 'The Cheaters', 'The Rupture', 'The Galaxies', 'The Bright Star', 'The Most High', 'The Overwhelming', 'The Dawn', 'The Town', 'The Sun', 'The Night', 'The Forenoon', 'Cooling the Temper', 'The Fig', 'The Embryo', ' Destiny', 'Proof', 'The Quake', 'The Gallopers', 'The Shocker', 'Hoarding', 'The Afternoon', 'The Backbiter', ' The Elephant', ' Quraish Tribe', 'Charity', 'Bounty', 'The Disbelievers', 'Triumph', 'Thorns', 'Absoluteness', 'The Daybreak', ' People'];


const sideBarOpen = () => {
  document.querySelector('.chapters-list').classList.toggle("open");
}


const ChaptersList = ({ onSelectChapter }) => {
  const handleClick = () => {
    // Trigger click event on .chapters-list
    sideBarOpen();
  };
  return (
    <>
      <a className='md:hidden flex gap-2 bg-[#FF9822] p-4 shadow items-center h-[20px] absolute z-10 left-[0px]' onClick={sideBarOpen}>
        <p className='leading-none' style={{whiteSpace: 'nowrap'}}>Chapters List</p>
      <svg className='w-[10px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
      </a>
      <ul className={`chapters-list flex flex-col pl-[12px] list-decimal list-inside overflow-x-hidden overflow-y-auto pr-[20px] md:relative absolute max-[575px]:-translate-x-full bg-white`}>
        {chapters.map((name, index) => (
          <li key={index} className='pb-[8px] last-of-type:pb-0 leading-tight'><a className='underline cursor-pointer'  onClick={() => { onSelectChapter(index + 1); handleClick(); }}>
            {name}
          </a>
          </li>
        ))}
      </ul>
    </>
  )
}

export default ChaptersList
