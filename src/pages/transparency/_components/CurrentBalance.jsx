import React from "react";

const Card = ({ title, totalAuthorized, lessAuthorized, netCirculation }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 w-full md:w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <button className="bg-blue-50 hover:bg-gray-100 text-blue-500 border border-blue-500 font-bold py-1 md:px-8 lg:px-8 px-2 rounded">
          Detail
        </button>
        <div className="bg-blue-500 h-1 w-2/4"></div>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-700 font-medium">Total Authorized</p>
        <p className="text-gray-900 font-medium">{totalAuthorized}</p>
      </div>
      <div className="flex items-center justify-between mb-2">
        <p className="text-gray-700 font-medium">
          Less: Authorized but not issued
        </p>
        <p className="text-gray-900 font-medium">{lessAuthorized}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-gray-700 font-medium">Net Circulation</p>
        <p className="text-gray-900 font-medium">{netCirculation}</p>
      </div>
    </div>
  );
};

const CurrentBalance = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <div className="container mx-auto ">
        <h1 className="text-3xl font-bold text-center mb-8">
          Circulating Supply and Reserve Supply Across Ecosystems
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card
            title="On Ethereum"
            totalAuthorized="$69,929,452,093.66"
            less
            Authorized="-$494,8 93,954.06"
            netCirculation="$69,434,558,139.60"
          />
          <Card
            title="On BSC"
            totalAuthorized="$69,929,452,093.66"
            lessAuthorized="-$494,893,954.06"
            netCirculation="$69,434,558,139.60"
          />
          <div className="grid md:grid-cols-1 w-full md:ml-96 lg:ml-96">
            <Card
              title="On Solana"
              totalAuthorized="$69,929,452,093.66"
              lessAuthorized="-$494,893,954.06"
              netCirculation="$69,434,558,139.60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentBalance;
