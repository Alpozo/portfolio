import './ModalCell.css';
import React from 'react';

export const ModalCell = ({ title, subtitle }) => {
  return (
    <div className='modal-cell-wrapper'>
      <p className='text-body-regular'>{title}</p>
      <p className='text-small-regular'>{subtitle}</p>
    </div>
  )
}