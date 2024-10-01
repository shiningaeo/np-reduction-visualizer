import { poppins } from '../fonts/fonts';

export default function ProblemMenu({ rightIdx, setRightIdx, leftIdx, setLeftIdx }) {
    const activeStyle = {
        cursor:"pointer",
        fontWeight:600,
        backgroundColor:"#b6f0e7"
      };
    
      const inactiveStyle = {
        cursor:"pointer",
        fontWeight:400,
        backgroundColor:"white"
      };

      function satClick() {
        setLeftIdx(0)
        if (rightIdx == 2) {
            setRightIdx(0)
        }
      }

      function vcClickLeft() {
        setLeftIdx(1)
        setRightIdx(2)
      }

      function vcClickRight() {
        setRightIdx(0)
        if (leftIdx == 1) {
            setLeftIdx(0)
        }
      }

      function clClick() {
        setRightIdx(1)
        if (leftIdx == 1) {
            setLeftIdx(0)
        }
      }

      function scClick() {
        setRightIdx(2)
        setLeftIdx(1)
      }

    return (
    <>
        <main className="top-0 left-0 w-full" style={{height:50, marginTop: 117, marginBottom:40}}>
            <div className="flex flex-row w-full justify-center" style={{height:300, zIndex: -100}}>
                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                    <div className="flex flex-row w-10/12 justify-center" style={{height:50, border:"solid 2px #396D83"}}>
                        {/* 3SAT button */}
                        <div onClick={satClick} className="flex w-1/2 justify-center items-center"
                            style={(leftIdx === 0 ? activeStyle : inactiveStyle)}>
                            <h1 className={`${poppins.className}`} style={{fontSize:22, color:"#396D83"}}>3-SAT</h1>
                        </div>

                        {/* VC button */}
                        <div onClick={vcClickLeft} className="flex w-1/2 justify-center items-center" 
                            style={(leftIdx === 1 ? activeStyle : inactiveStyle)}>
                            <h1 className={`${poppins.className}`} style={{fontSize:20, color:"#396D83"}}>Vertex Cover</h1>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row justify-center w-1/12 font-bold items-center" style={{height:50, marginRight:30, marginLeft:30}}>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:40}}>&#8804;</h1>
                    <h1 style={{color:"#396D83", zIndex:10, fontSize:20, marginTop:12}}>&nbsp;p</h1>
                </div>

                <div className="flex flex-row w-4/12 justify-center" style={{height:50}}>
                    <div className="flex flex-row w-full justify-center" style={{height:50, border:"solid 2px #396D83"}}>
                        {/* VC button */}
                        <div onClick={vcClickRight} className="flex w-1/3 justify-center items-center"
                            style={(rightIdx === 0 ? activeStyle : inactiveStyle)}>
                            <h1 className={`${poppins.className}`} style={{fontSize:20, color:"#396D83"}}>Vertex Cover</h1>
                        </div>

                        {/* CL button */}
                        <div onClick={clClick} className="flex w-1/3 justify-center items-center" 
                            style={(rightIdx === 1 ? activeStyle : inactiveStyle)}>
                            <h1 className={`${poppins.className}`} style={{fontSize:22, color:"#396D83"}}>Clique</h1>
                        </div>

                        {/* SC button */}
                        <div onClick={scClick} className="flex w-1/3 justify-center items-center" 
                            style={(rightIdx === 2 ? activeStyle : inactiveStyle)}>
                            <h1 className={`${poppins.className}`} style={{fontSize:22, color:"#396D83"}}>Set Cover</h1>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
    );
}