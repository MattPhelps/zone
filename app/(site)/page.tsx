import { Metadata } from "next";
import Hero from "../components/Hero";


const title = "Jawline Formula - The 17 Steps to Get Your Best Jawline";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <div className="h-screen flex items-center justify-center overflow-hidden">
      <Hero />
    </div> 
   </>
  );
  
}
