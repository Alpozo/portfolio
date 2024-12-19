import React, { useState, useEffect, useRef } from "react";
import "./Tabs.css";

export const Tabs = () => { // Named export
  const [activeTab, setActiveTab] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabsRef = useRef([]);

  const tabs = ["Featured", "Experience", "About", "Connect"];

  useEffect(() => {
    const updateIndicator = () => {
      const activeTabElement = tabsRef.current[activeTab];
      if (activeTabElement) {
        setIndicatorStyle({
          width: `${activeTabElement.offsetWidth}px`, // Ancho de la pestaña activa
          transform: `translateX(${activeTabElement.offsetLeft}px)`, // Posición de la pestaña activa
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator); // Actualizar al redimensionar
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTab]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
            ref={(el) => (tabsRef.current[index] = el)} // Referencia a cada pestaña
          >
            {tab}
          </button>
        ))}
        {/* Barra inferior que se adapta dinámicamente */}
        <div className="tab-indicator" style={indicatorStyle}></div>
      </div>
    </div>
  );
};