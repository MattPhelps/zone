import { Metadata } from "next";
import Hero from "../components/Hero";

import Carousel from "../components/Carousel";
import Accordion from "../components/Accordion";

const title = "Roast Generator – Brutal Roasts Made With AI";
const description = "Inspired by the r/RoastMe subreddit, Roast Generator is an AI that give your brutal roasts about someone - try now!";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <Hero />
      {/* <Carousel />
      {/* <Accordion /> */}
   </>
  );
  
}
