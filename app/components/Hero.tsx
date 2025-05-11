'use client'
import ReviewBox from "./ReviewBox";
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function Hero() {
  const handleClick = () => {
     trackEvent("Go to Checkout", {
                  location: "hero cta",
                });
    window.location.href = siteConfig.checkoutLink;
  };

  return (
    <div className="hero min-h-screen text-white bg-background lg:-mt-28 -mt-48 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <ReviewBox />
          <h1 className="text-3xl mt-6 lg:mt-10 lg:text-5xl font-bold">
            The Proven 17 Steps to Get Your Best Jawline
          </h1>
          <p className="py-6 text-md lg:text-lg text-lightgray -mb-6 -mt-0 lg:mt-6">
          The shortcut to your best jawline — no wasted time, just a clear, proven 17-step process that gets results faster
          </p>


          <button
            onClick={handleClick}
            className="btn btn-primary btn-lg rounded-full text-white mt-6"
          >
            GET INSTANT ACCESS <span className="text-lg">→</span>
          </button>

          <div className="flex items-center justify-center mt-6 text-sm text-lightgray">
            <img src="icons/present.png" alt="present" className="w-5 h-5 mr-2" />
            <span>
              <span className="text-secondary font-semibold">$102 off</span> with today's offer
            </span>
          </div>


        </div>
      </div>
    </div>
  );
}
