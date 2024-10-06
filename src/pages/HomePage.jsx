import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import TabNavigation from '../components/TabNavigation';
import NextButton from '../components/NextButton';
import Headline from '../components/Headline';
import Footer from "../components/Footer";
import Introduction from '../components/Introduction';

const HomePage = () => {
  return (
    <div className="homepage">
      <Header />
      <Headline
        title="The Ocean Ecosystem"
        description="Learn how the ocean's ecosystems work and why they're essential"
      />
      <ProgressBar progress={25} />
      <TabNavigation active="Introduction" />
      <Introduction />
      {/* Add a container for the NextButton to control its position */}
      <div className="next-button-container">
        <NextButton text="Next: The Ocean Ecosystem" nextPath="/the-ocean-ecosystem" />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

