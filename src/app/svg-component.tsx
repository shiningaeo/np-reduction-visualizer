// svg-component.tsx
import React, { useEffect, useRef } from 'react';
import { SVG } from '@svgdotjs/svg.js';

interface SvgProps {
    color: string;
  }
  
  const SvgComponent: React.FC<SvgProps> = ({ color }) => {
    const drawRef = useRef<HTMLDivElement>(null);
    const countRef = useRef(0);
  
    useEffect(() => {
      if (drawRef.current && countRef.current === 0) {
        const draw = SVG().addTo(drawRef.current).size(300, 300);
        draw.rect(100, 100).fill(color);
        countRef.current++;
      }
    }, [color]);
  
    return <div ref={drawRef}></div>;
  };
  
  export default SvgComponent;