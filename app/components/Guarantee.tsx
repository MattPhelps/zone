'use client';

import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function Guarantee() {
  return (
    <div className="text-black bg-white py-16 px-6 flex flex-col items-center justify-center">
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
          <p className="py-4 text-md lg:text-lg text-left lg:text-left max-w-lg">
          I so strongly believe that the 17 Steps will revolutionize your looks, and your health - just like it has countless other men around the world - that I'm willing to give you a 100% no questions asked money-back guarantee.
          </p>
          <p className="py-4 text-md lg:text-lg text-lwft lg:text-left max-w-lg">
          But let me say one thing, I guarantee you that the 17 Step video series will take your quality of life to a level it has never been before. I guarantee you that it will shave years off life's painful learning curve and help you reach your goals 3-4x faster than normal. I guarantee you that this program will be full of things that you have never heard of before.
          </p>
        </div>
      </div>
    </div>
  );
}
