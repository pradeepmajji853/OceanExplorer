import React from 'react';
import Header from '../components/Header';
import ProgressBar from '../components/ProgressBar';
import TabNavigation from '../components/TabNavigation';
import NextButton from '../components/NextButton';
import Headline from '../components/Headline';
import Footer from '../components/Footer';
import LifeUnderOcean from '../components/LifeUnderOcean'; 
import PreviousButton from '../components/PreviousButton';

const TheLifeUnderOceanPage = () => {
    return (
        <div>
            <Header />
            <Headline
                title="Life Under the Ocean"
                description="Explore the diverse life forms inhabiting the depths of our oceans."
            />
            <ProgressBar progress={70} />
            <TabNavigation active="OZ" />

            {/* Include the LifeUnderOcean component to display its content */}
            <LifeUnderOcean />

            <PreviousButton text="Previous: The Ocean Zones" previousPath="/the-ocean-zones" />
            <NextButton text="Next: Marine Conservation" nextPath="/the-threats-marine" />
            <Footer />
        </div>
    );
};

export default TheLifeUnderOceanPage;
