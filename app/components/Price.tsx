'use client';
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function Pricing() {

    const handleClick = () => {
        trackEvent("Go to Checkout", {
                     location: "last cta",
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
            <p className="py-6 text-md lg:text-lg text-lightgray">
            <span className="text-secondary">$30 off</span> for the first 220 customers (16 left)
            </p>
  
            {/* SOLE CARD */}
            <div className="card bg-background w-full max-w-3xl mt-10 shadow-xl mx-auto border-2 border-primary shadow-[0_0_20px_rgba(31,88,208,0.5)] rounded-xl">
            <div className="card-body items-center text-center">
            {/*  <h2 className="card-title text-3xl text-white lg:text-4xl font-bold">

             </h2> */}

  <div className="flex justify-center items-left mt-6">
  <span className="text-lg text-gray-500 line-through mr-2">$47</span>
    <span className="text-5xl font-extrabold text-white">$17</span>
    <span className="text-xs text-gray-500 ml-2">USD</span>
  </div>

  <ul className="mt-6 space-y-3 text-white py-6 text-md lg:text-lg">
  <li className="flex items-center text-left">
    <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
    The 17 Step Jawline Formula Video Course
  </li>
  <li className="flex items-center text-left">
    <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
    Personalised Jawline Workout Routine
  </li>
  <li className="flex items-center text-left">
    <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
    Private Discord Community
  </li>
  <li className="flex items-center text-left">
    <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
    Support from the Instructor
  </li>
  <li className="flex items-center text-left">
    <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
    Lifetime Updates
  </li>
</ul>

  {/* ✅ BUTTON INSIDE CARD-BODY */}
  <button
    onClick={handleClick}
    className="btn btn-primary btn-lg rounded-full text-white mt-6"
  >
    GET INSTANT ACCESS <span className="text-lg">→</span>
  </button>

  <p className="text-sm mt-4 text-center text-lightgray">
    🔒 Full refund at any time
  </p>
</div>

              </div>
            </div>
          </div>
        </div>
    );
  }
  