import React from "react";
import PageBanner from "../../layout/PageBanner";
import bannerUrl from "../../assets/images/contact-us.jpeg";
import ContactImg from "../../assets/images/email-photo.png";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <PageBanner bgUrl={bannerUrl} title={"Contact Us"} />
      <div className="flex flex-col md:flex-row items-center pt-[60px] gap-[50px] md:pt-[100px] pb-[80px] md:pb-[120px] content-container">
        <div className="contact-img">
          <img src={ContactImg} alt="Contact" />
        </div>
        <div className="contact-text">
          <h5 className="text-primary">Email us at:</h5>
          <h4 className="text-black text-[16px] sm:text-[22px] xl:text-[28px]">
            worshipGodalone@gmail.com
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
