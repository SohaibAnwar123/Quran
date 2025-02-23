import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChevronDownIcon from '../icons/ChevronDownIcon';

const CustomDropdown = ({ options, onSelect, selectedTitle}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  const handleSelect = (chapter) => {
    onSelect(chapter);
    toggleDropdown();
  };

  return (
    <div className="relative block" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className="h-[40px] md:h-[50px] pe-7 relative z-[1] rounded-[10px] border-[1px] border-[#686868] w-full px-[20px] text-left text-[14px] md:text-[18px] w-full max-w-[500px] focus:outline-none"
      >
        {selectedTitle}
        <span className='absolute right-2 top-3 md:top-4'>
            <ChevronDownIcon/>
        </span>
      </button>
      {isOpen && (
        <ul className="absolute left-0 z-10 w-[95%] mt-2 overflow-hidden overflow-y-auto bg-white rounded-[10px] border-[1px] border-[#686868] shadow max-h-60">
          {options.map(chapter => (
            <li key={chapter.link}>
              <button
                type="button"
                onClick={() => handleSelect(chapter)}
                className="w-full px-4 py-2 text-left hover:bg-gray-200 focus:outline-none"
              >
                {chapter.title}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

CustomDropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default CustomDropdown;
