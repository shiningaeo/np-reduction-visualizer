'use client'
import Three_SAT_VC from "./3sat-to-vc";
import Three_SAT_Input from "./3sat-input";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between">
        <Three_SAT_Input m={3}/>
        <Three_SAT_VC />
      </main>
    </>
  );
}
