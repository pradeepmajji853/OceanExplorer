import React, { useState } from 'react';

const oceanData = {
  'Pacific Ocean': {
    introduction: 'The Pacific Ocean is the largest and deepest of Earth\'s oceanic divisions. It extends from the Arctic Ocean in the north to the Southern Ocean in the south and is bounded by the continents of Asia and Australia in the west and the Americas in the east.',
    facts: [
      'The average depth of the Pacific Ocean is 12,080 feet.',
      'The Pacific Ocean contains roughly 25,000 islands.',
      'The Pacific Ocean is home to the Mariana Trench, the deepest point on Earth.'
    ],
    marineLife: [
      { name: 'Sea Turtle', type: 'Reptile', image: '/SeaTurtle.jpg' },
      { name: 'Great White Shark', type: 'Fish', image: '/GraatWhiteShark.jpg' },
      { name: 'Blue Whale', type: 'Mammal', image: '/BlueWhale.jpg' },
      { name: 'Jellyfish', type: 'Invertebrate', image: '/JellyFish.jpg' },
      { name: 'Orca', type: 'Mammal', image: '/Orca.jpg' }
    ]
  },
  'Atlantic Ocean': {
    introduction: 'The Atlantic Ocean is the second-largest of the world\'s oceans, covering approximately 20% of Earth\'s surface. It separates the "Old World" of Europe and Africa from the "New World" of the Americas.',
    facts: [
      'The Atlantic Ocean covers an area of approximately 41,100,000 square miles.',
      'The average depth is 12,880 feet.',
      'The Atlantic Ocean is home to the world\'s largest underwater mountain range, the Mid-Atlantic Ridge.'
    ],
    marineLife: [
      { name: 'Humpback Whale', type: 'Mammal', image: '/Humpbackwhale.jpg' },
      { name: 'Atlantic Cod', type: 'Fish', image: '/AlanticCod.jpg' },
      { name: 'Leatherback Turtle', type: 'Reptile', image: '/LeatherBackTurtle.jpg' },
      { name: 'Giant Squid', type: 'Mollusk', image: '/giant squid.jpg' },
      { name: 'Atlantic Puffin', type: 'Bird', image: '/AtlanticPuffin.jpg' }
    ]
  },
  'Indian Ocean': {
    introduction: 'The Indian Ocean is the third-largest of the world\'s oceanic divisions, covering about 20% of Earth\'s water surface. It is bounded by Asia to the north, Africa to the west, Australia to the east, and the Southern Ocean to the south.',
    facts: [
      'The Indian Ocean has an average depth of 12,274 feet.',
      'It contains an estimated 20% of the world\'s water supply.',
      'The Indian Ocean is the warmest ocean in the world.'
    ],
    marineLife: [
      { name: 'PufferFish', type: 'Mammal', image: '/PufferFish.png' },
      { name: 'Dugong', type: 'Mammal', image: '/dugong.jpg' },
      { name: 'Whale Shark', type: 'Fish', image: '/WhaleShark.jpg' },
      { name: 'Box Jelly Fish', type: 'Mammal', image: '/BoxJellyFish.png' },
      { name: 'Red Lionfish', type: 'Fish', image: '/RedLionFish.jpeg' }
    ]
  },
  'Southern Ocean': {
    introduction: 'The Southern Ocean, also known as the Antarctic Ocean, comprises the southernmost waters of the World Ocean. It encircles Antarctica and extends from the coast to 60 degrees south latitude.',
    facts: [
      'The Southern Ocean was officially recognized as the fifth ocean in 2000 by the International Hydrographic Organization.',
      'It has a unique current called the Antarctic Circumpolar Current.',
      'The Southern Ocean is home to the world\'s largest marine protected area.'
    ],
    marineLife: [
      { name: 'Emperor Penguin', type: 'Bird', image: '/EmporerPenguin.jpg' },
      { name: 'Leopard Seal', type: 'Mammal', image: '/LeopardSeal.jpg' },
      { name: 'Antarctic Krill', type: 'Crustacean', image: '/antractickrill.jpg' },
      { name: 'Colossal Squid', type: 'Mollusk', image: '/ColossalSquid.jpg' },
      { name: 'Antarctic Toothfish', type: 'Fish', image: '/AntracticToothFish.jpg' }
    ]
  },
  'Arctic Ocean': {
    introduction: 'The Arctic Ocean is the smallest and shallowest of the world\'s five major oceans. It is located around the North Pole and is almost completely surrounded by Eurasia and North America.',
    facts: [
      'The Arctic Ocean is the coldest of all the oceans.',
      'It is mostly covered by sea ice throughout the year.',
      'The Arctic Ocean experiences 24 hours of daylight in summer and 24 hours of darkness in winter.'
    ],
    marineLife: [
      { name: 'Polar Bear', type: 'Mammal', image: '/PolarBeer.jpg' },
      { name: 'Narwhal', type: 'Mammal', image: '/Narwhal.jpg' },
      { name: 'Arctic Cod', type: 'Fish', image: '/ArcticCod.jpg' },
      { name: 'Walrus', type: 'Mammal', image: '/Walrus.jpg' },
      { name: 'Beluga Whale', type: 'Mammal', image: '/BelugaWhale.jpg' }
    ]
  }
};


