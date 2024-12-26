export default function SAT_Info({ M, N, ASSIGNMENT, type }) {
    function AssignmentMessage() {
        const assignmentMessage = [];
    
        for (let i = 0; i < N; ++i) {
            const value = ASSIGNMENT[i] === 1 ? "True" : "False";
            assignmentMessage.push(
                <div key={i+1}>
                X<sub>{i+1}</sub>&nbsp;= {value}
                </div>
            );
        }
    
        return (
        <div className="w-full flex flex-col items-center justify-center" 
             style={{ height:'auto', fontSize:18, marginTop:20, marginBottom:-80 }}>
            {assignmentMessage}
        </div>
        );
    }
    
    return (
    <>
    <div className="flex flex-col w-4/12 h-full items-center justify-center" style={{marginTop:120}}>
        <div className="w-full" style={{height:350}}></div>
        <div className="p-3" style={{textAlign:"left", height:"auto", width:200, borderRadius:10, marginTop:-105, backgroundColor:"#b6f0e7"}}>
            <strong>3-SAT INPUT: </strong><br></br>
            <strong>n</strong> = {N} variables<br></br>
            <strong>m</strong> = {M} clauses<br></br>
            <strong>k</strong> = n+2m = {N + 2*M}<br></br>
        </div>
        <div className="w-full" style={{height:30}}></div>
        <div className="w-full flex items-center justify-center p-3"
             style={{display:(type == 6) ? "none" : ""}}>
            <p style={{textAlign:'center'}}>Edges are hoverable</p>
        </div>
        {AssignmentMessage()}
    </div>
    </>
    );
}