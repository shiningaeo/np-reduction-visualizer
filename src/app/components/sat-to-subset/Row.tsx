import Cell from "./Cell";

export default function Row({ M, N, type, place, INPUT, index, id, selected, ASSIGNMENT }) {
    let cols = []

    if (type[0] == "a" || type[0] == "b") { // a_i, b_i
        // clause cells
        for (let i = 0; i < M; ++i) {
            (i+1 == place) ? cols.push(<Cell key={(i).toString() + "abC"} width={60} content={"1"} index={index} id={id}/>)
            : cols.push(<Cell key={(i).toString() + "abC"} width={60} content={"0"} index={"x"} id={""}/>)
        }

        // var cells
        for (let i = 0; i < N; ++i) {
            cols.push(<Cell key={(i).toString() + "abV"} width={60} content={"0"} index={"x"} id={""}/>)
        }

    } else {    // t_i, f_i
        let varNum = place;
        let clauseCellContent = []

        if (type[0] == "f") { varNum *= -1 }

        for (let i = 0; i < M; ++i) {
            let check = false
            for (let j = 0; j < 3; ++j) {
                if (INPUT[3*i + j] == varNum) {
                    if ((varNum > 0 && ASSIGNMENT[varNum-1] == 1) ||(varNum < 0 && ASSIGNMENT[(varNum-1) * -1] == 0)) { 
                        check = true
                        break
                    }
                }
            }
            (check) ? clauseCellContent.push("1") : clauseCellContent.push("0")
        }

        // clause cells
        for (let i = 0; i < M; ++i) {
            cols.push(<Cell key={(i).toString() + "tfC"} width={60} content={clauseCellContent[i]} index={index} 
                id={(clauseCellContent[i] == "1") ? id : "x"}/>)
        }

        // var cells
        for (let i = 0; i < N; ++i) {
            (i+1 == place) ? cols.push(<Cell key={(i).toString() + "tfV"} width={60} content={"1"} index={index} id={id}/>)
            : cols.push(<Cell key={(i).toString() + "tfV"} width={60} content={"0"} index={"x"} id={""}/>)
        }
    }

    return (
    <>
    <div className="flex flex-row"
         style={{width:"fit-content", border:"solid 1px black", display:(index >= id) ? "" : "none",
                 backgroundColor:(selected && index >= "g") ? "#FDDE6C" : ""
         }}>
        <Cell width={95} content={<span>{type}<sub>{place}</sub></span>} index={index} id={""} />
        {cols.map(col => col)}
    </div>
    </>
    );
}
