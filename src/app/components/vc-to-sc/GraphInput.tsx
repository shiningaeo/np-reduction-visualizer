'use client'
import React, { useState, useEffect } from 'react';
import GraphInputLayout from "./GraphInputLayout";

export default function GraphInput({submit, onDataReceive}) {
    const [V, setV] = useState(6)
    const [edges, setEdges] = useState(Array.from({ length: V*(V-1)/2 }, () => "#D3D3D3"))

    function toggleEdge(i: number) {
        setEdges(prevInput => {
            const nInput = [...prevInput];
            if (nInput[i] == "#D3D3D3") {
                nInput[i] = "black"
            } else {
                nInput[i] = "#D3D3D3"
            }
            return nInput;
        });
    }

    const [k, setK] = useState(1)

    const handleK = (newK) => {
        setK(newK);
    };

    useEffect(() => {
        if (submit) {
          console.log('Submitting data:', { edges, V, k });
          onDataReceive([edges, V, k]);
        }
    }, [submit]);

    return (
    <>
        <div className="w-full" style={{height:100, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingRight:36}}>
            <p>A vertex cover instance is a graph with <strong>V</strong> vertices, <strong>E</strong> edges, and
                a budget of size <strong>k</strong>. In a valid vertex cover instance, there is a subset of the vertices such that 
                every edge has at least one endpoint in the subset. The vertex cover problem is typically from the perspective
                of the maximum cover size. In other words, a valid instance of vertex cover should have a size of at most k.
            </p>
        </div>
        <div className="flex flex-col items-center justify-center">
            <GraphInputLayout edges={edges} toggleEdge={toggleEdge} />
            <div className="flex flex-row w-full space-x-4" style={{fontWeight:500, fontSize:30, marginTop:-33, userSelect:"none"}}>
                <span><h1>k = </h1></span>
                <span onClick={() => handleK(1)} style={{backgroundColor: k == 1 ? "#b6f0e7" : "transparent", cursor:'pointer', width:20}}><h1>1</h1></span>
                <span onClick={() => handleK(2)} style={{backgroundColor: k == 2 ? "#b6f0e7" : "transparent", cursor:'pointer', width:20}}><h1>2</h1></span>
                <span onClick={() => handleK(3)} style={{backgroundColor: k == 3 ? "#b6f0e7" : "transparent", cursor:'pointer', width:20}}><h1>3</h1></span>
                <span onClick={() => handleK(4)} style={{backgroundColor: k == 4 ? "#b6f0e7" : "transparent", cursor:'pointer', width:20}}><h1>4</h1></span>
                <span onClick={() => handleK(5)} style={{backgroundColor: k == 5 ? "#b6f0e7" : "transparent", cursor:'pointer', width:20}}><h1>5</h1></span>
                <span onClick={() => handleK(6)} style={{backgroundColor: k == 6 ? "#b6f0e7" : "transparent", cursor:'pointer', width:20}}><h1>6</h1></span>
            </div>
        </div>
    </>
    );
}