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
                <p className="text-lg">You’ll get personalized, brutally funny roasts tailored to the person or situation of your choice.</p>
                <p className="text-lg">Whether it's a roast for your best friend, a themed roast for a party, or a savage comeback, the AI delivers custom-crafted roasts in seconds.</p>
                </div>  
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                  How are the roasts personalized?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Roast Generator uses the information you give it about the target to create a custom roast. This includes pictures, socials links, job title and hobbies - amongst other things. You only need to provide as much information as you want.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                  Can AI actually be funny?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Yes!
                    The AI is trained on the most upvoted roasts from the <a href="https://www.reddit.com/r/RoastMe/" className="text-secondary">r/RoastMe</a> subreddit with 5.5 MILLION members. So it know what's funny and what's not.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 rounded-lg">
                <input type="radio" name="faq-accordion" />
                <div className="collapse-title text-lg font-bold">
                Are the roasts appropriate for all audiences?
                </div>
                <div className="collapse-content">
                  <p className="text-lg">
                    Definitely not! Some roasts can be quite brutal and are not suitable for children or sensitive people. You can adjust the intensity of the roast to make it more or less brutal.
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
                  Yes, you can get a 100% refund if you reach out to us within 7 days of your purchase.
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
  