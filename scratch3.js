const fs = require('fs');

let tsContent = fs.readFileSync('d:\\\\Website Work\\\\38 (5)\\\\38\\\\data\\\\products.ts', 'utf8');

// Update Product type
if (!tsContent.includes('long_description?: string;')) {
    tsContent = tsContent.replace(
        'short_description: string;', 
        'short_description: string;\n  long_description?: string;'
    );
}

// We will inject long_description dynamically into the products.ts file by using a simple regex loop
// We need to parse each makeProduct call, extract product_name, model, and category.
// To do this reliably, let's just write a regex that matches the fields we need.

let modified = false;

tsContent = tsContent.replace(/makeProduct\(\{([\s\S]*?)\}\)/g, (match, inner) => {
    if (inner.includes('long_description:')) return match; // already has it
    
    // Extract fields
    const nameMatch = inner.match(/product_name:\s*"(.*?)",/);
    const modelMatch = inner.match(/model:\s*"(.*?)",/);
    const categoryMatch = inner.match(/category:\s*"(.*?)",/);
    
    if (nameMatch && categoryMatch) {
        const name = nameMatch[1];
        const model = modelMatch ? modelMatch[1] : '';
        const cat = categoryMatch[1].toLowerCase();
        
        const longDesc = `<p>${name} ${model ? '(' + model + ')' : ''} is designed for use in ${cat}, combining a practical construction with the features required for routine hospital and clinical applications. The product is manufactured with the specified components, dimensions, finishes and functional features listed below.</p>`;
        
        // Inject before seo: or at the end
        if (inner.includes('seo: {')) {
            const newInner = inner.replace('seo: {', `long_description: ${JSON.stringify(longDesc)},\n      seo: {`);
            modified = true;
            return `makeProduct({${newInner}})`;
        }
    }
    
    return match;
});

if (modified) {
    fs.writeFileSync('d:\\\\Website Work\\\\38 (5)\\\\38\\\\data\\\\products.ts', tsContent);
    console.log("Updated products.ts with long_description");
} else {
    console.log("No changes made.");
}
