import React, { useState, useEffect } from 'react';
export default function Clause({N, base, changeInput, negatives, toggleNegation, M}) {
    // this might be unecessary function wrapping
    const handleClick = (index: number) => {
        toggleNegation(index);
    };

    const [x1, setX1] = useState(1)
    const [x2, setX2] = useState(1)
    const [x3, setX3] = useState(1)

    useEffect(() => {
      setX1(1)
      setX2(1)
      setX3(1)
    }, [M]);

    return (
      <>
        <div style={{marginTop: 8, marginBottom: 8}}>
            <div className="flex flex-row justify-between items-center">
                <div onClick={() => handleClick(base*3)} className="hover:bg-black" style={{backgroundColor: negatives[base*3], zIndex:1, marginLeft:17, marginBottom:-20, width:26, height:4}}></div>
                <div onClick={() => handleClick(base*3 +1)} className="hover:bg-black" style={{backgroundColor: negatives[base*3+1], zIndex:1, marginRight:-2, marginBottom:-20, width:26, height:4}}></div>
                <div onClick={() => handleClick(base*3 +2)} className="hover:bg-black" style={{backgroundColor: negatives[base*3+2], zIndex:1, marginRight:57, marginBottom:-20, width:26, height:4}}></div>
            </div>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}>( </p>
            <label style={{fontSize: 30, fontWeight: 550}}>X </label>
            <input style={{border: "solid"}} value={x1} type="number" min="1" max={N} 
              onChange={e => {
                const newValue = Math.max(1, Math.min(parseInt(e.target.value), N));
                setX1(newValue);
                changeInput(base * 3, newValue); // Call changeInput with the updated value
              }} onInput={e => {
                // Prevent clearing the input by enforcing the value remains in the allowed range
                if (e.currentTarget.value === '') {
                    e.currentTarget.value = x1.toString(); // Restore the previous value
                }
              }}>

            </input>
            <p style={{display: "inline", fontSize: 35}}> &#8897; </p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input style={{border: "solid"}} value={x2} type="number" min="1" max={N} 
              onChange={e => {
                const newValue = Math.max(1, Math.min(parseInt(e.target.value), N));
                setX2(newValue);
                changeInput(base * 3+1, newValue); // Call changeInput with the updated value
              }} onInput={e => {
                // Prevent clearing the input by enforcing the value remains in the allowed range
                if (e.currentTarget.value === '') {
                    e.currentTarget.value = x2.toString(); // Restore the previous value
                }
              }}>

          </input>
            <p style={{display: "inline", fontSize: 35}}> &#8897;</p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input style={{border: "solid"}} value={x3} type="number"  min="1" max={N} 
              onChange={e => {
                const newValue = Math.max(1, Math.min(parseInt(e.target.value), N));
                setX3(newValue);
                changeInput(base * 3+2, newValue); // Call changeInput with the updated value
              }} onInput={e => {
                // Prevent clearing the input by enforcing the value remains in the allowed range
                if (e.currentTarget.value === '') {
                    e.currentTarget.value = x3.toString(); // Restore the previous value
                }
              }}>

            </input>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}> )</p>
        </div>
      </>  
    );
}