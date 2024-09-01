export default function Edge({index, id, x1, x2, y2, falseInst}) {
    // FROM var gadget TO clause gadget

    let vis = "hidden"
    let vis2 = "hidden"
    let color = "black"
    let strokeSize = "3"

    // render visibility based on value of state var index
    if (index >= id) {
        vis = ""
    }

    if (index >= "g4" && !falseInst) {
        vis2 = ""
    }

    return (
        <>
             <style jsx>{`
                #test:hover {
                    stroke: orange;
                    stroke-width: 5;
                }
            `}</style>
            <svg height="500" width="800" visibility={vis}>
                <line id="test" x1={x1} y1={199} x2={x2} y2={y2} strokeWidth={strokeSize} stroke={color} />
                <line x1={x1} y1={199} x2={x2} y2={y2} visibility={vis2} strokeWidth="15" strokeOpacity={0.5} stroke="red" />
            </svg>
        </>
    );
}