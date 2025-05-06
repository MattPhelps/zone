import { trackEvent } from "../libs/amplitude";

export default function CTA() {

  return (
    <>
    <div id="cta" className="hero mt-40 mb-40 text-white flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> {/* Changed from max-w-md to max-w-lg */}
            <h2 className="text-3xl lg:text-5xl font-bold">Get the Formula</h2>
            <p className="py-6 text-md lg:text-lg text-lightgray">
            Don't wait - take the first step towards your goal <i>now</i>
            </p>
            <a href="https://buy.stripe.com/9AQ8ysdnWdvCaZ2aEG">
              <button className="btn btn-primary btn-lg rounded-full  text-white">Get My Body Fat % <span className="text-lg">→</span></button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}