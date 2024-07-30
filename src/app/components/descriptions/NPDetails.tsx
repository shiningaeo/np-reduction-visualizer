import Image from "next/image";

export default function NPDetails() {
    return (
    <>
        <div className="w-full h-full bg-white p-5">
            <h1 className="text-2xl font-bold mb-4">A Brief Intro to P vs. NP and the Significance</h1>
            
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
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src="/p-np.svg"
                            width={400}
                            height={300}
                            className="hidden md:block"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold mb-2">Significance and Open Questions</h2>
                        <p className="mb-2">
                            NP problems are significant in computer science because they include many problems that are critical in various fields such as cryptography, scheduling, and optimization. The relationship between NP problems and another class called P (problems that can be solved in polynomial time) is a central question in computational complexity theory.
                        </p>
                        <p className="mb-2">
                            The famous open question, "Does P equal NP?" asks whether every problem for which a solution can be quickly verified can also be quickly solved. <strong>This question remains one of the most important unsolved problems in computer science.</strong>
                        </p>
                    </div>
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
                    <div className="mt-8">
                        <h2 className="text-xl font-semibold mb-2">Polynomial-Time Mapping Reductions</h2>
                        <p className="mb-2">
                           One method used in proving that a prolem is in NP is to construct a method of mapping instances
                           of one NP problem to another. The reduction is successful if we can always map an arbitrary yes instance
                           of one problem to a yes instance of the problem we're trying to prove is in NP, and likewise for false
                           instances.
                           <br /><br />
                           For example, the reduction from 3SAT to vertex cover could be depicted as:
                        </p>
                        <div className="flex items-center justify-center mt-8">
                            <Image
                                src="/mapping.svg"
                                width={500}
                                height={300}
                                className="hidden md:block"
                                alt="Screenshots of the dashboard project showing desktop version"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    );
}