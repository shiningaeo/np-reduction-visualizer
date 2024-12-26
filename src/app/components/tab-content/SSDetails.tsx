import Image from "next/image";

export default function SSDetails() {
    return (
        <div className="w-full h-full bg-white p-5">
            <h1 className="text-2xl font-bold mb-4">Subset Sum</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <p className="mb-2">
                        The <strong>subset sum</strong> problem involves determining whether there is a subset of integers from a given set <strong>S</strong> that adds up to a specific target value <strong>t</strong>.
                    </p>
                    <p className="mb-2">
                        Consider this example below. There are 6 integers inside the box, with t = 16:
                    </p>
                    <div className="w-full flex items-center justify-center mb-6">
                        <Image
                            src="/np-reduction-visualizer/subset-sum.svg"
                            width={300}
                            height={200}
                            className="hidden md:block"
                            alt="Subset sum example image"
                        />
                    </div>
                    <p className="mb-2">
                        The numbers inside the curly braces represent a subset of numbers from S that add up to 16.
                    </p>
                    <div>
                        <p className="mb-2">
                        This problem has useful applications in areas that require optimization and resource allocation.
                        For example, in work allocation or scheduling, tasks with varying workloads can be represented as numbers, and the goal may be to divide these tasks among workers or teams to achieve a balanced workload.
                        Similarly, in financial planning or budgeting, subset sum can help determine if a combination of investments, expenses, or payments can match a target value
                        </p>
                    </div>
                </div>
                
                <div style={{marginLeft:50}}>
                    <h2 className="text-xl font-semibold mb-2">Characteristics</h2>
                    <p className="mb-2">
                        Subset of integers <strong>S</strong>
                        <br />
                        <strong>t</strong> = target
                    </p>
                </div>
                <div className="mt-8" style={{height:80}}></div>
            </div>
        </div>
    );
}