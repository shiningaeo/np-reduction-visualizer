export default function GraphInputLayout({ edges, toggleEdge, V }) {
    const handleClick = (index: number) => {
        toggleEdge(index);
    };

    let layouts = [
        // V = 3
        <svg width="297.6" height="284.8" viewBox="0 0 308 282" fill="none" transform="translate(40, 30)">
            <g transform="scale(0.75 0.75)">
                <line id="line00" onClick={() => handleClick(0)} stroke={edges[0]} x1="20.6301" y1="254.57" x2="149.63" y2="22.5702" strokeWidth="10"/>
                <line id="line01" onClick={() => handleClick(1)} stroke={edges[1]} x1="278.63" y1="259.43" x2="149.63" y2="27.4298" strokeWidth="10"/>
                <line id="line02" onClick={() => handleClick(2)} stroke={edges[2]} x1="283" y1="262" x2="25" y2="262" strokeWidth="10"/>
                <circle id="circle1" cx="149" cy="25" r="25" fill="#2C82C9"/>
                <circle id="circle2" cx="25" cy="257" r="25" fill="#2C82C9"/>
                <circle id="circle3" cx="283" cy="257" r="25" fill="#2C82C9"/>
            </g>
        </svg>,

        // V = 4
        <svg width="297.6" height="284.8" viewBox="0 0 383 383" fill="black" transform="translate(-40, -30)">
            <line id="line00" onClick={() => handleClick(0)} stroke={edges[0]} x1="134" y1="340" x2="134" y2="100" strokeWidth="10"/>
            <line id="line01" onClick={() => handleClick(1)} stroke={edges[1]} x1="362.367" y1="343.436" x2="135.367" y2="103.436" strokeWidth="10"/>
            <line id="line02" onClick={() => handleClick(2)} stroke={edges[2]} x1="366" y1="105" x2="139" y2="105" strokeWidth="10"/>
            <line id="line03" onClick={() => handleClick(3)} stroke={edges[3]} x1="369.595" y1="103.475" x2="137.595" y2="343.475" strokeWidth="10"/>
            <line id="line04" onClick={() => handleClick(4)} stroke={edges[4]} x1="366" y1="345" x2="134" y2="345" strokeWidth="10"/>
            <line id="line05" onClick={() => handleClick(5)} stroke={edges[5]} x1="365" y1="100" x2="365" y2="340" strokeWidth="10"/>
            <circle id="circle1" cx="134" cy="100" r="25" fill="#2C82C9"/>
            <circle id="circle2" cx="366" cy="100" r="25" fill="#2C82C9"/>
            <circle id="circle3" cx="366" cy="340" r="25" fill="#2C82C9"/>
            <circle id="circle4" cx="134" cy="340" r="25" fill="#2C82C9"/>
        </svg>,

        // V = 5
        <svg width="297.6" height="284.8" viewBox="0 0 372 356" fill="none">
            <line id="line00" onClick={() => handleClick(0)} stroke={edges[0]} x1="21.945" y1="136.042" x2="170.945" y2="21.0418" strokeWidth="10"/>
            <line id="line01" onClick={() => handleClick(1)} stroke={edges[1]} x1="80.2415" y1="302.465" x2="170.241" y2="23.465" strokeWidth="10"/>
            <line id="line02" onClick={() => handleClick(2)} stroke={edges[2]} x1="260.241" y1="305.535" x2="170.241" y2="26.535" strokeWidth="10"/>
            <line id="line03" onClick={() => handleClick(3)} stroke={edges[3]} x1="320.758" y1="143.806" x2="185.758" y2="28.8062" strokeWidth="10"/>
            <line id="line04" onClick={() => handleClick(4)} stroke={edges[4]} x1="25" y1="135" x2="324" y2="135" strokeWidth="10"/>
            <line id="line05" onClick={() => handleClick(5)} stroke={edges[5]} x1="82.171" y1="299.877" x2="321.171" y2="135.877" strokeWidth="10"/>
            <line id="line06" onClick={() => handleClick(6)} stroke={edges[6]} x1="85" y1="299" x2="265" y2="299" strokeWidth="10"/>
            <line id="line07" onClick={() => handleClick(7)} stroke={edges[7]} x1="260.295" y1="302.307" x2="319.295" y2="138.307" strokeWidth="10"/>
            <line id="line08" onClick={() => handleClick(8)} stroke={edges[8]} x1="27.821" y1="135.872" x2="267.821" y2="299.872" strokeWidth="10"/>
            <line id="line09" onClick={() => handleClick(9)} stroke={edges[9]} x1="29.6956" y1="138.282" x2="89.6956" y2="302.282" strokeWidth="10"/>
            <circle id="circle1" cx="175" cy="25" r="25" fill="#2C82C9"/>
            <circle id="circle2" cx="25" cy="140" r="25" fill="#2C82C9"/>
            <circle id="circle3" cx="324" cy="140" r="25" fill="#2C82C9"/>
            <circle id="circle4" cx="85" cy="304" r="25" fill="#2C82C9"/>
            <circle id="circle5" cx="265" cy="304" r="25" fill="#2C82C9"/>
        </svg>,

        // V = 6
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
                {layouts[V-3]}
            </div>
        </main>
    </>
    );
}