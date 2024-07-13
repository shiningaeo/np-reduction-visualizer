'use client'
import React, { useEffect, useRef } from 'react';
import Viewer from './viewer';
import TriangleWidget from './triangle-widget';
import VariableWidget from './variable-widget';
// import Image from "next/image";
// import NextButton from './next-button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <svg height="500" width="800">
        // difference of 144
        <VariableWidget x="28"/>
        <VariableWidget x="182"/>
        <VariableWidget x="336"/>        
        <VariableWidget x="490"/>
        <VariableWidget x="644"/>

        <TriangleWidget x="36"/>        
        <TriangleWidget x="190"/>
        <TriangleWidget x="344"/> 
        <TriangleWidget x="498"/> 
        <TriangleWidget x="652"/> 
      </svg>
      {/* <div className="z-7 w-full max-w-2xl items-center justify-between font-mono text-sm lg:flex"> */}
        {/* <Viewer /> */}
      {/* </div> */}
    </main>
  );
}
