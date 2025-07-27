interface MobileNavBarProps {
    menuOpen: boolean;
    onMenuToggle: () => void;
    onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}
    
function MobileNavBar({ onMenuToggle, onLinkClick, menuOpen }: MobileNavBarProps) {
    return (
        <div className={`fixed top-0 m-5 -right-5 h-[calc(100%-2rem)] w-64 bg-zinc-900 shadow-lg z-50 rounded-xl transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 md:hidden`}>
          <div className="flex justify-end p-4">
            <button onClick={onMenuToggle} aria-label="Fermer le menu">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col items-center space-y-8 mt-10">
            <li><a href="#home" className="text-white text-xl" onClick={(e) => onLinkClick(e, 'home')}>{'{'}Accueil{'}'}</a></li>
            <li><a href="#about" className="text-white text-xl" onClick={(e) => onLinkClick(e, 'about')}>{'{'}À propos{'}'}</a></li>
            <li><a href="#xp" className="text-white text-xl" onClick={(e) => onLinkClick(e, 'xp')}>{'{'}Expériences{'}'}</a></li>
            <li><a href="#techno" className="text-white text-xl" onClick={(e) => onLinkClick(e, 'techno')}>{'{'}Technologies{'}'}</a></li>
          </ul>
        </div>
    )
}

export default MobileNavBar;