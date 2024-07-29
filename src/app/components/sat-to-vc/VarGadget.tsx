export default function VariableGadget({x, color, num, index}) {
    let vis = "hidden"
    if (index[0] >= "g") {
        vis = "visible"
    }
    return (
        <>
        <svg x={x} y="150" height="120" width="131">
            <line x1="16" y1="49" x2="112" y2="49" strokeWidth="3" stroke="black" />
            
            <circle r="20" cx="22" cy="49" visibility={vis} fill="none" stroke="red" strokeWidth="3" />
            <circle r="16" cx="22" cy="49" fill={color} />

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