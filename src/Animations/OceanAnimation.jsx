import React from 'react';
import Sketch from 'react-p5';

const OceanAnimation = () => {
  let xoff = 0;
  let increment = 0.05;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(800, 400).parent(canvasParentRef);
  };

  const draw = (p5) => {
    p5.background(0, 119, 190);
    p5.noFill();
    p5.beginShape();
    let xoff = 0;
    for (let x = 0; x <= p5.width; x += 10) {
      let y = p5.map(p5.noise(xoff, xoff), 0, 1, 200, 300);
      p5.vertex(x, y);
      xoff += increment;
    }
    p5.endShape();
  };

  return <Sketch setup={setup} draw={draw} />;
};

export default OceanAnimation;
