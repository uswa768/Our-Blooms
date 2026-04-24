import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:text-[#F5C842] ${
      isActive
        ? 'text-[#F5C842] border-b-2 border-[#F5C842] pb-0.5'
        : 'text-[#1E1E1E]'
    }`

  return (
    <header className="sticky top-0 z-50 bg-[#FAF9F6] border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        
        <Link
          to="/"
          className="font-display text-xl font-black text-[#1E1E1E] tracking-tight hover:opacity-70 transition-opacity"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Our Blooms
        </Link>

        
        <ul className="hidden md:flex items-center gap-10">
          <li><NavLink to="/gallery" className={navLinkClass}>Gallery</NavLink></li>
          <li><NavLink to="/about"   className={navLinkClass}>About</NavLink></li>
          <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
        </ul>

       
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1E1E1E] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1E1E1E] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1E1E1E] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

     
      {menuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-t border-gray-200 px-6 py-4 flex flex-col gap-4">
          <NavLink to="/gallery" className={navLinkClass} onClick={() => setMenuOpen(false)}>Gallery</NavLink>
          <NavLink to="/about"   className={navLinkClass} onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </div>
      )}
    </header>
  )
}

export default Navbar
