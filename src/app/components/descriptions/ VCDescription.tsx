export default function VCDescription() {
    return (
        <>
            <div className="w-full h-full" style={{height: 116, zIndex:10, backgroundColor:"#ffffff", padding:10}}>
                <p>A vertex cover instance is a graph with <strong>V</strong> vertices, <strong>E</strong> edges, and
                    a budget of size <strong>k</strong>. A valid vertex cover is a subset of the vertices such that every
                    edge has at least one endpoint in the subset. The vertex cover problem is typically from the perspective
                    of the maximum cover size. In other words, a valid instance of vertex cover should have a size of at most k.
                </p>
            </div>
            <div className="w-full" style={{height:306, backgroundColor:"#ffffff"}}></div>
        </>
    );
}