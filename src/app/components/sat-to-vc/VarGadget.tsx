export default function VariableGadget({x, color, num, index, assignment}) {
    let vis1 = "hidden"
    let vis2 = "hidden"
    let color1 = color
    let color2 = color
    if (index[0] >= "g") {
        assignment[num] == 1 ? vis1 = "" : vis2 = ""
    }

    if (index >= "g3") {
        vis1 == "" ? color2 = "grey" : color1 = "grey"
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
            
            <circle r="20" cx="22" cy="49" visibility={vis1} fill="#FFD700" stroke="#FFD700" 
                strokeWidth="3" strokeOpacity="0.6" fillOpacity="0.6"/>
            <circle r="16" cx="22" cy="49" fill={color1} />

            <circle r="20" cx="106" cy="49" visibility={vis2} fill="#FFD700" stroke="#FFD700" 
                strokeWidth="3" strokeOpacity="0.6" fillOpacity="0.6"/>
            <circle r="16" cx="106" cy="49" fill={color2} stroke="black" strokeWidth="3" />

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