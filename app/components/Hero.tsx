'use client'

import ReviewBox from "./ReviewBox";
import { trackEvent } from "../libs/amplitude";

export default function Hero() {
  const handleClick = () => {
     trackEvent("Go to Checkout", {
                  location: "hero cta",
                });
    window.location.href = "https://buy.stripe.com/28o8xOevc801a9W6oq"; // Redirect manually
  };

  return (
    <div className="hero min-h-screen text-white bg-background lg:-mt-28 -mt-48 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <ReviewBox />
          <h1 className="text-3xl mt-6 lg:mt-10 lg:text-5xl font-bold">
            The <i>Proven</i> 17 Steps to Get Your Best Jawline
          </h1>
          <p className="py-6 text-md lg:text-lg text-lightgray -mb-6 -mt-0 lg:mt-6">
            The step-by-step jawline formula for men who want to improve their jawline naturally and become more attractive.
          </p>

          <button
            onClick={handleClick}
            className="btn btn-primary btn-lg rounded-full text-white mt-6"
          >
            GET THE FORMULA <span className="text-lg">→</span>
          </button>
        </div>
      </div>
    </div>
  );
}
