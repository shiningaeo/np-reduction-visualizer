import React, { useState } from 'react';
import Arrange from './Arrange';
import WalkthroughTitle from '../WalkThruTitle';

// 3SAT -> Clique (CL)

export default function Three_SAT_CL({N, M, INPUT, setSubmit, setSubmit2}) {
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"3SAT"} rightProblem={"Clique"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full" style={{marginTop:30}}>
                <div className="flex" style={{height:650, width:800}}>
                    <svg height="650" width="800">
                        <Arrange M={M} INPUT={INPUT}/>
                    </svg>
                </div>
            </div>
        </main>
    </>
    );
}