export default function Cell({ width, content, index, id }) {
    return (
    <>
    <div className="flex flex-row items-center justify-center"
         style={{height:30, width:`${width}px`, 
                 borderWidth:"0px 1px 0px 1px", borderColor:"black", fontSize:19,
                 backgroundColor:(index == id) ? "#FDDE6C" : ""}}>
        <h1>{content}</h1>
    </div>
    </>
    );
}
