import { Metadata } from "next";
import Hero from "@/app/components/Hero";

const title = "Generate Roast";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function GeneratePage() {
  return (
   <>
      <Hero />
   </>
  );
  
}
