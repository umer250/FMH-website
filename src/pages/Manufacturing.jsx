import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Settings, Users, CheckCircle, Truck } from 'lucide-react'

const features = [
    {
        icon: <Settings size={40} />,
        title: "Advanced Machinery",
        desc: "Equipped with the latest Sixing and 122FF knitting machines capable of handling various gauges for finer to chunkier knits."
    },
    {
        icon: <Users size={40} />,
        title: "Skilled Workforce",
        desc: "Our team consists of experienced technicians and craftsmen dedicated to maintaining high standards of production."
    },
    {
        icon: <CheckCircle size={40} />,
        title: "Quality Control",
        desc: " rigorous QA process ensuring every piece meets our strict durability and finishing standards before leaving the floor."
    },
    {
        icon: <Truck size={40} />,
        title: "Nationwide Supply",
        desc: "Robust logistics network supplying to Swat, Kalam, Naran, and other major textile hubs across Pakistan."
    }
]

export default function Manufacturing() {
    return (
        <>
            <Helmet>
                <title>Manufacturing & Factory | FMH HOSIERY</title>
                <meta name="description" content="Our state-of-the-art hosiery manufacturing facility in Gujranwala featuring advanced machines and skilled workforce." />
            </Helmet>

            <div className="bg-white">
                {/* Banner */}
                <div className="h-[60vh] relative flex items-center justify-center bg-gray-900 overflow-hidden">
                    <div className="absolute inset-0 bg-[url('/images/machines/factory-floor.jpg')] bg-cover bg-center opacity-40"></div>
                    <div className="relative z-10 text-center text-white px-6">
                        <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">Our Factory</h1>
                        <p className="text-xl max-w-3xl mx-auto">Where tradition meets technology. A powerhouse of high-quality knitwear production.</p>
                    </div>
                </div>

                {/* Introduction */}
                <section className="py-20 container mx-auto px-6 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-8">Capacity & Capabilities</h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-12">
                            Located in the industrial heart of Gujranwala, FMH (Fizan-e-Madina Hosiery) operates a fully vertical setup. From yarn sourcing to final packing, we control every step of the supply chain. We specialize in bulk manufacturing for wholesalers and brands, offering flexibility in design, material, and gauge.
                        </p>
                    </div>
                </section>

                {/* Supply Chain Section */}
                <section className="py-16 bg-white overflow-hidden">
                    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
                                alt="Logistics and Supply Chain"
                                className="rounded-lg shadow-xl hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-3xl font-heading font-bold text-primary mb-6">Nationwide Supply Chain</h2>
                            <p className="text-gray-600 mb-6 text-lg">
                                We proudly serve the entire nation. Our robust logistics network ensures timely delivery of bulk orders to all major textile hubs including:
                            </p>
                            <ul className="grid grid-cols-2 gap-4 text-secondary font-bold">
                                <li className="flex items-center gap-2"><Truck size={20} /> Faisalabad</li>
                                <li className="flex items-center gap-2"><Truck size={20} /> Karachi</li>
                                <li className="flex items-center gap-2"><Truck size={20} /> Lahore</li>
                                <li className="flex items-center gap-2"><Truck size={20} /> Rawalpindi</li>
                                <li className="flex items-center gap-2"><Truck size={20} /> Swat & Kalam</li>
                                <li className="flex items-center gap-2"><Truck size={20} /> Naran</li>
                            </ul>
                        </motion.div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="bg-gray-50 py-20">
                    <div className="container mx-auto px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="bg-white p-8 rounded-lg shadow-lg hover:-translate-y-2 transition-transform duration-300 border-t-4 border-accent"
                                >
                                    <div className="text-secondary mb-6">{feature.icon}</div>
                                    <h3 className="text-xl font-bold font-heading mb-4 text-primary">{feature.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}