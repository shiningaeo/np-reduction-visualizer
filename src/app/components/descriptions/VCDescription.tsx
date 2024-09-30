import Image from 'next/image';

export default function VCDescription() {
    return (
        <>
            <div className="w-full h-full" style={{height: 116, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingLeft:35}}>
                <p>A vertex cover instance is a graph with <strong>V</strong> vertices, <strong>E</strong> edges, and
                    a budget of size <strong>k</strong>. In a valid vertex cover instance, there is a subset of the vertices such that 
                    every edge has at least one endpoint in the subset. The vertex cover problem is typically from the perspective
                    of the maximum cover size. In other words, a valid instance of vertex cover should have a size of at most k.
                </p>
            </div>
            <div className="w-full flex flex-row justify-center items-center" style={{marginTop:30, marginBottom:-30}}>
                <Image
                    src="/nextjs-github-pages/vertex-cover.svg"
                    width={400}
                    height={300}
                    className="hidden md:block"
                    alt="Vertex cover description image"
                    priority
                />
            </div>
        </>
    );
}