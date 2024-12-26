import Row from "./Row";
import Header from "./Header";
import Footer from "./Footer";

export default function Table({ M, N, INPUT, index, clauses, vars, ASSIGNMENT }) {
    let rows = []
    let blocks = []
    
    // clause rows
    for (let i = 0; i < M; ++i) {
        rows.push(<Row key={"a"+(i+1).toString()} M={M} N={N} type={"a"} place={i+1} INPUT={INPUT} index={index} 
                        id={"b"+(i+1).toString()} selected={(clauses[i] > 0) ? true : false} ASSIGNMENT={ASSIGNMENT}/>)

        rows.push(<Row key={"b"+(i+1).toString()} M={M} N={N} type={"b"} place={i+1} INPUT={INPUT} index={index} 
                        id={"b"+(i+1).toString()} selected={(clauses[i] == 2) ? true : false} ASSIGNMENT={ASSIGNMENT}/>)
    }

    blocks.push(
        <div key={"b0"} className="flex flex-col"
             style={{width:"fit-content", borderWidth:"1px 0px 1px 0px", borderColor:"black", marginBottom:5}}>
            {rows.map(row => row)}
        </div>
    )

    // var rows
    for (let i = 0; i < N; ++i) {
        rows = []
        rows.push(<Row key={"t"+(i+1).toString()} M={M} N={N} type={"t"} place={i+1} INPUT={INPUT} index={index} 
                        id={"c"+(i+1).toString()} selected={(vars.has(i+1)) ? true : false} ASSIGNMENT={ASSIGNMENT}/>)

        rows.push(<Row key={"f"+(i+1).toString()} M={M} N={N} type={"f"} place={i+1} INPUT={INPUT} index={index} 
                        id={"c"+(i+1).toString()} selected={(vars.has((i+1) * -1)) ? true : false} ASSIGNMENT={ASSIGNMENT}/>)
        blocks.push(
            <div key={"b"+(i+1).toString()} className="flex flex-col" 
                 style={{width:"fit-content", borderWidth:"1px 0px 1px 0px", borderColor:"black", marginBottom:5}}>
                {rows.map(row => row)}
            </div>
        )
    }

    blocks.push(
        <div key={"bZ"} className="flex flex-col"
             style={{width:"fit-content", borderWidth:"1px 0px 1px 0px", borderColor:"black", marginBottom:5,
                     display:(index >= "d") ? "" : "none"
             }}>
            <Footer M={M} N={N}/>
        </div>
    )
    
    return (
    <>
    <div className="flex flex-col"
        style={{width:"fit-content", borderWidth:"1px 0px 1px 0px", borderColor:"black", marginBottom:5, backgroundColor:"#EAF1F2"}}>
        <Header M={M} N={N}/>
    </div>
    <div className="flex flex-col items-center overflow-scroll" style={{height:500, width:800}}>
        {blocks.map(block => block)}
    </div>
    </>
    );
}
