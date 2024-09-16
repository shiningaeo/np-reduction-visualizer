export default function ContentBox({id, valid}) {
    let spot = 0
    if (id[0] == "a") {
        spot = id[1]
    } else if (id < "g1") {
        spot = 2
    } else if (id[0] == "g") {
        spot = parseInt(id[1]) + 2
    }

    const CONTENT = [
        <p>
            {/* a0 */}
            Use the next arrows to advance through a vertex cover to set cover reduction with the provided input.
        </p>,
        <p>
            {/* a1 */}
            Each vertex and edge has been labeled. In our set cover instance, we will construct <strong>V subsets</strong>.
            <br /><br />
            <strong>U is the universal set</strong>, it contains all the edges in this vertex cover instance.
        </p>,
        <p>
            {/* a2 */}
            For each subset, we fill it with the edges that have an endpoint with the associated vertex.
        </p>,
        <p>
            {/* g1 */}
            The budget <strong>k</strong> of our constructed set cover instance is equal to the budget of the vertex cover instance.
            <br /><br />
            This is because a yes instance of set cover should correspond to a yes instance of vertex cover, since we directly translated
            each vertex into a subset of its edges.
            <br /><br />
            By the same reasoning, a no instance of vertex cover translates to a no instance of set cover.
        </p>,
        <>
        {/* g2 */}
        {valid ? (
            <p>
                The vertex cover input was a valid instance with a cover of size k. We successfully translated it into a valid instance
                of set cover.
                One such k-sized set cover has been highlighted.
                <br /><br />
                <span style={{ color: "green" }}>We reduced a yes instance of vertex cover to a yes instance of set cover.</span>
            </p>
        ) : (
            <p>
                The 3-SAT input was turned into a vertex cover with a budget of k=m, but there does NOT exist a clique of size m.
                <br /><br />
                <span style={{ color:"red" }}>We reduced a no instance of 3-SAT to a no instance of clique.</span>
            </p>
        )}
        </>
    ]

    return (
        <>
        <div className="w-full" style={{height:300, width:320, marginTop:-150}}>
            {CONTENT[spot]}
        </div>
        </>
    );
}