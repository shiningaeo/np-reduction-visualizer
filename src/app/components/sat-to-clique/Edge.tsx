export default function Edge({index, id, x1, y1, x2, y2, color}) {
    // FROM var gadget TO clause gadget

    let vis = "hidden"
    // render visibility based on value of state var index
    if (index >= id) {
        vis = ""
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
            </svg>
        </>
    );
}