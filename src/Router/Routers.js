import { Routes, Route } from "react-router-dom";
import ScrollToTop from "../Scripts/ScrollTop";
import Home from "../pages/Home";
import TheQuran from "../pages/TheQuran";
import AudioVideo from "../pages/AudioVideo";
import ArticlesLinks from "../pages/ArticlesLinks";
import ContactUs from "../pages/ContactUs";
import ContactPrayers from "../pages/ContactPrayers";
import QuranReader from "../pages/QuranReader";
import { Chapters } from "../pages/Chapters";
import Proclaimation from "../pages/Appendices/proclaimation";
import Introduction from "../pages/Appendices/introduction";
import Submission from "../pages/Submission";
import AppendixOne from "../pages/Appendices/appendix-1";
import AppendixTwo from "../pages/Appendices/appendix-2";
import AppendixThree from "../pages/Appendices/appendix-3";
import AppendixFour from "../pages/Appendices/appendix-4";
import AppendixFive from "../pages/Appendices/appendix-5";
import AppendixSix from "../pages/Appendices/appendix-6";
import AppendixSeven from "../pages/Appendices/appendix-7";
import AppendixEight from "../pages/Appendices/appendix-8";
import AppendixNine from "../pages/Appendices/appendix-9";
import AppendixTen from "../pages/Appendices/appendix-10";
import AppendixEleven from "../pages/Appendices/appendix-11";
import AppendixTwelve from "../pages/Appendices/appendix-12";
import AppendixThirteen from "../pages/Appendices/appendix-13";
import AppendixFourteen from "../pages/Appendices/appendix-14";
import AppendixFifteen from "../pages/Appendices/appendix-15";
import AppendixSixteen from "../pages/Appendices/appendix-16";
import AppendixSeventeen from "../pages/Appendices/appendix-17";
import AppendixEighteen from "../pages/Appendices/appendix-18";
import AppendixNineteen from "../pages/Appendices/appendix-19";
import AppendixTwenty from "../pages/Appendices/appendix-20";
import AppendixTwentyOne from "../pages/Appendices/appendix-21";
import AppendixTwentyTwo from "../pages/Appendices/appendix-22";
import AppendixTwentyThree from "../pages/Appendices/appendix-23";
import AppendixTwentyFour from "../pages/Appendices/appendix-24";
import AppendixTwentyFive from "../pages/Appendices/appendix-25";
import AppendixTwentySix from "../pages/Appendices/appendix-26";
import AppendixTwentySeven from "../pages/Appendices/appendix-27";
import AppendixTwentyEight from "../pages/Appendices/appendix-28";
import AppendixTwentyNine from "../pages/Appendices/appendix-29";
import AppendixThirty from "../pages/Appendices/appendix-30";
import AppendixThirtyOne from "../pages/Appendices/appendix-31";
import AppendixThirtyTwo from "../pages/Appendices/appendix-32";
import AppendixThirtyThree from "../pages/Appendices/appendix-33";
import AppendixThirtyFour from "../pages/Appendices/appendix-34";
import AppendixThirtyFive from "../pages/Appendices/appendix-35";
import AppendixThirtySix from "../pages/Appendices/appendix-36";
import AppendixThirtySeven from "../pages/Appendices/appendix-37";
import AppendixThirtyEight from "../pages/Appendices/appendix-38";

const Routers = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route index element={<Home />} />
        <Route path="the-quran" element={<TheQuran />} />
        <Route path="audio-video" element={<AudioVideo />} />
        <Route path="contact-prayer" element={<ContactPrayers />} />
        <Route path="articles" element={<ArticlesLinks />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="chapters" element={<Chapters />} />
        <Route path="proclaimation" element={<Proclaimation />} />
        <Route path="introduction" element={<Introduction />} />
        <Route path="submission" element={<Submission />} />
        <Route path="quran-reader" element={<QuranReader />} />

        <Route path="chapters/appendix-1" element={<AppendixOne />} />
        <Route path="chapters/appendix-2" element={<AppendixTwo />} />
        <Route path="/chapters/appendix-3" element={<AppendixThree />} />
        <Route path="/chapters/appendix-4" element={<AppendixFour />} />
        <Route path="/chapters/appendix-5" element={<AppendixFive />} />
        <Route path="/chapters/appendix-6" element={<AppendixSix />} />
        <Route path="/chapters/appendix-7" element={<AppendixSeven />} />
        <Route path="/chapters/appendix-8" element={<AppendixEight />} />
        <Route path="/chapters/appendix-9" element={<AppendixNine />} />
        <Route path="/chapters/appendix-10" element={<AppendixTen />} />
        <Route path="/chapters/appendix-11" element={<AppendixEleven />} />
        <Route path="/chapters/appendix-12" element={<AppendixTwelve />} />
        <Route path="/chapters/appendix-13" element={<AppendixThirteen />} />
        <Route path="/chapters/appendix-14" element={<AppendixFourteen />} />
        <Route path="/chapters/appendix-15" element={<AppendixFifteen />} />
        <Route path="/chapters/appendix-16" element={<AppendixSixteen />} />
        <Route path="/chapters/appendix-17" element={<AppendixSeventeen />} />
        <Route path="/chapters/appendix-18" element={<AppendixEighteen />} />
        <Route path="/chapters/appendix-19" element={<AppendixNineteen />} />
        <Route path="/chapters/appendix-20" element={<AppendixTwenty />} />
        <Route path="/chapters/appendix-21" element={<AppendixTwentyOne />} />
        <Route path="/chapters/appendix-22" element={<AppendixTwentyTwo />} />
        <Route path="/chapters/appendix-23" element={<AppendixTwentyThree />} />
        <Route path="/chapters/appendix-24" element={<AppendixTwentyFour />} />
        <Route path="/chapters/appendix-25" element={<AppendixTwentyFive />} />
        <Route path="/chapters/appendix-26" element={<AppendixTwentySix />} />
        <Route path="/chapters/appendix-27" element={<AppendixTwentySeven />} />
        <Route path="/chapters/appendix-28" element={<AppendixTwentyEight />} />
        <Route path="/chapters/appendix-29" element={<AppendixTwentyNine />} />
        <Route path="/chapters/appendix-30" element={<AppendixThirty />} />
        <Route path="/chapters/appendix-31" element={<AppendixThirtyOne />} />
        <Route path="/chapters/appendix-32" element={<AppendixThirtyTwo />} />
        <Route path="/chapters/appendix-33" element={<AppendixThirtyThree />} />
        <Route path="/chapters/appendix-34" element={<AppendixThirtyFour />} />
        <Route path="/chapters/appendix-35" element={<AppendixThirtyFive />} />
        <Route path="/chapters/appendix-36" element={<AppendixThirtySix />} />
        <Route path="/chapters/appendix-37" element={<AppendixThirtySeven />} />
        <Route path="/chapters/appendix-38" element={<AppendixThirtyEight />} />
      </Routes>
    </>
  );
};

export default Routers;
