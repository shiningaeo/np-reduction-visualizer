'use client'
import React, { useState } from 'react';
import WalkthroughTitle from "../WalkThruTitle";
import ControlMenu from "../ControlMenu";
import GraphLayout from "./GraphLayout";

export default function VC_SC({setSubmit, setSubmit2, edges, V}) {
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    const [currIndex, setCurrIndex] = useState(0) // State to manage current step

    // initialize *WALKTHROUGH SEQUENCE*
    const LETTERS = ["b", "c", "d", "e", "f"]
    let sequence = ["a0", "a1", "a2"] // IMPORTANT: walkthrough sequence

    const NUM_EDGES = edges.filter(item => item === "black").length
    const visibleSet = new Set()

    for (let i = 0; i < edges.length; ++i) {
        if (edges[i] == "black") {
            visibleSet.add(i)
        }
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"Vertex Cover"} rightProblem={"Set Cover"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full">
                <div className="flex flex-row justify-center items-center" style={{marginTop:30, height:500, width:800}}>
                    <GraphLayout visibleSet={visibleSet}/>
                </div>
            </div>

            <div className="w-full h-full flex flex-row justify-center" style={{marginTop:-158, marginBottom:28}}>
              <ControlMenu currIndex={currIndex} setCurrIndex={setCurrIndex} sequence={sequence} skipIdx={sequence.indexOf("g1")-1} 
                introEnd={"a2"} skipBackIdx={2}/>
            </div>
        </main>
    </>
    );
}