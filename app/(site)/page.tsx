import Hero from "../components/Hero";
import { Metadata } from "next";

const title = "Roastify – Roast Me AI";
const description = "Inspired by the r/RoastMe subreddit, Roastify is an AI that brutally roasts your appearance - try now!";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
        <Hero />
   </>
  );
  
}
