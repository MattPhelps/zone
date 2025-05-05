import { Metadata } from "next";
import Hero from "../components/Hero";
import Examples from "../components/Examples";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Comparison from "../components/Comparison";
import SingleReview from "../components/SingleReview";
import Story from "../components/Story";
import Modules from "../components/Modules";
import Steps from "../components/Steps";
import BeforeAfter from "../components/BeforeAfter";

const title = "Jawline Formula - The 17 Steps to your Best Jawline";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <Hero />
      <BeforeAfter />
      <Steps />
      <Comparison />
      <Modules />
      <SingleReview />
      <Story />
      <FAQ />
      <CTA />
   </>
  );
  
}
