export default function GraphLayout({ edges, toggleEdge }) {
    const handleClick = (index: number) => {
        toggleEdge(index);
    };

    let layouts = [
        <svg width="297.6" height="284.8" viewBox="0 0 372 356" fill="none">
            <line id="line0" x1="20.6264" y1="172.577" x2="102.626" y2="24.5768" onClick={() => handleClick(0)} stroke={edges[0]} strokeWidth="10"/>
            <line id="line1" x1="265.063" y1="29.9996" x2="107.063" y2="31.9996" onClick={() => handleClick(1)} stroke={edges[1]} strokeWidth="10"/>
            <line id="line2" x1="260.57" y1="331.318" x2="102.57" y2="29.3179" onClick={() => handleClick(2)} stroke={edges[2]} strokeWidth="10"/>
            <line id="line3" x1="102" y1="329" x2="102" y2="27" onClick={() => handleClick(3)} stroke={edges[3]} strokeWidth="10"/>
            <line id="line4" x1="344.376" y1="179.256" x2="104.376" y2="31.2559" onClick={() => handleClick(4)} stroke={edges[4]} strokeWidth="10"/>
            <line id="line5" x1="22.35" y1="172.76" x2="262.35" y2="22.76" onClick={() => handleClick(5)} stroke={edges[5]} strokeWidth="10"/>
            <line id="line6" x1="102.57" y1="326.682" x2="260.57" y2="24.6822" onClick={() => handleClick(6)} stroke={edges[6]} strokeWidth="10"/>
            <line id="line7" x1="260" y1="329" x2="260" y2="27" onClick={() => handleClick(7)} stroke={edges[7]} strokeWidth="10"/>
            <line id="line8" x1="342.626" y1="177.423" x2="260.626" y2="29.4232" onClick={() => handleClick(8)} stroke={edges[8]} strokeWidth="10"/>
            <line id="line9" x1="25" y1="172" x2="347" y2="172" onClick={() => handleClick(9)} stroke={edges[9]} strokeWidth="10"/>
            <line id="line10" x1="260.6" y1="326.626" x2="342.6" y2="174.626" onClick={() => handleClick(10)} stroke={edges[10]} strokeWidth="10"/>
            <line id="line11" x1="104.325" y1="324.776" x2="344.325" y2="172.776" onClick={() => handleClick(11)} stroke={edges[11]} strokeWidth="10"/>
            <line id="line12" x1="107" y1="324" x2="265" y2="324" onClick={() => handleClick(12)} stroke={edges[12]} strokeWidth="10"/>
            <line id="line13" x1="27.6753" y1="172.776" x2="267.675" y2="324.776" onClick={() => handleClick(13)} stroke={edges[13]} strokeWidth="10"/>
            <line id="line14" x1="29.4005" y1="174.626" x2="111.4" y2="326.626" onClick={() => handleClick(14)} stroke={edges[14]} strokeWidth="10"/>
            <circle id="circle1" cx="102" cy="27" r="25" fill="#0000FF"/>
            <circle id="circle2" cx="260" cy="27" r="25" fill="#0000FF"/>
            <circle id="circle3" cx="102" cy="329" r="25" fill="#0000FF"/>
            <circle id="circle4" cx="260" cy="329" r="25" fill="#0000FF"/>
            <circle id="circle5" cx="25" cy="172" r="25" fill="#0000FF"/>
            <circle id="circle6" cx="347" cy="172" r="25" fill="#0000FF"/>
        </svg>
    ]
    return (
    <>
        <main className="flex flex-row justify-center w-full" style={{height:440, marginBottom:12, backgroundColor:"#ffffff", marginRight:50}}>
            <div className="flex flex-col" style={{height:285, marginTop:50}}>
                {layouts[0]}
            </div>
        </main>
    </>
    );
}

// 6 Vertices:
// const circle1Lines = [lines 0-4];
// const circle2Lines = [line1, lines5-8];
// const circle3Lines = [lines2-3, lines12-14];
// const circle4Lines = [line2, line7, lines12-13];
// const circle5Lines = [line0, line5, line9, lines13-14];
// const circle6Lines = [line4, lines8-11];