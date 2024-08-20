import React, { useState } from 'react';
import Arrange from './Arrange';
import { poppins } from '../../fonts/fonts';

// 3SAT -> Clique (CL)

export default function Three_SAT_CL() {

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:60, marginBottom:18}}>
            <main className="top-0 left-0 w-full" style={{height:50, marginTop: 30}}>
                <div className="flex flex-row w-full justify-center" style={{height:300, zIndex: -100, marginTop:20}}>
                    <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                    <div className="flex flex-row w-2/12 justify-center items-center"></div>
                        <div className="flex flex-row w-4/12 justify-center items-center"></div>
                        <div className="flex flex-row w-8/12 justify-center items-center">
                            <h1 className={`${poppins.className} font-semibold`} style={{fontSize:22, color:"#396D83"}}>3-SAT</h1>
                        </div>
                    </div>

                    <div className="flex flex-row justify-center w-1/12 font-bold items-center" style={{height:50}}>
                        <h1 style={{color:"#396D83", zIndex:10, fontSize:40}}>&#8804;</h1>
                        <h1 style={{color:"#396D83", zIndex:10, fontSize:20, marginTop:12}}>&nbsp;p</h1>
                    </div>

                    <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                        <div className="flex flex-row w-10/12 justify-center" style={{height:50}}>
                            <div className="flex w-7/12 justify-center items-center">
                                <h1 className={`${poppins.className} font-semibold`} style={{fontSize:22, color:"#396D83"}}>Clique</h1>
                            </div>
                            <div className="flex flex-row w-5/12 justify-center items-center"></div>
                        </div>
                    </div>
                </div>
            </main>

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