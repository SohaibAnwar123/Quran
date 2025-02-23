import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const InfoBannerSection = () => {
  return (
    <section className="info-banner-seciton flex flex-col items-center justify-center py-12 min-h-[272px] bg-gradient my-4">
      <h4 className="w-[70%] max-w-[742px]">
        The Quran Online with Clarifying Explanations from the Messenger of the
        Covenant
      </h4>
      <Link to="/quran-reader" className="mt-10">
        Read the Authorized English version of the Quran online
      </Link>
    </section>
  );
};

export default InfoBannerSection;
