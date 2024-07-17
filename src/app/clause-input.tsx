export default function Clause() {
    return (
      <>
        <div>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}>( </p>
            <label style={{fontSize: 30, fontWeight: 550}}>X </label>
            <input type="number" min="1" max="5" id="pin" name="pin"></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897; </p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input type="number"  min="1" max="5" id="pin" name="pin" ></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897;</p>

            <label style={{fontSize: 30, fontWeight: 550}}> X </label>
            <input type="number"  min="1" max="5" id="pin" name="pin"></input>
            <p style={{display: "inline", fontSize: 30, fontWeight: 550}}> )</p>
        </div>
      </>  
    );
}