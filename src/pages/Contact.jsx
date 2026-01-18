import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        designNo: '',
        quantity: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        // Format for WhatsApp
        const text = `*New Inquiry via Website*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Phone:* ${formData.phone}%0A*Design No:* ${formData.designNo}%0A*Quantity:* ${formData.quantity}%0A*Message:* ${formData.message}`
        window.open(`https://wa.me/923225532478?text=${text}`, '_blank')
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return (
        <>
            <Helmet>
                <title>Contact Us | FMH (Fizan-e-Madina Hosiery)</title>
                <meta name="description" content="Contact FMH Hosiery for orders and inquiries. Wholesale supply of knitwear and imported machinery." />
            </Helmet>

            <div className="bg-gray-50 min-h-screen pt-24 pb-12">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-4">Contact & Orders</h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Submit your order details or general inquiries below. Our team is available 24/7 on WhatsApp.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto mb-16">
                        {/* Contact Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-primary text-white p-10 rounded-2xl shadow-xl relative overflow-hidden flex flex-col justify-between"
                        >
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>

                            <div>
                                <h2 className="text-3xl font-bold mb-8 relative z-10">Get in Touch</h2>
                                <div className="space-y-8 relative z-10">
                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg"><Phone className="text-accent" size={24} /></div>
                                        <div>
                                            <h3 className="font-bold text-lg">WhatsApp / Phone</h3>
                                            <p className="text-gray-300 font-mono text-lg">+92 322 5532478</p>
                                            <p className="text-xs text-green-400 font-bold uppercase mt-1">24 Hours Available</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg"><Mail className="text-accent" size={24} /></div>
                                        <div>
                                            <h3 className="font-bold text-lg">Email</h3>
                                            <p className="text-gray-300">shabazmalik22000@gmail.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg"><MapPin className="text-accent" size={24} /></div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Factory Address</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Jinnah Road, Near Islamia College,<br />Gujranwala, Pakistan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="bg-white/10 p-3 rounded-lg"><MapPin className="text-accent" size={24} /></div>
                                        <div>
                                            <h3 className="font-bold text-lg mb-1">Shop Address</h3>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                Shop No. 300, Block D, Gali Molvi Siraj Din Wali,<br />
                                                Near Tahnewala Bazar, Gujranwala, Pakistan
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Order Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl"
                        >
                            <h2 className="text-2xl font-heading font-bold text-gray-800 mb-6 border-b pb-4">Order / Inquiry Form</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Customer Name</label>
                                        <input type="text" name="name" required className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:border-accent focus:bg-white outline-none transition-all" placeholder="Your Name" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Phone / WhatsApp</label>
                                        <input type="tel" name="phone" required className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:border-accent focus:bg-white outline-none transition-all" placeholder="+92 300..." onChange={handleChange} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
                                    <input type="email" name="email" required className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:border-accent focus:bg-white outline-none transition-all" placeholder="email@example.com" onChange={handleChange} />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Item / Design No.</label>
                                        <input type="text" name="designNo" className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:border-accent focus:bg-white outline-none transition-all" placeholder="e.g. FMH-G-102" onChange={handleChange} />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-gray-700 mb-1">Quantity Required</label>
                                        <input type="text" name="quantity" className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:border-accent focus:bg-white outline-none transition-all" placeholder="e.g. 500 Pcs" onChange={handleChange} />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Message (Optional)</label>
                                    <textarea name="message" rows="3" className="w-full px-4 py-3 rounded-lg border bg-gray-50 focus:border-accent focus:bg-white outline-none transition-all" placeholder="Additional details..." onChange={handleChange}></textarea>
                                </div>

                                <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-lg shadow-lg flex items-center justify-center gap-2 transition-transform hover:-translate-y-1">
                                    <Send size={20} /> Submit via WhatsApp
                                </button>
                            </form>
                        </motion.div>
                    </div>

                    {/* Google Map */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-primary">
                            <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center shrink-0">
                                <MapPin className="text-secondary" />
                            </div>
                            <div>
                                <p className="font-bold text-sm">Hosiery Market Location</p>
                                <p className="text-[10px] uppercase font-black text-accent tracking-widest">Near Shahbaz Tikka • Hafizabad Road</p>
                            </div>
                        </div>
                        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.678438258277!2d74.1853!3d32.1616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f29f0c239423b%3A0xe536d5258e57879e!2sShahbaz%20Tikka%20Shop!5e0!3m2!1sen!2s!4v1737174000000!5m2!1sen!2s"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="FMH Shop - Official Location"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
