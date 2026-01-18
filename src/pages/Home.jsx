import { motion } from 'framer-motion'
import { ArrowRight, Box, Layers, Settings, Truck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Hero = () => {
    return (
        <section className="relative h-screen bg-primary text-white overflow-hidden flex items-center">
            {/* Background Pattern / Animation (Placeholder for now) */}
            <div className="absolute inset-0 bg-black">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60"
                >
                    <source src="/videos/soat.mp4" type="video/mp4" />
                    {/* Fallback Image if video fails or not supported */}
                    <img src="https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2072&auto=format&fit=crop" alt="Background" className="w-full h-full object-cover" />
                </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/40"></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center h-full">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-heading leading-tight drop-shadow-lg">
                        FMH <span className="text-accent block text-2xl md:text-4xl tracking-widest mt-2">FIZAN-E-MADINA HOSIERY</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-lg font-light drop-shadow-md">
                        Premium Knitwear Manufacturing & Wholesale Dealers
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <Link to="/products" className="px-8 py-4 bg-accent text-primary font-bold rounded hover:bg-white transition-colors">
                            View Products
                        </Link>
                        <Link to="/contact" className="px-8 py-4 border-2 border-white text-white font-bold rounded hover:bg-white/10 transition-colors">
                            Contact Us
                        </Link>
                    </div>
                </motion.div>

                {/* Empty div for spacing/layout balance since animation is removed */}
                <div className="hidden md:block"></div>
            </div>
        </section>
    )
}

const QualitySection = () => (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Why Choose FMH?</h2>
                <div className="w-20 h-1 bg-accent mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 mx-auto text-primary">
                        <Box size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4 text-primary">Premium Quality</h3>
                    <p className="text-center text-gray-600">
                        We use only the finest imported yarns to create knitwear that stands the test of time. Anti-pilling and color-fast technologies ensure durability.
                    </p>
                </div>
                <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 mx-auto text-primary">
                        <Settings size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4 text-primary">On-Demand Manufacturing</h3>
                    <p className="text-center text-gray-600">
                        Custom designs, custom sizes, and custom gauges. We manufacture exactly what you need, from school uniforms to fashion retail collections.
                    </p>
                </div>
                <div className="p-8 border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 mx-auto text-primary">
                        <Truck size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-center mb-4 text-primary">Nationwide Delivery</h3>
                    <p className="text-center text-gray-600">
                        Our robust logistics network ensures your order reaches you safely anywhere in Pakistan, from Karachi to Swat.
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default function Home() {
    return (
        <>
            <Helmet>
                <title>FMH (Fizan-e-Madina Hosiery) | Manufacturing & Imports</title>
                <meta name="description" content="FMH (Fizan-e-Madina Hosiery) - Leading manufacturer of gents, ladies & kids knitwear, yarn supplier, and knitting machine importer." />
            </Helmet>
            <Hero />
            <QualitySection />
            {/* More sections to add later */}
        </>
    )
}
