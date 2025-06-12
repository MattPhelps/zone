'use client'

import ReviewBox from "@/app/components/ReviewBox";
import { trackEvent } from "@/app/libs/amplitude";
import siteConfig from "@/app/libs/siteConfig";
import VideoPlayer from "@/app/components/VideoPlayer";
import Table from "@/app/components/Table";

export default function Step() {

  const nextStepLink = "/step/16";

  const handleClick = () => {
    window.location.href = nextStepLink;
  };

  return (
    <section className="bg-background text-white flex items-center justify-center px-4 lg:px-0 lg:pt-0">
      <div className="text-center max-w-3xl w-full">

        <h1 className="text-3xl lg:text-5xl font-bold mt-10">
          15. Sleep Position
        </h1>

       

        <div className="mt-8">
          <VideoPlayer videoUrl="https://www.youtube.com/watch?v=pZB2Z8h7UrU" />

        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">

           <p className="mt-4 mb-4 lg:mt-6 text-lg lg:text-xl text-lightgray">
          The 17 Step Formula to get your sharpest jawline — and catch eyes everywhere you go
        </p>

          <button
            onClick={handleClick}
            className="btn mt-8 btn-primary btn-lg rounded-full text-white px-8 py-3"
          >
            GO TO STEP 16 <span className="text-lg ml-1">→</span>
          </button>
        </div>

        <Table />

      </div>
    </section>
  );
}