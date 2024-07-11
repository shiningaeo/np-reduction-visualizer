import React from 'react';

export default function TriangleWidget() {
    return (
        <>
            <style jsx>{`
                #test:hover {
                    stroke: orange;
                    stroke-width: 20;
                }
            `}</style>
            <svg height={Math.sqrt(3)*100+2} width="200">
                <line id="test" x1="0" y1={Math.sqrt(3)*100} x2="200" y2={Math.sqrt(3)*100} strokeWidth="2" stroke="black" />
                <line x1="200" y1={Math.sqrt(3)*100} x2="100" y2="0" strokeWidth="2" stroke="black" />
                <line x1="100" y1="0" x2="0" y2={Math.sqrt(3)*100}  strokeWidth="2" stroke="black" />
            </svg>
        </>
    );
}

/* TODO: clause & widget, don't need to move, list of positions for connecting lines, draw it out

/* line: <line x1="100" y1="0" x2="0" y2={Math.sqrt(3)*100}  strokeWidth="2" stroke="black" /> */
/* circle: <circle r="45" cx="50" cy="50" fill="red" /> */
/* rectangle: <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={'red'} /> */