const OceanInfo = () => {
  const [selectedOcean, setSelectedOcean] = useState('Pacific Ocean');

  const handleOceanClick = (ocean) => {
    setSelectedOcean(ocean);
  };

  const currentOcean = oceanData[selectedOcean];

  return (
    <div className="ocean-info-192-container">
      <div className="ocean-info-192-sidebar">
        <h3 className="ocean-info-sidebar-192-title">Oceans</h3>
        <ul className="ocean-info-sidebar-192-list">
          {Object.keys(oceanData).map((ocean) => (
            <li 
              key={ocean} 
              onClick={() => handleOceanClick(ocean)}
              className={`ocean-info-sidebar-item ${ocean === selectedOcean ? 'ocean-info-sidebar-item-active' : ''}`}
            >
              {ocean}
            </li>
          ))}
        </ul>
      </div>
      <div className="ocean-info-main-192-content">
        <div className="ocean-info-scrollable-192-content">
          <div className="ocean-info-header-192-image">
            <img src="/Lifebelowwater.png" alt="Ocean life illustration" className="ocean-info-header-img" />
          </div>
          <h1 className="ocean-info-192-title">{selectedOcean}</h1>
          <h2 className="ocean-info-192-subtitle">Introduction</h2>
          <p className="ocean-info-192-text">{currentOcean.introduction}</p>
          <h2 className="ocean-info-192-subtitle">Interesting Facts</h2>
          <ul className="ocean-info-facts-192-list">
            {currentOcean.facts.map((fact, index) => (
              <li key={index} className="ocean-info-fact-item">{fact}</li>
            ))}
          </ul>
          <h2 className="ocean-info-192-subtitle">Marine Life</h2>
          <div className="ocean-info-marine-192-life">
            {currentOcean.marineLife.map((animal, index) => (
              <div key={index} className="ocean-info-192-animal">
                <img src={animal.image} alt={animal.name} className="ocean-info-animal-192-img" />
                <p className="ocean-info-animal-192-name">{animal.name}</p>
                <p className="ocean-info-animal-192-type">{animal.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = `
  .ocean-info-192-container {
  margin-top: 100px;
  display: flex;
  font-family: Arial, sans-serif;
  width: 100%;
  height: 100vh; /* Full height for better layout */
  background: linear-gradient(to bottom, #e0f7fa, #80deea);
  overflow: hidden;
}

.ocean-info-192-sidebar {
  width: 20%;
  min-width: 200px; /* Slightly wider for a better look */
  padding: 1rem;
  background-color: #f7f7f7;
  border-right: 1px solid #ddd;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  height: 100%;
  transition: transform 0.3s ease;
}

.ocean-info-192-sidebar:hover {
  transform: scale(1.02);
}

.ocean-info-sidebar-192-title {
  margin-top: 0;
  margin-bottom: 1rem;
  color: #0077be;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 2px solid #0077be;
  padding-bottom: 0.5rem;
}

.ocean-info-192-sidebar-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.ocean-info-sidebar-item {
  padding: 0.5rem 1rem;
  margin-bottom: 0.5rem;
  color: #333;
  cursor: pointer;
  background-color: #e3f2fd;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.ocean-info-192-sidebar-item:hover,
.ocean-info-sidebar-item-active {
  background-color: #0077be;
  color: #fff;
  font-weight: bold;
}

.ocean-info-main-192-content {
  flex: 1;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.ocean-info-scrollable-192-content {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
  position: relative;
  animation: ocean-info-fadeIn 0.5s ease;
}

.ocean-info-header-192-image {
  margin-bottom: 1rem;
  animation: ocean-info-float 6s ease-in-out infinite;
}

.ocean-info-header-img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.ocean-info-192-title {
  color: #0077be;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.ocean-info-192-subtitle {
  color: #666;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: bold;
}

.ocean-info-192-text {
  color: #333;
  line-height: 1.6;
}

.ocean-info-facts-192-list {
  list-style-type: none;
  padding: 0;
}

.ocean-info-fact-item {
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
}

.ocean-info-fact-item::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #0077be;
  font-size: 1.5rem;
}

.ocean-info-marine-192-life {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.ocean-info-192-animal {
  text-align: center;
  width: 18%;
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
  position: relative;
}

.ocean-info-192-animal:hover {
  transform: scale(1.1);
  z-index: 1;
}

.ocean-info-animal-192-img {
  width: 100%; /* Full width of the card */
  height: 150px; /* Define a fixed height for the images */
  object-fit: contain; /* Ensure images fit within the defined height */
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.ocean-info-animal-192-name {
  font-size: 1rem;
  font-weight: bold;
  color: #333;
}

.ocean-info-animal-192-type {
  color: #777;
  font-size: 0.9rem;
}

/* Animations */
@keyframes ocean-info-fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes ocean-info-float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

`;


export default () => (
  <>
    <style>{styles}</style>
    <OceanInfo />
  </>
);