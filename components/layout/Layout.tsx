"use client";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import DataBg from "../elements/DataBg";
import Breadcrumb from "./Breadcrumb";
import SearchPopup from "./SearchPopup";
import SidebarPopup from "./SidebarPopup";
import SiteHeader from "./header/SiteHeader";
import Footer1 from "./footer/Footer1";

type LayoutProps = {
  breadcrumbTitle?: string;
  children: React.ReactNode;
  wrapperCls?: string;
  // kept for backward-compat but no longer has any effect
  headerStyle?: number;
  footerStyle?: number;
};

export default function Layout({
  breadcrumbTitle,
  children,
  wrapperCls,
}: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  /* ── Mobile Menu ─────────────────────────────── */
  const [, setMobileMenu] = useState(false);
  const handleMobileMenu = () => {
    setMobileMenu((prev) => {
      const next = !prev;
      if (next) {
        document.body.classList.add("mobile-menu-visible");
      } else {
        document.body.classList.remove("mobile-menu-visible");
      }
      return next;
    });
  };

  /* ── Sidebar Popup ───────────────────────────── */
  const [isSidebar, setSidebar] = useState(false);
  const handleSidebar = () => setSidebar((s) => !s);

  /* ── Search Popup ────────────────────────────── */
  const [isPopup, setPopup] = useState(false);
  const handlePopup = () => setPopup((p) => !p);

  /* ── Scroll detection ────────────────────────── */
  useEffect(() => {
    (async () => {
      // @ts-expect-error: WOW types not provided
      const { WOW } = await import("wowjs");
      const wow = new WOW({ live: false });
      wow.init();
    })();

    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("mobile-menu-visible");
    };
  }, []);

  return (
    <>
      <DataBg />
      <div className={`page-wrapper ${wrapperCls || ""}`} id="top">
        {/* Single unified header for the whole site */}
        <SiteHeader
          scroll={isScrolled}
          handleMobileMenu={handleMobileMenu}
          handleSidebar={handleSidebar}
        />

        {/* Popups */}
        <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />
        <SidebarPopup isOpen={isSidebar} onClose={handleSidebar} />

        {/* Breadcrumb */}
        {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

        {/* Page content */}
        {children}

        <Footer1 />
      </div>
      <BackToTop scroll={isScrolled} />
    </>
  );
}
