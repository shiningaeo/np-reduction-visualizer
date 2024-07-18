export default function Clause({N, base, changeInput}) {
    return (
      <>
        <div style={{marginTop: 8, marginBottom: 8}}>
            <div className="flex flex-row justify-between items-center">
                <div className="bg-gray-400 hover:bg-black" style={{zIndex:1, marginLeft:17, marginBottom:-20, width:26, height:4}}></div>
                <div className="bg-gray-400 hover:bg-black" style={{zIndex:1, marginRight:-1, marginBottom:-20, width:26, height:4}}></div>
                <div className="bg-gray-400 hover:bg-black" style={{zIndex:1, marginRight:54, marginBottom:-20, width:26, height:4}}></div>
            </div>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}>( </p>
            <label style={{fontSize: 30, fontWeight: 550}}>X </label>
            <input type="number" min="1" max={N} onChange={e => changeInput(base*3, parseInt(e.target.value))}></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897; </p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input type="number"  min="1" max={N} onChange={e => changeInput(base*3+1, parseInt(e.target.value))}></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897;</p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input type="number"  min="1" max={N} onChange={e => changeInput(base*3+2, parseInt(e.target.value))}></input>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}> )</p>
        </div>
      </>  
    );
}