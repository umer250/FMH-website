import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone } from 'lucide-react'
import clsx from 'clsx'

const NAV_LINKS = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Imports', path: '/imports' },
    { name: 'Manufacturing', path: '/manufacturing' },
    { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const location = useLocation()

    return (
        <nav className="fixed top-0 w-full z-50 bg-primary shadow-lg">
            <div className="container mx-auto px-6 py-3 flex justify-between items-center">
                {/* Brand */}
                <Link to="/" className="flex items-center gap-3 group">
                    <img src="/LogoFMH.png" alt="FMH Logo" className="h-12 w-auto object-contain drop-shadow-md brightness-105" />
                    <div className="flex flex-col">
                        <span className="text-2xl font-heading font-bold text-white tracking-wide group-hover:text-accent transition-colors">FMH</span>
                        <span className="text-[10px] text-accent font-medium tracking-wider">FIZAN-E-MADINA HOSIERY</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={clsx(
                                "text-sm font-medium hover:text-accent transition-colors uppercase tracking-wide",
                                location.pathname === link.path ? "text-accent" : "text-gray-300"
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <a
                        href="https://wa.me/923225532478"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded font-bold transition-all"
                    >
                        <Phone size={18} />
                        <span>WhatsApp</span>
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="lg:hidden bg-primary border-t border-white/10 absolute w-full">
                    <div className="flex flex-col p-6 space-y-4">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-lg font-medium text-gray-200 hover:text-accent"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="https://wa.me/923225532478"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-green-600 text-white py-3 rounded font-bold"
                        >
                            <Phone size={20} />
                            WhatsApp Us
                        </a>
                    </div>
                </div>
            )}
        </nav>
    )
}
