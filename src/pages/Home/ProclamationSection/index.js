import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

const ProclamationSection = () => {
  return (
    <section className="proclamation-section pt-4 pb-10 max-w-8xl mx-auto px-4 sm:px10 lg:ps-[65px] lg:px-[60px]">
      <h2 className="text-center text-grey2 my-4">Appendices</h2>
      <div className="flex flex-col ps-4 md:ps-5 gap-3">
        <ul className="list-disc ms-5">
          <li>
            <Link
              to="/proclaimation"
              className="text-black flex items-center underline font-bold"
            >
              Proclamation
            </Link>
          </li>
          <li>
            <Link
              to="/introduction"
              className="text-black flex items-center underline font-bold"
            >
              Introduction
            </Link>
          </li>
        </ul>
      </div>
      <div className="proclamation-items mt-[22px] space-y-[22px] columns-1 sm:columns-2  md:columns-3">
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-1"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              1
            </span>
            <span className="item-text text-black">
              One of the Great Miracles [74:35]
            </span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-2"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              2
            </span>
            <span className="item-text text-black">
              God's Messenger of the Covenant [3:81]
            </span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-3"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              3
            </span>
            <span className="item-text text-black">
              We Made the Quran Easy [54:17]
            </span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-4"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              4
            </span>
            <span className="item-text text-black">
              Why Was the Quran Revealed in Arabic?
            </span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-5"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              5
            </span>
            <span className="item-text text-black">Heaven and Hell</span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-6"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              6
            </span>
            <span className="item-text text-black">Greatness of God</span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-7"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              7
            </span>
            <span className="item-text text-black">Why Were We Created?</span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-8"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              8
            </span>
            <span className="item-text text-black">
              The Myth of Intercession
            </span>
          </Link>
        </div>
        <div className="proclamation-item flex items-center">
          <Link
            to="/chapters/appendix-9"
            className="text-black flex items-center"
          >
            <span className="item-num text-white inline-block me-[18px]">
              9
            </span>
            <span className="item-text text-black">
              Abraham: Original Messenger of Islam
            </span>
          </Link>
        </div>
      </div>
      <div className="text-center mt-[30px] md:mt-[53px]">
        <Link to="/chapters" className="btn btn-secondary">
          View More
        </Link>
      </div>
    </section>
  );
};

export default ProclamationSection;
