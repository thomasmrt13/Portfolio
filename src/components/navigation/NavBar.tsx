import { useState } from "react";
import MobileNavBar from "./MobileNavBar";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => setMenuOpen(!menuOpen);
  
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setMenuOpen(false);
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-20 px-4 sm:px-10 flex items-center bg-transparent md:backdrop-blur-xl">
      <div className="flex justify-between items-center w-full">
        {/*<img src={viteLogo} className="h-8" alt="Vite logo" />*/}

        {/* Desktop menu */}
        <ul className="hidden md:flex flex-1 justify-center items-center space-x-8">
          <li><a href="#home" className="text-white hover:text-gray-400" onClick={(e) => handleLinkClick(e, 'home')}>Accueil</a></li>
          <li><a href="#about" className="text-white hover:text-gray-400" onClick={(e) => handleLinkClick(e, 'about')}>À propos</a></li>
          <li><a href="#xp" className="text-white hover:text-gray-400" onClick={(e) => handleLinkClick(e, 'xp')}>Expériences</a></li>
          <li><a href="#techno" className="text-white hover:text-gray-400" onClick={(e) => handleLinkClick(e, 'techno')}>Technologies</a></li>
        </ul>

        {/* Hamburger button */}
        <button className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none" onClick={handleMenuToggle} aria-label="Ouvrir le menu">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile menu overlay */}
        <MobileNavBar menuOpen={menuOpen} onMenuToggle={handleMenuToggle} onLinkClick={handleLinkClick} />

        {/* Overlay background when menu is open */}
        {menuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={handleMenuToggle}></div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;