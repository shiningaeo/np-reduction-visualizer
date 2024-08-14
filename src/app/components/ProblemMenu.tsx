import { poppins } from '../fonts/fonts';

export default function ProblemMenu({ activeId, setActiveId }) {
    const activeStyle = {
        fontWeight:600,
        backgroundColor:"#b6f0e7"
      };
    
      const inactiveStyle = {
        fontWeight:400,
        backgroundColor:"white"
      };

      function vcClick() {
        setActiveId(0)
      }

      function clClick() {
        setActiveId(1)
      }

    return (
    <>
        <main className="top-0 left-0 w-full" style={{height:50, marginTop: 117, marginBottom:40}}>
            <div className="flex flex-row w-full justify-center" style={{height:300, zIndex: -100}}>
                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                <div className="flex flex-row w-2/12 justify-center items-center"></div>
                    <div className="flex flex-row w-8/12 justify-center items-center"
                        style={{height:50, backgroundColor:"#b6f0e7", border:"solid 2px #396D83"}}>

                        <h1 className={`${poppins.className} font-semibold`} style={{fontSize:22, color:"#396D83"}}>3-SAT</h1>
                    </div>
                </div>

                <div className="flex flex-row justify-center w-1/12 font-bold items-center" style={{height:50}}>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:40}}>&#8804;</h1>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:20, marginTop:12}}>&nbsp;p</h1>
                </div>

                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                    <div className="flex flex-row w-10/12 justify-center" style={{height:50, border:"solid 2px #396D83"}}>
                        {/* VC button */}
                        <div onClick={vcClick} className="flex w-1/2 justify-center items-center"
                            style={(activeId === 0 ? activeStyle : inactiveStyle)}>
                            <h1 className={`${poppins.className}`} style={{fontSize:22, color:"#396D83"}}>Vertex Cover</h1>
                        </div>

                        {/* CL button */}
                        <div onClick={clClick} className="flex w-1/2 justify-center items-center" 
                            style={(activeId === 1 ? activeStyle : inactiveStyle)}>
                            <h1 className={`${poppins.className}`} style={{fontSize:22, color:"#396D83"}}>Clique</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
}