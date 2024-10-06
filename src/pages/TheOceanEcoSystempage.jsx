import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import TabNavigation from '../components/TabNavigation';
import NextButton from '../components/NextButton';
import Headline from '../components/Headline';
import Footer from "../components/Footer";
import TheOceanEcoSystem from '../components/TheOceanEcoSystem';
import PreviousButton from '../components/PreviousButton';

const TheOceanEcoSystempage = () => {
    return (
        <div>
            <Header/>
            <Headline
                title="The Ocean Ecosystem"
                description="Learn how the ocean's ecosystems work and why they're essential"
            />
            <ProgressBar progress={40} />
            <TabNavigation active="TOE"/>
            <TheOceanEcoSystem/>
            {/* Add a container to hold both buttons */}
            <div className="button-container">
                <PreviousButton text="Previous: Introduction" previousPath="/" />
                <NextButton text="Next: The Ocean Zones" nextPath="/the-ocean-zones" />
            </div>
            <Footer/>
        </div>
    );
};

export default TheOceanEcoSystempage;