import Cell from "./Cell";

export default function Header({ M, N }) {
    let cols = []

    // clause cells
    for (let j = 0; j < M; ++j) {
        let temp = "j="
        temp += (j+1).toString()

        cols.push(<Cell key={(j).toString() + "h1"} width={60} content={temp} index={"x"} id={""}/>)
    }

    // var cells
    for (let i = 0; i < N; ++i) {
        let temp = "i="
        temp += (i+1).toString()

        cols.push(<Cell key={(i).toString() + "h2"} width={60} content={temp} index={"x"} id={""}/>)
    }

    return (
    <>
    <div className="flex flex-row"
            style={{width:"fit-content", border:"solid 1px black"}}>
        <Cell width={95} content={"Number"} index={"x"} id={""}/>
        {cols.map(col => col)}
    </div>
    </>
    );
}