import React from 'react';
import foodImage from '../../assets/images/dish.jfif';
import './_style.scss';

const Menu = (props) => {
  const entityName = props.match.params.name;
  const entityTable = props.match.params.table;

  return (
    <div className='menu-screen-wrapper'>
      <div className='d-flex justify-content-center menu-item-wrapper'>
        <div className='menu-item-image-wrapper'>
          <img src={foodImage} alt='menu-item' />
        </div>
        <div className='menu-item-info-wrapper'>
          <p className='font-weight-bold'>Chicken breast</p>
          <p>chicken, vegetables, souces</p>
          <p>$20</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
