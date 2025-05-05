export default function FAQ() {
  return (
    <div id="faq" className="hero mt-10 lg:mt-40 flex text-white items-center justify-center bg-background">
      <div className="hero-content w-full px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl text-center font-bold">
            Have a Question?
          </h2>
          <p className="py-6 text-lg mb-6 text-center text-lightgray">
          Have another question? Reach out to our support team by sending us an <a href="mailto:matt@leandme.com" className="text-primary">email</a> and we’ll get back to you as soon as we can.
          </p>

          {/* FAQ Items */}
          <div className="space-y-4">
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl lg:text-2xl">
                How does it work?
              </div>
              <div className="collapse-content">
              <p className="text-lg text-lightgray mt-6">
                Simply upload a clear photo of yourself, and our advanced trained AI analyzes key body measurements and markers to estimate your body fat percentage.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl lg:text-2xl">
                How long does it take?
              </div>
              <div className="collapse-content">
              <p className="text-lg text-lightgray mt-6">
                  Most estimates are completed in less than 20 seconds.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl lg:text-2xl">
                Is it accurate?
              </div>
              <div className="collapse-content">
              <p className="text-lg text-lightgray mt-6">
                Our AI model is trained on a large dataset of body composition scans, making it highly accurate. While it’s not a replacement for medical-grade devices, it provides reliable estimates that align closely with professional methods like DEXA scans.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl lg:text-2xl">
              What types of photos should I upload?
              </div>
              <div className="collapse-content">
              <p className="text-lg text-lightgray mt-6">
                For best results, upload a well-lit, full-body photo in your underwear/swimwear to ensure the AI can analyze your body accurately. Only one person in each photo.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl lg:text-2xl">
              Is my data safe?
              </div>
              <div className="collapse-content">
              <p className="text-lg text-lightgray mt-6">
                Yes! We prioritize your privacy. Your photos are processed securely and are never shared, stored, or used for any purpose beyond your analysis. All data is automatically deleted after processing.
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-500 rounded-lg">
              <input type="radio" name="faq-accordion" />
              <div className="collapse-title text-xl lg:text-2xl">
                I have another question...
              </div>
              <div className="collapse-content">
              <p className="text-lg text-lightgray mt-6">
                  No worries! Contact me via <a href="mailto:matt@leandme.com" className="text-primary">
            email.
          </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
