import React from 'react';
import './Cell.css';

export const Cell = ({ titleJSX, title, subtitle, interactive, onClick, link, linkText, isHovered }) => {

  const interactiveStyle = interactive && 'interactive-cell'
  const hoveredStyle = isHovered && 'hovered'

  return (
    !link ? (
      <div className={`cell-wrapper ${interactiveStyle} ${hoveredStyle}`} onClick={onClick}>
        {titleJSX && titleJSX}
        {title && <p className='primary-text'>{title}</p>}
        <p className='secondary-text '>{subtitle}</p>
      </div>
    ) : <a className={`cell-wrapper ${interactiveStyle}`} href={link} target="_blank" rel="noreferrer">
      {titleJSX && titleJSX}
      {title && <p className='primary-text'>{title}</p>}
      <p className='secondary-text'>{subtitle}</p>
    </a>)
}