import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function VideoModal({videoID, modalIsOpen, closeModal, contentLabel}) {
  let customStyles = {}
  if(window.innerWidth > 768){
    customStyles ={
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          zIndex: '999'
        },
        content: {
          width: '80%',
          height: 'auto',
          maxWidth: '992px',
          color: '#000',
          background: '#fff',
          borderRadius: '12px',
          padding: '0',
          margin:'0 auto'
        }
    }
  }
  else{
    customStyles ={
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.2)',
        zIndex: '999'
      },
      content: {
        width: 'auto',
        height: '60vw',
        maxWidth: '1080px',
        color: '#000',
        background: '#fff',
        borderRadius: '12px',
        padding: '0',
        margin:'0 auto'
      }
    }
  }

  return (
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel={contentLabel}
        style={customStyles}
      >
        <iframe width="100%" height="100%" 
        src={`https://www.youtube-nocookie.com/embed/${videoID}`}
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
      </Modal>
  );
}

export default VideoModal;
