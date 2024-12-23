import { Metadata } from "next";
import Hero from "../components/Hero";

const title = "Body Fat Estimator – What % Body Fat Are You?";
const description = "";

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
