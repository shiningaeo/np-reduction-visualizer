'use client'
import React, { useState, useEffect } from 'react';
import Clause from "./sat-to-vc/ClauseInput";

export default function Three_SAT_Input({ submit, onDataReceive }) {
    // state variables from user input
    const [N, setN] = useState(3)
    const [M, setM] = useState(2)

    // boolean sequence
    const [input, setInput] = useState(Array.from({ length: M*3 }, () => 1))

    // negation tracker
    const [negatives, setNegatives] = useState(Array.from({ length: 15 }, () => "#94a3b8"))

    useEffect(() => {
        if (submit) {
          console.log('Submitting data:', { N, M, input });
          onDataReceive([N, M, input]);
        }
      }, [submit]);


    const handleChangeN = (e) => {
        setN(parseInt(e.target.value));
    };

    const handleChangeM = (e) => {
        setM(parseInt(e.target.value));
    };

    function changeInput(i: number, newValue: number) {
        setInput(prevInput => {
            const newInput = [...prevInput]; // Create a copy of the previous state
            newInput[i] = newValue; // Update the specific index
            return newInput; // Return the updated array
        });
    }

    // ONLY CHANGES COLOR INPUT ADJUSTMENT IS DONE IN CLAUSE-INPUT
    function toggleNegation(i: number) {
        setNegatives(prevInput => {
            const nInput = [...prevInput];
            if (nInput[i] == "black") {
                nInput[i] = "#94a3b8"
            } else {
                nInput[i] = "black"
            }
            return nInput;
        });
        changeInput(i, input[i]*-1)
    }
    
    let render = []
    for (let i = 0; i < M-1; ++i) {
        render.push(<Clause N={N} base={i} changeInput={changeInput} toggleNegation={toggleNegation} negatives={negatives} key={i}/>)
        render.push(<p key={(i+1)*-1} style={{fontSize: 35, margin: -15}}>&#8896;</p>)
    }
    render.push(<Clause N={N} base={M-1} changeInput={changeInput} toggleNegation={toggleNegation} negatives={negatives} key={M-1}/>)
    return (
    <>
        <div className="w-full" style={{height:100, zIndex:10, backgroundColor:"#ffffff", padding:10}}>
            <p>An instance of 3-SAT is comprised of <strong>n</strong> variables, <strong>m</strong> clauses.
                Each clause contains 3 variables joined by &#8897; , the "or" operator. The clauses are joined by
                &#8896; , the "and" operator. A valid instance of 3-SAT contains an assignment of variables such that
                all the clauses evaluate to true.
            </p>
        </div>
        <main className="flex flex-row justify-center" style={{height: 440, marginBottom: 12, backgroundColor: "#ffffff", marginRight:50}}>
            <div style={{minWidth: 200}} className="items-center flex flex-col">
                <div style={{height: 155}}></div>
                <label style={{fontSize: 30, fontWeight: 550, marginTop:10}}> n =&nbsp;
                    <input value={N} onChange={handleChangeN} name="n"
                            min="1" max="5" style={{fontWeight: "normal", border: "solid"}} type="number"/>
                </label>

                <label style={{fontSize: 30, fontWeight: 550, marginRight:8, marginTop:20}}> m =&nbsp;
                    <input value={M} onChange={handleChangeM} name="m"
                            min="1" max="5" style={{fontWeight: "normal", border: "solid"}} type="number"/>
                </label>
            </div>
            <div style={{width: 30}}></div>
            <div className="flex flex-col items-center justify-center">
                {render.map(component => component)}
            </div>
        </main>
    </>
    );
}