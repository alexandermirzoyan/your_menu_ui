import React from 'react';
import './_style.scss';

const Popup = ({ onClose, selectedItems, total }) => (
  <div className='popup-overlay'>
    <div onClick={onClose} className='close' />
    <h2 className='text-center order-details-title'>Պատվերի մանրամասներ</h2>
    {
      selectedItems.map((element) => (
        <p className='text-center selected-items'>{element.name}, {element.count} հատ</p>
      ))
    }
    <div className='submit-button-wrapper'>
      <button className='submit-button'>
        Հաստատել - {total} ֏
      </button>
    </div>
  </div>
);

export default Popup;
