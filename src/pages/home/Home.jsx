import React from "react";
import HomeHeader from "./_components/HomeHeader";
import GlobalPartner from "./_components/GlobalPartner";
import WhyChoose from "./_components/WhyChoose";
import WhyShould from "./_components/WhyShould";
import Transparency from "./_components/Transparency";
import BrightFuture from "./_components/BrightFuture";
import Reports from "./_components/Reports";
import Networks from "./_components/Networks";
import RecentBlogPost from "./_components/RecentBlogPost";
import FaQs from "./_components/FaQs";

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50">
      <HomeHeader />
      {/* <GlobalPartner /> */}
      <WhyChoose />
      <Transparency />
      <WhyShould />
      <BrightFuture />
      <Reports />
      <Networks />
      <RecentBlogPost />
      <FaQs />
    </div>
  );
};

export default Home;
