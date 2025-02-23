import React, { useState, useEffect } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css";
import ChaptersList from './ChaptersList';
import ContentSection from './ContentSection';
import './quranReader.scss';

const QuranReader = () => {
  const [currentChapter, setCurrentChapter] = useState(1);
  const [containerHeight, setContainerHeight] = useState(window.innerHeight - 180); // Adjust based on your UI needs
  const [activeFootnoteId, setActiveFootnoteId] = useState(null);
  const [activeSuraId, setActiveSuraId] = useState(null);


  // Initialize the main content height to 70% of containerHeight
  const [mainContentHeight, setMainContentHeight] = useState(containerHeight * 0.7);

  useEffect(() => {
    const handleResize = () => {
      const updatedHeight = window.innerHeight - 180; // Recalculate on window resize
      setContainerHeight(updatedHeight);
      setMainContentHeight(updatedHeight * 0.7); // Maintain the 70% ratio on resize
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMainResize = (event, { size }) => {
    setMainContentHeight(size.height); // Directly set the new height from the resizable component
  };

  // Calculate the footnotes section height dynamically based on the main section
  const footnotesHeight = containerHeight - mainContentHeight;

  const resizeHandleSStyles = {
    right: '0',
    transform: 'translateY(-50%) rotate(315deg)',
    cursor: 'ew-resize',
    left: 'auto',
    top: '50%',
  };
  const resizeHandleSStyles1 = {
    transform: 'rotate(45deg)',
    cursor: 'n-resize',
    bottom: '-5px',
  };

  const handleFootnoteClick = (footnoteName) => {
    console.log(`Footnote clicked: ${footnoteName}`);
  
    setActiveFootnoteId(footnoteName); // Assuming this triggers the highlighting logic in the footnotes section
  
    setTimeout(() => {
      // Assuming '.footnotes-section' is a class identifying the container of your footnotes
      const footnotesSection = document.querySelector('.footnotes-section');
      if (footnotesSection) {
        // Use querySelectorAll with an attribute selector to find elements with the matching NAME attribute within the footnotes section
        const footnoteElements = footnotesSection.querySelectorAll(`[name="${footnoteName}"]`);
        if (footnoteElements.length > 0) {
          console.log('Footnote element found in footnotes section, attempting to scroll');
          const footnoteElement = footnoteElements[0]; // Assuming you want the first element with this name
          footnoteElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Highlight the footnote element
          footnoteElement.style.backgroundColor = 'rgba(255, 152, 34, 0.5)'; // Example highlight color
          setTimeout(() => {
            footnoteElement.style.backgroundColor = ''; // Remove highlight after some time
          }, 3000);
        } else {
          console.log('Footnote element not found in footnotes section');
        }
      }
    }, 100); // Adjust timing as necessary to allow for any asynchronous content loading
  };
  const handleSuraClick = (suraName) => {
    // console.log(`Footnote clicked: ${suraName}`);
  
    setActiveSuraId(suraName); // Assuming this triggers the highlighting logic in the footnotes section
    
    setTimeout(() => {
      // Assuming '.footnotes-section' is a class identifying the container of your footnotes
      const suraSection = document.querySelector('.sura-section');
      if (suraSection) {
        // Use querySelectorAll with an attribute selector to find elements with the matching NAME attribute within the footnotes section
        const suraElements = suraSection.querySelectorAll(`[name="${suraName}"]`);
        if (suraElements.length > 0) {
          const suraElement = suraElements[0]; // Assuming you want the first element with this name
          suraElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
          // Highlight the footnote element
          suraElement.style.backgroundColor = 'rgba(255, 152, 34, 0.5)'; // Example highlight color
          setTimeout(() => {
            suraElement.style.backgroundColor = ''; // Remove highlight after some time
          }, 3000);
        } else {
          console.log('sura element not found in footnotes section');
        }
      }
    }, 100); // Adjust timing as necessary to allow for any asynchronous content loading
  };
  
  return (
    <>
      <div className="mainHeaderPane flex overflow-hidden pt-[70px]">
        <ResizableBox
          className="resizeable-list"
          width={200}
          height={Infinity}
          axis="x"
          handle={
            <span
              className="react-resizable-handle react-resizable-handle-s"
              style={resizeHandleSStyles}
            />
          }
        >
          <ChaptersList onSelectChapter={setCurrentChapter} />
        </ResizableBox>

        <div className="content-sections flex-1 p-[8px]" style={{ height: `${containerHeight}px` }}>
          <ResizableBox
            className="resizeable-content mb-[5px] md:pt-0 pt-8"
            width={Infinity}
            height={mainContentHeight}
            axis="y"
            handle={
              <span
                className="react-resizable-handle react-resizable-handle-s"
                style={resizeHandleSStyles1}
              />
            }
            onResize={handleMainResize}
          >
            <ContentSection chapter={currentChapter} section="main" onFootnoteClick={handleFootnoteClick} className="sura-section" activeSuraId={activeSuraId} />
          </ResizableBox>

          {/* Directly using calculated height for the footnotes section */}
          <div className="content-section border-t border-black " style={{ height: `${footnotesHeight}px`, overflow: 'auto' }}>
            <ContentSection
              chapter={currentChapter}
              section="footnotes"
              activeFootnoteId={activeFootnoteId}
              className="footnotes-section"
              onsuraClick={handleSuraClick}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default QuranReader;