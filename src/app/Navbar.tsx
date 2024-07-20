import { lusitana } from '@/app/ui/fonts';

// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full shadow-md z-50" style={{backgroundColor: "#7f90c9"}}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
              <a className={`${lusitana.className} text-white text-xl font-bold`}>NP Reduction Visualizer</a>
          </div>
          <div className="hidden md:flex space-x-4">
              <a className="text-gray-700 hover:text-gray-900">Home</a>
              <a className="text-gray-700 hover:text-gray-900">About</a>
              <a className="text-gray-700 hover:text-gray-900">Contact</a>
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
