import { CSSProperties } from 'react';

const OrangeBox = ({size, type, id, index}) => {
    let width = 0
    let sizes = [200, 400, 500, 650, 800]
    width = sizes[size-1]
    let top = 0
    let height = 0

    if (type == 'N') {
        top = -65
        height = 100
    } else {
        top = 244
        height = 175
    }
    
    const style: CSSProperties = {
        width: `${width}px`, // dynamic width
        height: `${height}px`, // variables: 100px, clauses: 175px
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '8px',
        border: 'solid 3px orange',
        marginTop: `${top}px`, // variables: -110px, clauses: 6px
        zIndex: 1000
    };

    return (
        <>
            {index == id ? (
                <div className="flex flex-row w-full justify-center" style={{position:"absolute", zIndex:1000, visibility:"visible"}}>
                    <div className="orange-box" style={style}></div>
                </div>
            ) : (
                <div className="flex flex-row w-full justify-center" style={{position:"absolute", zIndex:1000, visibility:"hidden"}}>
                    <div className="orange-box" style={style}></div>
                </div>
            )}
        </>
    );
};

export default OrangeBox;