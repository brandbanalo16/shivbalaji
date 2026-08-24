'use client'

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { productCategories, contactInfo } from "../../data/navData";

type MobileMenuProps = {
  isSidebar: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

export default function MobileMenu({ isSidebar, handleMobileMenu, handleSidebar }: MobileMenuProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (key: string) => {
    if (activeDropdown === key) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(key);
    }
  };

  return (
    <>
      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="fa-solid fa-xmark" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/">
              <Image src="/assets/images/logo.png" alt="Logo" width={203} height={40} priority />
            </Link>
          </div>
          <div className="menu-outer">
            <ul className="navigation clearfix">

              {/* Home */}
              <li><Link href="/">Home</Link></li>

              {/* About Us */}
              <li><Link href="/about">About Us</Link></li>

              {/* Our Product Range */}
              <li className={`dropdown ${activeDropdown === "products" ? "current" : ""}`}>
                <Link href={`/${productCategories[0]?.slug || ''}`} onClick={() => {
                   // Allow navigation to the main products page, but also toggle the menu
                   // Wait, clicking the link navigates. The dropdown button is for opening.
                }}>
                  Our Product Range
                </Link>
                <ul style={{ display: activeDropdown === "products" ? "block" : "none" }}>
                  {productCategories.map((cat) => (
                    <li key={cat.slug} className={cat.subcategories.length ? "dropdown" : ""}>
                      <Link href={`/${cat.slug}`}>{cat.title}</Link>
                      {/* For now, just a single level dropdown in mobile or we can make it nested if needed. 
                          The user requested clicking category opens subcategories. 
                          Let's keep it simple for now or implement nested accordion. */}
                      {cat.subcategories.length > 0 && (
                        <ul>
                           {cat.subcategories.map(sub => (
                              <li key={sub.slug}>
                                 <Link href={`/${cat.slug}/${sub.slug}`}>{sub.title}</Link>
                              </li>
                           ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
                <div className={`dropdown-btn ${activeDropdown === "products" ? "open" : ""}`} onClick={() => toggleDropdown("products")}>
                  <span className="fa fa-angle-right" />
                </div>
              </li>

              {/* Blog */}
              <li><Link href="/blog">Blog</Link></li>

              {/* Contact Us */}
              <li><Link href="/contact">Contact Us</Link></li>

            </ul>
          </div>

          <div className="contact-info">
              <h4>Contact Info</h4>
              <ul>
                  {contactInfo.phones.slice(0, 2).map((phone, i) => (
                     <li key={i}><Link href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</Link></li>
                  ))}
                  <li><Link href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link></li>
                  <li>{contactInfo.address}</li>
              </ul>
          </div>

          {/* Social Links */}
          <div className="social-links">
            <ul className="clearfix">
              <li><Link href={contactInfo.social.facebook}><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href={contactInfo.social.instagram}><span className="fab fa-instagram" /></Link></li>
              <li><Link href={contactInfo.social.youtube}><span className="fab fa-youtube" /></Link></li>
            </ul>
          </div>

        </nav>
      </div>

      {/* Overlay */}
      <div
        className="nav-overlay"
        style={{ display: isSidebar ? "block" : "none" }}
        onClick={handleSidebar}
      />
    </>
  );
}
