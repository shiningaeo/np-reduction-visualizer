'use client'
import React, { useState, useEffect } from 'react';
import Clause from "./ClauseInput";

export default function Three_SAT_Input({ submit, onDataReceive }) {
    // state variables from user input
    const [N, setN] = useState(3)
    const [M, setM] = useState(2)

    // boolean sequence
    const [input, setInput] = useState(Array.from({ length: M*3 }, () => 1))

    // negation tracker
    const [negatives, setNegatives] = useState(Array.from({ length: 15 }, () => "#94a3b8"))

    // assignment of the variables, default is all true
    const [assignment, setAssignment] = useState(Array.from({ length: 5 }, () => 1))

    useEffect(() => {
        if (submit) {
          console.log('Submitting data:', { N, M, input, assignment });
          onDataReceive([N, M, input, assignment]);
        }
    }, [submit]);


    const handleChangeN = (e) => {
        setN(parseInt(e.target.value));
    };

    const handleChangeM = (e) => {
        const newM = parseInt(e.target.value);
        setM(newM);
        setInput(prevInput => {
            const newInput = Array.from({ length: newM * 3 }, () => 1);
            console.log(newM)
            return newInput;
        });
    };

    function changeInput(i: number, newValue: number) {
        setInput(prevInput => {
            const newInput = [...prevInput]; // Create a copy of the previous state
            newInput[i] = newValue; // Update the specific index
            return newInput; // Return the updated array
        });
    }

    // ONLY CHANGES COLOR, INPUT ADJUSTMENT IS DONE IN CLAUSE-INPUT
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

    function changeAssignment(index: number, value: number) {
        // Assuming `setAssignment` is the state updater function
        setAssignment(prevAssignment => {
            // Create a new copy of the assignment array
            const newAssignment = [...prevAssignment];
            // Update the specific index
            newAssignment[index - 1] = value;
            // Return the new array to update state
            return newAssignment;
        });
    }

    function AssignmentLine( {num} ) {
        const baseStyle = {
            fontSize: 12,
            marginTop: 25,
            paddingLeft: 10,
            paddingRight: 10,
            cursor: 'pointer',
        };

        return (
            <>
                <div className="flex flex-row w-full">
                    <h1 style={{ fontSize:12, marginTop:25, marginRight:10}}>
                        X<sub>{num}</sub>
                    </h1>
                    <h1 style={{fontSize:12, marginTop:25, marginRight:20}}>=</h1>
                    <h1 
                        onClick={() => changeAssignment(num, 1)}
                        style={{
                            ...baseStyle,
                            marginRight: 55,
                            backgroundColor: assignment[num-1]==1 ? "#b6f0e7" : "transparent",
                        }}
                    >True</h1>

                    <h1 onClick={() => changeAssignment(num, 0)}
                        style={{
                            ...baseStyle,
                            marginRight: 30,
                            backgroundColor: assignment[num-1]==0 ? "#b6f0e7" : "transparent",
                        }}
                    >False</h1>
                </div>
            </>
        );
    }

    let assignments = []
    for (let i = 1; i < N+1; ++i) {
        assignments.push(<AssignmentLine key={i} num={i}/>)
    }
    
    let render = []
    for (let i = 0; i < M-1; ++i) {
        render.push(<Clause N={N} base={i} changeInput={changeInput} toggleNegation={toggleNegation} negatives={negatives} key={i}/>)
        render.push(<p key={(i+1)*-1} style={{fontSize:35, margin:-15}}>&#8896;</p>)
    }
    render.push(<Clause N={N} base={M-1} changeInput={changeInput} toggleNegation={toggleNegation} negatives={negatives} key={M-1}/>)
    return (
    <>
        <div className="w-full" style={{height:100, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingRight:36}}>
            <p>An instance of 3-SAT is comprised of <strong>n</strong> variables, <strong>m</strong> clauses.
                Each clause contains 3 variables joined by &#8897; , the "or" operator. The clauses are joined by
                &#8896; , the "and" operator. A valid instance of 3-SAT contains an assignment of variables such that
                all the clauses evaluate to true.
            </p>
        </div>
        <main className="flex flex-row justify-center w-full" style={{height:440, marginBottom:12, backgroundColor:"#ffffff", marginRight:50}}>
            <div className="flex flex-col" style={{height:440}}>
                <div style={{minWidth:200, marginTop:130, marginBottom:20, marginLeft:-30}} className="items-center flex flex-row">
                    <label style={{fontSize: 30, fontWeight: 550, marginRight:20}}> n =&nbsp;
                        <input value={N} onChange={handleChangeN} name="n"
                                min="1" max="5" style={{fontWeight: "normal", border: "solid"}} type="number"/>
                    </label>

                    <label style={{fontSize:30, fontWeight:550}}> m =&nbsp;
                        <input value={M} onChange={handleChangeM} name="m"
                                min="1" max="5" style={{fontWeight: "normal", border: "solid"}} type="number"/>
                    </label>
                </div>
                {assignments.map(component => component)}
            </div>
            <div style={{width:20}}></div>
            <div className="flex flex-col items-center justify-center">
                {render.map(component => component)}
            </div>
        </main>
    </>
    );
}