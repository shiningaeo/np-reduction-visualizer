import Image from 'next/image';

export default function CLDescription() {
    return (
        <>
            <div className="w-full h-full" style={{height: 116, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingLeft:35}}>
                <p>A clique is a set <strong>S</strong> of vertices such that every pair of vertices in <strong>S</strong> has an edge between them.
                Also known as the friendship problem, the clique decision problem asks when given a graph <strong>G</strong> and a budget
                <strong> k</strong>, does <strong>G</strong> have a clique of at least size k?
                </p>
            </div>
            <div className="w-full flex flex-row justify-center items-center" style={{marginTop:30, marginBottom:-30}}>
                <Image
                    src="/clique.svg"
                    width={400}
                    height={300}
                    className="hidden md:block"
                    alt="Clique description image"
                />
            </div>
        </>
    );
}