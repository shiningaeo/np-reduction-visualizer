'use client'
import React, { useState } from 'react';
import GraphLayout from "./GraphLayout";

export default function GraphInput() {
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

    return (
    <>
        <div className="w-full" style={{height:100, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingRight:36}}>
            <p>hi
            </p>
        </div>
        <GraphLayout edges={edges} toggleEdge={toggleEdge}/>
    </>
    );
}