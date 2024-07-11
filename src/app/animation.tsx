import TriangleWidget from "./triangle-widget"

export default function Animation({ index }) {
    var test = [<TriangleWidget />,
    <svg width="60" height="60"><rect width="60" height="60" x="0" y="0" fill={'red'} /></svg>, 
    <svg width="60" height="60"><circle r="30" cx="30" cy="30" fill="red" /></svg>]
    
    return test[index]
}