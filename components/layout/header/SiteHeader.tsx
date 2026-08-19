"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../MobileMenu";
import { productCategories } from "../../../data/navData";

type SiteHeaderProps = {
  scroll: boolean;
  handleMobileMenu: () => void;
  handleSidebar: () => void;
};

/** Navigation links — shared between main bar and sticky bar */
function NavLinks() {
  return (
    <ul className="navigation clearfix">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about">About Us</Link>
      </li>

      {/* ── Our Product Range – mega menu ─────────────── */}
      <li className="dropdown">
        <Link href="/product-range">
          Our Product Range
        </Link>
        <ul className="simple-dropdown">
          {productCategories.map((cat, index) => (
            <li key={index} className={cat.subcategories?.length ? "has-children" : ""}>
              <Link href={`/${cat.slug}`}>
                {cat.title}
                {cat.subcategories?.length > 0 && <span className="dropdown-arrow"></span>}
              </Link>

              {/* Nested Subcategories */}
              {cat.subcategories?.length > 0 && (
                <ul className="sub-dropdown">
                  {cat.subcategories.map((sub, i) => (
                    <li key={i}>
                      <Link href={`/${cat.slug}/${sub.slug}`}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
          <li>
            <Link href="/product-range">
              View All Ranges
            </Link>
          </li>
        </ul>
      </li>

      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/contact">Contact Us</Link>
      </li>
    </ul>
  );
}

/** The actual header bar content — reused in both normal + sticky */
function HeaderInner({
  handleMobileMenu,
  handleSidebar,
  navId,
}: {
  handleMobileMenu: () => void;
  handleSidebar: () => void;
  navId: string;
}) {
  return (
    <div className="outer-container">
      <div className="outer-box">

        {/* Logo */}
        <div className="logo-box">
          <figure className="logo">
            <Link href="/">
              <Image
                src="/assets/images/logo.png"
                alt="Shiv Balaji Surgical"
                width={170}
                height={130}
                priority
              />
            </Link>
          </figure>
        </div>

        {/* Desktop nav */}
        <div className="menu-area">
          {/* Mobile hamburger toggler */}
          <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
            <i className="icon-bar" />
            <i className="icon-bar" />
            <i className="icon-bar" />
          </div>

          <nav className="main-menu navbar-expand-md navbar-light clearfix">
            <div
              className="collapse navbar-collapse show clearfix"
              id={navId}
            >
              <NavLinks />
            </div>
          </nav>
        </div>

        {/* Right – orange menu/sidebar button */}
        <div className="menu-right-content">
          <div
            className="nav-btn nav-toggler navSidebar-button clearfix"
            onClick={handleSidebar}
            style={{
              background: "linear-gradient(135deg, #fe5e04 0%, #ea9203 100%)",
            }}
          >
            <Image
              src="/assets/images/icons/icon-10.svg"
              alt="Menu"
              width={18}
              height={16}
              priority
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default function SiteHeader({
  scroll,
  handleMobileMenu,
  handleSidebar,
}: SiteHeaderProps) {
  return (
    <>
      <header
        className={`main-header header-style-three ${scroll ? "fixed-header" : ""
          }`}
      >
        {/* ── Always-visible bar ─────────────────────────── */}
        <div className="header-lower">
          <HeaderInner
            handleMobileMenu={handleMobileMenu}
            handleSidebar={handleSidebar}
            navId="siteNav"
          />
        </div>

        {/* ── Sticky bar (slides in on scroll) ──────────── */}
        <div
          className={`sticky-header ${scroll ? "animated slideInDown" : ""}`}
        >
          <HeaderInner
            handleMobileMenu={handleMobileMenu}
            handleSidebar={handleSidebar}
            navId="siteNavSticky"
          />
        </div>

        {/* Mobile drawer */}
        <MobileMenu
          isSidebar={false}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar}
        />
      </header>
    </>
  );
}
