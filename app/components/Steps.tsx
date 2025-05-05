import ReviewBox from "./ReviewBox";

export default function Steps() {
    return (
      <div className="hero min-h-screen text-white bg-background lg:-mt-28 flex items-center justify-center">
        <div className="hero-content text-center">
          <div className="max-w-2xl"> 
          <ReviewBox />
          <h1 className="text-5xl mt-10 lg:text-6xl font-bold">
            The 17 Step Jawline Formula
          </h1>
            <p className="py-6 text-lg text-lightgray mt-6">
            Upload a photo and let our AI analyze your body composition in seconds. Fast, accurate, and hassle-free body fat estimate.
            </p>
            <a href="/upload">
              <button className="btn btn-primary btn-lg rounded-full text-white mt-6">Get My Body Fat % <span className="text-lg">→</span></button>
            </a>
          </div>
        </div>
      </div>
    );
  }
  