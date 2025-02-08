import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import { PostHogProvider } from 'posthog-js/react';

// Funciones para manejar cookies
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

// Verifica si el usuario aceptó las cookies
const userConsent = getCookie("cookie_consent") === "accepted";

const options = {
  api_host: process.env.REACT_APP_PUBLIC_POSTHOG_HOST,
  loaded: (posthog) => {
    console.log("PostHog loaded:", posthog.has_opted_in_capturing());
  },
};

console.log(options);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {userConsent ? (
      <PostHogProvider apiKey={process.env.REACT_APP_PUBLIC_POSTHOG_KEY} options={options}>
        <App />
      </PostHogProvider>
    ) : (
      <App />
    )}
  </React.StrictMode>
);

reportWebVitals();