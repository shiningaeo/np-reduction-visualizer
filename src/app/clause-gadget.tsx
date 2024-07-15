export default function ClauseGadget({x, vis, index, id1, id2, id3}) {
    var color1 = "grey"
    var color2 = "grey"
    var color3 = "grey"

    var stroke1 = 0
    var stroke2 = 0
    var stroke3 = 0

    var border1 = ""
    var border2 = ""
    var border3 = ""

    if (index[0] == id1) {
        color1 = index[1]
        if (index[1] != "") {
            stroke1 = 3
            border1 = index[2]
        }
    } else if (index[0] == id2) {
        color2 = index[1]
        if (index[1] != "") {
            stroke2 = 3
            border2 = index[2]
        }
    } else if (index[0] == id3) {
        color3 = index[1]
        if (index[1] != "") {
            stroke3 = 3
            border3 = index[2]
        }
    }

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

                <circle r="16" cx="16" cy="112" fill={color1} strokeWidth={stroke1} stroke={border1} />
                <circle r="16" cx="56" cy="32" fill={color2} strokeWidth={stroke2} stroke={border2} />
                <circle r="16" cx="96" cy="112" fill={color3} strokeWidth={stroke3} stroke={border3} />
            </svg>
        </>
    );
}
