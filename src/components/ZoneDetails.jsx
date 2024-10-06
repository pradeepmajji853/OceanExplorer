import React from 'react';
import './ZoneDetail.css'; // Create a CSS file for styling

const ZoneDetails = ({ zone, onClose }) => {
  return (
    <div className="zone-details">
      <button className="close-button" onClick={onClose}>Close</button>
      <div className="zone-content">
        <h2 className="zone-title">{zone.name}</h2>
        <img src={zone.imgSrc} alt={zone.name} className="zone-detail-image" />
        <p className="zone-description">{zone.description}</p>
        <div className="zone-additional-info">
          <p>The ocean is a vast expanse divided into distinct zones, each teeming with life and characterized by unique ecosystems. One of the most fascinating of these is the <strong>Intertidal Zone</strong>, where land meets the sea. This dynamic area experiences the rhythmic ebb and flow of tides, creating a unique environment that hosts a rich diversity of organisms.</p>
          <p>The intertidal zone is characterized by its fluctuating conditions, where organisms must adapt to both aquatic and terrestrial environments. During high tide, this zone is submerged, allowing marine species such as fish, sea stars, and crabs to thrive. However, as the tide recedes, these organisms are exposed to the elements, facing challenges like desiccation and temperature fluctuations.</p>
          <p>To survive, many intertidal inhabitants have developed remarkable adaptations. For instance, some species can cling tightly to rocks to avoid being swept away by waves, while others possess tough outer shells to withstand harsh conditions. Algae and seaweed flourish here, providing essential food and habitat for a variety of marine life.</p>
          <p>The intertidal zone plays a crucial role in the ocean ecosystem, serving as a nursery for many fish species and providing habitat for various invertebrates. It also acts as a buffer zone, protecting coastlines from erosion and providing vital resources for coastal communities. Overall, the intertidal zone is a stunning testament to the resilience and diversity of life in our oceans, offering a glimpse into the intricate connections that sustain marine ecosystems.</p>
        </div>
      </div>
    </div>
  );
};

export default ZoneDetails;
