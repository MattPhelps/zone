export default function Pricing() {
    const commonFeatures = [
      "Complete Roast Speech",
      "Adjustable Roast Intensity",
      "Customizable Roast Memes",
      "Personalized Appearance Roast",
      "Themed Roasts for Any Occasion",
    ];
  
    const pricingPlans = [
      {
        title: "1 Roast",
        oldPrice: "$5", // Old price for strikethrough
        price: "$3",
        buttonText: "Choose Basic",
        checkoutLink: "https://checkout.example.com/basic-plan",
      },
      {
        title: "10 Roasts",
        oldPrice: "$17", // Old price for strikethrough
        price: "$9",
        buttonText: "Choose Premium",
        checkoutLink: "https://checkout.example.com/premium-plan",
      },
    ];
  
    return (
      <div className="flex flex-col items-center gap-8 p-6 lg:flex-row lg:justify-center lg:gap-24 mt-12">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="card bg-base-100 w-full max-w-md shadow-xl"
          >
            <div className="card-body">
              <h2 className="card-title justify-center text-4xl font-bold">
                {plan.title}
                {plan.title === "10 Roasts" && (
                  <div className="badge text-white badge-success">BEST</div>
                )}
              </h2>
              <div className="flex justify-center items-center mr-12 mt-6">
                <span className="text-xl text-gray-500 line-through mr-2">
                  {plan.oldPrice}
                </span>
                <span className="text-4xl font-extrabold">{plan.price}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {commonFeatures.map((feature, i) => (
                  <li key={i} className="flex items-center text-gray-500">
                    <span className="text-green-500 mr-2">✔️</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="card-actions mt-6">
                <a
                  href={plan.checkoutLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-full"
                >
                  {plan.buttonText}
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                  One-time payment. No subscription.
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  