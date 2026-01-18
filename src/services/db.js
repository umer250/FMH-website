// --- INITIAL SEED DATA ---
const INITIAL_PRODUCTS = [
    { id: 101, title: "Executive Woolen Pullover", category: "Gents", designNo: "FMH-G-101", price: "PKR 1,250", fabric: "Rabbit Wool", gauge: "12G", img: "/images/knitwear/Gents-1.png", timestamp: new Date().toISOString() },
    { id: 102, title: "Classic V-Neck Knit", category: "Gents", designNo: "FMH-G-102", price: "PKR 1,150", fabric: "Cotton Blend", gauge: "12G", img: "/images/knitwear/Gents-2.png", timestamp: new Date().toISOString() },
    { id: 103, title: "Industrial Ribbed Sweater", category: "Gents", designNo: "FMH-G-103", price: "PKR 1,400", fabric: "Premium Wool", gauge: "7G", img: "/images/knitwear/Gents-3.png", timestamp: new Date().toISOString() },
    { id: 201, title: "Signature Winter Wrap", category: "Ladies", designNo: "FMH-L-201", price: "PKR 1,500", fabric: "Soft Acrylic", gauge: "7G", img: "/images/knitwear/Ladies-1.png", timestamp: new Date().toISOString() },
    { id: 202, title: "Elegant Floral Knit", category: "Ladies", designNo: "FMH-L-202", price: "PKR 1,650", fabric: "Rabbit Wool", gauge: "12G", img: "/images/knitwear/Ladies-2.png", timestamp: new Date().toISOString() },
    { id: 203, title: "Cozy Evening Shawl", category: "Ladies", designNo: "FMH-L-203", price: "PKR 1,800", fabric: "Cashmere Touch", gauge: "12G", img: "/images/knitwear/Ladies 3.png", timestamp: new Date().toISOString() },
    { id: 301, title: "Junior Comfort Hoodie", category: "Kids", designNo: "FMH-K-301", price: "PKR 850", fabric: "Soft Cotton", gauge: "12G", img: "/images/knitwear/Kid-1.png", timestamp: new Date().toISOString() },
    { id: 302, title: "Playtime Striped Crew", category: "Kids", designNo: "FMH-K-302", price: "PKR 750", fabric: "Durable Poly-Knit", gauge: "12G", img: "/images/knitwear/Kid-2.jpg", timestamp: new Date().toISOString() },
    { id: 303, title: "Toddler Warmth Vest", category: "Kids", designNo: "FMH-K-303", price: "PKR 950", fabric: "Polar Fleece", gauge: "7G", img: "/images/knitwear/Kid-3.png", timestamp: new Date().toISOString() }
];

export const dbService = {
    // --- PRODUCTS CRUD (Simple Seeder) ---
    getProducts: async () => {
        return INITIAL_PRODUCTS;
    }
};
