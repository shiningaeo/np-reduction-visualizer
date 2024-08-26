'use client';
import { poppins } from '../fonts/fonts';

export default function Navbar() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const navbarHeight = document.querySelector('nav').offsetHeight; // Adjust the selector if necessary
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
};

  return (
    <nav className="fixed top-0 left-0 w-full" style={{zIndex:1010, borderBottom: "solid 2px #396D83"}}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{height: 68}}>
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center title">
            <a className={`${poppins.className} text-2xl font-bold`}
            style={{color: "#396D83", fontStyle: "italic"}}>NP VISUALIZER</a>
          </div>
          <div className="hidden md:flex space-x-8" style={{cursor:"pointer"}}>
              <a onClick={() => scrollToSection('projects')} className="hover:text-gray-900 text-lg navItem">I'm Confused</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
