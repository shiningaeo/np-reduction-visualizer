export default function TriangleWidget({x}) {
    return (
        <>
            <style jsx>{`
                #test:hover {
                    stroke: orange;
                    stroke-width: 20;
                }
            `}</style>
            {/* <svg height={Math.sqrt(3)*100+2} width="200">
                <line id="test" x1="0" y1={Math.sqrt(3)*100} x2="200" y2={Math.sqrt(3)*100} strokeWidth="2" stroke="black" />
                <line x1="200" y1={Math.sqrt(3)*100} x2="100" y2="0" strokeWidth="2" stroke="black" />
                <line x1="100" y1="0" x2="0" y2={Math.sqrt(3)*100}  strokeWidth="2" stroke="black" />
            </svg> */}
            <svg x={x} y="250" height="128" width="128">
                <line x1="16" y1="112" x2="96" y2="112"  strokeWidth="3" stroke="black" />
                <line x1="96" y1="112" x2="56" y2="32"  strokeWidth="3" stroke="black" />
                <line x1="56" y1="32" x2="16" y2="112"  strokeWidth="3" stroke="black" />
                <circle r="16" cx="16" cy="112" fill="blue"/>
                <circle r="16" cx="96" cy="112" fill="blue"/>
                <circle r="16" cx="56" cy="32" fill="blue"/>
            </svg>
        </>
    );
}

/* TODO: clause & widget, don't need to move, list of positions for connecting lines, draw it out

/* line: <line x1="100" y1="0" x2="0" y2={Math.sqrt(3)*100}  strokeWidth="2" stroke="black" /> */
/* circle: <circle r="45" cx="50" cy="50" fill="red" /> */
/* rectangle: <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={'red'} /> */