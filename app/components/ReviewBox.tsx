export default function ReviewBox() {
  return (
    <div className="flex flex-col items-center justify-center mt-12 space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
      {/* Avatar Group */}
      <div className="flex -space-x-2">
        <img src="profiles/2.webp" className="w-8 h-8 rounded-full object-cover" />
        <img src="profiles/00.jpg" className="w-8 h-8 rounded-full object-cover" />
        <img src="profiles/4.jpg" className="w-8 h-8 rounded-full object-cover" />
        
        <img src="profiles/900.avif" className="w-8 h-8 rounded-full object-cover" />
        <img src="profiles/6.png" className="w-8 h-8 rounded-full object-cover" />
        <img src="profiles/5.jpeg" className="w-8 h-8 rounded-full object-cover" />
        <img src="profiles/7.jpeg" className="w-8 h-8 rounded-full object-cover" />
        <img src="profiles/90.jpeg" className="w-8 h-8 rounded-full object-cover" />
        <img src="profiles/1.jpg" className="w-8 h-8 rounded-full object-cover" />

      </div>

      {/* Stars and Text */}
      <div className="flex flex-col items-center sm:items-start space-y-2">
        <p className="text-md text-lightgray">
        Join 4,000+ men with better jawlines
        </p>
      </div>
    </div>
  );
}
