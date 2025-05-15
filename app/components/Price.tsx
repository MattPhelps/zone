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
            17 Proven Steps, Zero Wasted Time, Results You Can See
            </h2>
            <div className="flex items-center justify-center mt-6 text-md lg:text-lg text-lightgray">
            <img src="icons/present.png" alt="present" className="w-5 h-5 mr-2" />
            <span>
              <span className="text-secondary font-semibold">$50 off</span> with today's offer
            </span>
          </div>
  
            {/* SOLE CARD */}
            <div className="card bg-background w-full max-w-3xl mt-10 shadow-xl mx-auto border-2 border-primary shadow-[0_0_20px_rgba(31,88,208,0.5)] rounded-xl">
            <div className="card-body items-center text-center">
            {/*  <h2 className="card-title text-3xl text-white lg:text-4xl font-bold">

             </h2> */}

                <div className="flex justify-center items-left mt-6">
                <span className="text-lg text-gray-500 line-through mr-2">$97</span>
                  <span className="text-5xl font-extrabold text-white">$47</span>
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
                        <p className="text-lightgray mt-1">The proven formula that anyone can use to go from soft to sculpted - in just 17 clear steps you can do from home in minutes a day <span className="italic">($197 value)</span></p>
                      </div>
                    </div>
                  </div>

                  {/* BONUS 1 */}
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                          BONUS I – 10 Minute Personalized Jawline Sculpting Routine
                        </p>
                        <p className="text-lightgray mt-1">Adjusted to your starting point and needs so you never go too fast, pleateau or risk injury <span className="italic">($79 value)</span></p>
                      </div>
                    </div>
                  </div>

                  {/* BONUS 2 */}
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                          BONUS II – Private Discord Community
                        </p>
                        <p className="text-lightgray mt-1">Join other men on the same path. Get accountability, feedback, and 24/7 support from your instructor <span className="italic">($49 value)</span></p>
                      </div>
                    </div>
                  </div>

                   {/* BONUS 3 */}
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

                  {/* BONUS 4 */}
                  <div className="flex flex-col">
                    <div className="flex items-start gap-3">
                      <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mt-1" />
                      <div>
                        <p className="text-xl font-semibold">
                          BONUS IV – Male Model Photo Checklist
                        </p>
                        <p className="text-lightgray mb-6 mt-1">How anyone can use simple poses and angles to instantly look more attractive in photos - for dating or socials <span className="italic">($55 value)</span></p>
                      </div>
                    </div>
                  </div>

                  <p className="text-center text-xl">
                    Total Value: <span className="text-red-500 text-xl font-bold">&nbsp;$445</span>
                  </p>

                  <p className="text-center text-2xl text-white">
                  Today's Offer: <span className="text-secondary text-3xl font-bold ">&nbsp;$47</span>
                </p>


                  </div>


                {/* ✅ BUTTON INSIDE CARD-BODY */}
                <button
                  onClick={handleClick}
                  className="btn btn-primary btn-lg rounded-full text-white mt-6"
                >
                  GET INSTANT ACCESS <span className="text-lg">→</span>
                </button>

                <p className="text-sm mt-4 text-center text-lightgray">
                  🔒 Full refund at anytime
                </p>
              </div>

              </div>
            </div>
          </div>
        </div>
    );
  }
  