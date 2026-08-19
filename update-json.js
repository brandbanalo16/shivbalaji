const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'data/products.json');
const data = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// Helper to determine subcategory
function getSubcategory(product) {
  const name = product.product_name.toLowerCase();
  const cat = product.category;

  if (cat === "Hospital & ICU Beds") {
    if (name.includes("icu")) return "ICU Beds";
    if (name.includes("semi fowler")) return "Semi Fowler Beds";
    if (name.includes("fowler")) return "Fowler Beds";
    if (name.includes("recovery")) return "Recovery Beds";
    if (name.includes("pediatric") || name.includes("paediatric")) return "Pediatric Beds";
    if (name.includes("attendant")) return "Attendant Beds";
    if (name.includes("plain")) return "Plain Hospital Beds";
    return "Hospital Beds";
  }

  if (cat === "Examination Room Furniture") {
    if (name.includes("table")) return "Examination Tables";
    if (name.includes("couch") && !name.includes("opd")) return "Examination Couches";
    if (name.includes("opd")) return "OPD Couches & Chairs";
    return "Examination Accessories";
  }

  if (cat === "Bedside Lockers & Over-Bed Tables") {
    if (name.includes("table")) return "Over-Bed Tables";
    if (name.includes("locker")) return "Bedside Lockers";
    if (name.includes("trolley")) return "Bedside Lockers"; // utility trolley mapped to Bedside lockers or Utility Accessories, let's say Bed Accessories
    return "Bed Accessories";
  }

  if (cat === "Medical Trolleys & Carts") {
    if (name.includes("crash")) return "Crash Carts";
    if (name.includes("medicine")) return "Medicine Trolleys";
    if (name.includes("emergency")) return "Emergency Trolleys";
    if (name.includes("instrument")) return "Instrument Trolleys";
    if (name.includes("ot") || name.includes("mayo")) return "OT Trolleys";
    if (name.includes("monitor")) return "Monitor Trolleys";
    if (name.includes("dressing")) return "Dressing Trolleys";
    if (name.includes("oxygen") || name.includes("cylinder")) return "Oxygen Trolleys";
    if (name.includes("utility")) return "Utility Trolleys";
    if (name.includes("stretcher")) return "Emergency Trolleys"; // just in case
    if (name.includes("soiled") || name.includes("linen")) return "Utility Trolleys";
    return "Hospital Trolleys";
  }

  if (cat === "Stools, Chairs & Patient Seating") {
    if (name.includes("doctor")) return "Doctor Chairs";
    if (name.includes("surgeon")) return "Surgeon Stools";
    if (name.includes("patient stool") || name.includes("revolving stool") || name.includes("cushioned stool")) return "Patient Stools";
    if (name.includes("lab")) return "Lab Stools";
    if (name.includes("waiting")) return "Waiting Chairs";
    if (name.includes("donor") || name.includes("blood")) return "Blood Donor Chairs";
    if (name.includes("stool")) return "Patient Stools";
    return "Hospital Seating";
  }

  if (cat === "Stretchers, Screens & Accessories") {
    if (name.includes("stretcher") || name.includes("ambulance")) return "Patient Stretchers";
    if (name.includes("patient trolley")) return "Patient Trolleys";
    if (name.includes("screen")) return "Bedside Screens";
    if (name.includes("i.v.") || name.includes("iv ") || name.includes("saline")) return "IV / Saline Stands";
    if (name.includes("foot step")) return "Foot Steps";
    if (name.includes("bucket")) return "Bucket Stands";
    if (name.includes("swab")) return "Swab Stands";
    if (name.includes("wash basin")) return "Hospital Accessories";
    if (name.includes("bowl stand")) return "Hospital Accessories";
    if (name.includes("scrub")) return "Hospital Accessories";
    return "Hospital Accessories";
  }

  return "Other";
}

let modifiedCount = 0;
data.products.forEach(p => {
  p.subcategory = getSubcategory(p);
  modifiedCount++;
});

fs.writeFileSync(jsonPath, JSON.stringify(data, null, 4), 'utf8');
console.log(`Updated ${modifiedCount} products with subcategories in ${jsonPath}`);
