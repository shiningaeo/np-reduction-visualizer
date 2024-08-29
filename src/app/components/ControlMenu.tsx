import React, { useState } from 'react';

export default function ControlMenu({ currIndex, setCurrIndex, sequence, skipIdx, introEnd }) {
    const [nextColor, setNextColor] = useState("green")
    const [backColor, setBackColor] = useState("gray")
    const [skipColor, setSkipColor] = useState("coral")
    const [skipBackColor, setSkipBackColor] = useState("gray")

    let steps = sequence.length
    function handleClick() {
        setCurrIndex((prevStep) => {
        let newIndex = prevStep + 1;
        if (newIndex > steps - 1) {
            newIndex = newIndex - 1
        } else if (newIndex == steps - 1) {
            setNextColor("gray")
            setSkipColor("gray")
        }
        if (newIndex > 0) {
            setBackColor("green")
            setSkipBackColor("coral")
        }
        return newIndex;
        });
    }

    function handleClickBack() {
        setCurrIndex((prevStep) => {
        let newIndex = prevStep - 1;
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex == 0) {
            setBackColor("gray")
            setSkipBackColor("gray")
        }
        if (newIndex < steps-1) {
            setNextColor("green")
            setSkipColor("coral")
        }
        return newIndex;
        });
    }

    function handleSkipBack() {
        // be careful when doing logic for other proofs ...
        if (sequence[currIndex][0] < "g" && sequence[currIndex][0] >= "b") {
          setCurrIndex(3)
        } else {
          handleClickBack()
        }
      }

    function handleSkipFront() {
        if (currIndex == sequence.length-1) {
            return null
        }
        // be careful when doing logic for other proofs ...
        if (sequence[currIndex] >= "a3" && sequence[currIndex+1][0] < "g") {
            setCurrIndex(3+skipIdx*3)
        } else {
            handleClick()
        }
    }
    

    return (
    <>
        <div className="flex flex-row w-3/12 justify-center items-center p-5" style={{marginTop:180, backgroundColor:"#EAF1F2", height:70, borderRadius:10}}>
          <div className="flex flex-col items-center justify-center w-1/4">
            <button onClick={handleSkipBack}>
                <span style={{color:skipBackColor, fontSize:24}}>&#9664;&#9664;</span>
            </button>
            <p style={{fontSize:12}}>skip back</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/4">
            <button onClick={handleClickBack}>
              <span style={{color:backColor, fontSize:24}}>&#9664;</span>
            </button>
            <p style={{fontSize:12}}>back</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/4">
            <button onClick={handleClick}>
              <span style={{color:nextColor, fontSize:24}}>&#9654;</span>
            </button>
            <p style={{fontSize:12}}>next</p>
          </div>
          <div className="flex flex-col items-center justify-center w-1/4">
            <button onClick={handleSkipFront}>
              <span style={{color:skipColor, fontSize:24}}>&#9654;&#9654;</span>
            </button>
            <p style={{fontSize:12}}>skip forward</p>
          </div>
      </div>
    </>
    );
}