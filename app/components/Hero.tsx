import ReviewBox from "./ReviewBox";


export default function Hero() {
    return (
      <div className="hero min-h-screen text-white bg-background lg:-mt-28 -mt-48 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl "> 
          <ReviewBox />
          <h1 className="text-3xl mt-6 lg:mt-10 lg:text-5xl font-bold">
            The Proven 17 Steps to Getting Your Best Possible Jawline
          </h1>
            <p className="py-6 text-md lg:text-lg text-lightgray -mb-6 -mt-0 lg:mt-6">
            The step-by-step jawline formula for men who want to improve their jawline naturally and become more attractive.
            </p>
            <p className="py-6 text-2xl font-bold -mb-6 lg:text-3xl text-primary">
            $17
            </p>
            <a href="https://buy.stripe.com/28o8xOevc801a9W6oq">
              <button className="btn btn-primary btn-lg rounded-full text-white mt-6">CLICK HERE TO GET THE FORMULA <span className="text-lg">→</span></button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  