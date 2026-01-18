import fs from 'fs';

const pages = {
    'src/pages/Knitwear.jsx': `export default function Knitwear() { return <div className="pt-20 container mx-auto px-6"><h1>Knitwear Collection</h1></div> }`,
    'src/pages/Manufacturing.jsx': `export default function Manufacturing() { return <div className="pt-20 container mx-auto px-6"><h1>Manufacturing Process</h1></div> }`,
    'src/pages/Gallery.jsx': `export default function Gallery() { return <div className="pt-20 container mx-auto px-6"><h1>Gallery</h1></div> }`,
    'src/pages/Admin.jsx': `export default function Admin() { return <div className="pt-20 container mx-auto px-6"><h1>Admin Panel</h1></div> }`
};

for (const [file, content] of Object.entries(pages)) {
    fs.writeFileSync(file, content);
    console.log(`Created ${file}`);
}
