export default function Testimonials() {
  return (
    <div className="hero min-h-screen text-white bg-background  flex items-center justify-center">
      <div className="hero-content flex flex-col text-center">
        <h2 className="text-3xl mt-6 lg:mt-10 lg:text-5xl font-bold">
          Real Men, Real Results, Fast
        </h2>

        {/* Grid of Images */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          <img src="/testimonials/test7.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test8.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test9.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test10.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test11.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test12.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test13.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test14.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
          <img src="/testimonials/test15.png" className="rounded-lg w-full h-auto object-cover" alt="User" />
        </div>
      </div>
    </div>
  );
}
