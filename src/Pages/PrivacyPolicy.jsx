const PrivacyPolicy = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center py-12 px-2">
    <div className="w-full max-w-3xl bg-white/90 rounded-2xl shadow-2xl p-8 md:p-12 border border-blue-100">
      <h1 className="text-4xl font-extrabold mb-6 text-blue-700 text-center drop-shadow">
        Privacy Policy
      </h1>
      <p className="mb-4 text-gray-700 text-center">
        <strong>Effective Date:</strong> August 20, 2025
      </p>
      <p className="mb-6 text-gray-700 text-lg text-center">
        At <span className="font-semibold text-blue-700">MediCare</span>, your
        privacy is important to us. This Privacy Policy explains how we collect,
        use, and protect your personal information when you use our website and
        services.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600 flex items-center gap-2">
          <span>1.</span> Information We Collect
        </h2>
        <ul className="list-disc ml-8 mb-4 text-gray-700 space-y-1">
          <li>
            Personal information you provide (such as name, email, address, and
            phone number)
          </li>
          <li>Order and payment information</li>
          <li>
            Usage data (such as pages visited, products viewed, and actions
            taken)
          </li>
          <li>Cookies and similar tracking technologies</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600 flex items-center gap-2">
          <span>2.</span> How We Use Your Information
        </h2>
        <ul className="list-disc ml-8 mb-4 text-gray-700 space-y-1">
          <li>To process and fulfill your orders</li>
          <li>To communicate with you about your account or orders</li>
          <li>To improve our website and services</li>
          <li>
            To send you updates, offers, and newsletters (you can opt out
            anytime)
          </li>
          <li>To comply with legal obligations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600 flex items-center gap-2">
          <span>3.</span> Information Sharing
        </h2>
        <p className="mb-4 text-gray-700">
          We do not sell or rent your personal information. We may share your
          information with trusted third parties for order processing, payment,
          delivery, or as required by law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600 flex items-center gap-2">
          <span>4.</span> Data Security
        </h2>
        <p className="mb-4 text-gray-700">
          We use industry-standard security measures to protect your data.
          However, no method of transmission over the Internet is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600 flex items-center gap-2">
          <span>5.</span> Your Rights
        </h2>
        <ul className="list-disc ml-8 mb-4 text-gray-700 space-y-1">
          <li>Access, update, or delete your personal information</li>
          <li>Opt out of marketing communications</li>
          <li>Request information about how your data is used</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600 flex items-center gap-2">
          <span>6.</span> Changes to This Policy
        </h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated effective date.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mt-8 mb-3 text-blue-600 flex items-center gap-2">
          <span>7.</span> Contact Us
        </h2>
        <p className="mb-2 text-gray-700">
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
          <a
            href="mailto:support@medicare.com"
            className="text-blue-600 underline hover:text-blue-800 transition-colors"
          >
            support@medicare.com
          </a>
          .
        </p>
      </section>
    </div>
  </div>
);

export default PrivacyPolicy;
