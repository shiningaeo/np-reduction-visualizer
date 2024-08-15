import React, { useState } from 'react';

// since no need to hide and show, just fill in with data into layout
// and to make life easier, for the edges, might have a dataset with all the positions of each spot in each layout
// return appropriate arrangement based on input (horiz, vert, slanted)
// ---> a function for each, return a list of components to be rendered W/ POSITIONS
// ---> use a list to keep track of components for each layout; ex: layout 3: vert, horiz, vert

function Horizontal() {
    return (
        <svg width="200" height="100">
            <ellipse cx="100" cy="50" rx="80" ry="40" fill="lightblue" stroke="black" stroke-width="2" />
        </svg>
    );
}


export default function Arrange() {

    return (
    <>
      {Horizontal()}
    </>
    );
}