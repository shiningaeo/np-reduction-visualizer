import WalkthroughTitle from "../WalkThruTitle";
import GraphLayout from "./GraphLayout";

export default function VC_SC({setSubmit, setSubmit2, edges, V}) {
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    const NUM_EDGES = edges.filter(item => item === "black").length
    const visibleSet = new Set()

    for (let i = 0; i < edges.length; ++i) {
        if (edges[i] == "black") {
            visibleSet.add(i)
        }
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"Vertex Cover"} rightProblem={"Set Cover"} handleReset={handleReset}/>
            <GraphLayout visibleSet={visibleSet}/>
        </main>
    </>
    );
}