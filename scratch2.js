const fs = require('fs');
const json = JSON.parse(fs.readFileSync('d:\\\\Website Work\\\\38 (5)\\\\38\\\\data\\\\products.json', 'utf8'));
let tsContent = fs.readFileSync('d:\\\\Website Work\\\\38 (5)\\\\38\\\\data\\\\products.ts', 'utf8');

const map = {};
for (const p of json.products) {
    if (p.model_no && p.long_description) {
        map[p.model_no] = p.long_description;
    }
}
console.log("Found " + Object.keys(map).length + " products with long_description");

let matched = 0;
for (const model of Object.keys(map)) {
    const regex = new RegExp(`model:\\s*['"]` + model + `['"][\\s\\S]*?description:\\s*"(?:[^"\\\\]|\\\\.)*",`);
    if (regex.test(tsContent)) {
        matched++;
    } else {
        console.log("Failed to match: " + model);
    }
}
console.log("Matched " + matched + " out of " + Object.keys(map).length);
