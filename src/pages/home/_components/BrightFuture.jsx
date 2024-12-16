import React from "react";

const BrightFuture = () => {
  return (
    <div className="container mx-auto px-4 py-12 ">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-16">
        <div className="md:w-1/2 mb-8 md:mb-0 order-2 md:order-1">
          <img
            src="/brightfuture1.png"
            alt="Rocket Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="md:w-2/5 mb-8 md:mb-0 order-1 md:order-2">
          <h1 className="text-3xl md:text-4xl mb-4 tracking-wide leading-tight">
            Bright Future with Inovab Digital Lab
          </h1>
          <p className="text-gray-600 mb-6 text-justify">
            At Inovab Digital Labs, we blend stability with innovation, striving
            to earn trust through unwavering transparency, compliance, and
            security powered by advanced technology.Our mission is to drive the
            financial industry into a new era, transforming the global financial
            landscape.
          </p>
        </div>
      </div>

      {/* USDI Section */}
      <div id="get-usdi-section" className="mb-16 flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 ">
        <div className="w-full md:w-2/5 md:ml-20 lg:ml-20 mb-8 md:mb-0">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Get USDI</h2>
          <p className="text-gray-600 mb-8 text-justify">
            USDI can be accessed through centralized and decentralized
            cryptocurrency exchanges that offer substantial liquidity, or
            purchased directly from Inovab Digital Labs by clients who pass AML
            and CTF checks.
          </p>

          {/* Exchange Logos */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div className="flex items-center">
              <img
                src="/uniswap.png"
                alt="Uniswap"
                className="h-4 w-auto"
              />
            </div>
            <div className="flex items-center">
              <img
                src="/pancakeswap1.png"
                alt="Pancakeswap"
                className="h-6 w-auto"
              />
              <span className="ml-2">Pancakeswap</span>
            </div>
            <div className="flex items-center">
              <img
                src="/raydium1.png"
                alt="Raydium"
                className="h-4 w-auto"
              />
              <span className="ml-2">Raydium</span>
            </div>
          </div>

          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full md:w-auto">
            Supported Exchanges
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="/brightfuture2.png"
            alt="USDI Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>

      {/* Reward partner section */}
      <div className="relative h-[400px] w-full  bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Our Reward Distribution Partners
        </h2>
      </div>
    </div>

      {/* Transparent Section */}
      <div className="flex flex-col mt-10 md:flex-row items-center justify-between">
        <div className="md:w-2/5 mb-8 md:mb-0 order-2 md:order-1">
          <img
            src="/brightfuture3.png"
            alt="Transparent Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
        <div className="md:w-1/2 order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            <span className="text-blue-500">#</span>Transparent
          </h2>
          <p className="text-gray-600 mb-6 text-justify">
            The reserves and financial integrity of USDI are verified by an
            independent auditor and third-party attestation. Monthly reports
            confirm the collateral and provide details on supported networks and
            circulating supply.
          </p>
          <div className="flex items-center gap-4">
            <div className="">
              <p className="text-sm">Audited By</p>
            </div>
            <div className="w-16 h-16  rounded-lg">
              <img
                src="/logo-ps.svg.png"
                alt="Transparent Illustration"
                className="w-full max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrightFuture;
