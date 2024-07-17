export default function Clause() {
    return (
      <>
        <div className="w-full h-1/2 items-center flex flex-col justify-center">
            <div>
                <p style={{display: "inline", fontSize: 30, fontWeight: 550}}>( </p>
                <label style={{fontSize: 30, fontWeight: 550}}>X </label>
                <input type="text" id="pin" name="pin" maxLength={1} size={1}></input>
                <p style={{display: "inline", fontSize: 35}}> &#8897; </p>

                <label style={{fontSize: 30, fontWeight: 550}}> X </label>
                <input type="text" id="pin" name="pin" maxLength={1} size={1}></input>
                <p style={{display: "inline", fontSize: 35}}> &#8897;</p>

                <label style={{fontSize: 30, fontWeight: 550}}> X </label>
                <input type="text" id="pin" name="pin" maxLength={1} size={1}></input>
                <p style={{display: "inline", fontSize: 30, fontWeight: 550}}> )</p>
            </div>
        </div>
      </>  
    );
}