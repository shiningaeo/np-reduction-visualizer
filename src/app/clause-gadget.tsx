export default function ClauseGadget({x, vis}) {
    return (
        <>
            <style jsx>{`
                #test:hover {
                    stroke: orange;
                    stroke-width: 20;
                }
            `}</style>
            <svg x={x} y="250" height="128" width="128" visibility={vis}>
                <line x1="16" y1="112" x2="96" y2="112"  strokeWidth="3" stroke="black" />
                <line x1="96" y1="112" x2="56" y2="32"  strokeWidth="3" stroke="black" />
                <line x1="56" y1="32" x2="16" y2="112"  strokeWidth="3" stroke="black" />
                <circle r="16" cx="16" cy="112" fill="grey"/>
                <circle r="16" cx="96" cy="112" fill="grey"/>
                <circle r="16" cx="56" cy="32" fill="grey"/>
            </svg>
        </>
    );
}

/* TODO: clause & widget, don't need to move, list of positions for connecting lines, draw it out

/* line: <line x1="100" y1="0" x2="0" y2={Math.sqrt(3)*100}  strokeWidth="2" stroke="black" /> */
/* circle: <circle r="45" cx="50" cy="50" fill="red" /> */
/* rectangle: <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={'red'} /> */