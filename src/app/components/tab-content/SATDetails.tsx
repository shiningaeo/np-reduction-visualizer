import Image from "next/image";

export default function SATDetails() {
    return (
        <div className="w-full h-full bg-white p-5">
        <h1 className="text-2xl font-bold mb-4">3-Satisfiability</h1>
        <p className="mb-2">
            <span style={{color:"blue"}}><a href="https://eecs376.github.io/notes/complexity.html#sat" target="_blank" rel="noopener noreferrer">
            More detailed notes available here
            </a></span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <p className="mb-2">
                    The <strong>3-SAT</strong> problem, also known as the 3-Satisfiability problem, is a specific case of the more general <span style={{backgroundColor:"#b6f0e7"}}>Boolean satisfiability</span> problem (SAT).
                    SAT involves determining whether there exists an assignment of truth values to variables that makes a given Boolean formula true.
                    In the case of 3SAT, the Boolean formula is expressed in a specific format called <span style={{backgroundColor:"#b6f0e7"}}>Conjunctive Normal Form (CNF)</span>, where each clause contains
                    exactly three literals.
                </p>
                <p className="mb-2">
                A Boolean formula in CNF is a conjunction (AND) of one or more clauses, where each clause is a disjunction (OR) of literals. A literal is either a variable or its negation. For example:
                </p>
                <div className="w-full flex items-center justify-center mb-6">
                    <Image
                        src="/nextjs-github-pages/formula.png"
                        width={250}
                        height={200}
                        className="hidden md:block"
                        alt="3SAT example image"
                    />
                </div>
                <p className="mb-2">
                    is an example of a 3-SAT instance, with 5 variables and 2 clauses.
                </p>
                <div>
                    <p className="mb-2">
                    3SAT's NP-complete status was established as part of a seminal result by Stephen Cook in 1971, known as <span style={{backgroundColor:"#b6f0e7"}}>Cook's Theorem</span>. This theorem demonstrated that the general SAT problem is NP-complete, and subsequent research showed that even the restricted version, 3SAT, retains this complexity. Understanding 3SAT and its implications helps in grasping the broader challenges of computational complexity and the limits of efficient computation, making it a fundamental concept in theoretical computer science.
                    </p>
                </div>
            </div>
            
            <div style={{marginLeft:50}}>
                <h2 className="text-xl font-semibold mb-2">Characteristics</h2>
                <p className="mb-2">
                    <strong>n</strong> variables
                    <br />
                    <strong>m</strong> clauses
                    <br />
                    OR: <strong>&#8897;</strong>
                    <br />
                    AND: <strong>&#8896;</strong>
                    <br /><br />
                    Negation is indicated with the horizontal bar
                </p>
            </div>
            <div className="mt-8" style={{height:80}}></div>
        </div>
    </div>
    );
}