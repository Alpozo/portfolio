import React, { useEffect, useRef } from "react";
import "./Tabs.css";
import { TABS } from './constants';

export const Tabs = ({ activeTab, onTabChange }) => {

  const tabsRef = useRef([]);
  const [ indicatorStyle, setIndicatorStyle ] = React.useState({});

  useEffect(() => {
    const updateIndicator = () => {
      const activeTabElement = tabsRef.current[ activeTab ];
      if (activeTabElement) {
        setIndicatorStyle({
          width: `${activeTabElement.offsetWidth}px`, // Ancho dinámico
          transform: `translateX(${activeTabElement.offsetLeft}px)`, // Posición dinámica
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator); // Actualiza al redimensionar

    return () => {
      window.removeEventListener("resize", updateIndicator);
    };
  }, [ activeTab ]);

  return (
    <div className="tabs-container">
      <div className="tabs">
        {TABS.map((tab, index) => (
          <button
            key={index}
            className={`tab-item ${activeTab === index ? "active" : ""}`}
            onClick={() => onTabChange(index)} // Cambia la pestaña activa
            ref={(el) => (tabsRef.current[ index ] = el)} // Referencia para el indicador
          >
            {tab}
          </button>
        ))}
        {/* Barra dinámica */}
        <div className="tab-indicator" style={indicatorStyle}></div>
      </div>
    </div>
  );
};