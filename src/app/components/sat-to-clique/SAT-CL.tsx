'use client'
import Arrange from './Arrange';
import WalkthroughTitle from '../WalkThruTitle';
import calculatePositions from './edge-positions';
import Edge from './Edge';

// 3SAT -> Clique (CL)

export default function Three_SAT_CL({N, M, INPUT, setSubmit, setSubmit2}) {    
    function handleReset() {
        setSubmit2(false)
        setSubmit(false)
    }

    // [layout][clause][var][x(0) | y(1)]
    const POSITIONS = calculatePositions()
    const EDGE_COLORS = new Map()
    EDGE_COLORS.set(1, '#FF5733')
    EDGE_COLORS.set(-1, '#33FF57')
    EDGE_COLORS.set(2, '#3357FF')
    EDGE_COLORS.set(-2, '#FF33A8')
    EDGE_COLORS.set(3, '#A833FF')
    EDGE_COLORS.set(-3, '#FFD733')
    EDGE_COLORS.set(4, '#33FFF1')
    EDGE_COLORS.set(-4, '#FF8233')
    EDGE_COLORS.set(5, '#8DFF33')
    EDGE_COLORS.set(-5, '#FF3333')

    let edges = []
    for (let i = 0; i < 3*M; i+=3) {
        for (let j = 0; j < 3; ++j) {
          for (let k = i+3; k < 3*M; ++k) {
            if (INPUT[k] != INPUT[i+j]*(-1)) {
              edges.push(
                <Edge key={i/3+j} x1={POSITIONS[M-1][Math.floor((i+j)/3)][j][0]} y1={POSITIONS[M-1][Math.floor((i+j)/3)][j][1]} 
                x2={POSITIONS[M-1][Math.floor(k/3)][k%3][0]} y2={POSITIONS[M-1][Math.floor(k/3)][k%3][1]}
                color={EDGE_COLORS.get(INPUT[i+j])}/>
              )
            }
          }
        }
    }

    return (
    <>
        <main className="flex flex-col items-center justify-between" style={{marginTop:10, marginBottom:18}}>
            <WalkthroughTitle leftProblem={"3SAT"} rightProblem={"Clique"} handleReset={handleReset}/>

            <div className="flex flex-row justify-center items-center w-full h-full" style={{marginTop:-150}}>
              <div className="flex flex-col w-4/12 h-full items-center justify-center">
                <div className="w-full" style={{height:150}}></div>
                <div className="p-3" style={{textAlign:"left", height:"auto", width:"50%", borderRadius:10, marginTop:-105, backgroundColor:"#b6f0e7"}}>
                  <strong>3-SAT INPUT: </strong><br></br>
                  <strong>n</strong> = {N} variables<br></br>
                  <strong>m</strong> = {M} clauses<br></br>
                </div>
                <div className="w-full" style={{height:30}}></div>
                <div className="w-full flex items-center justify-center p-3">
                  <p style={{textAlign:'center'}}>Edges are hoverable</p>
                </div>
              </div>
                
              <div className="flex" style={{height:580, width:800, backgroundColor:"black"}}>
                  <svg height="650" width="800">
                      {edges.map(edge => edge)}
                      <Arrange M={M} INPUT={INPUT}/>
                  </svg>
              </div>

              <div className="flex flex-col w-4/12 h-screen items-center justify-center" style={{padding:30}}>
                <div>
                  <div className="w-full" style={{height:150}}></div>
                  {/* <ContentBox id={sequence[currIndex]} coverSize={coverSize} k={N+2*M}/> */}
                </div>
              </div>
            </div>
        </main>
    </>
    );
}