
export default function ProblemMenu() {
    return (
    <>
        <main className="top-0 left-0 w-full" style={{height:300, marginTop: 100}}>
            <div className="flex flex-row w-full justify-center" style={{height:300, zIndex: -100}}>
                <div className="flex flex-row w-4/12 justify-center" style={{height:30}}>
                    <div className="flex flex-row w-10/12" 
                        style={{height:40, backgroundColor:"#EAF1F2",
                            border:"solid", borderColor:"#396D83", borderWidth: 3
                        }}></div>
                </div>

                <div className="flex justify-center w-1/12" style={{height:50}}>
                    <h1 style={{color: "black", zIndex: 10}}>p</h1>
                </div>

                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                    <div className="flex flex-row w-10/12" style={{height:50, backgroundColor:"#EAF1F2"}}></div>
                </div>
            </div>
        </main>
    </>
    );
}