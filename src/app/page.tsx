'use client'
import React, { useEffect, useRef } from 'react';
import Viewer from './viewer';
import TriangleWidget from './triangle-widget';
import VariableWidget from './variable-widget';
// import Image from "next/image";
// import NextButton from './next-button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <svg height="160" width="144">
        <VariableWidget />
        <TriangleWidget />
      </svg>
      {/* <div className="z-7 w-full max-w-2xl items-center justify-between font-mono text-sm lg:flex"> */}
        <Viewer />
      {/* </div> */}
    </main>
  );
}
