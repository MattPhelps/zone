import ReviewBox from "./ReviewBox";

export default function Modules() {
    return (
      <div className="hero mt-20 mb-40 text-white flex flex-col items-left justify-center">
      <div className="hero-content text-center flex flex-col items-left justify-center">
        <div className="max-w-2xl w-full">
          <h2 className="text-3xl lg:text-5xl font-bold">
          The 17 Steps
          </h2>
          <p className="py-6 text-md lg:text-lg text-lightgray">
          <span className="text-secondary">$102 of</span> for the next 11 customers
          </p>

          <div className="overflow-x-auto">
  <table className="table py-6 text-md lg:text-lg">
    {/* head 
    <thead>
      <tr>
        <th></th>
        <th >Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead> */}
    <tbody>
      {/* row 1 */}
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
      </tr>
      {/* row 2 */}
      <tr className="hover:bg-base-300">
        <th>2</th>
        <td>Hart HagertyHart Hagerty</td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
      </tr>
    </tbody>
  </table>
</div>

              
          </div>
        </div>
      </div>
    );
  }
  