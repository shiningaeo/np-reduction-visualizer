import { poppins } from '../fonts/fonts';

export default function WalkthroughTitle({ leftProblem, rightProblem, handleReset }) {
    return (
        <>
        <div className="w-full flex justify-left">
            <div onClick={handleReset} className="bg-gray-200 flex items-center justify-center" 
            style={{cursor:"pointer", height:30, zIndex:1000, width:70, marginTop:85, marginBottom:-70, marginLeft:30, borderRadius:10, fontSize:16}}>RESET</div>
        </div>

        <main className="top-0 left-0 w-full" style={{height:50, marginTop: 30}}>
            <div className="flex flex-row w-full justify-center" style={{height:300, zIndex: -100, marginTop:20}}>
                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                <div className="flex flex-row w-2/12 justify-center items-center"></div>
                    <div className="flex flex-row w-4/12 justify-center items-center"></div>
                    <div className="flex flex-row w-8/12 justify-center items-center">
                        <h1 className={`${poppins.className} font-semibold`} style={{fontSize:22, color:"#396D83"}}>{leftProblem}</h1>
                    </div>
                </div>

                <div className="flex flex-row justify-center w-1/12 font-bold items-center" style={{height:50}}>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:40}}>&#8804;</h1>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:20, marginTop:12}}>&nbsp;p</h1>
                </div>

                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                    <div className="flex flex-row w-10/12 justify-center" style={{height:50}}>
                        <div className="flex w-7/12 justify-center items-center">
                            <h1 className={`${poppins.className} font-semibold`} style={{fontSize:22, color:"#396D83"}}>{rightProblem}</h1>
                        </div>
                        <div className="flex flex-row w-5/12 justify-center items-center"></div>
                    </div>
                </div>
            </div>
        </main>
        </>
    );
}