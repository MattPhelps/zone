"use client";
import { useSearchParams } from "next/navigation";

export default function UploadPage() {
  const searchParams = useSearchParams();
  const imageUrl = searchParams.get("imageUrl");

  if (!imageUrl) {
    return (
      <div className="hero flex items-center justify-center min-h-screen">
        <div className="hero-content flex flex-col lg:flex-row items-center gap-12 lg:gap-24 max-w-4xl">
          No Image Uploaded
        </div>
      </div>
    );
  }

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = imageUrl; // URL of the rendered image
    link.download = "roast-render.png"; // File name for the downloaded image
    link.click();
  };

  return (
    <section className="hero flex flex-col items-center justify-start min-h-screen pt-0 lg:pt-0">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-4xl mt-4 lg:mt-0">
        {/* Rendered Image */}
        <img
          src={imageUrl}
          alt="Roasted mfer"
          className="w-64 sm:w-80 lg:w-[22rem] rounded-lg shadow-xl"
        />

        {/* Text Section */}
        <div className="text-center lg:text-left max-w-md">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="mb-4">
              <h1 className="text-5xl font-bold">Roast Me</h1>
              <p className="py-4">Upload an image of a person who needs roasting.</p>
            </div>
          ))}
        </div>
      </div>

      {/* Download Button */}
      <button
        className="btn btn-primary mt-6 lg:mt-8"
        onClick={handleDownload}
      >
        Download Image
      </button>
    </section>
  );
}
