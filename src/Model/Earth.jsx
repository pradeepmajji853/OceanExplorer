import React from 'react';

const GlobeEmbed = () => {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
      <iframe 
        title="Earth Globe"
        src="https://sketchfab.com/models/98d2b04d46474bafb4250cc75dc583b3/embed?autostart=1&ui_controls=0&ui_animations=0&ui_info=0" 
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay; encrypted-media"
        style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
      ></iframe>
    </div>
  );
};

export default GlobeEmbed;
