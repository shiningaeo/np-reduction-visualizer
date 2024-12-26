import Cell from "./Cell";

export default function Footer({ M, N }) {
    let cols = []

    // clause cells
    for (let j = 0; j < M; ++j) {
        cols.push(<Cell key={(j).toString() + "f1"} width={60} content={"3"} index={"x"} id={""}/>)
    }

    // var cells
    for (let i = 0; i < N; ++i) {
        cols.push(<Cell key={(i).toString() + "f2"} width={60} content={"1"} index={"x"} id={""}/>)
    }

    return (
    <>
    <div className="flex flex-row"
            style={{width:"fit-content", border:"solid 1px black"}}>
        <Cell width={95} content={"s"} index={"x"} id={""}/>
        {cols.map(col => col)}
    </div>
    </>
    );
}