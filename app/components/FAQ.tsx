export default function FAQ() {
  return (
    <div id="faq" className="hero mt-10 lg:mt-40 flex text-white items-center justify-center bg-background">
      <div className="hero-content w-full px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl text-center font-bold mb-10">
            Have a Question?
          </h2>
           {/*
          <p className="py-6 text-md lg:text-lg mb-6 text-center text-lightgray">
          Have another question? Reach out to our support team by sending us an <a href="mailto:matt@leandme.com" className="text-primary">email</a> and we’ll get back to you as soon as we can.
          </p>
            */}
          {/* FAQ Items */}
          <div className="space-y-4">
            
          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              How does it work?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                Simply upload a clear photo of yourself, and our advanced trained AI analyzes key body measurements and markers to estimate your body fat percentage.
              </p>
            </div>
          </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              How does it work?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                Simply upload a clear photo of yourself, and our advanced trained AI analyzes key body measurements and markers to estimate your body fat percentage.
              </p>
            </div>
          </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              How does it work?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                Simply upload a clear photo of yourself, and our advanced trained AI analyzes key body measurements and markers to estimate your body fat percentage.
              </p>
            </div>
          </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              How does it work?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                Simply upload a clear photo of yourself, and our advanced trained AI analyzes key body measurements and markers to estimate your body fat percentage.
              </p>
            </div>
          </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              How does it work?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                Simply upload a clear photo of yourself, and our advanced trained AI analyzes key body measurements and markers to estimate your body fat percentage.
              </p>
            </div>
          </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
