import React, { useState } from "react";

const RewardCriteria = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const sections = [
    { id: "section1", title: "Who will Eligible for the Reward?" },
    { id: "section2", title: "Who will not Eligible for the Reward?" }
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-3 ml-20">
          {sections.map((section) => (
            <div id={section.id} key={section.id} className="mb-8 scroll-mt-20">
              <h2 className="text-xl font-bold text-gray-800 mb-2">{section.title}</h2>
              {section.id === "section1" && (
                <>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700">
                    <li>
                      Users who have maintained a certain average balance of the stablecoin over the past 4 months, up until the point when a snapshot is taken. User has average balance of the stablecoin is considered eligible for rewards.
                    </li>
                    <li>
                    The trading volume will be counted in both spot trading and futures trading, but the trading volume for stablecoins like USDI/USDT will be excluded.
                    </li>
                    <li>
                    How much of our stablecoin the user holds at the time the snapshot was taken.
                    </li>
                    <li>
                    If a user opens a trade in futures with leverage, their original margin will be counted.
                    </li>
                  </ul>
                </>
              )}
              {section.id === "section2" && (
                <>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700">
                    <li>
                    If a user held our stablecoin for four months and had trading volume during that time, but their balance is recorded as 0 at the time of the snapshot, they will not qualify for eligibility. This means that although they may have had activity and holdings in the past, the snapshot reflects their balance at a specific moment, and if it shows zero, they will be excluded from eligibility.
                    </li>
                  </ul>
                </>
              )}
            </div>
          ))}

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 rounded-lg shadow-md p-4 sticky top-6 h-max">
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm w-full text-left px-2 py-1 rounded-md ${activeSection === section.id
                    ? "text-blue-500 font-semibold border-l-4 border-blue-500 pl-2"
                    : "text-gray-700 hover:text-blue-500"
                    }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RewardCriteria;
