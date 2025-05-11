'use client';

import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function Guarantee() {
  return (
    <div className="text-white bg-background py-16 px-6 flex flex-col items-center justify-center">
      {/* HEADLINE */}
      <h1 className="text-3xl lg:text-5xl font-bold text-center mb-12">
      Unlock the Formula Today - 100% Risk Free
      </h1>

      {/* IMAGE + TEXT SIDE BY SIDE */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl">
        {/* IMAGE */}
        <div className="flex-shrink-0">
          <img
            src="icons/guarantee.png"
            className="max-w-sm rounded-lg shadow-2xl"
            alt="Guarantee"
          />
        </div>

        {/* TEXT */}
        <div >
          <p className="py-4 text-md lg:text-lg text-lightgray text-left lg:text-left max-w-lg">
          I so strongly believe that the 17 Steps will revolutionize your looks, and your health - just like it has countless other men around the world - that I'm willing to give you a 100% no questions asked money-back guarantee.
          </p>
          <p className="py-4 text-md lg:text-lg text-lightgray text-lwft lg:text-left max-w-lg">
          I guarantee you that the 17 Step video series will take your quality of life to a level it has never been before and help you reach your goals 3-4x faster than normal.
          </p>
        </div>
      </div>
    </div>
  );
}
