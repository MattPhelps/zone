import ReviewBox from "./ReviewBox";


export default function Hero() {
    return (
      <div className="hero min-h-screen lg:-mt-28 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> 
          <h1 className="text-4xl lg:text-5xl font-bold">
            Brutal Roasts, {" "}
            <span className="underline decoration-3 underline-offset-8 decoration-primary">
              Tailored
            </span>{" "}
            to Your Target
          </h1>
            <p className="py-6 text-lg mt-6">
            Get personalized roasts in seconds with Roast Generator. Input your target's details, pick styles, and receive the perfect roast.
            </p>
            <a href="https://buy.stripe.com/9AQdRE8lQh2b33G5kw">
              <button className="btn btn-primary btn-lg text-white mt-6">Start Roasting <span className="text-lg">→</span></button>
            </a>
            <ReviewBox />
          </div>
        </div>
      </div>
    );
  }
  