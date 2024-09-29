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

    const handleChangeV = (e) => {
        let newV = parseInt(e.target.value);
    
        // Ensure N is within the allowed range
        if (newV >= 3 && newV <= 6) {
            setV(newV);
        } else if (newV < 3) {
            setV(3);  // Set to minimum value if below range
        } else if (newV > 6) {
            setV(6);  // Set to maximum value if above range
        }
    };

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

    const kSpans  = Array.from({ length: V }, (_, index) => {
        const value = index + 1;
        return (
          <span
            key={value}
            onClick={() => handleK(value)}
            style={{
              backgroundColor: k === value ? "#b6f0e7" : "transparent",
              cursor: "pointer",
              width: 20
            }}
          >
            <h1>{value}</h1>
          </span>
        );
    });

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
            <GraphInputLayout edges={edges} toggleEdge={toggleEdge} V={V} />
            <div className="flex flex-row items-center justify-center" style={{marginTop:-83, userSelect:"none"}}>
                <label style={{fontSize:26, fontWeight:500, marginRight:50}}> V =&nbsp;
                    <input name="V" value={V} min="3" max="6" style={{fontWeight:"normal", border:"solid"}} type="number"
                    onChange={handleChangeV}/>
                </label>
            </div>
            <div className="flex flex-row w-full space-x-4" style={{fontWeight:500, fontSize:26, marginTop:20, userSelect:"none"}}>
                <span><h1>k = </h1></span>
                {kSpans}
            </div>
        </div>
    </>
    );
}