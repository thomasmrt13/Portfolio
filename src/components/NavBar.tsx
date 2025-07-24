    import viteLogo from '/vite.svg'

    function NavBar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 h-20 px-4 sm:px-10 flex items-center bg-transparent backdrop-blur-xl">
        <div className="flex justify-between w-full">
            <img src={viteLogo} className="h-8" alt="Vite logo" />
            <ul className="flex space-x-4">
            <li><a href="/" className="text-white hover:text-gray-400">{ '{' }Home{ '}' }</a></li>
            <li><a href="/about" className="text-white hover:text-gray-400">{ '{' }About{ '}' }</a></li>
            <li><a href="/contact" className="text-white hover:text-gray-400">{ '{' }Contact{ '}' }</a></li>
            </ul>
        </div>
        </nav>
        );
    }

    export default NavBar;