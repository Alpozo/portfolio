// components/CookieBanner/CookieBanner.jsx
import React, { useState, useEffect } from 'react';
import './CookieBanner.css';

export const CookieBanner = () => {
  const [ showBanner, setShowBanner ] = useState(false);

  function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
      "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[ 1 ]) : undefined;
  }

  function setCookie(name, value, days) {
    let expires = "";
    if (days) {
      let date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  useEffect(() => {
    if (!getCookie("cookie_consent")) {
      setShowBanner(true);
    }
  }, []);

  function handleAccept() {
    setCookie("cookie_consent", "accepted", 365);
    window.location.reload();
  }

  function handleReject() {
    setCookie("cookie_consent", "rejected", 365);
    setShowBanner(false);
  }

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>Cookies help me improve this portfolio. Give them a thumbs up?</p>
      <div>
        <button className="accept-button" onClick={handleAccept}>Accept 👍</button>
        <button className="reject-button" onClick={handleReject}>Decline</button>
      </div>
    </div >
  );
};