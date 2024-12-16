import React from "react";

const HomeHeader = () => {
  const scrollToGetUsdi = () => {
    const element = document.getElementById('get-usdi-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 px-16 md:px-24 bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="max-w-md text-center md:text-left">
        <h5 className="text-blue-300 text-sm mb-2">USDI</h5>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Innovative Digital Dollar
        </h1>
        <p className="text-base mb-4 text-gray-600 text-justify">
          USDI is a digital currency designed for seamless global payments and
          continuous 24/7 financial market operations, with a guaranteed 1:1
          redemption rate for US dollars. Our global media and network partners
          are using USDI.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <button 
            onClick={scrollToGetUsdi}
            className="bg-blue-500 text-white py-2 px-4 rounded"
          >
            GET USDI
          </button>
          <button className="border border-blue-500 text-blue-500 py-2 px-4 rounded">
            GET USDI WITH 5% DISCOUNT
          </button>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img
          src="/homeHeader.png"
          alt="Decorative"
          className="w-full h-96"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
