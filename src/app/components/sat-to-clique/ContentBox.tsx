export default function ContentBox({id, coverSize, k}) {
    let spot = 0
    if (id[0] == "a") {
        spot = id[1]
    } else if (id < "g1") {
        spot = 2
    } else if (id[0] == "g") {
        spot = parseInt(id[1]) + 2
    }

    let valid = true
    if (coverSize > k) {
        valid = false
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
        {valid ? (
            <p>
                The 3-SAT input was reduced to a vertex cover of size <strong>{coverSize}</strong>, which is less than or equal to k.
                <br /><br />
                <span style={{ color: "green" }}>We reduced a yes instance of 3-SAT to a yes instance of vertex cover.</span>
            </p>
        ) : (
            <p>
                The 3-SAT input was reduced to a vertex cover of size <strong>{coverSize}</strong>, which is greater than k.
                <br /><br />
                <span style={{ color:"red" }}>We reduced a no instance of 3-SAT to a no instance of vertex cover.</span>
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