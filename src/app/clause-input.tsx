export default function Clause({N, base, changeInput, negatives, toggleNegation}) {
    // this might be unecessary function wrapping
    const handleClick = (index: number) => {
        toggleNegation(index);
    };

    return (
      <>
        <div style={{marginTop: 8, marginBottom: 8}}>
            <div className="flex flex-row justify-between items-center">
                <div onClick={() => handleClick(base*3)} className="hover:bg-black" style={{backgroundColor: negatives[base*3], zIndex:1, marginLeft:17, marginBottom:-20, width:26, height:4}}></div>
                <div onClick={() => handleClick(base*3 +1)} className="hover:bg-black" style={{backgroundColor: negatives[base*3+1], zIndex:1, marginRight:-2, marginBottom:-20, width:26, height:4}}></div>
                <div onClick={() => handleClick(base*3 +2)} className="hover:bg-black" style={{backgroundColor: negatives[base*3+2], zIndex:1, marginRight:57, marginBottom:-20, width:26, height:4}}></div>
            </div>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}>( </p>
            <label style={{fontSize: 30, fontWeight: 550}}>X </label>
            <input style={{border: "solid"}} type="number" min="1" max={N} onChange={e => changeInput(base*3, parseInt(e.target.value))}></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897; </p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input style={{border: "solid"}} type="number"  min="1" max={N} onChange={e => changeInput(base*3+1, parseInt(e.target.value))}></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897;</p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input style={{border: "solid"}} type="number"  min="1" max={N} onChange={e => changeInput(base*3+2, parseInt(e.target.value))}></input>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}> )</p>
        </div>
      </>  
    );
}