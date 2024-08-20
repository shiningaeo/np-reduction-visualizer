import React, { useState } from 'react';
import Arrange from './Arrange';
import WalkthroughTitle from '../WalkThruTitle';

// 3SAT -> Clique (CL)

export default function Three_SAT_CL() {

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"3SAT"} rightProblem={"Clique"}/>

            <div className="flex flex-row justify-center items-center w-full h-full" style={{marginTop:30}}>
                <div className="flex" style={{height:650, width:800, backgroundColor:"black"}}>
                    <svg height="650" width="800">
                        <Arrange />
                    </svg>
                </div>
            </div>
        </main>
    </>
    );
}