import React, { useState } from "react";

const FaQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Q1: How can I trust USDI and its 1:1 value to the US dollar?",
      answer:
        "Inovab Digital Labs maintains its value by holding reserves of USD and other assets, which back the issuance of USDI.In summary, USDI is a cryptocurrency, specifically a stablecoin, designed to provide stability in the often volatile crypto market.",
    },
    {
      question: "Q2: Who can use USDI?",
      answer:
        "USDI, the USD Digital Dollar, is a versatile digital currency designed to cater to a wide range of users. Individuals can utilize it for everyday transactions, such as online shopping and peer-to-peer money transfers. Businesses benefit from accepting USDI as a payment method, enabling them to expand their customer base and conduct international transactions with lower fees. For investors, USDI serves as a stable asset to hedge against the volatility of other cryptocurrencies. Financial institutions leverage it for cross-border transactions, liquidity management, and the development of innovative financial products. Additionally, developers can integrate USDI into their applications, allowing users to transact seamlessly in a stable digital currency. By addressing the needs of various stakeholders, USDI plays a pivotal role in advancing the adoption of digital currencies across industries.",
    },
    {
      question: "Q3: How can I obtain USDI?",
      answer:
        "USDI can be purchased directly from Inovab Digital Labs by qualifying professionals or through secondary markets on trusted exchanges.",
    },
    {
      question: "Q4: Where can the debit card be used?",
      answer:
        "USDI debit cards offer a convenient way to use your cryptocurrency for everyday transactions, seamlessly bridging the gap between the crypto market and traditional commerce.",
    },
    {
      question: "Q5: How can I convert or redeem USDI?",
      answer:
        "To acquire USDI stablecoin, you must first become a client of Inovab Digital Labs and pass AML and CTF checks. Once approved, you can exchange USDI for fiat currency or sell it on a cryptocurrency exchange or OTC provider. Ensure compliance with local legal and financial regulations before proceeding.",
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600">
          Comprehensive Insights into Inovab Digital Labs: Everything You Need
          to Know.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              className="w-full flex items-center justify-between p-4 hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-left">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                  activeIndex === index ? "transform rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {activeIndex === index && (
              <div className="px-4 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaQs;
