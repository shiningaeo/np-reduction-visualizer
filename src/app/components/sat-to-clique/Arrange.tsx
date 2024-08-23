import React, { useState } from 'react';

// since no need to hide and show, just fill in with data into layout
// and to make life easier, for the edges, might have a dataset with all the positions of each spot in each layout
// return appropriate arrangement based on input (horiz, vert, right slant, left slant)
// ---> a function for each, return a list of components to be rendered W/ POSITIONS
// ---> use a list to keep track of components for each layout; ex: layout 3: vert, horiz, vert

function Horizontal(x, y) {
    return (
        <svg width="228" height="44" x={x} y={y}>
            <ellipse cx="32" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="112" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="192" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
        </svg>
    );
}

function Vertical(x, y) {
    return (
        <svg width="64" height="164" x={x} y={y}>
            <ellipse cx="32" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="32" cy="82" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="32" cy="142" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
        </svg>
    );
}

function LeftUp(x, y) {
    return (
        <svg width="192" height="164" x={x} y={y}>
            <ellipse cx="32" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="64" cy="82" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="96" cy="142" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
        </svg>
    );
}

function RightUp(x, y) {
    return (
        <svg width="192" height="164" x={x} y={y}>
            <ellipse cx="96" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="64" cy="82" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="32" cy="142" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
        </svg>
    );
}


// m = 1: Horizontal(286, 303)
// m = 2: Horizontal(286, 183), Horizontal(286, 423)
// m = 3: Vertical(150, 203), Horizontal(286, 423), Vertical(586, 203)
// m = 4: Vertical(150, 203), Horizontal(286, 123), Vertical(586, 203), Horizontal(286, 423)
// m = 5: LeftUp(100, 300), LeftUp(548, 80), RightUp(100, 80), RightUp(548, 300), Horiztonal(286, 493)


export default function Arrange() {

    return (
    <>
      {LeftUp(100, 300)}
      {LeftUp(548, 80)}
      {RightUp(100, 80)}
      {RightUp(548, 300)}
      {Horizontal(286, 493)}
    </>
    );
}