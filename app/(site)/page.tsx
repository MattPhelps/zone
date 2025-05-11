import { Metadata } from "next";
import Hero from "../components/Hero";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Comparison from "../components/Comparison";
import SingleReview from "../components/SingleReview";
import Story from "../components/Story";
import Modules from "../components/Modules";
import BeforeAfter from "../components/BeforeAfter";
import Transformations from "../components/Transformations";
import TheOffer from "../components/TheOffer";
import Guarantee from "../components/Guarantee";
import Price from "../components/Price";

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
      <Story />
      <Transformations />
      <Price />
      <Guarantee />
      <FAQ />
      <CTA /> 
{/*
      <Comparison />
      <BeforeAfter />
      <Modules />
*/}
   </>
  );
  
}
