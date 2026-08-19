"use client";

import React, { useState } from "react";

interface ProductTabsProps {
  description: string;
  features: string[];
  specifications: string[];
}

export default function ProductTabs({ description, features, specifications }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="product-tabs" style={{ marginBottom: "60px" }}>
      <div className="tab-buttons" style={{ display: "flex", gap: "5px", borderBottom: "1px solid #e2e8f0", flexWrap: "wrap", margin: 0 }}>
        {description && (
          <button
            onClick={() => setActiveTab("description")}
            style={{
              padding: "12px 25px",
              background: activeTab === "description" ? "#fe5e04" : "#1e293b",
              color: activeTab === "description" ? "#fff" : "#cbd5e1",
              border: "none",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              transition: "all 0.3s ease"
            }}
          >
            Description
          </button>
        )}
        
        {features && features.length > 0 && (
          <button
            onClick={() => setActiveTab("features")}
            style={{
              padding: "12px 25px",
              background: activeTab === "features" ? "#fe5e04" : "#1e293b",
              color: activeTab === "features" ? "#fff" : "#cbd5e1",
              border: "none",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              transition: "all 0.3s ease"
            }}
          >
            Key Features
          </button>
        )}
        
        {specifications && specifications.length > 0 && (
          <button
            onClick={() => setActiveTab("specifications")}
            style={{
              padding: "12px 25px",
              background: activeTab === "specifications" ? "#fe5e04" : "#1e293b",
              color: activeTab === "specifications" ? "#fff" : "#cbd5e1",
              border: "none",
              fontWeight: 600,
              fontSize: "15px",
              cursor: "pointer",
              borderTopLeftRadius: "5px",
              borderTopRightRadius: "5px",
              transition: "all 0.3s ease"
            }}
          >
            Specifications
          </button>
        )}
      </div>

      <div className="tab-content" style={{ border: "1px solid #e2e8f0", borderTop: "none", padding: "40px", borderRadius: "0 0 5px 5px", background: "#fff" }}>
        {activeTab === "description" && (
          <div className="tab-pane active" style={{ animation: "fadeIn 0.5s ease" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px", color: "#334155" }}>Product Description</h3>
            <div 
              style={{ color: "#64748b", lineHeight: "1.8", fontSize: "15px" }}
              dangerouslySetInnerHTML={{ __html: description }} 
            />
          </div>
        )}

        {activeTab === "features" && (
          <div className="tab-pane active" style={{ animation: "fadeIn 0.5s ease" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px", color: "#334155" }}>Key Features</h3>
            <ul style={{ paddingLeft: "20px", color: "#64748b", lineHeight: "1.8", fontSize: "15px" }}>
              {features.map((feature, idx) => (
                <li key={idx} style={{ marginBottom: "10px", listStyleType: "disc" }}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === "specifications" && (
          <div className="tab-pane active" style={{ animation: "fadeIn 0.5s ease" }}>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "20px", color: "#334155" }}>Technical Specifications</h3>
            <div className="table-responsive">
              <table className="table" style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", marginBottom: 0 }}>
                <tbody>
                  {specifications.map((spec, index) => (
                    <tr key={index} style={{ borderBottom: index === specifications.length - 1 ? "none" : "1px solid #e2e8f0", background: index % 2 === 0 ? "#f8fafc" : "#fff" }}>
                      <td style={{ padding: "15px 20px", color: "#475569", fontSize: "15px" }}>
                        <i className="fa-solid fa-check" style={{ color: "#fe5e04", marginRight: "12px", fontSize: "14px" }}></i>
                        {spec}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </div>
  );
}
