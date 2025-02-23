import React from "react";
import AblutionImg from "../../assets/images/ablution-img.jpeg";

const AblutionSection = () => {
  return (
    <section className="ablution-section">
      <div className="section-content content-container grid grid-cols-1 md:grid-cols-2 py-10">
        <div className="section-text pe-10">
          <h5 className="text-primary mb-[6px]">The Ablution</h5>
          <h4 className="text-grey2">Preparation for the Contact Prayer</h4>
          <h6 className="font-normal text-black mt-[13px] mb-[17px] pe-10">
            O you who believe, in preparation for the Contact Prayer, you shall
            <br />
            <span className="text-primary">(1)</span>&nbsp;wash your faces
            <br />
            <span className="text-primary">(2)</span>&nbsp;wash your arms to the
            elbows
            <br />
            <span className="text-primary">(3)</span>&nbsp;wipe your heads with
            wet hands
            <br />
            <span className="text-primary">(4)</span>&nbsp;wash your feet to the
            ankles
            <br />
          </h6>
          <h6 className="font-normal text-black">
            Watch a{" "}
            <a
              href="http://www.submission.info/practices/salat/video/ablution.ram"
              className="text-primary underline"
            >
              video clip showing the ablution being performed.
            </a>
          </h6>
        </div>
        <div className="section-img">
          <img
            src={AblutionImg}
            alt="Ablution"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="section-content content-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-9 py-10">
        <div className="rounded-[10px] border-[1px] border-[#CDCACA] px-[14px] pt-[53px] pb-11">
          <h6 className="text-primary font-meriweather text-center font-normal">
            The Major Ablution
          </h6>
          <p className="flex items-center text-center text-black h-[calc(100%-27px)] px-[24px] pt-[26px] text-[14px] leading-normal">
            Following any sexual activity that results in a climax
            (orgasm/ejaculation), one must bathe or take a shower (4:43).
          </p>
        </div>
        <div className="rounded-[10px] border-[1px] border-[#CDCACA] px-[14px] pt-[53px] pb-11">
          <h6 className="text-primary font-meriweather text-center font-normal">
            The Dry Ablution (Tayammum)
          </h6>
          <p className="flex items-center text-center text-black h-[calc(100%-27px)] px-[20px] pt-[26px] text-[14px] leading-normal">
            If water is not available, one must touch clean dry soil, then wipe
            his hands and face. This suffices as a substitute for ablution
            (4:43; 5:6).
          </p>
        </div>
        <div className="rounded-[10px] border-[1px] border-[#CDCACA] px-[14px] pt-[53px] pb-11">
          <h6 className="text-primary font-meriweather text-center font-normal">
            What Nullifies Ablution
          </h6>
          <p className="flex items-center text-center text-black h-[calc(100%-27px)] pt-[26px] text-[14px] leading-normal">
            Digestive excretions through the intestines, including gas, solids,
            or urine nullify ablution. Sleeping also nullifies ablution, since
            one becomes unaware. Thus, one may observe a number of Contact
            Prayers with one ablution, provided he or she does not go to the
            bathroom, pass gas, or fall asleep.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AblutionSection;
