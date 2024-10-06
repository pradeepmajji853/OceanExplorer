import React from 'react';
import './ThreatDetails.css'; // Ensure you have styles for the modal

const ThreatDetails = ({ threat, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="threat-details">
        <button className="close-button" onClick={onClose}>Close</button>
        <div className="threat-content">
          <h2 className="threat-title">{threat.name}</h2>
          <img src={threat.imgSrc} alt={threat.name} className="threat-detail-image" />
          <p className="threat-description">{threat.description}</p>
          <div className="threat-additional-info">
            {threat.name === 'Plastic Pollution' && (
              <>
               <p>Plastic pollution has emerged as one of the most pressing environmental issues threatening marine life and ecosystems. Every year, millions of tons of plastic waste enter the oceans, originating from various sources, including landfills, rivers, and coastal areas. Marine animals, such as turtles, seabirds, and fish, often mistake plastic debris for food, leading to ingestion that can result in internal injuries, malnutrition, and death. Additionally, larger plastic items can entangle marine animals, causing severe injuries or even drowning.</p>
              <p>The impact of plastic pollution extends beyond individual species; it disrupts entire ecosystems. For example, microplastics—tiny plastic particles less than five millimeters in size—are increasingly found in the stomachs of marine organisms, from plankton to whales. These particles not only harm marine creatures but also enter the food chain, potentially affecting human health as well.</p>
              <p>Efforts to combat plastic pollution are gaining momentum globally. Initiatives include banning single-use plastics, promoting recycling, and increasing public awareness about the consequences of plastic waste. Organizations and communities are organizing beach clean-ups and advocating for policies that support sustainable waste management. By fostering a culture of responsibility toward plastic use and disposal, we can significantly reduce the amount of plastic that ends up in our oceans, thereby protecting marine life and ensuring the health of our oceans for future generations.</p>
            </>
            )}
            {threat.name === 'Overfishing' && (
              <>
                <p>Plastic pollution has emerged as one of the most pressing environmental issues threatening marine life and ecosystems. Every year, millions of tons of plastic waste enter the oceans, originating from various sources, including landfills, rivers, and coastal areas. Marine animals, such as turtles, seabirds, and fish, often mistake plastic debris for food, leading to ingestion that can result in internal injuries, malnutrition, and death. Additionally, larger plastic items can entangle marine animals, causing severe injuries or even drowning.</p>
                <p>The impact of plastic pollution extends beyond individual species; it disrupts entire ecosystems. For example, microplastics—tiny plastic particles less than five millimeters in size—are increasingly found in the stomachs of marine organisms, from plankton to whales. These particles not only harm marine creatures but also enter the food chain, potentially affecting human health as well.</p>
                <p>Efforts to combat plastic pollution are gaining momentum globally. Initiatives include banning single-use plastics, promoting recycling, and increasing public awareness about the consequences of plastic waste. Organizations and communities are organizing beach clean-ups and advocating for policies that support sustainable waste management. By fostering a culture of responsibility toward plastic use and disposal, we can significantly reduce the amount of plastic that ends up in our oceans, thereby protecting marine life and ensuring the health of our oceans for future generations.</p>
            </>
          )}
            {threat.name === 'Climate Change' && (
              <>
               <p>Overfishing is a critical threat to the sustainability of marine ecosystems, leading to the depletion of fish populations and disturbing the balance of marine life. As the demand for seafood increases globally, fishing industries often catch fish at rates that exceed their reproductive capabilities. This unsustainable practice not only threatens specific fish species with extinction but also disrupts the entire food web, impacting predators and prey alike.</p>
              <p>The consequences of overfishing extend far beyond the loss of fish. Many communities around the world depend on fishing as their primary source of food and livelihood. As fish populations decline, these communities face food insecurity and economic challenges. Furthermore, overfishing often leads to the destruction of marine habitats, such as coral reefs and seabeds, as destructive fishing methods like bottom trawling uproot essential ecosystems.</p>
              <p>To address the issue of overfishing, numerous organizations and governments are implementing measures such as establishing marine protected areas, enforcing catch limits, and promoting sustainable fishing practices. Consumer awareness plays a significant role in this effort; individuals can make a difference by choosing sustainably sourced seafood and supporting responsible fishing practices. By recognizing the value of our oceans and the importance of maintaining healthy fish populations, we can contribute to the conservation of marine ecosystems and ensure that future generations can enjoy the bounties of the sea.</p>
              </>
            )}
            {threat.name === 'Habitat Destruction' && (
              <>
                <p>Climate change poses a significant threat to marine life, primarily through rising ocean temperatures, increased acidification, and altered ecosystems. The oceans absorb a large portion of the Earth's carbon dioxide emissions, leading to ocean acidification. This process makes it difficult for marine organisms, particularly those with calcium carbonate shells or skeletons, such as corals and shellfish, to thrive. Coral reefs, often referred to as the "rainforests of the sea," are particularly vulnerable, as they rely on stable temperatures and pH levels to sustain their complex ecosystems.</p>
              <p>Rising sea temperatures contribute to coral bleaching, a phenomenon where corals expel the symbiotic algae that provide them with food and color, resulting in white, lifeless structures. Without intervention, widespread coral bleaching can lead to the collapse of reef ecosystems, affecting countless marine species that depend on reefs for habitat and food.</p>
              <p>Additionally, climate change disrupts migration patterns and breeding cycles for many marine species, further endangering their survival. As fish and other marine animals seek cooler waters, they may encroach on new territories, leading to competition with native species and altering local ecosystems.</p>
              <p>To mitigate the effects of climate change on marine life, global efforts must focus on reducing greenhouse gas emissions and promoting sustainable practices. Initiatives include protecting and restoring coastal ecosystems like mangroves and seagrasses, which act as carbon sinks, and supporting policies that address climate change at local, national, and international levels. By taking action to combat climate change, we can protect marine life and the vital ecosystems that sustain it.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetails;
