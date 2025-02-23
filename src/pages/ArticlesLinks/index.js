import React, { useState } from "react";
import PageBanner from "../../layout/PageBanner";
import bannerUrl from "../../assets/images/articles-links.png";
import submitterImg from "../../assets/images/newsletter.png";
import "./index.scss";

const ArticlesLinks = () => {
  const [activeTab, setActiveTab] = useState("1990");

  const articles = [
    {
      link: "http://www.quranalone.com/public-assets/pdf/61_1990_01.pdf",
      category: "1990",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/62_1990_01.pdf",
      category: "1990",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/63_1990_02.pdf",
      category: "1990",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/64_1990_03.pdf",
      category: "1990",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/49_1989_01.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/50_1989_02.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/51_1989_03.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/52_1989_04.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/53_1989_05.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/54_1989_06.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/55_1989_07.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/56_1989_08.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/57_1989_09.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/58_1989_10.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/59_1989_11.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/60_1989_12.pdf",
      category: "1989",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/36_1988_01.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/37_1988_02.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/38_1988_03.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/39_1988_04.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/40_1988_05.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/41_1988_05_bulletin.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/42_1988_06.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/43_1988_07.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/44_1988_08.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/45_1988_09.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/46_1988_10.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/47_1988_11.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/48_1988_12.pdf",
      category: "1988",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/24_1987_01.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/25_1987_02.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/26_1987_03.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/27_1987_04.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/28_1987_05.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/29_1987_06.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/30_1987_07.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/31_1987_08.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/32_1987_09.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/33_1987_10.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/34_1987_11.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/35_1987_12.pdf",
      category: "1987",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/12_1986_01.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/13_1986_02.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/14_1986_03.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/15_1986_04.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/16_1986_05.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/17_1986_06.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/18_1986_07.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/19_1986_08.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/20_1986_09.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/21_1986_10.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/22_1986_11.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/23_1986_12.pdf",
      category: "1986",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/01_1985_02.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/02_1985_03.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/03_1985_04.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/04_1985_05.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/05_1985_06.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/06_1985_07.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/07_1985_08.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/08_1985_09.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/09_1985_10.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/10_1985_11.pdf",
      category: "1985",
    },
    {
      link: "http://www.quranalone.com/public-assets/pdf/11_1985_12.pdf",
      category: "1985",
    },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const filteredData =
    activeTab === 1990
      ? articles
      : articles.filter((item) => item.category === activeTab);
  function getFileName(url) {
    const parts = url.split("/");
    return parts[parts.length - 1];
  }

  return (
    <div className="articles-links-page">
      <PageBanner bgUrl={bannerUrl} title={"Articles & Links"} />
      <div className="page-content content-container">
        <section className="newsletter-section py-8">
          <div className="section-content ">
            <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center">
              <div className="flex-1 about-text md:pr-6 md:ps-0">
                <h5 className="text-end text-primary mb-1">
                  Latest News & Updates
                </h5>
                <h4 className="text-end text-black">Submitter's Perspective</h4>
                <h6 className="text-end text-poppins text-black mt-[30px] max-w-[500px] ms-auto">
                  A monthly newsletter produced by God's Messenger of the
                  Covenant, Dr. Rashad Khalifa, from 1985 to 1990.
                </h6>
                <h6 className="text-end text-poppins text-black mt-[17px] max-w-[500px] ms-auto">
                  All files are in PDF format.
                </h6>
              </div>
              <div className="flex-1 about-img md:ps-10 md:pr-6">
                <img
                  src={submitterImg}
                  className="w-full rounded-[10px] h-auto md:h-[auto] xl:h-[432px] object-cover"
                  alt="About Quran Alone"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="article-items-section my-[40px] min-h-[450px]">
          <div className="section-tabs">
            <button
              className={activeTab === "1990" ? "active" : ""}
              onClick={() => handleTabClick("1990")}
            >
              1990
            </button>
            <button
              className={activeTab === "1989" ? "active" : ""}
              onClick={() => handleTabClick("1989")}
            >
              1989
            </button>
            <button
              className={activeTab === "1988" ? "active" : ""}
              onClick={() => handleTabClick("1988")}
            >
              1988
            </button>
            <button
              className={activeTab === "1987" ? "active" : ""}
              onClick={() => handleTabClick("1987")}
            >
              1987
            </button>
            <button
              className={activeTab === "1986" ? "active" : ""}
              onClick={() => handleTabClick("1986")}
            >
              1986
            </button>
            <button
              className={activeTab === "1985" ? "active" : ""}
              onClick={() => handleTabClick("1985")}
            >
              1985
            </button>
          </div>
          <div className="tab-content gap-8 p-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {filteredData.map((item, index) => (
              <div key={index} className="file-link-item">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="file-link"
                >
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16.4002 0H37.7975L55.9324 18.9026V55.6682C55.9324 60.2739 52.2063 64 47.6165 64H16.4002C11.7945 64 8.06836 60.2739 8.06836 55.6682V8.3318C8.06828 3.72612 11.7944 0 16.4002 0Z"
                      fill="#E5252A"
                    />
                    <path
                      opacity="0.302"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M37.7822 0V18.7586H55.9332L37.7822 0Z"
                      fill="white"
                    />
                    <path
                      d="M17.3281 47.7521V36.062H22.3017C23.533 36.062 24.5086 36.3978 25.2442 37.0854C25.9798 37.7571 26.3477 38.6687 26.3477 39.8041C26.3477 40.9395 25.9798 41.8511 25.2442 42.5227C24.5086 43.2104 23.533 43.5462 22.3017 43.5462H20.3186V47.7521H17.3281ZM20.3186 41.0035H21.9658C22.4136 41.0035 22.7654 40.9076 23.0053 40.6837C23.2452 40.4758 23.3732 40.1879 23.3732 39.8042C23.3732 39.4204 23.2453 39.1325 23.0053 38.9246C22.7655 38.7007 22.4137 38.6048 21.9658 38.6048H20.3186V41.0035ZM27.579 47.7521V36.062H31.7209C32.5365 36.062 33.3041 36.1739 34.0238 36.4138C34.7434 36.6536 35.3991 36.9895 35.9748 37.4533C36.5505 37.901 37.0143 38.5087 37.3501 39.2764C37.6699 40.044 37.8459 40.9236 37.8459 41.915C37.8459 42.8906 37.67 43.7701 37.3501 44.5377C37.0143 45.3053 36.5505 45.913 35.9748 46.3608C35.399 46.8245 34.7434 47.1603 34.0238 47.4003C33.3041 47.6401 32.5365 47.7521 31.7209 47.7521H27.579ZM30.5055 45.2094H31.3691C31.8328 45.2094 32.2646 45.1615 32.6644 45.0495C33.0482 44.9376 33.4161 44.7616 33.7679 44.5218C34.1037 44.2819 34.3756 43.946 34.5675 43.4983C34.7594 43.0505 34.8554 42.5227 34.8554 41.915C34.8554 41.2913 34.7594 40.7636 34.5675 40.3159C34.3756 39.8681 34.1037 39.5323 33.7679 39.2924C33.4161 39.0525 33.0483 38.8766 32.6644 38.7647C32.2646 38.6527 31.8328 38.6047 31.3691 38.6047H30.5055V45.2094ZM39.3491 47.7521V36.062H47.665V38.6047H42.3396V40.4757H46.5935V43.0025H42.3396V47.7521H39.3491Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <div className="file-name text-center">
                  {getFileName(item.link)}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ArticlesLinks;
