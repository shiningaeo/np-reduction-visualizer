'use client'
import React, { useState } from 'react';
import Three_SAT_Input from "./3sat-input";
import Three_SAT_VC from './3sat-to-vc';

export default function Home() {
  // state variables from user input
  const [N, setN] = useState(3)
  const [M, setM] = useState(2)
  const [submit, setSubmit] = useState(false)

  // boolean sequence
  const [input, setInput] = useState(Array.from({ length: M*3 }, () => 1))

  // negation tracker
  const [negatives, setNegatives] = useState(Array.from({ length: M*3 }, () => "#94a3b8"))

  const handleChangeN = (e) => {
    setN(parseInt(e.target.value));
  };

  const handleChangeM = (e) => {
    setM(parseInt(e.target.value));
  };

  const handleSubmit = () => {
    if (submit) {
      setSubmit(false);
    } else {
      setSubmit(true);
    }
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

  return (
    <main className="flex flex-col items-center justify-between">
      <button onClick={handleSubmit} style={{zIndex:1}}>Submit</button>
      {!submit ? (
        <>
          <Three_SAT_Input
            N={N}
            M={M}
            negatives={negatives}
            handleChangeN={handleChangeN}
            handleChangeM={handleChangeM}
            toggleNegation={toggleNegation}
            changeInput={changeInput}
          />
        </>
      ) : (
        <Three_SAT_VC N={N} M={M} INPUT={input} />
      )}
    </main>
  );
}
