import { trackEvent } from "../libs/amplitude";

export default function CTA() {

  return (
    <>
    <div id="cta" className="hero mt-40 mb-40 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> {/* Changed from max-w-md to max-w-lg */}
            <h2 className="text-3xl lg:text-5xl font-bold">Don’t Wait – Become a Roast God Today!</h2>
            <p className="py-6 text-lg">
            Unlock unlimited, brutal, personalized roasts and dominate the roast game!
            </p>
            <a href="https://buy.stripe.com/9AQdRE8lQh2b33G5kw">
              <button className="btn btn-primary btn-lg text-white">Start Roasting Now <span className="text-lg">→</span></button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}