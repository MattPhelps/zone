export default function Comparison() {
    return (
      <div className="hero min-h-screen mt-40 text-white lg:mt-0 flex items-center justify-center">
        <div className="w-full px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-center">Here's WHO The Formula Can Help</h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 mt-12">

            {/* is for */}
            <div className="card bg-[#DEFCED] w-full lg:w-1/3 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center text-black justify-center text-xl font-bold">We Can Help</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-neutral">
                    <span className="text-green-500 mr-2">✅</span>
                    Costs $3 for a one-time scan
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="mr-2">✅</span>
                    Upload a picture and get instant, accurate results from anywhere
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="mr-2">✅</span>
                    100% private, take a picture at home
                  </li>
                </ul>
              </div>
            </div>

            {/* Not for */}
            <div className="card bg-[#FFEAEC] w-full lg:w-1/3 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-center text-black justify-center text-xl font-bold">We <span className="underline">CAN'T</span> Help</h2>
                <ul className="mt-4 space-y-4">
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Costs $100–$200 per scan
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Need an appointment and have     to travel to a clinic
                  </li>
                  <li className="flex items-center text-neutral">
                    <span className="text-red-500 mr-2">❌</span>
                    Need to undress in front of a stranger
                  </li>
                </ul>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    );
  }
  