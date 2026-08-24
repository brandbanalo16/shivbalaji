import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

interface BreadcrumbProps {
  breadcrumbTitle: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ breadcrumbTitle }) => {
  const words = breadcrumbTitle.split(" ");
  const firstWord = words[0];
  const remainingWords = words.slice(1).join(" ");

  return (
    <section
      style={{
        position: "relative",
        minHeight: "430px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundImage: `
          linear-gradient(
            135deg,
            rgba(254,94,4,0.88) 0%,
            rgba(247,127,28,0.82) 45%,
            rgba(234,146,3,0.88) 100%
          ),
          url('/assets/images/resource/Breadcrum.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Decorative Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(0,0,0,.08) 0%, rgba(0,0,0,.22) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "950px",
          padding: "150px  20px 50px 20PX",
          textAlign: "center",

        }}
      >
        <h1
          style={{
            fontSize: "clamp(42px,6vw,60px)",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-2px",
            marginBottom: "18px",
            textShadow: "0 5px 18px rgba(0,0,0,.25)",

          }}
        >
          {firstWord}{" "}
          {remainingWords && (
            <span
              style={{
                color: "#FFE7A3",
              }}
            >
              {remainingWords}
            </span>
          )}
        </h1>

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto 35px",
            color: "rgba(255,255,255,.96)",
            fontSize: "18px",
            fontWeight: 400,
            lineHeight: 1.3,
          }}
        >
          We manufacture premium hospital furniture, hospital beds, medical
          trolleys, and healthcare equipment with trusted quality and
          innovative designs.
        </p>

        {/* Breadcrumb */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "15px",
            padding: "12px 28px",
            borderRadius: "50px",
            background: "rgba(255,255,255,.12)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,.18)",
            color: "#fff",
            fontSize: "20px",
            fontWeight: 700,
          }}
        >
          <Link
            href="/"
            style={{
              color: "#ffffff",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            <FaHome /> Home
          </Link>

          <span style={{ color: "#FFE7A3" }}>/</span>

          <span>{breadcrumbTitle}</span>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "90px",
          background:
            "linear-gradient(to top, rgba(0,0,0,.22), rgba(0,0,0,0))",
        }}
      />
    </section>
  );
};

export default Breadcrumb;