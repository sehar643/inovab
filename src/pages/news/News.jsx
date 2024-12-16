import React, { useState } from "react";
import ArticleSection from "./_components/ArticleSection";
import RelatedArticles from "./_components/RelatedArticles";

const News = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const sections = [
    { id: "section1", title: "USDI: The Future of Global Digital Payments" },
    {
      id: "section2",
      title: "Inovab Digital Labs: Empowering Blockchain Innovation",
    },
  ];

  const scrollToSection = (id) => {
    setActiveSection(id);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-6 py-12 grid lg:grid-cols-4 gap-8">
        {/* Left Content */}
        <div className="lg:col-span-3">
          {/* Content Sections */}
          {sections.map((section) => (
            <div id={section.id} key={section.id} className="mb-8 scroll-mt-20">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.id === "section1" ? (
                  <>
                    USDI is a revolutionary digital currency designed to
                    streamline global payments and facilitate continuous,
                    around-the-clock financial market operations. With a stable
                    1:1 redemption rate tied to the US dollar, USDI offers users
                    the assurance of consistent value and reliability, making it
                    ideal for both everyday transactions and large-scale
                    financial activities.
                    <br />
                    <br />
                    This digital currency is already being leveraged by a
                    growing network of global media and financial partners,
                    further establishing USDI as a trusted solution for modern
                    financial ecosystems. By combining the stability of
                    traditional fiat currency with the efficiency of digital
                    technology, USDI is set to become a cornerstone of the
                    digital currency revolution, empowering businesses and
                    individuals alike to engage in secure, swift, and borderless
                    transactions.
                  </>
                ) : (
                  <>
                    Inovab Digital Labs is at the forefront of blockchain
                    innovation, providing secure, efficient, and cutting-edge
                    services to businesses and developers around the world. With
                    a focus on enhancing the digital landscape, Inovab Digital
                    Labs delivers solutions that drive the growth of
                    decentralized technologies, helping clients unlock new
                    opportunities and stay ahead in an ever-evolving market.
                    <br />
                    <br />
                    USDI, a key offering from Inovab, seamlessly integrates with
                    global platforms, tapping into the power of blockchain
                    infrastructure. This integration delivers faster transaction
                    speeds, reduced costs, and greater flexibility when compared
                    to traditional financial systems. USDI is a testament to the
                    transformative potential of blockchain, offering businesses
                    and developers a reliable, scalable solution for modern
                    financial operations.
                  </>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-1 rounded-lg shadow-md p-4 sticky top-24 h-max">
          <ul className="space-y-3">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className={`text-sm w-full text-left px-2 py-1 rounded-md ${
                    activeSection === section.id
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
      <RelatedArticles />
    </div>
  );
};

export default News;
