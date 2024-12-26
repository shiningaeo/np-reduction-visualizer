import Image from 'next/image';

export default function SSDescription() {
    return (
        <>
            <div className="w-full h-full" style={{height: 116, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingLeft:35}}>
                <p>The subset sum problem asks if there exists a subset of integers from set <strong>S</strong> whose sum
                is exactly equal to target <strong>t</strong>. In this specific reduction, we actually consider <strong>S</strong> as a
                <strong> multiset</strong>, which is a set that can have duplicate elements.
                </p>
            </div>
            <div className="w-full flex flex-row justify-center items-center">
                <Image
                    src="/np-reduction-visualizer/subset-sum.svg"
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