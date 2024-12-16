import React from "react";

const BuildCurrency = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-6 py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            We Design and Build Innovative Currencies to Power the Digital
            Economy.
          </h1>
          <p className="text-gray-600 text-lg">
            Introducing Inovab Digital Labs, the innovative research & development division of Inovab Digital, focused on driving progress and breakthroughs in digital stable currency technology.
          </p>
        </div>

        {/* Image and Text Section */}
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-6">
          {/* Image 1 */}
          <img
            src="/aboutUs.png"
            alt="Cityscape"
            className="rounded-md shadow-md lg:col-span-1"
          />
          {/* Image 2 */}
          <img
            src="/12345.png"
            alt="People in office"
            className="rounded-md shadow-md col-span-1 lg:col-span-1 lg:h-[320px] md:h-[300px] lg:mt-5 md:mt-5 w-full"
          />

          {/* Image 3 */}
          <img
            src="/4567.png"
            alt="Chart on a paper"
            className="rounded-md shadow-md col-span-1 lg:col-span-1 h-72 w-full"
          />
          <img
            src="/secondimage.png"
            alt="Chart on a paper"
            className="rounded-md shadow-md col-span-1 lg:col-span-1 md:mt-10 lg:mt-10 h-72 w-full"
          />
        </div>

        {/* Our Focus Section */}
        <div className="mt-20 flex flex-col lg:flex-row lg:items-center md:gap-6 lg:gap-40 text-justify">
          {/* Left: Heading */}
          <div className="lg:w-1/3 text-center lg:text-left">
            <h2 className="text-3xl md:ml-40 lg:ml-40 font-bold text-gray-900">
              Our Vision
            </h2>
          </div>

          {/* Right: Text Content */}
          <div className="lg:w-1/2">
            <p className="text-gray-600 leading-relaxed mt-5">
              At Inovab Digital Labs, we are committed to driving technological advancements and creating seamless integrations to enhance the security and efficiency of digital currency for both businesses and individuals. As a key division of IDL151 Limited and part of the Inovab Digital Group, we are dedicated to transforming the global financial landscape by harnessing the power and stability of innovative digital currencies.
              <br />
              <br />
              Our diverse team combines deep expertise in traditional finance with a forward-thinking approach to emerging technologies. This unique blend positions us at the forefront of the stablecoin revolution, delivering secure, efficient, and fully integrated digital currency solutions that empower businesses and individuals alike.
            </p>
          </div>
        </div>
      </div>
      <div
        className="relative w-full h-[120px] bg-no-repeat flex flex-col justify-center px-4 text-black z-10"
      >
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4 ml-12">
          Our Senior Leadership
        </h2>
        <p className="ml-16 mb-14">
          With a distinctive blend of technological innovation and financial expertise — enriched <br />by our own firsthand experience — we offer a fresh perspective on a time-honored industry.
        </p>
      </div>
      <div className="bg-gray py-2">
        <div className="grid grid-cols-3 gap-10 px-20">
          {/* Team Member 1 */}
          <div className="bg-white shadow-md rounded-lg p-2">
            <img
              src="/imran.jpg"
              alt="Team Member 1"
              className="w-full h-67"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold mb-2">Mr. Imran Nazeer</h4>
              <p className="text-gray-700 text-sm">Co-Founder & Chief Excutive Oficer</p>
              <p className="text-gray-600 mt-4 text-sm">
                Mr.Imran Co-Founder & Chief Executive Officer with extensive experience in leading innovative ventures, driving strategic growth, and delivering impactful solutions in the digital finance and blockchain industry.
              </p>
            </div>
          </div>
          {/* Team Member 2 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/umar1.JPG"
              alt="Team Member 3"
              className="w-full h-61"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold mb-2">Mr. Usman Nazeer</h4>
              <p className="text-gray-700 text-sm">Chief Technology Officer</p>
              <p className="text-gray-600 mt-4 text-sm">
                Michael is responsible for driving the company’s marketing strategy and ensuring global brand visibility.
              </p>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/umar1.JPG"
              alt="Team Member 2"
              className="w-full h-61"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Mr. Umar Jamil</h4>
              <p className="text-gray-700">Co-Founder & Chief Operating Officer</p>
              <p className="text-gray-600 mt-4 text-sm">
              Mr.Umar, an expert in digital finance, has a proven track record of driving operational excellence, strategic growth, and innovation.
              </p>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/umar1.JPG"
              alt="Team Member 2"
              className="w-full h-61"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Mr. Mubeen Raees</h4>
              <p className="text-gray-700">Senior Legal Advisor</p>
              <p className="text-gray-600 mt-4 text-sm">
              Mr.Mubeen, a legal expert specializing in strategic guidance, regulatory compliance, and risk management to support organizational goals and protect legal interests.
              </p>
            </div>
          </div>
          {/* Team Member 5 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/umar1.JPG"
              alt="Team Member 2"
             className="w-full h-61"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold mb-2">Mr. Wirdan Anwar</h4>
              <p className="text-gray-700 text-sm">Chief Financial  Officer</p>
              <p className="text-gray-600 mt-4 text-sm">
              Mr. Wirdan oversees the company's financial strategy, manages risk, ensures regulatory compliance, and drives sustainable financial growth.
              </p>
            </div>
          </div>
          {/* Team Member 6 */}
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/umar1.JPG"
              alt="Team Member 3"
              className="w-full h-61"
            />
            <div className="p-4 text-center">
              <h4 className="text-lg font-bold mb-2">Mr. Attique Rehman</h4>
              <p className="text-gray-700 text-sm">Chief Marketing Manager</p>
              <p className="text-gray-600 mt-4 text-sm">
                Michael is responsible for driving the company’s marketing strategy and ensuring global brand visibility.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div
        className="relative w-full mt-10 h-[120px] bg-black bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center px-4 text-center text-white z-10"
      >
        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl mb-4">
          Our Development Team
        </h2>
      </div> */}
      {/* <div className="bg-gray-80 py-8">
        <div className="grid md:grid-cols-3 gap-8 px-4">
          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/src/assets/umar.jpg"
              alt="Team Member 1"
              className="w-full h-61"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">John Doe</h4>
              <p className="text-gray-700">Chief Executive Officer</p>
              <p className="text-gray-600 mt-4 text-sm">
                John is a visionary leader with over 15 years of experience in driving business growth and innovation.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/src/assets/umar.jpg"
              alt="Team Member 2"
              className="w-full h-61"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Jane Smith</h4>
              <p className="text-gray-700">Chief Technology Officer</p>
              <p className="text-gray-600 mt-4 text-sm">
                Jane is an expert in blockchain technology and has been a key contributor to our technical advancements.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-md rounded-lg overflow-hidden p-2">
            <img
              src="/src/assets/umar.jpg"
              alt="Team Member 3"
             className="w-full h-61"
            />
            <div className="p-6 text-center">
              <h4 className="text-xl font-bold mb-2">Michael Johnson</h4>
              <p className="text-gray-700">Chief Marketing Officer</p>
              <p className="text-gray-600 mt-4 text-sm">
                Michael is responsible for driving the company’s marketing strategy and ensuring global brand visibility.
              </p>
            </div>
          </div>
        </div>
      </div> */}

    </div>
  );
};

export default BuildCurrency;
