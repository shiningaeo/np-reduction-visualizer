import GraphLayout from "./GraphLayout";

export default function GraphInput() {
    return (
    <>
        <div className="w-full" style={{height:100, zIndex:10, backgroundColor:"#ffffff", padding:10, paddingRight:36}}>
            <p>An instance of 3-SAT is comprised of <strong>n</strong> variables, <strong>m</strong> clauses.
                Each clause contains 3 variables joined by &#8897; , the "or" operator. The clauses are joined by
                &#8896; , the "and" operator. A valid instance of 3-SAT contains an assignment of variables such that
                all the clauses evaluate to true.
            </p>
        </div>
        <GraphLayout />
    </>
    );
}