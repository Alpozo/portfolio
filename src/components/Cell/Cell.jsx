import React from 'react';
import './Cell.css';

export const Cell = ({ titleJSX, title, subtitle, interactive, onClick, link, linkText }) => {

  const interactiveStyle = interactive && 'interactive-cell'

  // QUITAR ESTILOS A SOLO EN A>CELL WRAPPER E INVERTIR, TIENE QUE SER AL REVES SI LINK NO ESTA ENTONCES ESTO.
  return (
    !link ? (
      <div className={`cell-wrapper ${interactiveStyle}`} onClick={onClick}>
        {titleJSX && titleJSX}
        {title && <p className='font-body-regular'>{title}</p>}
        <p className='text-small-regular'>{subtitle}</p>
      </div>
    ) : <a className={`cell-wrapper ${interactiveStyle}`} href={link} target="_blank" rel="noreferrer">
      {titleJSX && titleJSX}
      {title && <p className='font-body-regular'>{title}</p>}
      <p className='text-small-regular'>{subtitle}</p>
    </a>)
}