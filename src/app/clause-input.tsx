export default function Clause() {
    return (
      <>
        <div className="w-full h-1/2 items-center">
            <label style={{fontSize: 30, fontWeight: 500}}>X </label>
            <input type="text" id="pin" name="pin" maxLength={1} size={1}></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897; </p>

            <label style={{fontSize: 30, fontWeight: 500}}> X </label>
            <input type="text" id="pin" name="pin" maxLength={1} size={1}></input>
            <p style={{display: "inline", fontSize: 35}}> &#8897;</p>

            <label style={{fontSize: 30, fontWeight: 500}}> X </label>
            <input type="text" id="pin" name="pin" maxLength={1} size={1}></input>
        </div>
      </>  
    );
}