import Success from "@/app/components/Success";
import { Metadata } from "next";

const title = "Purchase Confirmed";
const description = "";

export const metadata: Metadata = {
  title: title,
  description: description,
};

export default function SuccessPage() {
  return (
   <>
  <Success />  
   </>

   
  );
  
}
