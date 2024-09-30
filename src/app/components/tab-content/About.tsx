import Image from "next/image";

export default function About() {
    return (
        <div className="w-full h-full bg-white p-5">
            <h1 className="text-2xl font-bold mb-4">About This Site</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="mb-2">
                        This resource was created with the intention of helping others understand the process of converting an instance of
                        one NP-complete problem into an instance of another NP-complete problem.
                        <br /><br />
                        It is by no means a complete and mathematically rigorous proof of the NP-complete problems shown. Rather, users
                        can play around with the inputs and observe the different reductions. Through the step-by-step walkthroughs,
                        hopefully this resource can help to make rather abstract reductions have more concrete significance.
                        <br /><br />
                        The content of this visualizer is adapted from the course&nbsp;
                        <span style={{color:"blue"}}><a href="https://eecs376.org/">EECS 376: Foundations of Computer Science</a></span>, at the 
                        University of Michigan – Ann Arbor.
                        <br /><br />
                    </p>
                </div>
                
                <div style={{marginLeft:50}}>
                    <h2 className="text-xl font-semibold mb-2">Contact</h2>
                    <p className="mb-2">
                        If you have questions, suggestions for improvement, notice any errors, or want to reach out to the creator, please email:&nbsp;
                        <span style={{color:"blue"}}><a href="mailto:rinnyfan@umich.edu">rinnyfan@umich.edu</a></span>
                    </p>
                </div>
                <div className="mt-8" style={{height:80}}></div>
            </div>
        </div>
    );
}