"use client";
import React from "react";
import Link from "next/link";

type SidebarPopupProps = {
  isOpen: boolean;
  onClose: () => void;
};

const SidebarPopup: React.FC<SidebarPopupProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`xs-sidebar-group info-group ${isOpen ? "active" : ""}`}>
      {/* Overlay */}

      {/* Sidebar Content */}
      <div className="xs-sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <button onClick={onClose} className="close-side-widget">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                {/* Logo */}
                <div className="logo">
                  <Link href="/">
                    <img
                      src="/assets/images/logo.png"
                      alt="Logo"
                      width={200}
                      height={200}
                    />
                  </Link>
                </div>

                {/* About Section */}
                <div className="content-box">
                  <h4>Hospital Furniture Experts</h4>
                  <p>
                    Shiv Balaji Surgical manufactures premium hospital furniture, beds, trolleys, and medical equipment with trusted quality.
                  </p>
                  <Link href="/contact" className="theme-btn btn-one">
                    <span>Contact Us</span>
                  </Link>
                </div>

                {/* Contact Info */}
                <div className="contact-info">
                  <h4>Contact Info</h4>
                  <ul>
                    <li>
                      <Link href="tel:+917678285286">+91 76782 85286</Link>
                    </li>

                    <li>
                      <Link href="tel:+919891874277">+91 98918 74277</Link>
                    </li>

                    <li>
                      <Link href="mailto:shivbalajisurgical@gmail.com">
                        shivbalajisurgical@gmail.com
                      </Link>
                    </li>
                    <li>
                      Kh. No. 25/2, Nangli Sakrawati, Najafgarh, New
                      Delhi-110043
                    </li>
                  </ul>
                </div>

                {/* Social Links */}
                <ul className="social-box flex gap-4">

                  <li><Link href="https://www.facebook.com/Bskitchenequipments"><span className="fab fa-facebook-square" /></Link></li>
              <li><Link href="https://www.instagram.com/bskitchenequipment/"><span className="fab fa-instagram" /></Link></li>
              <li><Link href="https://www.youtube.com/@Brij_Sharma_"><span className="fab fa-youtube" /></Link></li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPopup;
