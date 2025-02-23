import React, { useState } from "react";
import PageBanner from "../../layout/PageBanner";
import bannerUrl from "../../assets/images/video-photo.jpeg";
import PlayIcon from "../../assets/images/play-icon.svg";
import VideoModal from "../../components/VideoModal";
import "./index.scss";

const AudioVideo = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [selectedVideoId, setSelectedVideoId] = useState("");

  const openModal = (videoId) => {
    setSelectedVideoId(videoId);
    setIsOpen(true);
  };

  function closeModal() {
    setIsOpen(false);
  }
  const getThumbnailUrl = (videoId) => {
    if (videoId) {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/0.jpg`;
      return thumbnailUrl;
    }
  };
  const getVideoID = (videoURL) => {
    if (videoURL) {
      const urlObj = new URL(videoURL);
      const params = new URLSearchParams(urlObj.search);
      const id = params.get("v");
      if (id) {
        return id;
      } else {
        console.error("Video ID not found");
      }
    }
  };

  const videos = [
    {
      title: "Signature of the Creator",
      link: "https://www.youtube.com/watch?v=EJtIMDhJTsI",
      duration: "27min",
    },
    {
      title: "The Great Debate",
      link: "https://www.youtube.com/watch?v=dWVsaSy9HXg",
      duration: "90min",
    },
    {
      title: "King of Chaos",
      link: "https://www.youtube.com/watch?v=ELIVBSzHWxQ",
      duration: "60min",
    },
    {
      title: "Witness A Miracle (38min) and World News Bulletin",
      link: "https://www.youtube.com/watch?v=E-cGpmERYRE",
      duration: "12min",
    },
    {
      title: "Mathematical Miracle of Quran",
      link: "https://www.youtube.com/watch?v=-empPPtMV1o",
      duration: "60min",
    },
    {
      title: "Principles of Contact Prayer",
      link: "https://www.youtube.com/watch?v=oBbk8xS7TBc",
      duration: "90min",
    },
    {
      title: "Principles of Friday Prayer",
      link: "https://www.youtube.com/watch?v=ohFKsHXM568",
      duration: "60min",
    },
    {
      title: "Friday Sermon, God Is Doing Everything - Part I",
      link: "https://www.youtube.com/watch?v=o_WfE1OshIk",
      duration: "70min",
    },
    {
      title: "Friday Sermon, God Is Doing Everything - Part II",
      link: "https://www.youtube.com/watch?v=iYEmqt9zjMo",
      duration: "47min",
    },
    {
      title: "Who is God and What Life Is All About",
      link: "https://www.youtube.com/watch?v=OANBzSqko_0",
      duration: "72min",
    },
    {
      title: "Essentials of Submission (Islam) and The Computer Speaks",
      link: "https://www.youtube.com/watch?v=NsZr94Lfjv0",
      duration: "51min",
    },
    {
      title: "Old Message, New Messenger",
      link: "https://www.youtube.com/watch?v=_MgzxIJKorg",
      duration: "79min",
    },
    {
      title: "Evolution Vs. Creation: The Final Argument",
      link: "https://www.youtube.com/watch?v=ILaHTACjV1k",
      duration: "61min",
    },
    {
      title: "Conference 1989",
      link: "https://www.youtube.com/watch?v=8u_jHZxZHro",
      duration: "56min",
    },
    {
      title: "Dr. Khalifa's Friday Sermons",
      link: "https://www.youtube.com/watch?v=UouRqqmb7vU",
      duration: "66min",
    },
    {
      title: "Dr. Khalifa's Friday Sermons",
      link: "https://www.youtube.com/watch?v=z4m9qBB9qaU",
      duration: "85min",
    },
    {
      title: "Dr. Khalifa's Friday Sermons",
      link: "https://www.youtube.com/watch?v=Qw0yy-tQgas",
      duration: "87min",
    },
    {
      title: "Dr. Khalifa's Friday Sermons",
      link: "https://www.youtube.com/watch?v=SOSm9-QAm40",
      duration: "84min",
    },
    {
      title: "Dr. Khalifa's Friday Sermons",
      link: "https://www.youtube.com/watch?v=UetFQPwuaGA",
      duration: "87min",
    },
    {
      title: "Dr. Khalifa's Friday Sermons",
      link: "https://www.youtube.com/watch?v=j6WwnOk44MU",
      duration: "75min",
    },
    {
      title: "Dr. Khalifa's Friday Sermons",
      link: "https://www.youtube.com/watch?v=a3U2yi6d7aU",
      duration: "70min",
    },
  ];

  return (
    <div className="audio-video-page">
      <PageBanner bgUrl={bannerUrl} title={"Audio & Video"} />
      <div className="page-content content-container text-center pt-[30px] md:pt-[44px] pb-[40px] md:pb-[84px]">
        <h5 className="text-center text-primary">Checkout Some Videos</h5>
        <h2 className="text-center text-grey2">Enlightening Videos</h2>
        <div className="flex flex-col sm:flex-row videos-con mt-[50px]">
          {videos &&
            videos.map((video, index) => {
              const videoId = getVideoID(video.link);
              return (
                <div
                  className="video-item"
                  onClick={() => openModal(videoId)}
                  key={index}
                >
                  <div className="video-thumbnail">
                    <img
                      src={getThumbnailUrl(videoId)}
                      alt="YouTube Thumbnail"
                    />
                  </div>
                  <button className="play-btn">
                    <img src={PlayIcon} alt="Play" />
                  </button>
                  <div className="video-details">
                    <span className="video-title">{video.title}</span>
                    <span className="video-duration">{video.duration}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      <VideoModal
        videoID={selectedVideoId}
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        contentLabel={"Video Modal"}
      />
    </div>
  );
};

export default AudioVideo;
