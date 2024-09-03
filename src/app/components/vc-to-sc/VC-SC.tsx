import WalkthroughTitle from "../WalkThruTitle";

export default function VC_SC({setSubmit, setSubmit2}) {
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"Vertex Cover"} rightProblem={"Set Cover"} handleReset={handleReset}/>

        </main>
    </>
    );
}