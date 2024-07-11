'use client'
import React, { useEffect, useRef } from 'react';
import Viewer from './viewer';
import TriangleWidget from './triangle-widget';
// import Image from "next/image";
// import NextButton from './next-button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Viewer />
        <TriangleWidget />
      </div>
    </main>
  );
}
