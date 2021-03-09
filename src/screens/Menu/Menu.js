import React, { useState } from 'react';
import foodImage from '../../assets/images/dish.jfif';
import './_style.scss';

const Menu = (props) => {
  const [itemsCount, setItemsCount] = useState(0);
  const entityName = props.match.params.name;
  const entityTable = props.match.params.table;

  const toggleItemsCount = (type) => {
    if (type === 'increment') {
      setItemsCount(itemsCount + 1);
    } else if (itemsCount !== 0) {
      setItemsCount(itemsCount - 1);
    }
  };

  return (
    <div className='menu-screen-wrapper'>
      <div className='d-flex justify-content-center align-items-center menu-item-row-wrapper'>
        <div className='d-flex align-items-center menu-item-wrapper'>
          <div className='menu-item-image-wrapper'>
            <img src={foodImage} alt='menu-item' />
          </div>
          <div className='menu-item-info-wrapper'>
            <p className='font-weight-bold'>Chicken breast</p>
            <p>chicken, vegetables, souces</p>
            <p>$20</p>
            <div className='d-flex align-items-center item-count-wrapper' >
              <button onClick={() => toggleItemsCount('decrement')}>-</button>
              <p className='item-count-text'>{itemsCount}</p>
              <button onClick={() => toggleItemsCount('increment')}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
