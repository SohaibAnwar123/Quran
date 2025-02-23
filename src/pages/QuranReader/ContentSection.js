import React, { useEffect, useState, useRef } from 'react';

const ContentSection = ({ chapter, section, className, onFootnoteClick, onsuraClick }) => {
  const [content, setContent] = useState('');
  const contentRef = useRef(null);

  useEffect(() => {
    // Note the path starts with '/quran...' assuming the HTML files are in the public/quran directory.
    const filePath = `/quran/ch${chapter}${section === 'footnotes' ? 'fn' : ''}.html`;

    fetch(filePath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(htmlContent => {
        setContent(htmlContent);
         // Scroll to top whenever the chapter changes
         if(contentRef && contentRef.current){
          contentRef.current.scrollTop = 0;
        }
      })
      .catch(error => {
        console.error('Error fetching file:', error);
        setContent('Failed to load content.');
      });
  }, [chapter, section]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('target') === 'footnotes') {
        e.preventDefault();
        const footnoteId = target.getAttribute('href').split('#')[1];
        if (onFootnoteClick) onFootnoteClick(footnoteId);
      }
    };
    
    // Attach the event listener to the content div
    const contentDiv = contentRef.current;
    contentDiv.addEventListener('click', handleClick);

    // Clean up the event listener
    return () => {
      contentDiv.removeEventListener('click', handleClick);
    };
  }, [content, onFootnoteClick]);
  
  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('target') === 'suras') {
        e.preventDefault();
        const suraId = target.getAttribute('href').split('#')[1];
        if (onsuraClick) onsuraClick(suraId);
      }
    };
    
    // Attach the event listener to the content div
    const contentDiv = contentRef.current;
    contentDiv.addEventListener('click', handleClick);

    // Clean up the event listener
    return () => {
      contentDiv.removeEventListener('click', handleClick);
    };
  }, [content, onsuraClick]);



  return (
    <div ref={contentRef} className={`py-[5px] h-full overflow-y-auto content-section content-section-${section} ${className}`}>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ContentSection;
