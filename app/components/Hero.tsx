'use client'
import ReviewBox from "./ReviewBox";
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";
import VideoPlayer from "./VideoPlayer";
import { loadStripe } from '@stripe/stripe-js';
import { useState } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Hero() {

  const handleClick = () => {
    trackEvent("Go to Checkout", {
                 location: "hero cta",
               });
   window.location.href = siteConfig.checkoutLink;
 };

  {/* 

  const handleClick = async () => {
    trackEvent('Go to Checkout', { location: 'hero cta' });

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ priceId: siteConfig.stripePriceId }),
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('Checkout failed:', data);
      return;
    }

    const stripe = await stripePromise;
    if (stripe) {
      stripe.redirectToCheckout({ sessionId: data.sessionId });
    }
  };

  */} 

  return (
    <div className="hero min-h-screen text-white bg-background lg:-mt-28 -mt-40 flex items-center justify-center">
      
      <div className="hero-content text-center">
        <div className="max-w-2xl">
        <ReviewBox />
          <h1 className="text-3xl mt-6 lg:mt-10 lg:text-5xl font-bold">
            Transform Your Jawline in Weeks, Not Years
          </h1>
          <p className="py-6 text-lg lg:text-lg text-lightgray -mb-2 -mt-0 lg:mt-6">
          The 17 Step Formula to get your sharpest jawline — and catch eyes everywhere you go
          </p>

          {/* 
          < VideoPlayer />
          */} 
           
           <div className="mt-4 flex flex-col items-center space-y-2">
              <span className="mb-4 text-4xl font-bold text-primary">
                {siteConfig.discountedPrice}
              </span>
              <button
                onClick={handleClick}
                className="btn btn-primary btn-lg rounded-full text-white"
              >
                GET INSTANT ACCESS <span className="text-lg">→</span>
              </button>
            </div>

 {/* 
          <div className="flex items-center justify-center mt-6 text-sm text-lightgray">
            <img src="icons/present.png" alt="present" className="w-5 h-5 mr-2" />
            <span>
              <span className="text-secondary font-semibold">$50 off</span> with today's offer
            </span>
          </div>
    */} 

        </div>
      </div>
    </div>
  );
}
