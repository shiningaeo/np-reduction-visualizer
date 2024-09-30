import Image from "next/image";

export default function SCDetails() {
    return (
        <div className="w-full h-full bg-white p-5">
            <h1 className="text-2xl font-bold mb-4">Set Cover</h1>
            <p className="mb-2">
                <span style={{color:"blue"}}><a href="https://eecs376.github.io/notes/complexity.html#set-cover" target="_blank" rel="noopener noreferrer">
                More detailed notes available here
                </a></span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="mb-2">
                        A <strong>set cover</strong> instance is made up of a universal set <strong>U</strong> and 
                        a collection of <strong>n</strong> subsets of U: <strong>S<sub>1</sub>, ... S<sub>n</sub></strong>.
                        The problem asks whether it is possible to <span style={{backgroundColor:"#b6f0e7"}}>select <strong>k</strong> subsets from S whose union equals U</span>.
                        In other words, the goal is to cover all elements of the universal set in k subsets.
                    </p>
                    <p className="mb-2">
                        Consider this example below. We have U's elements as the natural numbers from 1 through 7, and 6 subsets:
                    </p>
                    <div className="w-full flex items-center justify-center mb-6">
                        <Image
                            src="/set-cover.svg"
                            width={300}
                            height={200}
                            className="hidden md:block"
                            alt="Set cover example image"
                        />
                    </div>
                    <p className="mb-2">
                        The highlighted subsets indicate a set cover of size k that would cover all the elements in U.
                    </p>
                    <div>
                        <p className="mb-2">
                        Set cover has useful applications in network design, resource allocation, data compression, scheduling, and logistics.
                        It can also be applied to genome sequencing and improve the efficiency of drug design.
                        </p>
                    </div>
                </div>
                
                <div style={{marginLeft:50}}>
                    <h2 className="text-xl font-semibold mb-2">Characteristics</h2>
                    <p className="mb-2">
                        Universal set <strong>U</strong>
                        <br />
                        <strong>n</strong> subsets of U
                        <br />
                        <strong>k</strong> = budget
                    </p>
                </div>
                <div className="mt-8" style={{height:80}}></div>
            </div>
        </div>
    );
}