import React from 'react';
import foodImage from '../../assets/images/dish.jfif';
import './_style.scss';
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = (props) => {
  const entityName = props.match.params.name;
  const entityTable = props.match.params.table;

  return (
    <div className='menu-screen-wrapper'>
      <div className='d-flex flex-column justify-content-center align-items-center menu-item-row-wrapper'>
        {
          new Array(10).fill(null).map((item, index) => (
            <MenuItem
              image={foodImage}
              itemName='Ցեզար'
              itemRecipe='Հազար, լոլիկ, վարունգ'
              itemPrice='1000'
            />
          ))
        }
      </div>
    </div>
  );
};

export default Menu;
