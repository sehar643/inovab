import React from "react";

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-gray-800  hover:shadow-xl transform transition duration-500 ease-in-out hover:scale-105">
      <div className="flex items-center mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11z"
          />
        </svg>
        <h3 className="ml-4 text-lg font-medium">{title}</h3>
      </div>
      <p className="text-sm">{description}</p>
    </div>
  );
};

const StabilitySection = () => {
  const features = [
    {
      title: "Robust Security Framework",
      description:
        "We utilize secure blockchain networks and provide audited reports smart contract for the USDI stablecoin.",
    },
    {
      title: "Optimized for Enhanced Performance",
      description:
        "Designed for optimal performance, delivering fast load times and a user experience.",
    },
    {
      title: "Continuous Enhancements",
      description:
        "Ongoing enhancements and updates to ensure your application stays current with the latest features.",
    },
    {
      title: "24/7 Assistance",
      description:
        "24/7 technical support to assist you in resolving any issues promptly.",
    },
    {
      title: "Flexible and Scalable Architecture",
      description:
        "Crafted to scale with your growing needs and user base in the digital currency market.",
    },
    {
      title: "Community-Powered",
      description:
        "A vibrant community of investors, traders and developers dedicated to ongoing improvement.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <section className="py-20 px-4 sm:px-6 lg:px-32">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Stability You Can Rely On
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Inovab Digital Labs is an organization dedicated to building USDI, a
            digital currency designed for seamless global payments and
            continuous 24/7 financial market operations, with a guaranteed 1:1
            redemption rate for US dollars.
          </p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default StabilitySection;
