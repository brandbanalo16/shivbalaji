"use client";

import Link from "next/link";

export default function ContactRight() {
  return (
    <div className="contact-right">
      <Link
        href="https://wa.me/917678285286" 
        target="_blank"
        className="contact-box whatsapp"
      >
        <i className="fab fa-whatsapp"></i>
      </Link>

      <Link href="tel:+917678285286" className="contact-box call">
        <i className="fas fa-phone-alt"></i>
      </Link>
    </div>
  );
}