import React from 'react';
import Header from '../components/Header';

// Sample resources data
const resources = [
  {
    name: 'NASA',
    links: [
      { title: 'NASA Earth Observatory', url: 'https://earthobservatory.nasa.gov/' },
      { title: 'NASA Ocean Color Web', url: 'https://oceancolor.gsfc.nasa.gov/' },
      { title: 'NASA Jet Propulsion Laboratory Ocean Science', url: 'https://science.nasa.gov/earth-science/focus-areas/climate-variability-and-change/ocean-physics/oceanography/' },
    ],
    img: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/NASA_logo.svg', 
  },
  {
    name: 'ISRO',
    links: [
      { title: 'Indian National Center for Ocean Information Services (INCOIS)', url: 'https://incois.gov.in/' },
    ],
    img: 'https://newsd.in/wp-content/uploads/2021/08/ISRO-1280x720-1.jpg', // ISRO logo
  },
  {
    name: 'CSA',
    links: [
      { title: 'Canadian Space Agency Earth Observation', url: 'https://www.asc-csa.gc.ca/eng/satellites/earth-observation/' },
    ],
    img: 'https://static.vecteezy.com/system/resources/previews/026/591/477/original/csa-logo-design-inspiration-for-a-unique-identity-modern-elegance-and-creative-design-watermark-your-success-with-the-striking-this-logo-vector.jpg', // CSA logo
  },
  {
    name: 'ESA',
    links: [
      { title: 'European Space Agency Earth Observation', url: 'https://www.esa.int/Applications/Observing_the_Earth' },
    ],
    img: 'https://tse4.mm.bing.net/th?id=OIP.pCJRmz4ffMGmeZukrXLGjAHaEs&pid=Api&P=0&h=180', // ESA logo
  },
  {
    name: 'Other Space Agencies',
    links: [
      { title: 'Japan Aerospace Exploration Agency (JAXA)', url: 'https://global.jaxa.jp/' },
      { title: 'National Oceanic and Atmospheric Administration (NOAA)', url: 'https://www.noaa.gov/' },
      { title: 'European Commission Joint Research Centre (JRC)', url: 'https://commission.europa.eu/about-european-commission/departments-and-executive-agencies/joint-research-centre_en' },
    ],
    img: 'https://tse4.mm.bing.net/th?id=OIP.B_BCwNTRJkELYUk8uZToPAHaE8&pid=Api&P=0&h=180', // NOAA logo
  },
];

// OceanResources Component
const Resources = () => {
  return (
    <>
      <Header />
      <div className="ocean-resources-container">
        <h1 className="ocean-resources-title">Resources for the Ocean</h1>
        <div className="ocean-resources-list">
          {resources.map((resource, index) => (
            <div key={index} className="ocean-resource-item">
              <img src={resource.img} alt={`${resource.name} logo`} className="resource-logo" />
              <h2 className="ocean-resource-name">{resource.name}</h2>
              <ul className="ocean-resource-links">
                {resource.links.map((link, idx) => (
                  <li key={idx} className="ocean-resource-link">
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

// Styling
const styles = `
  body {
    margin: 0;
    font-family: 'Arial', sans-serif;
  }

  .ocean-resources-container {
    padding: 2rem;
    background: linear-gradient(to bottom, #e0f7fa, #ffffff);
    min-height: 100vh;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    max-width: 800px;
    margin: auto;
  }

  .ocean-resources-title {
    font-size: 3rem;
    color: #00796b;
    text-align: center;
    margin-bottom: 2rem;
  }

  .ocean-resources-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .ocean-resource-item {
    background-color: #ffffff;
    border: 1px solid #b2ebf2;
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .ocean-resource-item:hover {
    transform: scale(1.03);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .resource-logo {
    width: 100px;
    height: auto;
    margin-bottom: 1rem;
  }

  .ocean-resource-name {
    font-size: 2rem;
    color: #00796b;
    margin-bottom: 1rem;
    text-align: center;
  }

  .ocean-resource-links {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .ocean-resource-link {
    margin-bottom: 0.5rem;
    text-align: center;
  }

  .ocean-resource-link a {
    color: #00796b;
    text-decoration: none;
    font-size: 1.2rem;
  }

  .ocean-resource-link a:hover {
    text-decoration: underline;
  }
`;

// Injecting styles
const styleTag = document.createElement('style');
styleTag.innerHTML = styles;
document.head.appendChild(styleTag);

export default Resources;
