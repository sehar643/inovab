import React from "react";

const Networks = () => {
  const networks = [
    {
      //   name: 'Ethereum',
      icon: "/Container (2).png", // You'll need to add these icons to your public folder
      address: "0xc5567b067645fed5C967876A831022561614d9",
    },
    {
      //   name: 'BNB Chain',
      icon: "/Container (1).png",
      address: "0xc5567b067645fed5C967876A831022561614d9",
    },
    {
      //   name: 'Solana',
      icon: "/Container.png",
      address: "0x71e5d7237423cf556d7574dd0753c4235c3530aa5c7693a",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      {/* Heading Section */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Available Supported Blockchain Networks
        </h2>
        <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
          USDI operates on Ethereum, Binance Smart Chain, and Solana, with plans
          to expand support to additional networks in the future.
        </p>
      </div>

      {/* Networks List */}
      <div className="space-y-4">
        {networks.map((network) => (
          <div
            key={network.name}
            className="flex flex-col md:flex-row items-center md:justify-between bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-8 mb-3 md:mb-0">
              <img
                src={network.icon}
                alt={network.name}
                className="h-14 w-auto"
              />
              <span className="font-medium">{network.name}</span>
            </div>
            <div className="text-gray-500 text-sm md:text-base font-mono truncate w-full md:max-w-[400px] text-center md:text-left">
              {network.address}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-end mt-4">
        <button className="border text-gray-500  py-2 px-4 rounded shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 ease-in-out">
          Circulating Supply on Networks
        </button>
      </div>

      {/* PeckShield Logo */}
      <div className="mt-12 text-center">
        <div className="text-sm text-gray-500 mb-2">Audited by</div>
        <img
          src="/Link.png"
          alt="PeckShield"
          className="h-8 mx-auto"
        />
      </div>
    </div>
  );
};

export default Networks;
