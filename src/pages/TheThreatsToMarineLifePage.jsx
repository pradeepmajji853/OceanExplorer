import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import TabNavigation from '../components/TabNavigation';
import NextButton from '../components/NextButton';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import ThreatsToMarineLife from '../components/ThreatsToMarineLife'; // Import your Threats component
import PreviousButton from '../components/PreviousButton';

const TheThreatsToMarineLifePage = () => {
    return (
        <div>
            <Header />
            <Headline
                title="Threats to Marine Life"
                description="Discover the various threats facing marine ecosystems and the urgent need for conservation efforts."
            />
            <ProgressBar progress={90} /> 
            <TabNavigation active="TL" /> {/* Adjust the active tab as needed */}

            {/* Include the ThreatsToMarineLife component to display its content */}
            <ThreatsToMarineLife />

            <PreviousButton text="Previous: Life Under the Ocean" previousPath="/the-ocean-life" />
            <NextButton text="Next: Marine Conservation" nextPath="/the-ocean-conservation" />
            <Footer />
        </div>
    );
};

export default TheThreatsToMarineLifePage;