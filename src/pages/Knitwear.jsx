import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, X, CheckSquare, ArrowRight } from 'lucide-react'
import { dbService } from '../services/db'

const ProductCard = ({ product, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-all cursor-pointer group overflow-hidden border border-gray-100"
            onClick={onClick}
        >
            <div className="relative h-[300px] overflow-hidden bg-gray-50">
                <div
                    className="w-full h-full absolute inset-0 bg-cover transform group-hover:scale-110 transition-transform duration-700"
                    style={{
                        backgroundImage: `url('${product.img}')`,
                        backgroundPosition: 'center',
                    }}
                ></div>

                {/* FMH Badge Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-md z-10">
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">FMH HOSIERY</span>
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                    <p className="text-[10px] font-light opacity-90 uppercase tracking-widest mb-1">{product.category}</p>
                    <h3 className="font-bold text-xl leading-tight">{product.title}</h3>
                </div>
            </div>

            <div className="p-4 flex justify-between items-center bg-white relative z-20">
                <div>
                    <p className="text-[10px] text-gray-400 font-medium mb-0.5 uppercase tracking-widest">{product.designNo}</p>
                    <p className="text-secondary font-bold text-lg">{product.price}</p>
                </div>
                <div className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-amber-400 transition-colors">
                    <ArrowRight size={20} />
                </div>
            </div>
        </motion.div>
    )
}

const ProductModal = ({ product, onClose }) => {
    const whatsappMsg = encodeURIComponent(`Aslamoalikum FMH Hosiery!\n\nI am interested in your design:\nDesign No: ${product.designNo}\nCategory: ${product.category}\n\nPlease share wholesale price and colors available.`);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-primary/40 backdrop-blur-sm"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                onClick={e => e.stopPropagation()}
            >
                <button onClick={onClose} className="absolute top-4 right-4 z-50 p-2 bg-black/10 rounded-full text-gray-600 hover:bg-black/20">
                    <X size={20} />
                </button>

                <div className="md:w-1/2 h-[300px] md:h-auto bg-gray-100">
                    <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
                </div>

                <div className="md:w-1/2 p-10 space-y-8">
                    <div>
                        <span className="text-accent font-bold uppercase tracking-widest text-xs">Design #{product.designNo}</span>
                        <h2 className="text-3xl font-heading font-bold text-primary mt-2">{product.title}</h2>
                        <p className="text-secondary text-2xl font-bold mt-2">{product.price}</p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-400 text-sm">Fabric</span>
                            <span className="font-bold text-primary">{product.fabric || 'Rabbit Wool'}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="text-gray-400 text-sm">Gauge</span>
                            <span className="font-bold text-primary">{product.gauge || '12G'}</span>
                        </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-xl border border-green-100">
                        <p className="text-green-800 text-xs font-bold flex items-center gap-2">
                            <CheckSquare size={16} /> Factory Verified Collection 2026
                        </p>
                    </div>

                    <a
                        href={`https://wa.me/923225532478?text=${whatsappMsg}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold text-center flex items-center justify-center gap-2 hover:bg-[#20bd5a] transition-all shadow-lg"
                    >
                        <Phone size={20} /> Inquiry on WhatsApp
                    </a>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default function Knitwear() {
    const [products, setProducts] = useState([])
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchProducts = async () => {
            const data = await dbService.getProducts()
            setProducts(data)
            setIsLoading(false)
        }
        fetchProducts()
    }, [])

    const gentsProducts = products.filter(p => p.category === 'Gents')
    const ladiesProducts = products.filter(p => p.category === 'Ladies')
    const kidsProducts = products.filter(p => p.category === 'Kids')

    return (
        <>
            <Helmet>
                <title>Products | FMH (Fizan-e-Madina Hosiery)</title>
                <meta name="description" content="Explore our premium range of Gents, Ladies, and Kids knitwear. High-quality manufacturing across all gauges." />
            </Helmet>

            <AnimatePresence>
                {selectedProduct && <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
            </AnimatePresence>

            <div className="bg-gray-50 min-h-screen pb-20">
                {/* Header */}
                <div className="bg-primary text-white py-20 px-6 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        className="text-5xl md:text-6xl font-heading font-bold mb-6 relative z-10"
                    >
                        Our Products
                    </motion.h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto relative z-10 font-light">
                        Discover the FMH Difference. Premium Quality, Factory Direct.
                    </p>
                </div>

                {isLoading ? (
                    <div className="flex items-center justify-center py-40">
                        <div className="w-12 h-12 border-4 border-accent border-t-primary rounded-full animate-spin" />
                    </div>
                ) : (
                    <>
                        {/* GENTS */}
                        <section className="container mx-auto px-6 py-16">
                            <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-4">
                                <h2 className="text-4xl font-heading font-bold text-primary mt-2">Gents Knitwear</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {gentsProducts.map(product => (
                                    <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
                                ))}
                            </div>
                        </section>

                        {/* LADIES */}
                        <section className="bg-white py-20">
                            <div className="container mx-auto px-6">
                                <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-4">
                                    <h2 className="text-4xl font-heading font-bold text-primary mt-2">Ladies Collection</h2>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {ladiesProducts.map(product => (
                                        <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
                                    ))}
                                </div>
                            </div>
                        </section>

                        {/* KIDS */}
                        <section className="container mx-auto px-6 py-16">
                            <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-4">
                                <h2 className="text-4xl font-heading font-bold text-primary mt-2">Kids Wear</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {kidsProducts.map(product => (
                                    <ProductCard key={product.id} product={product} onClick={() => setSelectedProduct(product)} />
                                ))}
                            </div>
                        </section>
                    </>
                )}
            </div>
        </>
    )
}