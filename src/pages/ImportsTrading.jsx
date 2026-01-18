import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const yarnImages = [
    "/images/yarn-slider-1.jpg",
    "/images/yarn-slider-2.jpg",
    "/images/yarn-slider-3.jpg"
]

const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % yarnImages.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [])

    return (
        <div className="rounded-lg overflow-hidden shadow-2xl h-[400px] bg-white relative group">
            <div className="w-full h-full relative">
                {yarnImages.map((img, index) => (
                    <motion.img
                        key={index}
                        src={img}
                        alt={`Yarn Slide ${index + 1}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: currentIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.8 }}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                ))}
            </div>
            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
                {yarnImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-accent' : 'bg-white/50'}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default function ImportsTrading() {
    return (
        <>
            <Helmet>
                <title>Yarn Supply & Knitting Machines | FMH HOSIERY</title>
            </Helmet>

            <div className="bg-gray-50 min-h-screen">
                <div className="bg-secondary text-white py-20 px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Imports</h1>
                    <p className="text-xl text-gray-300">Your trusted partner for Raw Materials and Industrial Machinery.</p>
                </div>

                <div className="container mx-auto px-6 py-16 space-y-24">

                    {/* Yarn Section */}
                    <section className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Yarn & Raw Material Supply</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                We import premium high-quality yarn directly from China in bulk containers to ensure the best possible input for local manufacturing.
                                This same yarn is used to produce our own superior hosiery items.
                            </p>
                            <ul className="space-y-4 mb-8 border-l-4 border-accent pl-6">
                                <li className="font-bold text-lg text-secondary">Rabait Wool Yarn</li>
                                <li className="font-bold text-lg text-secondary">Acrylic & Polyester Blends</li>
                                <li className="font-bold text-lg text-secondary">Lycra / Elastic Yarn</li>
                                <li className="font-bold text-lg text-secondary">Specialty Hosiery Yarns</li>
                            </ul>
                            {/* Inquire Button Removed as requested */}
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="h-full"
                        >
                            <ImageSlider />
                        </motion.div>
                    </section>

                    {/* Separator */}
                    <hr className="border-gray-200" />

                    {/* Machines Section */}
                    <section>
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl font-heading font-bold text-primary mb-6">Knitting Machine Imports</h2>
                                <p className="text-gray-600 mb-6 text-lg">
                                    We import advanced knitting technology from China and Japan. These machines power our own factory's high-capacity production, and we also offer them for sale to upgrad local industry.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                                        <span className="font-bold text-secondary">Authorized Importer</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                                        <span className="font-bold text-secondary">Full Installation Support</span>
                                    </li>
                                    <li className="flex items-center gap-3">
                                        <span className="w-2 h-2 bg-accent rounded-full"></span>
                                        <span className="font-bold text-secondary">Spare Parts Availability</span>
                                    </li>
                                </ul>

                                <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold hover:text-accent transition-colors border-b-2 border-primary hover:border-accent pb-1">
                                    Check Machine Availability <ArrowRight size={18} />
                                </Link>
                            </motion.div>

                            <div className="relative h-[400px] bg-white rounded-xl shadow-xl overflow-hidden flex items-center justify-center group">
                                <img src="/images/machines/factory-floor.jpg" alt="High Capacity Factory Floor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>
                        </div>

                        {/* Detailed Machine Grid */}
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Machine 1 */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                            >
                                <div className="h-48 bg-gray-50 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/images/machines/shima-sir122.png" alt="SIR 122" className="max-h-full object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Shima Seiki SIR 122</h3>
                                <p className="text-sm text-gray-500 mb-4">Computerized Flat Knitting Machine. The new global standard for shaped knitting.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">Fine Gauge</span>
                                    <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">High Speed</span>
                                </div>
                            </motion.div>

                            {/* Machine 2 */}
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100"
                            >
                                <div className="h-48 bg-gray-50 rounded-lg mb-6 flex items-center justify-center p-4">
                                    <img src="/images/machines/shima-svr.png" alt="SVR Series" className="max-h-full object-contain" />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">SVR Series (Sixing Compatible)</h3>
                                <p className="text-sm text-gray-500 mb-4">Advanced technology with robust carriage stability and high productivity.</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">Multi-Function</span>
                                    <span className="px-2 py-1 bg-gray-100 text-xs rounded text-gray-600">Durable</span>
                                </div>
                            </motion.div>
                        </div>
                    </section>

                </div>
            </div>
        </>
    )
}
