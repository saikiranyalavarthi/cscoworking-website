import React from "react";

const Terms = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="max-w-5xl w-full text-gray-800 py-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-2 text-center">
          Terms and Conditions
        </h1>
        <p className="text-sm text-gray-500 mb-8 text-center">
          Last Updated: January 08, 2025
        </p>

        <div className="space-y-8 text-base leading-relaxed">
          {/* Sections */}
          {[
            {
              title: "1. Nature of Agreement",
              points: [
                "The agreement usually grants a license to use the workspace, not a lease, meaning it doesn't confer tenancy rights.",
                "It specifies the duration of the agreement and the process for renewal or termination.",
              ],
            },
            {
              title: "2. Payment Terms",
              points: [
                "Details about membership fees, payment schedules, security deposits, and penalties for late payments are outlined.",
                "Information on additional charges for services like meeting room bookings or printing may be included.",
              ],
            },
            {
              title: "3. Use of Premises",
              points: [
                "Members are expected to use the space for lawful business activities only.",
                "Policies regarding sharing spaces, hosting events, or making alterations to the workspace are typically specified.",
              ],
            },
            {
              title: "4. Conduct and Community Guidelines",
              points: [
                "Rules promoting respectful behavior, noise control, cleanliness, and collaboration among members are common.",
                "Prohibitions against illegal activities, harassment, and disruptive behavior are standard.",
              ],
            },
            {
              title: "5. Privacy and Confidentiality",
              points: [
                "Members are often required to respect the confidentiality of other members' information.",
                "The coworking space may disclaim liability for any data breaches or loss of confidential information.",
              ],
            },
            {
              title: "6. Liability and Insurance",
              points: [
                "The space typically disclaims responsibility for loss or damage to personal property.",
                "Members may be advised to obtain their own insurance coverage.",
              ],
            },
            {
              title: "7. Termination Clause",
              points: [
                "Conditions under which either party can terminate the agreement, notice periods, and refund policies are detailed.",
              ],
            },
            {
              title: "8. Refund Policy",
              points: [
                <span className="text-red-600 font-semibold" key="refund">
                  There is no cancellation and refund at any cost.
                </span>,
              ],
            },
          ].map((section, index) => (
            <div key={index}>
              <h2 className="text-xl font-semibold text-blue-600 mb-2">
                {section.title}
              </h2>
              {section.points.map((point, idx) => (
                <p key={idx}>{point}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Terms;
