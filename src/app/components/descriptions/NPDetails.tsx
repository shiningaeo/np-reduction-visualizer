
export default function NPDetails() {
    return (
    <>
        <div className="w-full h-full bg-white p-5">
            <h1 className="text-2xl font-bold mb-4">A Brief Intro to P vs. NP and their Significance</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="mb-2">
                        <strong>NP</strong> is a classification for a certain type of problem: the set of
                        all <span style={{backgroundColor:"#b6f0e7"}}>decision problems</span> that
                        can be <span style={{backgroundColor:"#b6f0e7"}}>verified</span> in polynomial time or better, but cannot be solved in polynomial time or better.
                        In other words, problems that do not have a solution better than brute-force.
                    </p>
                    <p className="mb-2">
                        On the other hand, <strong>P</strong> is the set of all decision problems that can be <span style={{backgroundColor:"#b6f0e7"}}>solved</span> in
                        polynomial time or better.
                    </p>
                    <p className="mb-2" style={{textAlign:"center", fontSize:26}}>
                        <strong>Is P = NP?</strong><br></br>
                    </p>
                    <p className="mb-2" style={{textAlign:"center"}}>
                        This is considered to be one of the most important questions in computer science!
                        <br></br>
                        We still don't know the answer.
                    </p>

                </div>
                
                <div>
                    <h2 className="text-xl font-semibold mb-2">Key Terms</h2>
                    <p className="mb-2">
                        <strong>Decision Problem:</strong> A problem with a yes or no answer.
                    </p>
                    <p className="mb-2">
                        <strong>Verification:</strong> The process of checking whether a given solution to a decision problem results in a 
                        "yes" result or a "no" result.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-2">Significance and Open Questions</h2>
                    <p className="mb-2">
                        NP problems are significant in computer science because they include many problems that are critical in various fields such as cryptography, scheduling, and optimization. The relationship between NP problems and another class called P (problems that can be solved in polynomial time) is a central question in computational complexity theory.
                    </p>
                    <p className="mb-2">
                        The famous open question, "Does P equal NP?" asks whether every problem for which a solution can be quickly verified can also be quickly solved. This question remains one of the most important unsolved problems in computer science.
                    </p>
                    <img src="path/to/image4.jpg" alt="P vs NP Question" className="w-full h-auto mb-4"/>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-2">NP Problem Example: Traveling Salesman Problem</h2>
                    <p className="mb-2">
                        A classic example of an NP problem is the "Traveling Salesman Problem" (TSP). The problem asks whether a salesman can visit a set of cities, each only once, and return to the starting city with a total travel distance less than or equal to a given number. If someone provides a specific route, checking the total distance and verifying if it's within the limit can be done quickly. However, finding the optimal route among many cities is computationally challenging and no polynomial-time algorithm is known for solving it.
                    </p>
                    <img src="path/to/image3.jpg" alt="Traveling Salesman Problem" className="w-full h-auto mb-4"/>
                </div>
            </div>
        </div>
    </>
    );
}