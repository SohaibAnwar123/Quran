import React from "react";
import prayerStepImg1 from "../../../assets/images/prayer-step-1.svg";
import prayerStepImg2 from "../../../assets/images/prayer-step-2.svg";
import prayerStepImg3 from "../../../assets/images/prayer-step-3.png";
import prayerStepImg7 from "../../../assets/images/prayer-step-7.png";
import prayerStepImg8 from "../../../assets/images/prayer-step-8.svg";
import prayerStepImg9 from "../../../assets/images/prayer-step-9.png";
import prayerStepImg10 from "../../../assets/images/prayer-step-10.svg";
import prayerStepImg11 from "../../../assets/images/prayer-step-11.png";
import "./index.scss";

const HowToPerformSection = () => {
  return (
    <>
      <section className="how-to-section">
        <div className="bg-banner-section">
          <div className="section-content content-container py-[60px] md:py-[95px]">
            <h4 className="text-center text-primary mb-11 text-[18px] md:text-[28px] xl:text-[32px]">
              How to Perform the Contact Prayers (Salat)
            </h4>
            <h5 className="text-center text-white">
              Watch a video clips showing the Noon Prayer, Dawn Prayer, or
              Sunset Prayer being performed. <br />
            </h5>
          </div>
        </div>
        <div className="notice-section py-9 bg-[#E5252A1A]">
          <div className="content-container gap-5 md:gap-0 grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-col items-center">
              <span className="mb-[11px]">
                <svg
                  width="52"
                  height="52"
                  viewBox="0 0 52 52"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26 1.625C12.545 1.625 1.625 12.545 1.625 26C1.625 39.455 12.545 50.375 26 50.375C39.455 50.375 50.375 39.455 50.375 26C50.375 12.545 39.455 1.625 26 1.625ZM26 40.625C24.2125 40.625 22.75 39.1625 22.75 37.375C22.75 35.5875 24.2125 34.125 26 34.125C27.7875 34.125 29.25 35.5875 29.25 37.375C29.25 39.1625 27.7875 40.625 26 40.625ZM29.7213 15.4212L28.6325 28.4538C28.5188 29.8188 27.3813 30.875 26 30.875C24.6187 30.875 23.4813 29.8188 23.3675 28.4538L22.2787 15.4212C22.1 13.2437 23.8062 11.375 26 11.375C26.4908 11.375 26.9768 11.4717 27.4303 11.6595C27.8837 11.8473 28.2958 12.1226 28.6428 12.4697C28.9899 12.8167 29.2652 13.2288 29.453 13.6822C29.6408 14.1357 29.7375 14.6217 29.7375 15.1125C29.7375 15.21 29.7375 15.3237 29.7213 15.4212Z"
                    fill="#E5252A"
                  />
                </svg>
              </span>
              <h4 className="text-center text-red">Importance Notice:</h4>
            </div>
            <div>
              <ol className="list-decimal">
                <li>
                  The format of the Afternoon & Night prayers are identitcal to
                  the Noon Prayer.
                </li>
                <li>
                  The narrator in the clip for the dawn prayer uses the words "I
                  intend to do the Morning Contact Prayer. Nawwaytu Salat
                  As-subh."This was later corrected, and you should use the
                  terms the "Dawn Contact Prayer" or "Salat Al-Fajr." God calls
                  it the Dawn Prayer (Al-Fajr in Arabic) in 24:58.
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="prayer-steps content-container xl:px-[117px] pb-[58px] pt-[68px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[26px] gap-x-[32px] md:gap-x-[62px]">
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg1}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                Face the direction of <br />
                Mecca (Qiblah)
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">1</span>
              <p className="text-[12px] text-center text-white font-semibold">
                This is an organizational point decreed by God in 2:125. God
                wills that all Submitters must face the same direction when they
                observe the Contact Prayers. In the U.S., the direction is
                slightly South of East.
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg2}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                The Intention
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">2</span>
              <p className="text-[12px] text-center text-white font-semibold">
                In your own language, secretly or audibly, state your intention
                that you are about to observe the Contact Prayer. Remember to
                state the time (Dawn, Noon, Afternoon, Sunset, or Night).
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg3}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                Raise your hands to the <br /> sides of your face
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">3</span>
              <p className="text-[12px] text-center text-white font-semibold">
                In your own language, secretly or audibly, state your intention
                that you are about to observe the Contact Prayer. Remember to
                state the time (Dawn, Noon, Afternoon, Sunset, or Night).
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg3}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                Say, "Allahu Akbar"
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">4</span>
              <p className="text-[12px] text-center text-white font-semibold">
                As you raise your hands to the sides of your face, then move
                them down to your sides in a continuous motion, you say, "Allahu
                Akbar" (God is Great). This opens up the prayer. You are in
                contact with your Creator.
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg2}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                The Standing Position
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">5</span>
              <p className="text-[12px] text-center text-white font-semibold">
                You are now standing with your arms resting naturally at your
                sides. Some people place the left hand on the stomach, and the
                right hand on top of the left hand. Either position is correct -
                you may place your hands on your stomach while standing, or you
                may let your arms hand down by your sides.
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg2}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                Recite "The Key"
                <br />
                (Sura 1) in Arabic
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">6</span>
              <p className="text-[12px] text-center text-white font-semibold">
                We learn from 2:37 that God gives us the words by which we
                establish contact with Him. We must utter the specific sounds
                dictated in "The Key." A translation of "The Key" would be
                human-made. The Arabic sounds of "The Key" represent a numerical
                combination that opens the treasure. Like a telephone number,
                unless the specific numbers are dialed, contact cannot be
                established. This is all the Arabic you need. Everything else
                can be said in your own language. Reciting "The Key" in Arabic
                unifies all Submitters of the world, regardless of their
                languages.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="the-key-section bg-blue-10 py-10">
        <div className="section-content content-container gap-y-5 lg:ps-[160px] lg:pe-[100px] grid grid-cols-1 lg:grid-cols-3 items-center">
          <div className="section-title md:col-span-1">
            <h3 className="text-blue">The Key:</h3>
          </div>
          <div className="section-text md:col-span-2">
            <ol className="list-decimal ms-5">
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                You can Listen to each verse of The Key (Al-Fatehah) being
                recited by clicking the "Listen" link next to the verse.
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                The Key (Al-Fatehah) is also available for download in mp3
                format.
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                BISMIL LAAHIR RAHMAANIR RAHEEM. [Listen] (In the name of God,
                Most Gracious, Most Merciful.)
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                AL HAMDU LILLAAHI RABBIL 'AALAMEEN. [Listen] (Praise be to God,
                Lord of the universe.)
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                AR RAHMAANIR RAHEEM. [Listen] (Most Gracious, Most Merciful.)
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                MAALIKI YAWMID DEEN. [Listen] (Master of the Day of Judgment.)
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                EYYAAKA NA'BUDU, WA EYYAAKA NASTA'EEN. [Listen] (Only You we
                worship; only You we ask for help.)
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                EHDENAS SIRAATAL MUSTAQEEM. [Listen] (Guide us in the straight
                path.) [Guide us in the right path;]
              </li>
              <li className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
                SIRAATAL LAZINA AN'AMTA 'ALAYHIM [Listen] (The path of those
                whom You blessed)GHAYRIL MAGHDOOBI 'ALAYHIM WALADDAALLEEN.
                [Listen] (Not of those who incur wrath, nor the strayers.)
              </li>
            </ol>
            <p className="text-black font-meriweather text-[13.5px] font-bold leading-[147.85%]">
              Since "The Key" is recited 17 times a day, it will become easy for
              you to recite and understand in a few weeks; it will become like
              your mother tongue.
            </p>
          </div>
        </div>
      </section>
      <section className="how-to-section">
        <div className="prayer-steps content-container xl:px-[117px] pb-[58px] pt-[68px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-[26px] gap-x-[32px] md:gap-x-[62px]">
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg7}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                The bowing <br /> position (Rukoo`)
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">7</span>
              <p className="text-[12px] text-center text-white font-semibold">
                After reciting "The Key" while standing, you bow down into the
                position of Rukoo`. As shown in the figure, you bow down from
                the waist, keep the knees straight, and place your hands on your
                knees. Your eyes look at a point about 2 feet in front of you.
                As you move from the standing position to the bowing position
                you say, "Allahu Akbar." While bowing you say, "Subhaana
                Rabbiyal 'Azeem" or "Glory be to my Lord, the Most Great."
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg8}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                Stand up
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">8</span>
              <p className="text-[12px] text-center text-white font-semibold">
                As you stand up from the bowing position to the standing
                position you say, "Sami `Allahu Liman Hamidah," or "God responds
                to those who praise Him." You remain in the standing position
                only a second, then you fall prostrate. As you go from the
                standing position to the prostration position you say, "Allahu
                Akbar."
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg9}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                The Prostration
                <br />
                Position (Sujood)
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">9</span>
              <p className="text-[12px] text-center text-white font-semibold">
                From the standing position you go down on your knees, then place
                your forehead on the floor about 1-2 feet in front of your knees
                (see figure). During prostration you say, "Subhaana Rabbiyal
                A`laa" or "Glory be to my Lord, the Most High."
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg10}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                The Sitting Position
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">10</span>
              <p className="text-[12px] text-center text-white font-semibold">
                As you sit up from the prostration position, you say, "Allahu
                Akbar." You remain in the sitting position only a second, then
                you go down for the second prostration.As you go down for the
                second prostration you say, "Allahu Akbar." During the second
                prostration you say, "Subhanna Rabbiyal A`laa." Once you
                complete the second prostration, you have completed one full
                unit (Rak`ah).
              </p>
            </div>
          </div>
          <div className="step-item flex flex-col items-center">
            <div className="mb-[38px] min-w-[138px] min-h-[138px] max-w-[138px] max-h-[138px] border-[2px] border-[#FF8800] rounded-[50%] overflow-hidden">
              <img
                src={prayerStepImg8}
                alt="Prayer Step"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h6 className="text-grey2 text-center text-[16px] min-h-[50px]">
                Stand up for the second
                <br />
                unit
              </h6>
            </div>
            <div className="bg-primary p-[25px] pt-[19px] mt-[40px] step-item-text">
              <span className="item-no">11</span>
              <p className="text-[12px] text-center text-white font-semibold">
                As you stand up you say, "Allahu Akbar."
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToPerformSection;
