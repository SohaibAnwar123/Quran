import React from "react";
import PageBanner from "./../../layout/PageBanner/index";
import bannerImg from "../../assets/images/ContactPrayers.png";
import aboutImg from "../../assets/images/ContactPrayers-1.png";
import frameImg from "../../assets/images/img-frame.png";
import AboutEssentialSection from "./AboutEssentialSection";
import callToImg from "../.././assets/images/call-to-prayer.jpeg";
import AblutionSection from "./AblutionSection";
import HowToPerformSection from "./HowPerformSection";
import prayerTimeImg1 from "../../assets/images/prayer-timings-1.png";
import prayerTimeImg2 from "../../assets/images/prayer-timings-2.png";
import prayerTimeImg3 from "../../assets/images/prayer-timings-3.png";
import "./index.scss";

const ContactPrayers = () => {
  return (
    <div className="contact-prayers-page">
      <PageBanner
        bgUrl={bannerImg}
        title={"Contact Prayers"}
        subTitle={"The Contact Prayers (Salat)"}
      />
      <div className="page-content content-container">
        <section className="about-section grid grid-cols-1 lg:grid-cols-2 gap-4 py-11">
          <div className="section-img h-100 pe-8 relative overflow-hidden">
            <img
              src={aboutImg}
              alt="Contact Prayers"
              className="h-full w-full object-cover rounded-[10px]"
            />
            <img
              src={frameImg}
              alt="Contact Prayers"
              className="absolute z-10 bottom-[-1%] left-[-18%]"
            />
          </div>
          <div className="section-text">
            <h5 className="text-primary">
              Step-by-step explanation of the 5 daily Contact Prayers. What to
              do & what to say.
            </h5>
            <h4 className="text-black">
              Abraham: Original Source of the Contact Prayers
            </h4>
            <p>
              The Quran teaches us in many suras that Submission (in Arabic,
              "Islam") is the religion of Abraham (please consult 2:135, 3:95,
              4:125, 6:161 and 22:78). Muhammad was a follower of Abraham, as we
              learn from 16:123. All religious practices in Submission (Islam)
              were given to us through Abraham; they include:
            </p>
            <ol className="list-decimal ms-5">
              <li> the five daily Contact Prayers (Salat),</li>
              <li>the obligatory charity (Zakat),</li>
              <li>the fasting during Ramadan, and</li>
              <li>the Hajj Pilgrimage to Mecca.</li>
            </ol>
            <p>
              Specifically, we learn from the Quran (21:73) that the Contact
              Prayers (Salat) and the obligatory charity (Zakat) were given to
              Abraham.
              <br />
              Numerous verses throughout the Quran inform us that the Contact
              Prayers were in existence, intact, and practiced before the advent
              of Muhammad (see for example 8:35 & 9:54).
              <br />
              All positions of the Contact Prayers are found in the Quran,
              including the standing position (3:39, 39:9) and bowing (Rukoo’)
              and prostrating (Sujood) positions (2:43, 3:43, 9:112, 22:26 &
              77).
            </p>
          </div>
        </section>
      </div>
      <AboutEssentialSection />

      <section className="call-to-prayer-section">
        <div className="section-content grid grid-cols-1 md:grid-cols-2 gap-0 content-container pt-[30px] pb-[40px] md:pt-[51px]  md:pb-[65px]">
          <div className="section-text pe-10">
            <h5 className="text-primary">Learn how to Pray</h5>
            <h4 className="text-grey2 my-3">The Call to Prayer (Azaan)</h4>
            <p className="text-black">
              Azaan is not a part of the Contact Prayers, nor is it required.
              But it has become a tradition in the Muslim communities to summon
              the people to prayer through a loud announcement. The original
              Azaan used to conform with the Quran's teachings, and became
              corrupted with time. Originally, the call to prayer consisted of:
            </p>
            <ol className="list-decimal ms-5">
              <li>Allahu Akbar (God is Great), 4 times.</li>
              <li>
                Laa Elaaha Ellah Allah (There is no other god beside God), once.
              </li>
            </ol>
            <p>
              Many years later, some people added Muhammad's name to the Azaan.
              This violates God's commandments in 2:136, 2:285, 3:84, 4:150 and
              72:18. Later, other groups of Muslims added the names of Ali and
              his family. Today, the Azaan is severely corrupted throughout the
              Muslim world, and constitutes idol worship, not Submission to God
              ALONE.
            </p>
          </div>
          <div className="section-img">
            <img
              src={callToImg}
              alt="Quran"
              className="w-full h-full object-cover rounded-[10px]"
            />
          </div>
        </div>
      </section>

      <section className="correct-azan-section">
        <div className="section-content content-container flex flex-col items-center py-9">
          <h2 className="text-center text-primary">The Correct Azaan</h2>
          <h6 className="text-center w-75 max-w-[965px] mt-4 mb-[21px]">
            If you pray by yourself, an Azaan is not needed. The Azaan is
            usually observed when a group of people are ready to observe the
            prayer. One person stands up and utters the Azaan words, or chants
            them as follows:
          </h6>
          <h6 className="text-center w-75 max-w-[965px] mt-4 mb-[21px]">
            Allahu Akbar, Allahu Akbar (God is Great, God is Great).Allahu
            Akbar, Allahu Akbar.La Elaaha Ella Allah (There is no other god
            beside God).
          </h6>
        </div>
      </section>

      <AblutionSection />
      <HowToPerformSection />
      <section className="prayer-timings-section">
        <div className="section-content content-container grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
          <div className="section-text pe-4">
            <h5 className="text-primary">Prayer Timings</h5>
            <h4 className="text-grey2 mt-[20px] mb-[34px]">The Dawn Prayer</h4>
            <p>
              This Contact Prayer consists of 2 units. thus, when you get up
              from the second prostration, you say, "Allahu Akbar," and you
              assume the sitting position. While in the sitting position you
              pronounce the First Pillar of Submission, the Shahaadah: Ash-Hadu
              Allaa Elaaha Ellaa Allah.(I bear witness that there is no other
              god beside God.)Wahdahu Laa Shareeka Lah.(He ALONE is God; He has
              no partner.)
              <br />
              Look to the right and say, "Assalaamu Alaikum," then to the left
              and say the same. This completes the Dawn Prayer.
            </p>
          </div>
          <div className="section-img">
            <img
              src={prayerTimeImg1}
              alt="Prayer timings"
              className="rounded-[10px] w-full h-full object-cover"
            />
          </div>

          <div className="section-img">
            <img
              src={prayerTimeImg2}
              alt="Prayer timings"
              className="rounded-[10px] w-full h-full object-cover"
            />
          </div>
          <div className="section-text pe-2">
            <h5 className="text-primary">Prayer Timings</h5>
            <h4 className="text-grey2 mt-[20px] mb-[34px]">The Noon Prayer</h4>
            <p>
              This prayer consists of 4 units. Thus, you do the first two units
              exactly as explained for the Dawn Prayer up to the sitting
              position. You pronounce the First Pillar (known as "Shahaadah")
              then you stand up for the third unit. You do not utter the Salaams
              (Assalamu Alaikum). <br />
              As you stand up for the third unit you say, "Allahu Akbar." The
              third and fourth units are identical to the first two units.
              <br />
              When you get up from the second prostration of the fourth unit,
              you say "Allahu Akbar" and you assume the sitting position. In the
              sitting position you pronounce the Shahaadah, and you say the
              Salaams on both sides. This concludes the Noon Prayer.
            </p>
          </div>
          <div className="section-text pe-2">
            <h5 className="text-primary">Prayer Timings</h5>
            <h4 className="text-grey2 mt-[13px] mb-2">The Afternoon Prayer</h4>
            <p>
              This prayer is identical to the Noon Prayer. Only the "Intention"
              of course is different.
            </p>
            <h4 className="text-grey2 mt-2 mb-2">The Sunset Prayer</h4>
            <p>
              This prayer consists of three units. Thus, when you complete the
              second prostration of the third unit you do not stand up; you
              assume the sitting position, recite the Shahaadah, then you utter
              the Salaams on both sides. This concludes the Sunset Prayer.
            </p>
            <h4 className="text-grey2 mt-2 mb-2">The Night Prayer</h4>
            <p>
              This prayer is identical with the other 4-unit prayers, the Noon
              and the Afternoon Prayers.
            </p>
          </div>
          <div className="section-img">
            <img
              src={prayerTimeImg3}
              alt="Prayer timings"
              className="rounded-[10px] w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="prayer-types-section">
        <div className="section-content content-container py-[100px]">
          <div className="prayer-items grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-x-[26px] gap-y-[30px]">
            <div className="prayer-item py-[50px] px-[35px] rounded-[10px]">
              <h6 className="text-center mb-[45px] min-h-[45px]">
                The Contact Prayers and the Quran's Mathematical Code
              </h6>
              <p className="text-[13px] md:text-[14px] text-center leading-normal">
                As noted above, the Dawn, Noon, Afternoon, Sunset and Night
                Prayers consist of 2, 4, 4, 3, & 4 units, respectively. When we
                put these 5 numbers next to each other we get 24434, and this
                number is a multiple of 19 (24434 = 19 x 1286). The common
                denominator of the Quran's code is 19. This phenomenon confirms
                that the number of units for each Contact Prayer has been
                reserved intact, and the sequence 2, 4, 4, 3 and 4 is also
                confirmed.
              </p>
            </div>
            <div className="prayer-item py-[50px] px-[35px] rounded-[10px]">
              <h6 className="text-center mb-[45px] min-h-[45px]">
                Your Tone of Voice During the Contact Prayers
              </h6>
              <p className="text-[13px] md:text-[14px] text-center leading-normal">
                You shall not be too loud during your Contact Prayers, nor shall
                you say them secretly; you shall maintain an intermediate tone
                [17:110]. During a group prayer, only the Imam is audible;
                everyone else listens.
              </p>
            </div>
            <div className="prayer-item py-[50px] px-[35px] rounded-[10px]">
              <h6 className="text-center mb-[45px] min-h-[45px]">
                The Group Prayer
              </h6>
              <p className="text-[13px] md:text-[14px] text-center leading-normal">
                Two or more people may observe the Contact Prayers together. One
                person leads the group prayer, uttering "The Key" in a loud
                enough voice to be heard by everyone in the group. Other
                utterances must be silent. Anyone may join the group late, in
                the middle of the prayer. He or she must make the same moves as
                the group, then, at the end of the prayer, he or she must stand
                up and make up whatever portion was missed.
              </p>
            </div>
            <div className="prayer-item py-[50px] px-[35px] rounded-[10px]">
              <h6 className="text-center mb-[45px] min-h-[45px]">
                The Friday Prayer
              </h6>
              <p className="text-[13px] md:text-[14px] text-center leading-normal">
                The Friday Congregational Prayer (Salat Al-Jum`ah) is so
                important, a whole sura is entitled "Friday" and a commandment
                is decreed in verse 9 to observe this prayer. Every Submitter -
                man, woman, and child - is commanded by God to observe the
                Friday Congregational Prayer. The Friday Prayer replaces the
                Noon Prayer every Friday. Instead of 4 units, the Friday Prayer
                consists of listening to two sermons delivered by the Imam, and
                two units of prayer. Each sermon must begin with "Al-Hamdu
                Lillah" (Praise be to God), "Laa Elaaha Ella Allah" (No other
                god beside God). Each sermon should last 10-15 minutes and must
                be delivered in the language of the congregation. At the end of
                the first sermon, the congregation is asked to repent, "Tooboo
                Ela Allah." The Imam then sits down for about a minute and makes
                his repentance together with the congregation, then stands up
                for the second sermon. The second sermon ends by asking one of
                the people to say the Azaan. The Imam then leads the 2-unit
                prayer.
              </p>
            </div>
            <div className="prayer-item py-[50px] px-[35px] rounded-[10px]">
              <h6 className="text-center mb-[45px] min-h-[45px]">
                At the end of every prayer
              </h6>
              <p className="text-[13px] md:text-[14px] text-center leading-normal">
                The worshipers may shake hands, hug each other, and/or exchange
                greetings after completing the prayer. The custom is to say to
                each other, "Congratulations." This is because the Contact
                Prayers are a gift from God, that helps us nourish and develop
                our souls. One should be congratulated upon completing such a
                blessed accomplishment.
              </p>
            </div>
            <div className="prayer-item py-[50px] px-[35px] rounded-[10px]">
              <h6 className="text-center mb-[45px] min-h-[45px]">
                For More Information
              </h6>
              <p className="text-[13px] md:text-[14px] text-center leading-normal">
                This booklet should be used in conjunction with our audio or
                video tape in order to practice the correct pronunciation of the
                Arabic words. The audio/video tape provides the sounds and
                visual effects that will help you learn the correct
                pronunciations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPrayers;
