import Image from "next/image";

export default function VCDetails() {
    return (
        <div className="w-full h-full bg-white p-5">
            <h1 className="text-2xl font-bold mb-4">Vertex Cover</h1>
            <p className="mb-2">
                <span style={{color:"blue"}}><a href="https://eecs376.github.io/notes/complexity.html#vertex-cover" target="_blank" rel="noopener noreferrer">
                More detailed notes available here
                </a></span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="mb-2">
                        A <strong>vertex cover</strong> of a graph is a set of vertices such that each edge of the graph is incident to at least one vertex from this set.
                        In other words, a vertex cover <span style={{backgroundColor:"#b6f0e7"}}>"covers" all the edges</span> of the graph.
                        The problem is typically presented as follows: given a graph, find the smallest possible set of vertices that constitutes a vertex cover.
                    </p>
                    <p className="mb-2">
                        Consider this example below. We have a graph, and we are wondering if it's possible to produce a vertex cover that's size 3 or less.
                    </p>
                    <div className="w-full flex items-center justify-center mb-6">
                        <Image
                            src="/nextjs-github-pages/vertex-cover.svg"
                            width={300}
                            height={200}
                            className="hidden md:block"
                            alt="Vertex cover example image"
                        />
                    </div>
                    <p className="mb-2">
                        The red circled vertices indicate the vertices that would be a part of our subset.
                    </p>
                    <div>
                        <p className="mb-2">
                        Despite its complexity, the Vertex Cover problem has practical applications in various fields such as network security, bioinformatics, and logistics.
                        For instance, in network security, a vertex cover can represent a set of crucial monitoring nodes in a network to ensure all communications are observed.
                        While finding an exact solution is computationally challenging, there are approximation algorithms and heuristics that can provide good enough solutions in reasonable time for practical purposes.
                        </p>
                    </div>
                </div>
                
                <div style={{marginLeft:50}}>
                    <h2 className="text-xl font-semibold mb-2">Characteristics</h2>
                    <p className="mb-2">
                        Graph <strong>G=(V,E)</strong>
                        <br />
                        <strong>V</strong> vertices
                        <br />
                        <strong>E</strong> edges
                        <br />
                        <strong>k</strong> = budget
                    </p>
                </div>
                <div className="mt-8" style={{height:80}}></div>
            </div>
        </div>
    );
}