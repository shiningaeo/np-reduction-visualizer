export default function VariableGadget({x, color}) {
    return (
        <>
            <svg x={x} y="150" height="37" width="131">
                <line x1="16" y1="19" x2="112" y2="19" strokeWidth="3" stroke="black"/>
                <circle r="16" cx="16" cy="19" fill={color}/>
                <circle r="16" cx="112" cy="19" fill={color} stroke="black" strokeWidth="3"/>
            </svg>
        </>
    );
}