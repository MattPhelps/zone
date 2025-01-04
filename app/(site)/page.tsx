import { Metadata } from "next";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";

const title = "Body Fat Estimator – What % Body Fat Are You?";
const description = "Discover your body fat percentage with our Body Fat Estimator. Get quick, accurate results to track your fitness progress and optimize your health goals.";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <Hero />
      <Pricing />
   </>
  );
  
}
