'use client';
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function Price() {

    const handleClick = () => {
        trackEvent("Go to Checkout", {
                     location: "price cta",
                   });
       window.location.href = siteConfig.checkoutLink;
     };

    return (
      <div className="hero mt-20 mb-20 text-white flex flex-col items-left justify-center">
        <div className="hero-content text-center flex flex-col items-left justify-center">
          <div className="max-w-2xl w-full">
            <h2 className="text-3xl lg:text-5xl font-bold">
            Transform Your Jawline <span className="underline">Fast</span> With a Proven Formula
            </h2>
            <div className="flex items-center justify-center mt-6 text-md lg:text-lg text-lightgray">
            <img src="icons/present.png" alt="present" className="w-5 h-5 mr-2" />
            <span>
              <span className="text-secondary font-semibold">{siteConfig.totalDicount} off</span> with today's offer
            </span>
          </div>
  
            {/* SOLE CARD */}
            <div className="card bg-background w-full max-w-3xl mt-10 shadow-xl mx-auto border-2 border-primary shadow-[0_0_20px_rgba(31,88,208,0.5)] rounded-xl">
            <div className="card-body items-center text-center">
            {/*  <h2 className="card-title text-3xl text-white lg:text-4xl font-bold">

             </h2> */}

                <div className="flex justify-center items-left mt-6">
                <span className="text-lg text-gray-500 line-through mr-2">{siteConfig.oldPrice}</span>
                  <span className="text-5xl font-extrabold text-white">{siteConfig.discountedPrice}</span>
                  <span className="text-xs text-gray-500 ml-2">USD</span>
                </div>

                <div className="mt-6 space-y-6 text-white py-6 text-left w-full text-md lg:text-lg">

                  {/* MAIN COURSE */}
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                          The 17 Step Jawline Formula Video Course
                        </p>
                        <p className="text-lightgray mt-1">The complete formula to transform from soft to sculpted - in minutes a day. Step-by-step, no fluff</p>
                      </div>
                    </div>
                  </div>

                  {/* BONUS 1 */}
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                          BONUS I – 10min/day Personalized Jawline Sculpting Routine
                        </p>
                        <p className="text-lightgray mt-1">Adjusted to your starting point so you never pleateau, waste time or risk injury</p>
                      </div>
                    </div>
                  </div>

                  {/* BONUS 2 
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                        BONUS II – Discord Community & Coaching <span className="text-lightgray">(Limited Time)</span>
                        </p>
                        <p className="text-lightgray mt-1">Get daily support, private feedback, and 1:1 coaching from Matt Phelps and others on the same path <span className="italic">($49 value)</span></p>
                      </div>
                    </div>
                  </div>
                  */}

                   {/* BONUS 3 
                   <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                          BONUS III – Facial Aesthetics Kickstart Scan
                        </p>
                        <p className="text-lightgray mt-1">Discover what’s hurting your attractiveness so you know exactly what to fix first — based on key metrics like jawline angle, symmetry check, craniovertebral angle and midface ratio  <span className="italic">($65 value)</span></p>
                      </div>
                    </div>
                  </div>
                  */}

                  {/* BONUS 4 */}
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                          BONUS II – Male Model Photo Checklist
                        </p>
                        <p className="text-lightgray mb-6 mt-1">Use proven angles, poses, and lighting tricks to look 10x better in photos - for dating or socials</p>
                      </div>
                    </div>
                  </div>
  {/* 
                  <p className="text-center text-xl">
                    Total Value: <span className="text-red-500 text-xl font-bold">&nbsp;$332</span>
                  </p>
                  <p className="text-center text-2xl text-white">
                  <span className="text-xl">*</span><span className="underline">Today's Offer:</span> <span className="text-secondary text-3xl font-bold ">&nbsp;{siteConfig.discountedPrice}</span>
                </p>
                
                <p className="text-sm  text-center text-lightgray italic mt-2">
                *offer is limited and can end at any time
                  </p>
 */}
                  </div>
                

                {/* ✅ BUTTON INSIDE CARD-BODY */}
                <button
                  onClick={handleClick}
                  className="btn btn-primary btn-lg rounded-full text-white mt-6"
                >
                  GET INSTANT ACCESS <span className="text-lg">→</span>
                </button>

                <p className="text-sm mt-4 text-center text-lightgray">
                🔒 Full refund anytime
                </p>
              </div>

              </div>
            </div>
          </div>
        </div>
    );
  }
  