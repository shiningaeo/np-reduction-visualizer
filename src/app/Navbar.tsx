import { poppins } from '@/app/ui/fonts';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50" style={{backgroundColor: "#EAF1F2"}}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{height: 68}}>
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <a className={`${poppins.className} text-2xl font-bold italic`}
            style={{color: "#396D83", fontStyle: "italic"}}>NP VISUALIZER</a>
          </div>
          <div className="hidden md:flex space-x-8">
              <a className="hover:text-gray-900 text-lg" style={{marginTop:20, color:"#396D83"}}>Explanation</a>
              <a className="hover:text-gray-900 text-lg" style={{marginTop:20, color:"#396D83", marginRight:20}}>?</a>
          </div>
          <div className="flex md:hidden items-center">
            {/* Mobile menu button */}
            <button className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
