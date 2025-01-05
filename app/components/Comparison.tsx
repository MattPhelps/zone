export default function Comparison() {
    return (
      <div className="hero min-h-screen mt-40 lg:mt-0 flex items-center justify-center">
        <div className="w-full px-6 lg:px-12">
          <h1 className="text-3xl lg:text-5xl font-bold text-center">Tired of Your Generic Roasts?</h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-12">
            {/* Manual Roasting */}
            <div className="card bg-[#FFEAEC] w-full lg:w-1/3 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center justify-center text-xl font-bold">Manual Roasts</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Struggle to come up with funny roasts
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Risk of falling flat with weak insults
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Time wasted thinking of bad jokes
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Recycled roasts that everyone has heard before
                  </li>
                </ul>
              </div>
            </div>
  
            {/* AI Roasting */}
            <div className="card bg-[#DEFCED] w-full lg:w-1/3 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center justify-center text-xl font-bold">SuperAI Roasts</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-neutral">
                    <span className="text-green-500 mr-2">✅</span>
                    Instant, personalized burns
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="mr-2">✅</span>
                    Unlimited creativity at your fingertips
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="mr-2">✅</span>
                    Perfect burns tailored for any occasion
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="mr-2">✅</span>
                    Never runs out of ideas, no matter the occasion
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  