import React, { useState } from 'react';
import './_style.scss';

const MenuItem = ({
  image, itemName, itemRecipe, itemPrice,
}) => {
  const [itemsCount, setItemsCount] = useState(0);

  const toggleItemsCount = (type) => {
    if (type === 'increment') {
      setItemsCount(itemsCount + 1);
    } else if (itemsCount !== 0) {
      setItemsCount(itemsCount - 1);
    }
  };

  return (
    <div className='d-flex align-items-center menu-item-wrapper'>
      <div className='menu-item-image-wrapper'>
        <img src={image} alt='menu-item' />
      </div>
      <div className='menu-item-info-wrapper'>
        <p className='font-weight-bold'>{itemName}</p>
        <p>{itemRecipe}</p>
        <p>{itemPrice} ֏</p>
        <div className='d-flex align-items-center item-count-wrapper' >
          <button onClick={() => toggleItemsCount('decrement')}>-</button>
          <p className='item-count-text'>{itemsCount}</p>
          <button onClick={() => toggleItemsCount('increment')}>+</button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
