'use client'
import React, { useState, useEffect, useMemo } from 'react';
import WalkthroughTitle from "../WalkThruTitle";
import ControlMenu from "../ControlMenu";
import GraphLayout from "./GraphLayout";
import ContentBox from './ContentBox';

export default function VC_SC({setSubmit, setSubmit2, edges, V, k}) {
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    const [currIndex, setCurrIndex] = useState(0) // State to manage current step
    const [valid, setValid] = useState(false)
    const [tempArray, setTempArray] = useState([]); // Array to hold the elements of temp


    // initialize *WALKTHROUGH SEQUENCE*
    const LETTERS = ["b"]
    let sequence = ["a0", "a1", "a2"] // IMPORTANT: walkthrough sequence
    for (let j = 1; j < V+1; ++j) {
        sequence.push(LETTERS[0] + j)
    }

    sequence.push.apply(sequence, ["b7", "g1", "g2"])

    const NUM_EDGES = edges.filter(item => item === "black").length
    // Memoize visibleSet and subsets to avoid recomputing them unnecessarily
    const visibleSet = useMemo(() => {
        const set = new Set<number>(); // Specify the type as Set<number>
        for (let i = 0; i < edges.length; ++i) {
            if (edges[i] === "black") {
                set.add(i); // i is a number, so this is valid
            }
        }
        return set;
    }, [edges]);

    // circle nums = [V-1][edge#-1]
    const VERTEX_MAP = [
        [[1,2], [1,3], [2,3]],
        [[1,4], [1,3], [1,2], [2,4], [3,4], [2,3]],
        [[1,2], [1,4], [1,5], [1,3], [2,3], [3,4], [4,5], [3,5], [2,5], [2,4]],
        [[1,5], [1,2], [1,4], [1,3], [1,6], [2,5], [2,3], [2,4], [2,6], [5,6], [4,6], [3,6], [3,4], [4,5], [3,5]]   // V = 6
    ] // circle numbers for each edge

    
    const subsets = useMemo(() => {
        const subs: number[][] = Array.from({ length: V }, () => []); // subs is an array of arrays of numbers
        visibleSet.forEach((item: number) => {
            subs[VERTEX_MAP[V - 3][item][0] - 1].push(item + 1);
            subs[VERTEX_MAP[V - 3][item][1] - 1].push(item + 1);
        });
        return subs;
    }, [visibleSet, V]);

    let u_subset: number[] = [];
    for (const item of visibleSet) {
        u_subset.push(item + 1);
    }

    if (NUM_EDGES == 0) {
        u_subset.push(null)
    }

    // useEffect to call isSetCover when the dependencies change
    useEffect(() => {
        const { valid: isValid, tempArray: newTempArray } = isSetCover();

        // Only update the state if the values change
        if (isValid !== valid) {
            setValid(isValid);
        }
        if (newTempArray.toString() !== tempArray.toString()) {
            setTempArray(newTempArray);
        }
    }, [visibleSet, subsets, V, k]);
    
    // useEffect(() => {
    //     isSetCover();
    // }, [sequence, currIndex, subsets, visibleSet, k]);

    function* combinationN(array, n) {
        if (n === 1) {
          for (const a of array) {
            yield [a];
          }
          return;
        }
      
        for (let i = 0; i <= array.length - n; i++) {
          for (const c of combinationN(array.slice(i + 1), n - 1)) {
            yield [array[i], ...c];
          }
        }
      }
      
    
    function isSetCover() {
        const numbersArray = Array.from({ length: V }, (_, i) => i + 1);
        const combinations = Array.from(combinationN(numbersArray, k));
        let temp = new Set()
        let temp1 = new Set()
        
        if (subsets.length !== 0) {
            for (let i = 0; i < combinations.length; ++i) {
                temp = new Set();
                for (let j = 0; j < k; ++j) {
                    let v = subsets[combinations[i][j] - 1];
                    for (let z = 0; z < v.length; ++z) {
                        if (visibleSet.has(v[z] - 1)) {
                            temp.add(v[z] - 1);
                            temp1.add(combinations[i][j] - 1)
                        }
                    }
                }
                
                if (temp.size === visibleSet.size) {
                    return { valid: true, tempArray: Array.from(temp1) };
                }
            }
        }
        return { valid: false, tempArray: [] };
    }

    const identifiers = [
        { id: 'b1', label: 'S1' },
        { id: 'b2', label: 'S2' },
        { id: 'b3', label: 'S3' },
        { id: 'b4', label: 'S4' },
        { id: 'b5', label: 'S5' },
        { id: 'b6', label: 'S6' },
    ];

    const spans = []
    for (let i = 0; i < V; ++i) {
        const { id, label } = identifiers[i];
        spans.push(<span key={id} style={{ backgroundColor: sequence[currIndex] === id ? "#b6f0e7" : "transparent" }}>
          <h1>{"S"}<sub>{id.slice(-1)}</sub> =</h1>
        </span>)
    }

    const divs = []
    for (let i = 0; i < V; ++i) {
        const { id, label } = identifiers[i];
        divs.push(
            <div 
          key={id} 
          style={{ 
            backgroundColor: sequence[currIndex] === id || (sequence[currIndex] >= "g" && tempArray.includes(i)) ? "#b6f0e7" : "transparent" 
          }}
        >
          <h1>{sequence[currIndex] >= id ? `{ ${subsets[i].join(', ')} }` : '{ }'}</h1>
        </div>
        )
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"Vertex Cover"} rightProblem={"Set Cover"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full">
                <div className="flex flex-col w-3/12 items-center justify-center">
                    <div className="flex flex-col h-full items-center justify-center" style={{marginTop:120}}>
                        <div className="p-3 w-full" style={{width:180, textAlign:"left", height:"auto", borderRadius:10, marginTop:-105, backgroundColor:"#b6f0e7"}}>
                            <strong>VERTEX COVER INPUT: </strong><br></br>
                            <strong>V</strong> = {V} vertices<br></br>
                            <strong>E</strong> = {visibleSet.size} edges<br></br>
                            <strong>k</strong> = {k}<br></br>
                        </div>
                        <div className="w-full" style={{height:30}}></div>
                        <div className="w-full flex items-center justify-center p-3">
                            <p style={{textAlign:'center'}}>Hover over any edge to find its label</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center items-center" style={{zIndex:1000, marginTop:30, height:500, width:900}}>
                    <GraphLayout visibleSet={visibleSet} index={sequence[currIndex]} vMap={VERTEX_MAP[V-3]} V={V}/>

                    <div style={{width:50}}></div>
                    <div className="flex flex-col justify-start items-center p-3" style={{width:300, height:400, fontSize:22, marginTop:80}}>
                        
                        <div className="flex flex-row">
                            
                            <div className="flex flex-col items-end" style={{width:60, marginRight:20, fontWeight:500}}>
                                <div style={{height:100}}>
                                    <h1 style={{fontWeight:500, marginBottom:40}}>U =</h1>
                                </div>
                                
                                {spans}
                            </div>
                            <div className="flex flex-col" style={{marginLeft:-10, fontWeight:500, width:250}}>
                                <div style={{height:100}}>
                                    <h1 style={{fontWeight:500}}>&#123; {u_subset.join(', ')} &#125;</h1>
                                </div>
                                {divs}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-3/12 items-center justify-center">
                    <div>
                        <div className="w-full" style={{height:150}}></div>
                        <ContentBox id={sequence[currIndex]} valid={valid}/>
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