const fs = require('fs');
const path = require('path');

const keywordsList = [
  "Shiv Balaji Surgical",
  "Shiv Balaji Surgical Hospital Beds",
  "Hospital Bed Manufacturer in India",
  "Hospital Bed Manufacturer in Delhi",
  "ICU Bed Manufacturer",
  "ICU Bed Manufacturer in Delhi",
  "Recovery Bed Manufacturer",
  "Fowler Bed Manufacturer",
  "Semi Fowler Bed Manufacturer",
  "Pediatric Bed Manufacturer",
  "Attendant Bed Manufacturer",
  "Hospital Furniture Manufacturer",
  "Hospital Furniture Manufacturer in Delhi",
  "Medical Furniture Manufacturer India",
  "ICU Bed Electric Manufacturer",
  "ICU Bed Mechanical Manufacturer",
  "Five Function ICU Bed",
  "Fowler Bed Electric Manufacturer",
  "Fowler Bed ABS Panel Manufacturer",
  "Hospital Bed with Side Railing",
  "Hospital Bed Manufacturer with ABS Panels",
  "Hospital Bed Manufacturer with SS Panels",
  "Pediatric Hospital Bed Supplier",
  "Recovery Bed Fixed Height Manufacturer",
  "Hospital Bed with Mattress Manufacturer",
  "Manual Hospital Bed Supplier",
  "Electric Hospital Bed Supplier",
  "Bedside Locker Manufacturer",
  "Over Bed Table Manufacturer",
  "Hospital Trolley Manufacturer",
  "Crash Cart Trolley Manufacturer",
  "Medicine Trolley Manufacturer",
  "Instrument Trolley Manufacturer",
  "Examination Table Manufacturer",
  "Examination Couch Manufacturer",
  "Stretcher Trolley Manufacturer",
  "Emergency Recovery Trolley Manufacturer",
  "Patient Stool Manufacturer",
  "Surgeon Stool Manufacturer",
  "Hospital Foot Step Manufacturer",
  "Blood Donor Chair Manufacturer",
  "Hospital Bed Cradle Supplier",
  "Saline Stand Manufacturer",
  "Bed Side Screen Manufacturer",
  "Hospital Bed Supplier Near Me",
  "Hospital Bed Wholesale Dealer",
  "Hospital Bed Exporter India",
  "Hospital Bed Manufacturer for Government Tenders",
  "Bulk Hospital Bed Supplier",
  "Hospital Bed Price List India",
  "Buy ICU Bed Online India",
  "Hospital Furniture for Nursing Home",
  "Hospital Furniture for Clinics",
  "Hospital Bed Manufacturer Najafgarh",
  "Hospital Bed Manufacturer New Delhi",
  "ISO Certified Hospital Bed Manufacturer",
  "GMP Certified Hospital Furniture Manufacturer",
  "CE Certified Hospital Bed Manufacturer"
];

function getRandomKeywords(count) {
  const shuffled = [...keywordsList].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const dataPath = path.join(__dirname, 'products.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

data.products.forEach(product => {
  const primaryKw = product.product_name;
  const secondaryKws = getRandomKeywords(5);
  const geoTrustKw = getRandomKeywords(2).join(' and ');
  
  // Create an SEO block that repeats the primary keyword 10 times in a "natural" way
  // mixed with secondary keywords.
  let seoText = `If you are looking for the best ${primaryKw}, you are in the right place. Our ${primaryKw} is designed for optimal performance. As a top ${secondaryKws[0]}, we ensure every ${primaryKw} meets high standards. The ${primaryKw} offers incredible durability. Patients and caregivers prefer our ${primaryKw} for its reliability. `;
  seoText += `When you choose our ${primaryKw}, you get quality. We are known as a leading ${secondaryKws[1]} as well. This ${primaryKw} is perfect for clinics. The ${primaryKw} provides unmatched comfort. Contact us if you need a ${primaryKw} from a ${secondaryKws[2]}. `;
  seoText += `We also supply related items as a ${secondaryKws[3]}. The ${primaryKw} stands out in the market. Many hospitals trust our ${primaryKw}. Experience the excellence of this ${primaryKw} today. We are your reliable ${secondaryKws[4]}.`;

  product.seo = {
    ...product.seo,
    focus_keyword: primaryKw,
    meta_title: `${primaryKw} | ${geoTrustKw} | Shiv Balaji Surgical`,
    meta_description: `Buy the best ${primaryKw}. We are a leading ${secondaryKws[0]} and ${secondaryKws[1]}. Explore our high-quality ${primaryKw} today!`,
    image_alt_text: `${primaryKw} - ${product.model_no || product.product_id} - ${secondaryKws[0]}`,
    seo_content_block: seoText,
    additional_keywords: secondaryKws
  };
});

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated products.json with intensive SEO data.');
