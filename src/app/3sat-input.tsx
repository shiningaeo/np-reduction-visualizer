import Clause from "./clause-input";

export default function Three_SAT_Input({m}) {
    var render = []
    for (let i = 0; i < m-1; ++i) {
        render.push(<Clause key={i}/>)
        render.push(<p style={{fontSize: 35, margin: -15}}>&#8896;</p>)
    }
    render.push(<Clause key={m-1}/>)
    return (
    <>
        <main className="flex flex-row items-center justify-between">
            <input></input>
            <div></div>
            <div className="flex flex-col items-center justify-between">
                {render.map(component => component)}
            </div>
        </main>
    </>
    );
}