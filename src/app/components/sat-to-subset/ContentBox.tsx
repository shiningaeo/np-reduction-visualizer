export default function ContentBox({id, validInstance}) {
    let spot = 0
    if (id[0] == "a") {
        spot = id[1]
    } else if (id[0] <= "b") {
        spot = 2
    } else if (id[0] <= "c") {
        spot = 3
    } else if (id[0] == "d") {
        spot = 4
    } else if (id[0] == "g") {
        spot = 5 + parseInt(id[1])
    }

    const CONTENT = [
        <p>
            {/* a0 */}
            Use the next arrows to advance through a 3SAT to subset sum reduction with the provided input.
        </p>,
        <p>
            {/* a1 */}
            Using the 3SAT input, we construct a collection of numbers where each number is <strong>n + m </strong>
            decimal digits long.
            <br /><br />
            We number the clauses from left to right starting with c<sub>1</sub>.
        </p>,
        <p>
            {/* b */}
            For each clause c<sub>j</sub>, we construct integers <strong>a<sub>j</sub></strong> and <strong>b<sub>j</sub></strong>.
            <br /><br />
            The jth digit of both <strong>a<sub>j</sub></strong> and <strong>b<sub>j</sub></strong> is <strong>1</strong>, all other digits are <strong>0</strong>.
            <br /><br />
            <em>If the sequence is not visible or cut off, the rest can be viewed through scrolling.</em>
        </p>,
        <p>
            {/* c */}
            For each variable x<sub>j</sub>, we construct integers <strong>t<sub>j</sub></strong> and <strong>f<sub>j</sub></strong> where:
            <br /><br />
            • <strong>(m + i)th</strong> digits of <strong>t<sub>i</sub></strong> and <strong>f<sub>i</sub></strong> are <strong>1</strong>
            <br /><br />
            • jth digit of <strong>t<sub>i</sub></strong> is <strong>1</strong> if <strong>x<sub>i</sub></strong> appears in <strong>c<sub>j</sub></strong>
            <br /><br />
            • jth digit of <strong>f<sub>i</sub></strong> is <strong>1</strong> if <strong><span style={{textDecoration:"overline"}}>x</span><sub>i</sub>
            </strong> appears in <strong>c<sub>j</sub></strong>
            <br /><br />
            • All other digits of <strong>t<sub>i</sub></strong> and <strong>f<sub>i</sub></strong> are <strong>0</strong>
            <br /><br />
            <em>If the sequence is not visible or cut off, the rest can be viewed through scrolling.</em>
        </p>,
        <p>
            {/* d */}
            The target sum <strong>s</strong> has <strong>n + m</strong> digits where the first <strong>m</strong> digits are 
            <strong> 3</strong> and the last <strong>n</strong> digits are <strong>1</strong>.
        </p>,
        <>
        {/* g0 */}
        {validInstance ? (
            <p>
                There does exist a selection of numbers (highlighted in yellow) that sum exactly to <strong>s</strong>.
                <br /><br />
                <span style={{ color: "green" }}>We reduced a yes instance of 3-SAT to a yes instance of subset sum.</span>
            </p>
        ) : (
            <p>
                There does not exist a selection of numbers that sum exactly to <strong>s</strong>.
                <br /><br />
                <span style={{ color:"red" }}>We reduced a no instance of 3-SAT to a no instance of subset sum.</span>
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