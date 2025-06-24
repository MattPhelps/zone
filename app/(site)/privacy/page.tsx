export const metadata = {
  title: "Privacy Policy - ZONE",
  description: "",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-8 text-white max-w-4xl">
      <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className="text-lg mb-4">
        This Privacy Policy describes how ZONE ("we", "us", or
        "our") collects, uses, and discloses your personal information when you
        use our services or interact with our website (the "Site"). Please read
        this policy carefully.
      </p>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
        <ul className="list-disc pl-6">
          <li>
            Information you provide directly, such as your name, email address,
            or any images you upload to use our services.
          </li>
          <li>
            Technical information such as browser type, IP address, device
            identifiers, and interaction data through cookies and analytics.
          </li>
          <li>
            Data from third parties, such as analytics platforms and payment
            processors, to improve our services.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
        <ul className="list-disc pl-6">
          <li>To operate and improve our services and offerings.</li>
          <li>To fulfill transactions and provide customer support.</li>
          <li>To conduct analytics and personalize your experience.</li>
          <li>To detect, investigate, and prevent security and fraud issues.</li>
          <li>To comply with legal obligations or enforce terms of service.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to understand how users
          interact with our Site. You can control cookie preferences through your
          browser settings. Disabling cookies may affect your experience.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          How We Share Your Information
        </h2>
        <ul className="list-disc pl-6">
          <li>With service providers such as hosting and analytics vendors.</li>
          <li>With third-party tools and partners, only where legally permitted.</li>
          <li>
            In connection with business transfers, legal requests, or to protect
            our rights and users.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
        <ul className="list-disc pl-6">
          <li>Access or request a copy of your personal data.</li>
          <li>Request deletion or correction of inaccurate data.</li>
          <li>Withdraw consent or restrict data processing.</li>
          <li>
            Opt out of analytics tracking or marketing communications at any
            time.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          Data Retention and Security
        </h2>
        <p>
          We retain personal information as needed for legitimate business
          purposes and take reasonable steps to secure your data. However, no
          system is fully secure.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Children’s Privacy</h2>
        <p>
          Our services are not intended for children under 16. We do not knowingly
          collect data from children. If you believe a child has provided us data,
          please contact us to delete it.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">
          International Users and Transfers
        </h2>
        <p>
          Your data may be processed outside your country of residence. When we
          transfer data internationally, we use legal mechanisms such as Standard
          Contractual Clauses to ensure appropriate safeguards.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes
          to our practices or legal requirements. We will update the “Last
          updated” date at the top of this page.
        </p>
      </section>

      <section className="mb-6">
  <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
  <p>
    If you have any questions or requests regarding your personal
    information or this Privacy Policy, please contact us at&nbsp;
    <a href="mailto:matt@leandme.com" className="text-blue-500">
      matt@leandme.com
    </a>
    .
  </p>
</section>
    </div>
  );
}