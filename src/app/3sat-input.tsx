import React, { useState } from 'react';
import Clause from "./clause-input";

export default function Three_SAT_Input({m}) {
    const [N, setN] = useState(3)
    const [M, setM] = useState(2)

    var render = []
    for (let i = 0; i < M-1; ++i) {
        render.push(<Clause key={i}/>)
        render.push(<p key={(i+1)*-1} style={{fontSize: 35, margin: -15}}>&#8896;</p>)
    }
    render.push(<Clause key={m-1}/>)
    return (
    <main className="flex flex-row justify-center" style={{marginTop: 20, width: 700, height: 350}}>
        <div style={{minWidth: 200}} className="items-center">
            <div style={{height: 155}}></div>
            <label style={{fontSize: 30, fontWeight: 550}}> N:&nbsp;
                <input value={N} onChange={e => setN(parseInt(e.target.value))} name="n"
                        min="1" max="5" style={{fontWeight: "normal"}} type="number"/>
            </label>

            <label style={{fontSize: 30, fontWeight: 550}}> M:&nbsp;
                <input value={M} onChange={e => setM(parseInt(e.target.value))} name="m"
                        min="1" max="5" style={{fontWeight: "normal"}} type="number"/>
            </label>
        </div>
        <div style={{width: 50}}></div>
        <div className="flex flex-col items-center justify-center">
            {render.map(component => component)}
        </div>
        <div style={{width: 100}}></div>
        <div>
            <button style={{marginTop: 160, marginLeft: -30}} 
                className="bg-gray-100 rounded-md border p-2 hover:bg-emerald-400">
                <span>SUBMIT</span>
            </button>
        </div>
    </main>
    );
}