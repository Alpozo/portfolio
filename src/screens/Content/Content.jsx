import './Content.css';
import { Featured } from './Featured/Featured';
import { Experience } from './Experience/Experience';
import { About } from './About/About';
import { Connect } from './Connect/Connect';
import { useState, useEffect } from 'react';

export const Content = ({ activeTab }) => {
  const [currentTab, setCurrentTab] = useState(activeTab); // Tab actualmente visible
  const [animationClass, setAnimationClass] = useState('fade-in'); // Clase de animación

  useEffect(() => {
    if (activeTab !== currentTab) {
      setAnimationClass('fade-out'); // Empieza la animación de salida
      const timer = setTimeout(() => {
        setCurrentTab(activeTab); // Cambia el contenido después de la animación
        setAnimationClass('fade-in'); // Activa la animación de entrada
      }, 600); // Duración de la animación en milisegundos

      return () => clearTimeout(timer); // Limpia el temporizador para evitar fugas de memoria
    }
  }, [activeTab, currentTab]);

  const renderContent = () => {
    switch (currentTab) {
      case 0:
        return <Featured />;
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
    <div className={`content-wrapper ${animationClass}`}>
      {renderContent()}
    </div>
  );
};