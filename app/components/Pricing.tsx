
export default function Pricing() {

  return (
    <div id="pricing" className="hero min-h-screen  flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-3xl lg:text-5xl font-bold">Serve Up Scalding Hot Roasts</h1>
        <div className="flex flex-col items-center gap-8 p-6 lg:flex-row lg:justify-center lg:gap-24 mt-12">
          <div className="card bg-base-100 w-full max-w-lg shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center text-3xl lg:text:4xl font-bold">
                10 Roasts
              </h2>
              <div className="flex justify-center items-center mr-12 mt-6">
                <span className="text-lg text-gray-500 line-through mr-2">
                  $7.95
                </span>
                <span className="text-4xl font-extrabold">$3.95</span>
                <span className="text-xs text-gray-500 ml-2">USD</span>
              </div>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  Generate 10 roasts
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  7 day money-back guarantee
                </li>
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="https://buy.stripe.com/8wM3d07hM9zJdIk4gr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg text-white w-full"
                >
                  Get 10 Roasts
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                  🔒 Pay once. Use forever.
                </p>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 w-full max-w-lg shadow-xl">
            <div className="card-body">
              <h2 className="card-title justify-center text-3xl lg:text:4xl font-bold">
                Unlimited Roasts
                <div className="badge text-white badge-success">VALUE</div>
              </h2>
              <div className="flex justify-center items-center mr-12 mt-6">
                <span className="text-lg text-gray-500 line-through mr-2">
                  $15.95
                </span>
                <span className="text-4xl font-extrabold">$7.95</span>
                <span className="text-xs text-gray-500 ml-2">USD</span>
              </div>
              <ul className="mt-4 space-y-2">
              <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  Generate&nbsp;<span className="bg-[#D6EFE4] px-1 rounded">unlimited</span>&nbsp;roasts
                </li>
                <li className="flex items-center text-gray-500">
                  <span className="text-green-500 mr-2">✔️</span>
                  7 day money-back guarantee
                </li>
              </ul>
              <div className="card-actions mt-6">
                <a
                  href="https://buy.stripe.com/9AQdRE8lQh2b33G5kw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-lg text-white w-full"
                >
                  Get Unlimited Roasts
                </a>
                <p className="text-sm text-center text-gray-500 mt-2">
                🔒 Pay once. Use forever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}