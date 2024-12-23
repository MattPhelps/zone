import { Metadata } from "next";
import Input from "../components/Input";

const title = "Roast Generator – Brutal Roasts Made With AI";
const description = "Inspired by the r/RoastMe subreddit, Roast Generator is an AI that give you brutal roasts about someone - try now!";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function Home() {
  return (
   <>
      <Input />
   </>
  );
  
}
