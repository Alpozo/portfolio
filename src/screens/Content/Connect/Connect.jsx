import React, { useEffect } from 'react';
import { ModalCell } from '../../../components/ModalCell/ModalCell';
import './Connect.css';

export const Connect = () => {
  useEffect(() => {
    // Agregar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Verificar que el script se cargó correctamente
    script.onload = () => {
      console.log('Calendly script loaded successfully');
    };

    return () => {
      // Limpiar el script al desmontar el componente
      document.body.removeChild(script);
    };
  }, []);

  const handleCalendlyPopup = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/alejandrodelpozo91/30min',
      });
    } else {
      console.error('Calendly is not available yet.');
    }
  };

  return (
    <div className='list-wrapper'>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <button
        onClick={handleCalendlyPopup}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
      >
        Schedule time with me
      </button>

      <div>
          
            <p className='connect-txt font-body-regular'>I'm always open to new opportunities, adventures, or friends. If you have something to share, reach me out!</p>
            <ModalCell title="Calendy" subtitle="Let’s meet each other on a 30’ call" link={"http://www.google.com"}/>
            <ModalCell title="seriously@alejandro.wtf" subtitle="Send me an email" link={"http://www.google.com"}/>
            <ModalCell title="LinkedIn" subtitle="Write me a message" link={"http://www.google.com"}/>
            <ModalCell title="Instagram" subtitle="Take a look to my photos" link={"http://www.google.com"}/>
           
         
       </div>
    </div>
  );
};