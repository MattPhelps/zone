'use client'

import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function TheOffer() {
   const handleClick = () => {
       trackEvent("Go to Checkout", {
                    location: "hero cta",
                  });
      window.location.href = siteConfig.checkoutLink; // Redirect manually
    };

    return (
       <div className="hero text-white bg-background flex items-center justify-center">
            <div className="hero-content text-center">
              <div className="max-w-2xl">
                <h1 className="text-3xl lg:text-5xl mt-12 lg:mt-24 font-bold">
                  You Get Instant Access to the Following
                </h1>
                <p className="py-6 text-md lg:text-lg text-lblack -mb-6 -mt-0 lg:mt-6">
                  The step-by-step jawline formula for men who want to improve their jawline naturally and become more attractive.
                </p>
                <button
                  onClick={handleClick}
                  className="btn btn-primary btn-lg rounded-full text-white mt-6"
                >
                  GET INSTANT ACCESS <span className="text-lg">→</span>
                </button>
                    </div>
            </div>
          </div>
    );
  }
  