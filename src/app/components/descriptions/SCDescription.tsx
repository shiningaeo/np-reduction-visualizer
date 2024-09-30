import Image from 'next/image';

export default function SCDescription() {
    return (
        <>
            <div className="w-full h-full" style={{height: 116, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingLeft:35}}>
                <p>Given a collection <strong>U</strong> of elements and <strong>n</strong> subsets, a set cover is a selection of
                subsets such that the union of those subsets is U. Also known as the contractor problem, the decision version of this 
                problem asks if, given U, S<sub>n</sub> subsets, and a budget <strong>k</strong>, does there exist a set cover of size k or less?
                </p>
            </div>
            <div className="w-full flex flex-row justify-center items-center" style={{marginTop:30, marginBottom:-30}}>
                <Image
                    src="/np-reduction-visualizer/set-cover.svg"
                    width={400}
                    height={300}
                    className="hidden md:block"
                    alt="Clique description image"
                />
            </div>
        </>
    );
}