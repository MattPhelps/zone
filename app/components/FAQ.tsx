export default function FAQ() {
  return (
    <div id="faq" className="hero mt-20 mb-20  flex text-white items-center justify-center bg-background">
      <div className="hero-content w-full px-4">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <h2 className="text-3xl lg:text-5xl text-center font-bold mb-10">
          Still Have Questions?
          </h2>
          {/* FAQ Items */}
          <div className="space-y-4">
            
          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
          <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              What do I get exactly?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                As soon as you purchase, you will get instant access to the following:
                </p>
                <ol className="text-md lg:text-lg text-lightgray mt-6">
                  <li>• The 17 Step Jawline Formula Video Course (3hrs)</li>
                  <li>• BONUS – 6 Mins a Day Personalised Jawline Workout Routine</li>
                  <li>• BONUS II – Lifetime Access to the Jawline Discord Community</li>
                  <li>• BONUS III – Jawline Photo Guide</li>
                  <li>• BONUS IV – Access to 4 Facial Analysis Softwares</li>
                </ol>
            </div>
          </div>
          </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
          <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              Who is this course for?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">          
                This course is for any man who wants to improve his jawline naturally through exercises, posture and techniques. Whether you’re a beginner or someone tired of trying outdated exercises with no scientific evidence.
              </p>
            </div>
          </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
          <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              How long to see results?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                Some of the steps with give <i>instant</i> results, specifically the posture and grooming tips. Others may take a few weeks to see results. If you follow all 17 steps, you will reach your best jawline potential in 2-3 months.
              </p>
            </div>
            </div>

            <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
          <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              What if I get stuck during the course?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
              You’ll have access to a Discord support community where you can ask questions and get help from your instructor.
              </p>
            </div>
            </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              Can I get a refund?
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                You have the right to a full refund with no questions asked, <i>at any time</i>.
              </p>
              <p className="text-md lg:text-lg text-lightgray mt-6">
                And it's super easy! When you buy, you get an email with the 17 Steps and all the bonuses. All you have to do is reply to the email with "refund" and I will process it immediately. Whether it's 29 minutes or 29 days from now, you are always able to get your money back.
              </p>
              <p className="text-md lg:text-lg text-lightgray mt-6">
                Don't hesitate to contact me if you have any questions - <i>matt@leandme.com</i>
              </p>
            </div>
          </div>

          <div className="collapse bg-base-500 rounded-lg border-t border-lightgray">
            <input type="radio" name="faq-accordion" />
            <div className="collapse-title flex items-center gap-4 text-xl lg:text-2xl">
              <div className="text-3xl text-primary">+</div> {/* Manual Plus */}
              I have another question
            </div>
            <div className="collapse-content">
              <p className="text-md lg:text-lg text-lightgray mt-6">
                No worries! Contact me via email - <i>matt@leandme.com</i>
              </p>
            </div>
          </div>
            
          </div>
        </div>
      </div>
  );
}
