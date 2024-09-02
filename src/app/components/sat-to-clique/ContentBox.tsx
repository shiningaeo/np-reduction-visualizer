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
            Use the next arrows to advance through a 3SAT to clique reduction with the provided input.
        </p>,
        <p>
            {/* a1 */}
            Each clause is represented as a group of three vertices, each vertex represents a variable in that clause.
        </p>,
        <p>
            {/* a2 */}
            For each variable, we place an edge between it and any variable that is <strong>not it's negation</strong> and 
            <strong> not in the same clause</strong>.
        </p>,
        <p>
            {/* g1 */}
            The budget <strong>k</strong> of our constructed clique instance is equal to <strong>m</strong>.
            <br /><br />
            This is because a yes instance of 3SAT should allow for the construction of a clique comprised of one
            true literal from each clause.
            <br /><br />
            In the case of a no instance, it would not be possible to create a clique of size k in this carefully
            created instance of clique.
        </p>,
        <>
        {/* g2 */}
        {valid ? (
            <p>
                The 3-SAT input was turned into a clique with a budget of k=m, and there does exist a clique of size m.
                One such m-sized clique is highlighted in red.
                <br /><br />
                <span style={{ color: "green" }}>We reduced a yes instance of 3-SAT to a yes instance of clique.</span>
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