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

    useEffect(() => {
        if (submit) {
          console.log('Submitting data:', { edges, V });
          onDataReceive([edges, V]);
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
        <GraphInputLayout edges={edges} toggleEdge={toggleEdge} />
    </>
    );
}