import React from "react";

const WhyShould = () => {
  return (
    <div className="relative h-[400px] w-full bg-[url('/homebg.png')] bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Why Should You Utilize <br />
          Inovab Digital Labs
        </h2>
        <p className="max-w-2xl text-sm sm:text-base md:text-lg">
          We will provide 40% profit to our community after every four months
          from our reserve profit. <br /> We will be the first stable coin in
          the crypto history to offering it.
          <br /> Additionally, we plan to introduce our Visa Debit Card in the
          second quarter of 2025.
        </p>
      </div>
    </div>
  );
};

export default WhyShould;
