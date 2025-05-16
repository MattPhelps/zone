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

 const buyerCount = siteConfig.buyerCount;

  return (
    <>
    <div id="cta" className="hero bg-background flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> {/* Changed from max-w-md to max-w-lg */}
            <h2 className="mt-20 text-white text-3xl lg:text-5xl font-bold">Most Men Will Never Reach Their True Potential...</h2>
            
            <img
              src="transformations/my-transformation.png" // Put the correct path to your image
              alt="Before and after jawline"
              className="my-10 mx-auto rounded-xl shadow-xl w-full max-w-md"
            />
           <div className="text-lightgray">
            <p className="py-4 text-md mt-6 text-left lg:text-lg">
            Not because they don’t <i>have</i> the potential —
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            But because they’ve been convinced it’s <b>out of their control.</b>
            </p>

            <ul className="py-4 text-md text-left lg:text-lg list-disc pl-6 space-y-2 text-lightgray">
  <li><i>“Must be genetics.”</i></li>
  <li><i>“Some guys are just born with it.”</i></li>
  <li><i>“There’s nothing you can do.”</i></li>
</ul>

            <p className="py-4 text-md text-left lg:text-lg">
            So they settle.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            Or worse — <b>waste years on trial and error</b>, chasing YouTube tips that never deliver.
            </p>


            <p className="py-4 text-md text-left lg:text-lg">
            Here’s the truth:
            </p>


            <p className="py-4 text-md text-left lg:text-lg">
            <b>Your jawline isn’t set in stone.</b>
            </p>


            <p className="py-4 text-md text-left lg:text-lg">
            It’s shaped by <b>habits</b>, <b>posture</b>, <b>muscle activation</b>, <b>fat distribution</b>, <b>water retention</b>, and more.
            </p>


            <p className="py-4 text-md text-left lg:text-lg">
            You don’t need <i>surgery</i>. You don’t need <i>perfect genetics</i>.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            You just need to <b>stop guessing</b> — and <b>start following a proven path.</b> 
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            That’s what <b>The Jawline Formula</b> gives you:
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            The <b>EXACT 17 steps</b> that actually move the needle —
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            Mapped out. In order. With <b>zero fluff</b>.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            <b>No more wasting time</b> figuring it out yourself.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            <b>No more wondering</b> if what you’re doing is working.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            Just <b>results</b> — visible, compounding, and natural.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            <b>{buyerCount} men</b> have gotten results with this formula.
            </p>

            <p className="py-4 text-md text-left lg:text-lg">
            I hope you're next.
            </p>
 {/* 

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
      </div>
    </>
  );
}
  