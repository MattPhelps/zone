export default function FAQ() {
    return (
      <div id="faq" className="hero mt-20 flex items-center justify-center bg-base-100">
        <div className="hero-content w-full px-4">
          <div className="max-w-2xl mx-auto">
            {/* Heading */}
            <h2 className="text-4xl text-center lg:text-5xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="py-6 text-lg mb-6 text-center">
            Have another question? Contact me on <a href="https://x.com/skoyig" className="text-primary">Twitter</a> or by <a href="mailto:matt@leandme.com" className="text-primary">
              email
            </a>.
            </p>
  
            {/* FAQ Items */}
            <div className="space-y-4">
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion"/>
                <div className="collapse-title text-lg font-bold">
                  What do I get exactly?
                </div>
                <div className="collapse-content">
                <p className="text-lg">You’ll receive an instant report with your estimated body fat percentage, lean and fat mass breakdown, and fitness standard comparisons.</p>
                </div>  
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                  How does it work?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  Simply upload a clear photo of yourself, and our AI analyzes key body measurements to estimate your body fat percentage. You’ll receive a detailed report within seconds.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                  Is it accurate?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  Our AI model is trained on a large dataset of body composition scans, making it highly accurate. While it’s not a replacement for medical-grade devices, it provides reliable estimates that align closely with professional methods like DEXA scans.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                What types of photos should I upload?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  For best results, upload a well-lit, full-body photo in your underwear/swimwear to ensure the AI can analyze your body accurately.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                  Can I get a refund if I'm not satisfied?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  We’re confident in the accuracy of our tool, but if you feel the results are off, you can get a 100% refund if you reach out to us within 7 days of your purchase.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                Is my data safe?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                  Yes! We prioritize your privacy. Your photos are processed securely and are never shared, stored, or used for any purpose beyond your analysis. All data is automatically deleted after processing.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                  I have another question...
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    No worries! Contact me via <a href="mailto:matt@leandme.com" className="text-secondary">
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
  