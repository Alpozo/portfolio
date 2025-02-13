import React, { useState, useEffect } from 'react';
import { Cell } from '../../../components/Cell/Cell';
import './Connect.css';


export const Connect = () => {
  const [ toastVisible, setToastVisible ] = useState(false);

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
        url: 'https://calendly.com/alpozolozano/1h-meeting',
      });
    } else {
      console.error('Calendly is not available yet.');
    }
  };

  const handleCopyEmail = () => {
    const email = "alpozolozano@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setToastVisible(true);
        setTimeout(() => setToastVisible(false), 2000);
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
      <p className='connect-txt primary-text'>
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
        title="alpozolozano@gmail.com"
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
        <div className="toast primary-text">
          Email copied to clipboard 👍
        </div>
      )}
    </div>
  );
};