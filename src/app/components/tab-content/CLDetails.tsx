import Image from "next/image";

export default function CLDetails() {
    return (
        <div className="w-full h-full bg-white p-5">
            <h1 className="text-2xl font-bold mb-4">Clique</h1>
            <p className="mb-2">
                <span style={{color:"blue"}}><a href="https://eecs376.github.io/notes/complexity.html#clique" target="_blank" rel="noopener noreferrer">
                More detailed notes available here
                </a></span>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="mb-2">
                    The <strong>clique</strong> problem is an NP-complete problem in graph theory. Given a graph G=(V,E) and a positive integer k, 
                    the problem asks whether there exists a subset of k vertices such that every pair of vertices in the subset is connected by an edge.
                    In other words, a clique is a <span style={{backgroundColor:"#b6f0e7"}}>fully connected subgraph</span> of size k where every vertex is adjacent to every other vertex. 
                    </p>
                    <p className="mb-2">
                    Consider this example below. We are given a graph with 8 vertices, with a budget of k = 4:
                    </p>
                    <div className="w-full flex items-center justify-center mb-6">
                        <Image
                            src="/nextjs-github-pages/clique.svg"
                            width={300}
                            height={200}
                            className="hidden md:block"
                            alt="Clique example image"
                        />
                    </div>
                        <p className="mb-2">
                        The red edges show a k-sized clique that exists within the graph.
                        </p>
                    <div>
                        <p className="mb-2">
                        The clique problem has practical applications across various fields.
                        For example, in social network analysis, cliques can be used to identify tightly-knit communities.
                        In data mining, the problem can be used for clustering highly correlated or similar items, such as in market basket analysis or recommendation systems.
                        Additionally, in computational chemistry, cliques can be used to detect specific molecular structures with defined bonding pattern during chemical compound analysis.
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