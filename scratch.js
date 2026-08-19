const fs = require('fs');
const json = JSON.parse(fs.readFileSync('d:\\\\Website Work\\\\38 (5)\\\\38\\\\data\\\\products.json', 'utf8'));
let tsContent = fs.readFileSync('d:\\\\Website Work\\\\38 (5)\\\\38\\\\data\\\\products.ts', 'utf8');

const map = {};
for (const p of json.products) {
    if (p.model_no && p.long_description) {
        map[p.model_no] = p.long_description;
    }
}

// 1. Update Product type
if (!tsContent.includes('long_description?: string;')) {
    tsContent = tsContent.replace(
        'short_description: string;', 
        'short_description: string;\n  long_description?: string;'
    );
}

let modified = false;
for (const model of Object.keys(map)) {
    // Match model: "...", ... description: "...",
    const regex = new RegExp(`(model:\\s*['"]` + model + `['"][\\s\\S]*?description:\\s*"(?:[^"\\\\]|\\\\.)*",)`);
    tsContent = tsContent.replace(regex, (match) => {
        if (match.includes('long_description:')) return match;
        modified = true;
        return match + '\n      long_description: ' + JSON.stringify(map[model]) + ',';
    });
}

if (modified) {
    fs.writeFileSync('d:\\\\Website Work\\\\38 (5)\\\\38\\\\data\\\\products.ts', tsContent);
    console.log("Done updating products.ts");
} else {
    console.log("No changes made.");
}
