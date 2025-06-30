'use client'

import { trackEvent } from "../libs/amplitude";
import siteConfig from "../libs/siteConfig";
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
    <section className="w-full h-full bg-background text-white flex items-center justify-center px-4 lg:px-0">
     <div className="text-center max-w-3xl w-full">

        <h1 className="text-4xl mb-12 lg:text-6xl font-bold">
          [ZONE]
        </h1>

        <p className="mt- lg:mt-6 text-xl lg:text-2xl text-white">
          Boost mental clarity, energy, and focus fast—anywhere you are.
        </p>

       

        <div className="mt-12 flex flex-col text-s items-center">
  <ul className="flex space-x-4 divide-x divide-white">
    <li className="pr-4"><a href="/privacy">Privacy</a></li>
    <li className="px-4"><a href="/terms">Terms</a></li>
    <li className="pl-4"><a href="mailto:matt@leandme.com">Contact</a></li>
  </ul>
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
