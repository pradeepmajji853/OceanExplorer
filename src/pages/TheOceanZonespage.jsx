import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import TabNavigation from '../components/TabNavigation';
import NextButton from '../components/NextButton';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import OceanZones from '../components/OceanZones';
import PreviousButton from '../components/PreviousButton';

const TheOceanZonesPage = () => {
    return (
        <div>
            <Header />
            <Headline
                title="The Ocean Ecosystem"
                description="Learn how the ocean's ecosystems work and why they're essential"
            />
            <ProgressBar progress={55} />
            <TabNavigation active="OZ" />
            <OceanZones />
            <PreviousButton text="Previous: The Ocean EcoSystem" previousPath="/the-ocean-ecosystem" />
            <NextButton text="Next: The Ocean Life" nextPath="/the-ocean-life" /> {/* Ensure this path is correct */}
            <Footer />
        </div>
    );
};

export default TheOceanZonesPage;
