
export default function Animation({ index }) {
    var test = [<svg width="200" height="100"><rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill={'red'} /></svg>, 
    <svg width="200" height="100"><circle r="45" cx="50" cy="50" fill="red" /></svg>]
    
    return test[index]
}