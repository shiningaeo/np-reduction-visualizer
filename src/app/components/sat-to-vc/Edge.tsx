export default function Edge({index, id, x1, x2, y2}) {
    // FROM var gadget TO clause gadget

    let vis = "hidden"
    // render visibility based on value of state var index
    if (index >= id) {
        vis = ""
    }

    return (
        <>
            <svg height="500" width="800" visibility={vis}>
                <line x1={x1} y1={199} x2={x2} y2={y2}  strokeWidth="3" stroke="black" />
            </svg>
        </>
    );
}