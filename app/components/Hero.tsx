'use client'

import ReviewBox from "./ReviewBox";
import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";
import VideoPlayer from "./VideoPlayer";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Hero() {
  const handleClick = () => {
    trackEvent("Go to Checkout", {
      location: "hero cta",
    });
    window.location.href = siteConfig.checkoutLink;
  };

  return (
    <section className="bg-background text-white flex items-center justify-center px-4 lg:px-0 -pt-24 lg:pt-0">
      <div className="text-center max-w-3xl w-full">
        <ReviewBox />

        <h1 className="text-3xl lg:text-5xl font-bold mt-10">
          Transform Your Jawline in Weeks, Not Years
        </h1>

        <p className="mt-4 lg:mt-6 text-lg lg:text-xl text-lightgray">
          The 17 Step Formula to get your sharpest jawline — and catch eyes everywhere you go
        </p>

        <div className="mt-8">
          <VideoPlayer />
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4">
          <span className="text-4xl font-bold text-primary">
            {siteConfig.discountedPrice}
          </span>

          <button
            onClick={handleClick}
            className="btn mt-8 btn-primary btn-lg rounded-full text-white px-8 py-3"
          >
            GET INSTANT ACCESS <span className="text-lg ml-1">→</span>
          </button>
        </div>

        {/*
        // Uncomment this block if needed later
        <div className="flex items-center justify-center mt-6 text-sm text-lightgray">
          <img src="icons/present.png" alt="present" className="w-5 h-5 mr-2" />
          <span>
            <span className="text-secondary font-semibold">$50 off</span> with today's offer
          </span>
        </div>
        */}
      </div>
    </section>
  );
}

/*
  // Optional Stripe API call (replaces window.location.href)
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
*/
