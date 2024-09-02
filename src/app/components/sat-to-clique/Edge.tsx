export default function Edge({index, id, x1, y1, x2, y2, color, inSample}) {
    // FROM var gadget TO clause gadget

    let vis = "hidden"
    let vis2 = "hidden"
    // render visibility based on value of state var index
    if (index >= id) {
        vis = ""
    }

    if (index >= "g2") {
        color = "grey"
        if (inSample) {
            vis2 = ""
        }
    }

    return (
        <>
            <style jsx>{`
                #test:hover {
                    stroke: black;
                    stroke-width: 5;
                }
            `}</style>
            <svg height="650" width="800">
                <line id="test" x1={x1} y1={y1} x2={x2} y2={y2} visibility={vis} strokeWidth="3" stroke={color} />
                <line x1={x1} y1={y1} x2={x2} y2={y2} visibility={vis2} strokeWidth="15" strokeOpacity={0.5} stroke="red" />
            </svg>
        </>
    );
}