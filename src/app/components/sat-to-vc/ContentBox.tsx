export default function ContentBox({id, validInstance, k}) {
    let spot = 0
    if (id[0] == "a") {
        spot = id[1]
    } else if (id[0] <= "f") {
        spot = 3
    } else if (id[0] == "g") {
        spot = parseInt(id[1]) + 3
    }

    const CONTENT = [
        <p>
            {/* a0 */}
            Use the next arrows to advance through a 3SAT to vertex cover reduction with the provided input.
        </p>,
        <p>
            {/* a1 */}
            Each variable is represented as a "barbell" made up of two "variable" vertices 
            connected by an edge. One vertex represents the negation of the variable.
        </p>,
        <p>
            {/* a2 */}
            Each clause is represented as a "triangle" made up of three "clause" vertices and three
            edges. There are three vertices in a clause because each clause has three variables.
        </p>,
        <p>
            {/* a3 */}
            For each clause, we add an edge that connects each clause vertex to a variable vertex.
            The connected variable vertices correspond to the variables found in the clause.
            <br /><br />
            A variable vertex may have more than two edges attached to it, but every clause vertex will have 
            three edges.
        </p>,
        <p>
            {/* g1 */}
            After all the connections have been made, we can systematically produce a subset of the vertices 
            for our vertex cover.
            <br /><br />
            First, we add all the variable vertices that evaluate to True to the set.
            <br /><br />
            Vertices highlighted in yellow are part of the cover.
        </p>,
         <p>
            {/* g2 */}
            In each clause, we pick two vertices and add them to our cover. If there is only once true vertex,
            we only include the false vertices. Otherwise, we just arbitrarily pick the bottom two vertices.
            <br /><br />
            Vertices highlighted in yellow are part of the cover.
        </p>,
        <p>
            {/* g3 */}
            The budget <strong>k</strong> of our constructed vertex cover instance is equal to <strong>n+2m</strong>.
            <br /><br />
            This is because a yes instance vertex cover should have at most one vertex from each barbell gadget
            and two vertices from each triangle gadget.
            <br /><br />
            If there are more than n+2m vertices in the cover, then 
            that means there is at least one clause with no True variables. In which case, that would be a no
            instance.
        </p>,
        <>
        {/* g4 */}
        {validInstance ? (
            <p>
                The 3-SAT input was turned into a vertex cover with a budget of k, and all the edges can be covered with
                k vertices.
                <br /><br />
                <span style={{ color: "green" }}>We reduced a yes instance of 3-SAT to a yes instance of vertex cover.</span>
            </p>
        ) : (
            <p>
                The 3-SAT input was turned into a vertex cover with a budget of k, but NOT all the edges can be covered with
                k vertices.
                <br /><br />
                <span style={{ color:"red" }}>We reduced a no instance of 3-SAT to a no instance of vertex cover.</span>
            </p>
        )}
        </>
    ]

    return (
        <>
        <div className="w-full" style={{height:300, marginTop: 50}}>
            {CONTENT[spot]}
        </div>
        </>
    );
}