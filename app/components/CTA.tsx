'use client'
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function CTA() {

  const handleClick = () => {
    trackEvent("Go to Checkout", {
                 location: "last cta",
               });
   window.location.href = siteConfig.checkoutLink;
 };

  return (
    <>
    <div id="cta" className="hero mt-40 mb-40 text-white flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> {/* Changed from max-w-md to max-w-lg */}
            <h2 className="text-3xl lg:text-5xl font-bold">Ready to Sculpt Your Best Jawline?</h2>
            <p className="py-6 text-md lg:text-lg text-lightgray">
            Don't wait - take the first step towards your jawline <i>now</i>
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
    </>
  );
}