export const blogs = [

    {
    id: 1,
    title: "How to Choose the Right Hospital Furniture for Modern Healthcare Facilities",
    slug: "how-to-choose-right-hospital-furniture",
    image: "/assets/images/news/news-1.png",
    date: "July 31, 2026",
    author: "Admin",
    category: "Hospital Furniture",
    description:
        "Learn how high-quality hospital furniture improves patient comfort, safety, hygiene, and healthcare efficiency.",
    content:
        "Hospital furniture plays an important role in creating a safe and efficient healthcare environment. From hospital beds and ICU beds to trolleys and medical utility products, every piece of equipment should offer durability, comfort, and easy maintenance. Shiv Balaji Surgical provides high-quality hospital furniture solutions designed to meet the modern requirements of hospitals, clinics, and healthcare facilities."
},

{
    id: 2,
    title: "Top Benefits of Using High-Quality Hospital Beds in Healthcare Centers",
    slug: "benefits-of-high-quality-hospital-beds",
    image: "/assets/images/news/news-2.png",
    date: "July 31, 2026",
    author: "Admin",
    category: "Hospital Beds",
    description:
        "Explore the importance of durable hospital beds and how they enhance patient care and medical facility operations.",
    content:
        "Hospital beds are one of the most essential components of healthcare facilities. Modern hospital beds provide better patient comfort, easy positioning, and improved safety during treatment. Shiv Balaji Surgical manufactures reliable hospital beds and ICU beds designed with advanced features to support hospitals, nursing homes, and healthcare professionals."
},

{
    id: 3,
    title: "Complete Guide to Hospital Trolleys and Medical Utility Equipment",
    slug: "complete-guide-to-hospital-trolleys-medical-equipment",
    image: "/assets/images/news/news-3.png",
    date: "July 31, 2026",
    author: "Admin",
    category: "Hospital Trolleys",
    description:
        "Understand the importance of hospital trolleys, instrument trolleys, and stretcher trolleys in healthcare facilities.",
    content:
        "Hospital trolleys are essential medical utility products that help healthcare professionals organize and transport equipment efficiently. Instrument trolleys, stretcher trolleys, and kitchen trolleys improve workflow, save time, and support better patient care. Shiv Balaji Surgical offers durable and practical medical equipment solutions for modern healthcare facilities."
}

];


// Latest blog first
export const latestBlogs = [...blogs].sort(
    (a, b) =>
        new Date(b.date).getTime() -
        new Date(a.date).getTime()
);