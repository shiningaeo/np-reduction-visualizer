export default function VariableGadget({x, color, num, index, assignment}) {
    let vis1 = "hidden"
    let vis2 = "hidden"
    if (index[0] >= "g") {
        if (assignment[num] == 1) {
            vis1 = ""
        } else {
            vis2 = ""
        }
    }
    return (
        <>
        <style jsx>{`
            #test:hover {
                stroke: orange;
                stroke-width: 5;
            }
        `}</style>
        <svg x={x} y="150" height="120" width="131">
            <line id="test" x1="16" y1="49" x2="112" y2="49" strokeWidth="3" stroke="black" />
            
            <circle r="20" cx="22" cy="49" visibility={vis1} fill="none" stroke="red" strokeWidth="3" />
            <circle r="16" cx="22" cy="49" fill={color} />

            <circle r="20" cx="106" cy="49" visibility={vis2} fill="none" stroke="red" strokeWidth="3" />
            <circle r="16" cx="106" cy="49" fill={color} stroke="black" strokeWidth="3" />

            <text x="12" y="17">
            <tspan>X</tspan>
            <tspan dy="5" fontSize="80%">{num + 1}</tspan>
            </text>

            <text x="100" y="17">
            <tspan textDecoration="overline">X</tspan>
            <tspan dy="5" fontSize="80%">{num + 1}</tspan>
            </text>
        </svg>
        </>
    );
}