import React from "react";
import { Link } from "react-router-dom";
import submitterImg from "../../../assets/images/submitter.jpeg";

const NewsletterSection = () => {
  return (
    <section className="newsletter-section py-8">
      <div className="section-content content-container">
        <div className="flex flex-col gap-10 md:gap-0 md:flex-row items-center">
          <div className="flex-1 about-text md:pr-6 md:ps-6">
            {/* <h5 className='text-end text-primary mb-1'>Latest News & Updates</h5> */}
            <h4 className="text-end text-black">Submitter's Perspective</h4>
            <h6 className="text-end text-poppins text-black mt-[30px] max-w-[447px] ms-auto">
              A monthly newsletter produced by God's Messenger of the Covenant,
              Dr. Rashad Khalifa, from 1985 to 1990.
            </h6>
            <div className="flex justify-end mt-[64px]">
              <Link to="/articles" className="btn btn-sm btn-primary">
                View the Newsletter Archive
              </Link>
            </div>
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
  );
};

export default NewsletterSection;
