import React, { useState, useEffect } from 'react';
import { Cell } from '../../../components/Cell/Cell';
import './Connect.css';

export const Connect = () => {
  const [toastVisible, setToastVisible] = useState(false); // Estado para controlar la visibilidad del toast

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log('Calendly script loaded successfully');
    };

    return () => {
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

  const handleCopyEmail = () => {
    const email = "alejandrodelpozo91@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setToastVisible(true); // Mostrar el toast
        setTimeout(() => setToastVisible(false), 2000); // Ocultarlo después de 2 segundos
      })
      .catch((err) => {
        console.error('Failed to copy email: ', err);
      });
  };

  return (
    <div className='list-wrapper'>
      <link
        href="https://assets.calendly.com/assets/external/widget.css"
        rel="stylesheet"
      />
      <p className='connect-txt font-body-regular'>
        I'm always open to new opportunities, adventures, or friends. If you
        have something to share, reach me out!
      </p>
      <Cell
        title="Calendly"
        subtitle="Let’s meet each other on a 30’ call"
        interactive={true}
        onClick={handleCalendlyPopup}
      />
      <Cell
        title="alejandrodelpozo91@gmail.com"
        subtitle="Send me an email"
        interactive={true}
        onClick={handleCopyEmail}
      />
      <Cell
        title="LinkedIn"
        subtitle="Write me a message"
        interactive={true}
        link="https://www.linkedin.com/in/alejandro-del-pozo-lozano-b53812b3/"
      />
      <Cell
        title="Instagram"
        subtitle="Take a look to my photos"
        interactive={true}
        link="https://www.instagram.com/alejandro.delpozo/"
      />

      {toastVisible && (
        <div className="toast">
          Email copied to clipboard!
        </div>
      )}
    </div>
  );
};