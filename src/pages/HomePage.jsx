import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeaturedArticles from "../components/FeaturedArticles";
import LatestNews from "../components/LatestNews";
import UpcomingEvents from "../components/UpcomingEvents";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="content-sections">
        <FeaturedArticles />
        <LatestNews />
        <UpcomingEvents />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
