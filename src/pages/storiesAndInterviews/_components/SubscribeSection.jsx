import React from "react";

const SubscribeSection = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="text-center max-w-xl">
        <h1 className="text-4xl font-bold text-gray-800 mt-6 mb-4">
          Articles and Conversations
        </h1>
        <p className="text-gray-600 mb-6">
          Subscribe to receive updates on new product features, cutting-edge
          technology, innovative solutions, and the latest news.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-2/3 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full sm:w-auto bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
