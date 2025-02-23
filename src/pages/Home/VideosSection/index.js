import React, {useState} from 'react'
import PlayIcon from '../../../assets/images/play-icon.svg'
import { Link } from 'react-router-dom'
import VideoModal from '../../../components/VideoModal'
import './index.scss'

const VideosSection = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedVideoId, setSelectedVideoId] = useState('');

    const openModal = (videoId) => {
        setSelectedVideoId(videoId);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }
    const getThumbnailUrl = (videoId) =>{
        if(videoId){
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
            return thumbnailUrl
        }
    }
    const getVideoID = (videoURL) => {
        if(videoURL){
            const urlObj = new URL(videoURL);
            const params = new URLSearchParams(urlObj.search);
            const id = params.get('v');
            if (id) {
                return id
            } else {
                console.error('Video ID not found');
            }
        }
    }

    const videos = [
        {
            title: 'Signature of the Creator',
            link: 'https://www.youtube.com/watch?v=EJtIMDhJTsI',
            duration: '27min'
        },
        {
            title: 'The Great Debate',
            link: 'https://www.youtube.com/watch?v=dWVsaSy9HXg',
            duration: '90min'
        },
        {
            title: 'King of Chaos',
            link: 'https://www.youtube.com/watch?v=ELIVBSzHWxQ',
            duration: '60min'
        },
        {
            title: 'Witness A Miracle (38min) and World News Bulletin',
            link: 'https://www.youtube.com/watch?v=E-cGpmERYRE',
            duration: '12min'
        },
        {
            title: 'Mathematical Miracle of Quran',
            link: 'https://www.youtube.com/watch?v=-empPPtMV1o',
            duration: '60min'
        },
        {
            title: 'Principles of Contact Prayer',
            link: 'https://www.youtube.com/watch?v=oBbk8xS7TBc',
            duration: '90min'
        }
    ]
  return (
    <section className='videos-section py-11'>
        <div className='section-content content-container text-center'>
            <h5 className='text-center text-primary'>Checkout Some Videos</h5>
            <h2 className='text-center text-grey2'>Enlightening Videos</h2>
            <div className='flex flex-col sm:flex-row videos-con mt-[50px]'>
                {videos && videos.map((video, index) => {
                    const videoId = getVideoID(video.link);
                    return (
                        <div className='video-item' onClick={() => openModal(videoId)} key={index}>
                            <div className='video-thumbnail'>
                                <img src={getThumbnailUrl(videoId)} alt="YouTube Thumbnail" />
                            </div>
                            <button className='play-btn'>
                                <img src={PlayIcon} alt='Play' />
                            </button>
                            <div className='video-details'>
                                <span className='video-title'>{video.title}</span>
                                <span className='video-duration'>{video.duration}</span>
                            </div>
                        </div>
                    );
                })}
            </div>
            <Link to='/audio-video' className='btn btn-primary inline-block mt-9'>View More</Link>
        </div>
        <VideoModal videoID={selectedVideoId} modalIsOpen={modalIsOpen} closeModal={closeModal} contentLabel={'Video Modal'}/>
    </section>
  )
}

export default VideosSection