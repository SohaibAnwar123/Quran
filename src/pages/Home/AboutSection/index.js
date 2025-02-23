import React from "react";
import AboutImg from "../../../assets/images/book-flower.jpeg";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <section className="about-section py-12">
      <div className="section-content content-container">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center">
          <div className="flex-1 about-img md:pr-12">
            <img
              src={AboutImg}
              className="w-full object-cover rounded-[10px]"
              alt="About Quran Alone"
            />
          </div>
          <div className="flex-1 about-text md:pr-12">
            <h5 className="text-primary mb-1">The Holy Quran</h5>
            <h4 className="text-black">The Authorized English Quran</h4>
            <p className="text-black">
              This is a reprint of the first printing (1992) after Dr. Rashad
              Khalifa's death.
              <br />
              Unlike some versions that are in circulation, no changes have been
              made to the original text besides formatting and publisher
              information. Please select the softcover or luxurious hardcover
              version from the drop-down menu.
            </p>
            <div className="flex flex-col sm:flex-row gap-[25px] mt-[14px]">
              <Link
                to="/quran-reader"
                className="btn btn-sm btn-secondary text-center"
              >
                Read Online
              </Link>
              <a
                rel="noreferrer"
                href="https://www.quranalone.com/public-assets/documents/quran-english.pdf"
                target="_blank"
                className="btn btn-sm btn-primary text-center"
              >
                Download Full PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
