import { Metadata } from "next";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Comparison from "../components/Comparison";
import SingleReview from "../components/SingleReview";
import Story from "../components/Story";
import Modules from "../components/Modules";
import BeforeAfter from "../components/BeforeAfter";
import Testimonials from "../components/Testimonials";
import TheOffer from "../components/TheOffer";

const title = "Jawline Formula - The 17 Steps to Get Your Best Jawline";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <Hero />
      {/*
      <BeforeAfter />
      <Comparison />
      <TheOffer />
      <Modules />
      <Story />
      */}
      <Testimonials />
      {/*
      <FAQ />
      <CTA />
        */}
   </>
  );
  
}
