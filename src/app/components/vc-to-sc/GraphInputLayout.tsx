export default function GraphInputLayout({ edges, toggleEdge }) {
    const handleClick = (index: number) => {
        toggleEdge(index);
    };

    let layouts = [
        <svg width="297.6" height="284.8" viewBox="0 0 372 356" fill="none">
            <line id="line00" onClick={() => handleClick(0)} stroke={edges[0]} x1="20.6264" y1="172.577" x2="102.626" y2="24.5768" strokeWidth="10"/>
            <line id="line01" onClick={() => handleClick(1)} stroke={edges[1]} x1="265.063" y1="29.9996" x2="107.063" y2="31.9996" strokeWidth="10"/>
            <line id="line02" onClick={() => handleClick(2)} stroke={edges[2]} x1="260.57" y1="331.318" x2="102.57" y2="29.3179" strokeWidth="10"/>
            <line id="line03" onClick={() => handleClick(3)} stroke={edges[3]} x1="102" y1="329" x2="102" y2="27" strokeWidth="10"/>
            <line id="line04" onClick={() => handleClick(4)} stroke={edges[4]} x1="344.376" y1="179.256" x2="104.376" y2="31.2559" strokeWidth="10"/>
            <line id="line05" onClick={() => handleClick(5)} stroke={edges[5]} x1="22.35" y1="172.76" x2="262.35" y2="22.76" strokeWidth="10"/>
            <line id="line06" onClick={() => handleClick(6)} stroke={edges[6]} x1="102.57" y1="326.682" x2="260.57" y2="24.6822" strokeWidth="10"/>
            <line id="line07" onClick={() => handleClick(7)} stroke={edges[7]} x1="260" y1="329" x2="260" y2="27" strokeWidth="10"/>
            <line id="line08" onClick={() => handleClick(8)} stroke={edges[8]} x1="342.626" y1="177.423" x2="260.626" y2="29.4232" strokeWidth="10"/>
            <line id="line09" onClick={() => handleClick(9)} stroke={edges[9]} x1="25" y1="172" x2="347" y2="172" strokeWidth="10"/>
            <line id="line10" onClick={() => handleClick(10)} stroke={edges[10]} x1="260.6" y1="326.626" x2="342.6" y2="174.626" strokeWidth="10"/>
            <line id="line11" onClick={() => handleClick(11)} stroke={edges[11]} x1="104.325" y1="324.776" x2="344.325" y2="172.776" strokeWidth="10"/>
            <line id="line12" onClick={() => handleClick(12)} stroke={edges[12]} x1="107" y1="324" x2="265" y2="324" strokeWidth="10"/>
            <line id="line13" onClick={() => handleClick(13)} stroke={edges[13]} x1="27.6753" y1="172.776" x2="267.675" y2="324.776" strokeWidth="10"/>
            <line id="line14" onClick={() => handleClick(14)} stroke={edges[14]} x1="29.4005" y1="174.626" x2="111.4" y2="326.626" strokeWidth="10"/>
            <circle id="circle1" cx="102" cy="27" r="25" fill="#2C82C9"/>
            <circle id="circle2" cx="260" cy="27" r="25" fill="#2C82C9"/>
            <circle id="circle3" cx="102" cy="329" r="25" fill="#2C82C9"/>
            <circle id="circle4" cx="260" cy="329" r="25" fill="#2C82C9"/>
            <circle id="circle5" cx="25" cy="172" r="25" fill="#2C82C9"/>
            <circle id="circle6" cx="347" cy="172" r="25" fill="#2C82C9"/>
        </svg>
    ]
    return (
    <>
        <main className="flex flex-row justify-center w-full" style={{height:440, backgroundColor:"white", marginRight:50}}>
            <div className="flex flex-col items-center" style={{marginTop:50}}>
                {layouts[0]}
            </div>
        </main>
    </>
    );
}