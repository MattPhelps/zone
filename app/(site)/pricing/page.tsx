import { Metadata } from "next";
import Pricing from "@/app/components/Pricing";

const title = "Roast Pricing";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function PricingPage() {
  return (
   <>
   <div className="hero min-h-screen -mt-40 flex items-center justify-center">
   <div className="hero-content flex flex-col items-center gap-6">
    <h1 className="text-5xl font-bold mt-40">Serve Up Scalding Hot Roasts 🥵</h1>
      <Pricing />
    </div>
    </div>
   </>
  );
  
}
