import React from "react";

const Rewards = () => {
  return (
    <div className="relative h-[400px] w-full  bg-cover bg-center bg-no-repeat">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl">
          Our Reward Distribution Partners
        </h2>
      </div>
    </div>
  );
};

export default Rewards;
