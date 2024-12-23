"use client";
import Hero from "@/app/components/Input";
import { useEffect } from "react";

const title = "Generate Roast";
const description = "";

export default function GeneratePage() {
  // Disable scrolling when the component is mounted
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (

   <>
      <Hero />
   </>
  );
  
}
