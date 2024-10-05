import Interdial from '../assets/images/Interdial.jpg';
import Neritic from '../assets/images/Neritic.jpg';
import Oceanix from '../assets/images/Oceanix.jpg';
import Benthic from '../assets/images/Benthic.jpg';
import "./OceanZones.css";
const zones = [
  {
    name: 'Intertidal Zone',
    description: 'This zone is the area between the high and low tide marks. It is alternately covered and uncovered by the tides.',
    imgSrc: Interdial
  },
  {
    name: 'Neritic Zone',
    description: 'This zone extends from the low tide mark to the edge of the continental shelf. It is relatively shallow and receives a lot of sunlight.',
    imgSrc: Neritic
  },
  {
    name: 'Oceanic Zone',
    description: 'This zone is the open ocean beyond the continental shelf. It is deeper and receives less sunlight than the neritic zone.',
    imgSrc: Oceanix
  },
  {
    name: 'Benthic Zone',
    description: 'This zone is the ocean floor. It can be divided into the littoral zone, the sublittoral zone, the bathyal zone, the abyssal zone, and the hadal zone.',
    imgSrc: Benthic
  }
];

  

const OceanZones = () => {
  return (
    <div className="ocean-zones">
      {zones.map((zone, index) => (
        <div className="zone" key={index}>
          <img src={zone.imgSrc} alt={zone.name} />
          <h3>{zone.name}</h3>
          <p>{zone.description}</p>
        </div>
      ))}
    </div>
  );
};

export default OceanZones;
