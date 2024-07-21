import Clause from "./clause-input";

export default function Three_SAT_Input({N, M, negatives, handleChangeN, handleChangeM, changeInput, toggleNegation}) {
    var render = []
    for (let i = 0; i < M-1; ++i) {
        render.push(<Clause N={N} base={i} changeInput={changeInput} toggleNegation={toggleNegation} negatives={negatives} key={i}/>)
        render.push(<p key={(i+1)*-1} style={{fontSize: 35, margin: -15}}>&#8896;</p>)
    }
    render.push(<Clause N={N} base={M-1} changeInput={changeInput} toggleNegation={toggleNegation} negatives={negatives} key={M-1}/>)
    return (
    <>
        <main className="flex flex-row justify-center" style={{marginTop: 40, width: 700, height: 350}}>
            <div style={{minWidth: 200}} className="items-center">
                <div style={{height: 155}}></div>
                <label style={{fontSize: 30, fontWeight: 550}}> n =&nbsp;
                    <input value={N} onChange={handleChangeN} name="n"
                            min="1" max="5" style={{fontWeight: "normal"}} type="number"/>
                </label>

                <label style={{fontSize: 30, fontWeight: 550}}> m =&nbsp;
                    <input value={M} onChange={handleChangeM} name="m"
                            min="1" max="5" style={{fontWeight: "normal"}} type="number"/>
                </label>
            </div>
            <div style={{width: 30}}></div>
            <div className="flex flex-col items-center justify-center">
                {render.map(component => component)}
            </div>
        </main>
    </>
    );
}