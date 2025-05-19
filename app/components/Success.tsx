'use client';
import siteConfig from "../libs/siteConfig";

export default function Success() {
  return (
    <div className="hero min-h-screen text-white bg-background lg:-mt-28 -mt-40 flex items-center justify-center px-4">
      <div className="hero-content text-center">
        <div className="max-w-2xl w-full">
          <h1 className="text-3xl mt-6 lg:mt-10 lg:text-5xl font-bold">
            You’re In — Let’s Sculpt That Jawline
          </h1>

          <p className="py-6 text-lg text-lightgray">
            You'll find everything you need below. I've also sent everything to your email.
          </p>

          <div className="flex flex-col space-y-4 mt-10">
            <a href={siteConfig.mainProductUrl} className="btn btn-primary btn-lg rounded-full text-white">
              👉 START THE 17-STEP FORMULA
            </a>
{/* 
            <a href={siteConfig.discordUrl} className="btn btn-outline btn-lg rounded-full text-white border-gray-600">
              💬 JOIN THE DISCORD COMMUNITY
            </a>

            <a href={siteConfig.routineUrl} className="btn btn-outline btn-lg rounded-full text-white border-gray-600">
              📝 ACCESS YOUR JAWLINE WORKOUT
            </a>

            <a href={siteConfig.checklistUrl} className="btn btn-outline btn-lg rounded-full text-white border-gray-600">
              ✅ PHOTO POSTING CHECKLIST
            </a>

            */}
          </div>
        </div>
      </div>
    </div>
  );
}
