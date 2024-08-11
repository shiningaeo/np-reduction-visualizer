export default function ClauseGadget({x, index, id1, id2, id3, vars, colors, borders}) {
    let color1 = "grey", color2 = "grey", color3 = "grey"
    let stroke1 = 0, stroke2 = 0, stroke3 = 0
    let border1 = "", border2 = "", border3 = ""
    let bar1 = "none", bar2 = "none", bar3 = "none"
    let vis1 = "hidden", vis2 = "hidden", vis3 = "hidden"

    if (borders[0] != "") {
        bar1 = "overline"
    }
    if (borders[1] != "") {
        bar2 = "overline"
    }
    if (borders[2] != "") {
        bar3 = "overline"
    }

    // render color for each vertex based on value of state var index
    if (index >= id1) {
        color1 = colors[0]
        if (borders[0] != "") {
            stroke1 = 3
            border1 = borders[0]
        }
    }
    if (index >= id2) {
        color2 = colors[1]
        if (borders[1] != "") {
            stroke2 = 3
            border2 = borders[1]
        }
    }
    if (index >= id3) {
        color3 = colors[2]
        if (borders[2] != "") {
            stroke3 = 3
            border3 = borders[2]
        }
    }

    // render selected vertices
    if (index >= "g2") {
        if (borders[0] != "") {
            vis1 = ""
        }
        if (borders[1] != "") {
            vis2 = ""
        }
        if (borders[2] != "") {
            vis3 = ""
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
        <svg x={x} y="250" height="300" width="200">
            <text x="2" y="155">
                ( <tspan style={{ textDecoration: bar1 }}>X</tspan>
                <tspan dy="5" fontSize="80%">{3 * (Math.floor(vars[0] / 3)) + (vars[0] % 3)}</tspan>
                <tspan dy="-5"> &#8897; </tspan>
                <tspan dy="0" style={{ textDecoration: bar2 }}>X</tspan>
                <tspan dy="5" fontSize="80%">{3 * (Math.floor(vars[1] / 3)) + (vars[1] % 3)}</tspan>
                <tspan dy="-5"> &#8897; </tspan>
                <tspan dy="0" style={{ textDecoration: bar3 }}>X</tspan>
                <tspan dy="5" fontSize="80%">{3 * (Math.floor(vars[2] / 3)) + (vars[2] % 3)}</tspan>
                <tspan dy="-5"> )</tspan>
            </text>
            <line id="test" x1="22" y1="112" x2="90" y2="112" strokeWidth="3" stroke="black" />
            <line id="test" x1="90" y1="112" x2="56" y2="32" strokeWidth="3" stroke="black" />
            <line id="test" x1="56" y1="32" x2="22" y2="112" strokeWidth="3" stroke="black" />

            <circle r="20" cx="22" cy="112" fill="none" visibility={vis1} stroke="red" strokeWidth="3" />
            <circle r="16" cx="22" cy="112" fill={color1} strokeWidth={stroke1} stroke={border1} />

            <circle r="20" cx="56" cy="32" fill="none" visibility={vis2} stroke="red" strokeWidth="3" />
            <circle r="16" cx="56" cy="32" fill={color2} strokeWidth={stroke2} stroke={border2} />

            <circle r="20" cx="90" cy="112" fill="none" visibility={vis3} stroke="red" strokeWidth="3" />
            <circle r="16" cx="90" cy="112" fill={color3} strokeWidth={stroke3} stroke={border3} />
        </svg>
        </>
    );
}