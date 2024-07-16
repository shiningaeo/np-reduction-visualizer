import Clause from "./clause-input";

export default function Three_SAT_Input({m}) {
    var render = []
    for (let i = 0; i < m; ++i) {
        render.push(<Clause />)
    }
    return (
    <>
        <main className="flex flex-col items-center justify-between">
            {render.map(component => component)}
        </main>
    </>
    );
}