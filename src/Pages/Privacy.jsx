import React from "react";

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
        Privacy Policy
      </h1>

      <ol className="list-decimal pl-6 space-y-6 text-base leading-relaxed">
        <li>
          <span className="font-semibold text-blue-600">
            Information Collection
          </span>
          <br />
          <span className="text-gray-700">
            - Personal: Name, email, phone, payment details. <br />
            - Usage: IP, browser type, pages visited. <br />- Cookies: Used for
            analytics and experience enhancement.
          </span>
        </li>
        <li>
          <span className="font-semibold text-blue-600">
            Use of Information
          </span>
          <br />
          To operate services, communicate updates, and improve experience.
        </li>
        <li>
          <span className="font-semibold text-blue-600">
            Information Sharing
          </span>
          <br />
          Shared with service providers for payment/analytics. Required by law
          if necessary.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Data Security</span>
          <br />
          Reasonable measures are in place to protect your data.
        </li>
        <li>
          <span className="font-semibold text-blue-600">User Rights</span>
          <br />
          Users can request access, correction, or deletion. Option to opt out
          of marketing.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Data Retention</span>
          <br />
          Retained only as long as needed for services.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Data Protection</span>
          <br />
          Commercial protections against loss, theft, and unauthorized access.
        </li>
        <li>
          <span className="font-semibold text-blue-600">
            Third-Party Sharing
          </span>
          <br />
          Not shared publicly or with third parties unless legally required.
        </li>
        <li>
          <span className="font-semibold text-blue-600">External Links</span>
          <br />
          Not responsible for privacy practices of linked sites.
        </li>
        <li>
          <span className="font-semibold text-blue-600">User Choice</span>
          <br />
          Users may refuse to provide data; some services may not work as a
          result.
        </li>
        <li>
          <span className="font-semibold text-blue-600">Policy Acceptance</span>
          <br />
          Continued use of the app signifies acceptance of this policy.
        </li>
      </ol>
    </div>
  );
};

export default Privacy;
