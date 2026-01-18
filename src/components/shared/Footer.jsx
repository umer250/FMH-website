import { Link } from 'react-router-dom'
import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 py-16 border-t-4 border-accent relative text-sm">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8 relative z-10">

                {/* 1. Brand & Info */}
                <div className="space-y-6">
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/LogoFMH.png" alt="FMH HOSIERY Logo" className="h-16 w-auto object-contain drop-shadow-lg" />
                        <div className="flex flex-col">
                            <span className="text-xl font-heading font-bold text-white tracking-wide">FMH</span>
                            <span className="text-[10px] text-accent font-medium tracking-wider uppercase">Fizan-e-Madina Hosiery</span>
                        </div>
                    </Link>
                    <p className="leading-relaxed text-gray-400">
                        Premium Knitwear Manufacturers & Industrial Machinery Importers.
                        Delivering quality from Gujranwala to the world since 1995.
                    </p>
                    <div className="flex items-center gap-2 text-green-400 bg-green-900/20 px-3 py-1.5 rounded-full w-fit border border-green-900/30">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs font-bold uppercase tracking-wide">Govt. Registered & Verified</span>
                    </div>
                </div>

                {/* 2. Corporate Profile */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg border-b border-accent/30 pb-2 inline-block">Corporate Profile</h3>
                    <ul className="space-y-4">
                        <li>
                            <span className="block text-xs text-gray-500 uppercase tracking-wider">CEO</span>
                            <span className="text-white font-medium">Malik Shabaz Hussain</span>
                        </li>
                        <li>
                            <span className="block text-xs text-gray-500 uppercase tracking-wider">Founder</span>
                            <span className="text-white font-medium">Malik Mustafa</span>
                        </li>
                        <li>
                            <span className="block text-xs text-gray-500 uppercase tracking-wider">Operations</span>
                            <span className="text-white font-medium">Global Supply Chain</span>
                        </li>
                    </ul>
                </div>

                {/* 3. Quick Links & Business */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg border-b border-accent/30 pb-2 inline-block">Business Areas</h3>
                    <ul className="space-y-3">
                        <li><Link to="/products" className="hover:text-accent transition-colors">Men's Knitwear Collection</Link></li>
                        <li><Link to="/products" className="hover:text-accent transition-colors">Ladies & Kids Fashion</Link></li>
                        <li><Link to="/imports" className="hover:text-accent transition-colors">Yarn Imports (China)</Link></li>
                        <li><Link to="/imports" className="hover:text-accent transition-colors">Machinery Trading</Link></li>
                        <li><Link to="/manufacturing" className="hover:text-accent transition-colors">Wholesale Manufacturing</Link></li>
                    </ul>
                </div>

                {/* 4. Contact Details */}
                <div>
                    <h3 className="text-white font-bold mb-6 text-lg border-b border-accent/30 pb-2 inline-block">Contact Us</h3>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                            <div>
                                <strong className="block text-white mb-1">Factory Address:</strong>
                                <span>Jinnah Road, Near Islamia College, Pakistan</span>
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin size={18} className="text-accent shrink-0 mt-0.5" />
                            <div>
                                <strong className="block text-white mb-1">Shop Address:</strong>
                                <span>Shop No. 300, Block D, Gali Molvi Siraj Din Wali, Near Tahnewala Bazar, Gujranwala</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <Phone size={18} className="text-accent shrink-0" />
                            <div>
                                <a href="https://wa.me/923225532478" className="hover:text-white font-bold block">+92 322 5532478</a>
                                <span className="text-xs text-green-400">24 Hours Available</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <Mail size={18} className="text-accent shrink-0" />
                            <a href="mailto:shabazmalik22000@gmail.com" className="hover:text-white break-all">shabazmalik22000@gmail.com</a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright & Dev Credit */}
            <div className="border-t border-white/10 mt-16 pt-8 px-6">
                <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-500 text-center md:text-left">&copy; {new Date().getFullYear()} FMH (Fizan-e-Madina Hosiery). All Rights Reserved.</p>

                    <div className="flex flex-col items-center md:items-end gap-3 group">
                        <div className="flex items-center gap-4 bg-white/5 pl-6 pr-6 py-3 rounded-2xl border border-white/10 group-hover:border-accent/30 transition-all duration-500">
                            <div className="text-right">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 group-hover:text-accent transition-colors mb-1">Technology Partner</p>
                                <div className="flex flex-col items-end">
                                    <span className="text-xl font-black tracking-tighter text-white">
                                        <span className="text-accent italic">A&U</span> DEVELOPERS
                                    </span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Software Company</span>
                                </div>
                            </div>
                        </div>
                        <a href="tel:923006425321" className="text-[11px] font-mono font-black text-accent bg-accent/5 px-4 py-1.5 rounded-full border border-accent/20 hover:bg-accent hover:text-primary transition-all duration-500">
                            CONTACT US: +92 300 6425321
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
