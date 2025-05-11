'use client'
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function Story() {

  const handleClick = () => {
    trackEvent("Go to Checkout", {
                 location: "last cta",
               });
   window.location.href = siteConfig.checkoutLink;
 };


  return (
    <>
    <div id="cta" className="hero bg-white flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> {/* Changed from max-w-md to max-w-lg */}
            <h2 className="mt-20 text-3xl lg:text-5xl font-bold">How to ACTUALLY Get a Jawline Without Wasting Time</h2>
            
            <img
              src="transformations/my-transformation.png" // Put the correct path to your image
              alt="Before and after jawline"
              className="my-10 mx-auto rounded-xl shadow-xl w-full max-w-md"
            />

            <p className="py-4 text-md mt-6 text-left lg:text-lg">
            The secret to getting a chiseled jawline is simple:
            </p>

            <ol className="py-6 text-md text-left lg:text-lg pl-12 list-decimal">
              <li>Identify the steps that get results</li>
              <li>Focus all your energy on those steps</li>
              <li>Ignore everything else</li>
            </ol>

            <p className="py-4 text-md text-left lg:text-lg">
            The best way to do that is to spend years of trial and error figuring out what works and what doesn’t.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            But luckily, you don’t have to because <i>I’ve already done it for you.</i>
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            My 17 Step Jawline Formula is a complete guide on how to ignore time-wasting exercises and only do stuff that moves the needle for jawline improvement.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            Not only that. Once you apply the formula to your own jaw, many of the steps will become second nature and you won't have to remember to do them.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            Suddenly, your jawline is drawing more attention than you know what to do with it.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            This is EXACTLY what I built The 17 Step Jawline Formula to do for you. 
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            Unlock the formula today so you can:
            </p>

            <li className="flex text-md mt-4 lg:text-lg items-center text-left gap-2 pl-12">
              <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
              Follow the step-by-step formula that gets you amazing results in the 5 key jawline areas
            </li>

            <li className="flex text-md mt-4 lg:text-lg items-center text-left gap-2 pl-12">
              <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
              Get your dream jawline faster and in a way that takes you less time than you could have imagined
            </li>

            <li className="flex text-md mt-4 lg:text-lg items-center text-left gap-2 pl-12">
              <img src="icons/green-tick.png" alt="Tick" className="w-5 h-5 mr-3" />
              Discover how to pose in photos like a model so you can get more attention on dating apps and on social media
            </li>

            <p className="py-4 text-md mt-4 text-left lg:text-lg">
            And the best part?
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            You don’t have to take my word for it.
            </p>

            <p className="py-4 text-md mb-12 text-left lg:text-lg">
            Just look at what some students have done:
            </p>

          {/* 
            <button
            onClick={handleClick}
            className="btn btn-primary mt-14 mb-20 btn-lg rounded-full text-white mt-6"
          >
            GET INSTANT ACCESS <span className="text-lg">→</span>
          </button>
          */}
          </div>
        </div>
      </div>
    </>
  );
}
  