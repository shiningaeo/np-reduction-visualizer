import React, { useState } from 'react';
import Clause from "./clause-input";
import Three_SAT_VC from './3sat-to-vc';

export default function Three_SAT_Input() {
    const [N, setN] = useState(3)
    const [M, setM] = useState(2)

    // state variables from user input
    const [input, setInput] = useState(Array.from({ length: N*3 }, () => 1))

    function changeInput(i: number, newValue: number) {
        setInput(prevInput => {
            const newInput = [...prevInput]; // Create a copy of the previous state
            newInput[i] = newValue; // Update the specific index
            return newInput; // Return the updated array
        });
    }

    var render = []
    for (let i = 0; i < M-1; ++i) {
        render.push(<Clause N={N} base={i} changeInput={changeInput} key={i}/>)
        render.push(<p key={(i+1)*-1} style={{fontSize: 35, margin: -15}}>&#8896;</p>)
    }
    render.push(<Clause N={N} base={0} changeInput={changeInput} key={M-1}/>)
    
    return (
    <>
        <main className="flex flex-row justify-center" style={{marginTop: 40, width: 700, height: 350}}>
            <div style={{minWidth: 200}} className="items-center">
                <div style={{height: 155}}></div>
                <label style={{fontSize: 30, fontWeight: 550}}> n:&nbsp;
                    <input value={N} onChange={e => setN(parseInt(e.target.value))} name="n"
                            min="1" max="5" style={{fontWeight: "normal"}} type="number"/>
                </label>

                <label style={{fontSize: 30, fontWeight: 550}}> m:&nbsp;
                    <input value={M} onChange={e => setM(parseInt(e.target.value))} name="m"
                            min="1" max="5" style={{fontWeight: "normal"}} type="number"/>
                </label>
            </div>
            <div style={{width: 30}}></div>
            <div className="flex flex-col items-center justify-center">
                {render.map(component => component)}
            </div>
            <div style={{width: 80}}></div>
            <div>
                <button style={{marginTop: 160, marginLeft: -30}} 
                    className="bg-gray-100 rounded-md border p-2 hover:bg-emerald-400">
                    <span>SUBMIT</span>
                </button>
            </div>
        </main>
        <Three_SAT_VC N={N} M={M} INPUT={input}/>
    </>
    );
}