import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const Banner = () => {
  return (
    <section className="banner-section py-[110px] lg:min-h-[calc(100vh-73px)] flex items-center justify-center">
      <div className="relative z-2 text-center px-4">
        <h2 className="max-w-[721px] text-white text-center text-[22px] md:text-[30px] xl:text-[40px] text-center font-bold">
          Proclaiming One Unified Religion for All the People
        </h2>
        <h5 className="text-white max-w-[803px] text-center font-semibold mt-[55px] mb-[39px]">
          All religions of the world - Judaism, Christianity, Islam, Hinduism,
          Buddhism, and others - have been severely corrupted through
          innovations, traditions, and the idolization of humans such as the
          prophets and the saints.
        </h5>
        <Link to="/proclaimation" className="btn btn-primary">
          Learn More
        </Link>
      </div>
    </section>
  );
};

export default Banner;
