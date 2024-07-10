// svg-component.tsx
import React, { useEffect, useRef } from 'react';
import { SVG } from '@svgdotjs/svg.js';

const SvgComponent: React.FC = () => {
  const drawRef = useRef<HTMLDivElement>(null);
  var count = 0

  useEffect(() => {
    if (drawRef.current && count == 0) {
      const draw = SVG().addTo(drawRef.current).size(300, 300);
      draw.rect(100, 100).fill('#f06');
      count++;
    }
  }, []);

  return <div ref={drawRef}></div>;
};

export default SvgComponent;