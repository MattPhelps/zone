'use client'
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";

export default function Table() {

  const handleClick = () => {
    trackEvent("Go to Checkout", {
                 location: "last cta",
               });
   window.location.href = siteConfig.checkoutLink;
 };

  return (
    <>
    <div id="cta" className="hero mt-40 mb-40 text-white flex items-left justify-center">
        <div className="hero-content text-left">
          <div className="max-w-2xl"> {/* Changed from max-w-md to max-w-lg */}
            <h2 className="text-3xl mb-12 lg:text-4xl font-bold">The 17 Steps</h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/1">1. Jawline Angle</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/2">2. Spinal Posture</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/3">3. Nasal Breathing</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/4">4. Tongue Posture</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/5">5. Swallowing</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/6">6. Bilateral Chewing</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/7">7. Masseter Growth</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/8">8. Jawline Tightening</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/9">9. Neck Width</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/10">10. Resting Position</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/11">11. Debloating</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/12">12. Lymphatic Drainage</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/13">13. Skin Tightening</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/14">14. Symmetry</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/15">15. Sleep Position</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/16">16. Facial Hair</a></h2>
            <h2 className="text-xl mb-4 lg:text-2xl underline"><a href="/step/1">17. Face Fat</a></h2>
          </div>
        </div>
      </div>
    </>
  );
}