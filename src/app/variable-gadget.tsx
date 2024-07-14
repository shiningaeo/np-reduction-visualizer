export default function VariableGadget({x, vis, color}) {
    return (
        <>
            {/* <svg height={Math.sqrt(3)*100+2} width="200">
                <line id="test" x1="0" y1={Math.sqrt(3)*100} x2="200" y2={Math.sqrt(3)*100} strokeWidth="2" stroke="black" />
                <line x1="200" y1={Math.sqrt(3)*100} x2="100" y2="0" strokeWidth="2" stroke="black" />
                <line x1="100" y1="0" x2="0" y2={Math.sqrt(3)*100}  strokeWidth="2" stroke="black" />
            </svg> */}
            <svg x={x} y="150" height="37" width="131" visibility={vis}>
                <line x1="16" y1="19" x2="112" y2="19" strokeWidth="3" stroke="black"/>
                <circle r="16" cx="16" cy="19" fill={color}/>
                <circle r="16" cx="112" cy="19" fill={color} stroke="black" strokeWidth="3"/>
            </svg>
        </>
    );
}