import React from 'react';
import './Introduction.css';
import coral from '../assets/images/oceaniczone.jpg';
import deepsea from '../assets/images/kelpforest.jpg';

const Introduction = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-content">
        <h2>Introduction to Ocean Ecosystems</h2>
        <p>
          The ocean, which covers more than 70% of Earth's surface, is the planet’s largest
          habitat. It is home to millions of species, many of which are yet to be discovered.
          Understanding the ocean's ecosystems is vital for protecting marine life and maintaining
          the balance of nature. Oceans play a crucial role in regulating the Earth's climate by
          absorbing carbon dioxide and distributing heat across the planet.
        </p>
        <p>
          From the coral reefs of the shallow tropical waters to the mysterious deep sea trenches,
          each ecosystem supports a variety of marine life. These ecosystems are interconnected and
          depend on both biotic (living organisms) and abiotic (non-living elements like water,
          nutrients, and sunlight) factors for survival. In this lesson, we will explore these
          ecosystems in depth, starting with an overview of their structure, followed by
          an examination of the various zones of the ocean.
        </p>

        <div className="introduction-images">
          <img
            src={coral}
            alt="Coral Reef Ecosystem"
            className="intro-image"
          />
          <img
            src={deepsea}
            alt="Deep Ocean Ecosystem"
            className="intro-image"
          />
        </div>

        <p>
          Oceans are not just vast bodies of water; they are dynamic systems that support all forms
          of life. The water, plants, animals, and microscopic organisms work in harmony to create
          a balanced ecosystem. By learning more about these ecosystems, we can better understand
          the challenges they face and how we can contribute to their conservation.
        </p>

      </div>
    </section>
  );
};

export default Introduction;
