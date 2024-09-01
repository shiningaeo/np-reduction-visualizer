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
            <br></br><br></br>
            A variable vertex may have more than two edges attached to it, but every clause vertex will have 
            three edges.
        </p>,
        <p>
            {/* g1 */}
            After all the connections have been made, we can systematically produce a subset of the vertices 
            for our vertex cover.
            <br></br><br></br>
            First, we add all the variable vertices that evaluate to True to the set.
        </p>,
         <p>
            {/* g2 */}
            In each clause, if there is a clause vertex that is not connected to a True variable vertex, we 
            add that clause vertex to our set.
        </p>,
        <p>
            {/* g3 */}
            The budget <strong>k</strong> of our constructed vertex cover is equal to <strong>n+2m</strong>.
            <br></br><br></br>
            This is because a yes instance vertex cover should have at most one vertex from each barbell gadget
            and two vertices from each triangle gadget.
            <br></br><br></br>
            If there are more than n+2m vertices in the cover, then 
            that means there is at least one clause with no True variables. In which case, that would be a no
            instance.
        </p>,
        <>
        {/* g4 */}
        {validInstance ? (
            <p>
                The 3-SAT input was reduced to a valid vertex cover of size k.
                <br /><br />
                <span style={{ color: "green" }}>We reduced a yes instance of 3-SAT to a yes instance of vertex cover.</span>
            </p>
        ) : (
            <p>
                The resulting vertex cover instance is size k, but there are uncovered edges highlighted in red.
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