export default function VariableGadget({x, color, index}) {
    return (
        <>
            <svg x={x} y="150" height="120" width="131">
                <line x1="16" y1="49" x2="112" y2="49" strokeWidth="3" stroke="black"/>
                <circle r="16" cx="16" cy="49" fill={color}/>
                <circle r="16" cx="112" cy="49" fill={color} stroke="black" strokeWidth="3"/>
                <text x="9" y="22">
                    <tspan>X</tspan>
                    <tspan dy="5" fontSize="80%">{index+1}</tspan>
                </text>

                <text x="106" y="22">
                    <tspan textDecoration="overline">X</tspan>
                    <tspan dy="5" fontSize="80%">{index+1}</tspan>
                </text>
            </svg>
        </>
    );
}