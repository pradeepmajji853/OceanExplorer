import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import TabNavigation from '../components/TabNavigation';
import NextButton from '../components/NextButton';
import PreviousButton from '../components/PreviousButton';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import OceanConservation from '../components/OceanConservation'; // New component for conservation efforts

const TheOceanConservationPage = () => {
    return (
        <div>
            <Header />
            <Headline
                title="Ocean Conservation Efforts"
                description="Discover how you can help protect our oceans"
            />
            <ProgressBar progress={100} /> 
            <TabNavigation active="OC" />
            <OceanConservation/> 
            <PreviousButton text="Previous: The Ocean Ecosystem" previousPath="/the-threats-marine" />
            <NextButton text="Finished Learning : Learn-interatively" nextPath="/interactive-learning" /> 
            <Footer />
        </div>
    );
};

export default TheOceanConservationPage;