import React, { useState } from 'react';

// since no need to hide and show, just fill in with data into layout
// and to make life easier, for the edges, might have a dataset with all the positions of each spot in each layout
// return appropriate arrangement based on input (horiz, vert, right slant, left slant)
// ---> a function for each, return a list of components to be rendered W/ POSITIONS
// ---> use a list to keep track of components for each layout; ex: layout 3: vert, horiz, vert

function Horizontal() {
    return (
        <svg width="228" height="44" x="286" y="303">
            <ellipse cx="32" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="112" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
            <ellipse cx="192" cy="22" rx="30" ry="20" fill="lightblue" stroke="black" strokeWidth="2" />
        </svg>
    );
}

// m = 1: x=286


export default function Arrange() {

    return (
    <>
      {Horizontal()}
    </>
    );
}