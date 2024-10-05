import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import TabNavigation from '../components/TabNavigation';
import OceanZones from '../components/OceanZones';
import NextButton from '../components/NextButton';
import Headline from '../components/Headline';
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="homepage">
      <Header/>
      <Headline
        title="The Ocean Ecosystem"
        description="Learn how the ocean's ecosystems work and why they're essential"
      />
      <ProgressBar progress={25} />
      <TabNavigation />
      <OceanZones />
      <NextButton text="Next: Ocean Zones" />
      <Footer/>
    </div>
  );
};

export default HomePage;
