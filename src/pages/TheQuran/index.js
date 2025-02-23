import React from "react";
import PageBanner from "../../layout/PageBanner";
import PageBG from "../../assets/images/book-banner.jpeg";
import AboutSection from "./../Home/AboutSection";
import QuranOnline from "./QuranOnline";
import ProclamationSection from "./../Home/ProclamationSection";

const TheQuran = () => {
  return (
    <div className="the-quran-page">
      <PageBanner bgUrl={PageBG} title={"The Quran"} />
      <AboutSection />
      <QuranOnline />
      <ProclamationSection />
    </div>
  );
};

export default TheQuran;
