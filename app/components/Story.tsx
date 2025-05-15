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
    <div id="cta" className="hero bg-background flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> {/* Changed from max-w-md to max-w-lg */}
            <h2 className="mt-20 text-white text-3xl lg:text-5xl font-bold">How to ACTUALLY Get a Jawline Without Wasting Time</h2>
            
            <img
              src="transformations/my-transformation.png" // Put the correct path to your image
              alt="Before and after jawline"
              className="my-10 mx-auto rounded-xl shadow-xl w-full max-w-md"
            />
           <div className="text-lightgray">
            <p className="py-4 text-md mt-6 text-left lg:text-lg">
            <i>Hey it's Matt, your teacher 👋</i>
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            I tried to get a jawline for 12 years.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            The way teachers taught was boring and impractical, so I didn’t care.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            In 2016, I faced the same issue trying to learn coding. Courses were too long and made for people who want to get a job. I almost gave up... 😔
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            So I skipped the theory, built tiny apps, and made my first $1,000 online with a few lines of code.
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
            </div>

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
  