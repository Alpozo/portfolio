import './Content.css';
import React, { useState, useEffect } from 'react';
import { Featured } from './Featured/Featured';
import { Experience } from './Experience/Experience';
import { About } from './About/About';
import { Connect } from './Connect/Connect';

export const Content = ({ activeTab, onHoverItem, onLeaveImage }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true); // Inicia la animación cada vez que cambia el contenido
    const timer = setTimeout(() => setIsAnimating(false), 300); // La duración de la animación (0.3s)

    return () => clearTimeout(timer); // Limpia el temporizador al desmontar
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <Featured onHoverItem={onHoverItem} onLeaveImage={onLeaveImage} />;
      case 1:
        return <Experience />;
      case 2:
        return <About />;
      case 3:
        return <Connect />;
      default:
        return null;
    }
  };

  return (
    <div className={`content-wrapper ${isAnimating ? 'fade-in-move-up' : ''}`}>
      {renderContent()}
    </div>
  );
};