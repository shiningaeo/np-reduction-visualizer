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
    const LETTERS = ["b"]
    let sequence = ["a0", "a1", "a2"] // IMPORTANT: walkthrough sequence
    for (let j = 1; j < V+1; ++j) {
        sequence.push(LETTERS[0] + j)
    }
    console.log(sequence)

    sequence.push.apply(sequence, ["g1", "g2"])

    const NUM_EDGES = edges.filter(item => item === "black").length
    const visibleSet: Set<number> = new Set()

    for (let i = 0; i < edges.length; ++i) {
        if (edges[i] == "black") {
            visibleSet.add(i)
        }
    }

    // circle nums = [V-1][edge#-1]
    const VERTEX_MAP = [
        [[1,5], [1,2], [1,4], [1,3], [1,6], [2,5], [2,3], [2,4], [2,6], [5,6], [4,6], [3,6], [3,4], [4,5], [3,5]]   // 6 vertices
    ] // circle numbers for each edge

    let subsets = [
        [], [], [], [], [], []
    ]
    let u_subset = []

    for (const item of visibleSet) {
        subsets[VERTEX_MAP[0][item][0]-1].push(item+1)
        subsets[VERTEX_MAP[0][item][1]-1].push(item+1)
        u_subset.push(item+1)
    }

    if (u_subset.length == 0) {
        u_subset.push(null)
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"Vertex Cover"} rightProblem={"Set Cover"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full">
                <div className="flex flex-row justify-center items-center" style={{zIndex:1000, marginTop:30, height:500, width:900}}>
                    <GraphLayout visibleSet={visibleSet} index={sequence[currIndex]} vMap={VERTEX_MAP[0]}/>

                    <div style={{width:50}}></div>
                    <div className="flex flex-col justify-start items-center p-3" style={{width:300, height:400, fontSize:22, marginTop:80}}>
                        
                        <div className="flex flex-row">
                            
                            <div className="flex flex-col items-end" style={{width:60, marginRight:20, fontWeight:500}}>
                                <div style={{height:100}}>
                                    <h1 style={{fontWeight:500, marginBottom:40}}>U =</h1>
                                </div>
                                
                                <h1>S<sub>1</sub> =</h1>
                                <h1>S<sub>2</sub> =</h1>
                                <h1>S<sub>3</sub> =</h1>
                                <h1>S<sub>4</sub> =</h1>
                                <h1>S<sub>5</sub> =</h1>
                                <h1>S<sub>6</sub> =</h1>
                            </div>
                            <div className="flex flex-col" style={{marginLeft:-10, fontWeight:500, width:250}}>
                                <div style={{height:100}}>
                                    <h1 style={{fontWeight:500}}>&#123; {u_subset.join(', ')} &#125;</h1>
                                </div>
                                <h1>&#123; {subsets[0].join(', ')} &#125;</h1>
                                <h1>&#123; {subsets[1].join(', ')} &#125;</h1>
                                <h1>&#123; {subsets[2].join(', ')} &#125;</h1>
                                <h1>&#123; {subsets[3].join(', ')} &#125;</h1>
                                <h1>&#123; {subsets[4].join(', ')} &#125;</h1>
                                <h1>&#123; {subsets[5].join(', ')} &#125;</h1>
                            </div>
                        </div>
                    </div>
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