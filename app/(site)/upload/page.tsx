"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";
import Rating from "@/app/components/Rating";
import { Roasts } from "@/app/components/Roasts";
import UploadDropzone from "@/app/components/UploadDropZone";

function UploadPageContent() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");

  if (!imageUrl) {
    return (
      <div className="hero min-h-screen -mt-40 flex items-center justify-center">
            
              
              <div className="text-center lg:text-left max-w-md">
                <p className="py-6">
                  Upload an image of a person who needs roasting.
                </p>
                <UploadDropzone />
              </div>
          </div>
    );
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl; // URL of the rendered image
    link.download = "roasted.png"; // File name for the downloaded image
    link.click();
  };

  return (
    <section className="hero flex flex-col items-center justify-start min-h-screen pt-0 lg:pt-0">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-4xl mt-4 lg:mt-0">

        {/* Rendered Image */}
        <div className="sticky top-0 flex-shrink-0">
        <img
          src={imageUrl}
          alt="Roasted mfer"
          className="w-64 sm:w-80 lg:w-[22rem] rounded-lg shadow-xl"
        />
        </div>

        {/* Text Section */}
        <div className="flex-1 overflow-y-auto max-h-screen px-4 lg:pl-8 scroll-smooth">
         <div className="text-center lg:text-left max-w-md">
          <Roasts />
         </div>
        </div>
      </div>

     {/* Download Button */}
        <button
        className="btn btn-lg btn-primary text-white mt-8 lg:mt-24 transform transition-transform duration-200 hover:scale-105"
        onClick={handleDownload}
        >
        Download Estimate
        </button>


      {/* Desktop-Only Rating in Bottom Right */}
      <div className="hidden lg:flex fixed rounded-lg items-center">
        <Rating />
      </div>
    </section>
  );
}

export default function UploadPage() {
    // Disable scrolling when the component is mounted
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);


  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center min-h-screen">
          <p>Loading...</p>
        </div>
      }
    >
      <UploadPageContent />
    </Suspense>
  );
}
