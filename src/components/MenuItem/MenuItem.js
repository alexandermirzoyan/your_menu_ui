import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMenuItemCount, updateMenuItemCount } from '../../redux/actions/menuItemActions';
import { getMediaFileFromServer } from '../../utils/getMediaFileFromServer';
import { formatNumber } from '../../utils/formatNumber';

import './_style.scss';

const MenuItem = ({
  id, image, itemName, itemRecipe, itemPrice,
}) => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state) => state.menuItem.selectedItems);
  const [itemsCount, setItemsCount] = useState(0);

  const handleSelectedItems = (type) => {
    const index = selectedItems.findIndex((item) => parseInt(item.id) === parseInt(id));
    const count = type === 'increment' ? itemsCount + 1 : itemsCount - 1;

    if (index === -1) {
      dispatch(setMenuItemCount([...selectedItems, {
        id,
        count,
        name: itemName,
        pricePerOne: itemPrice,
      }]));
    } else {
      dispatch(updateMenuItemCount({
        id,
        count,
      }));
    }
  };

  const toggleItemsCount = (type) => {
    if (type === 'increment') {
      setItemsCount(itemsCount + 1);
      handleSelectedItems('increment');
    } else if (itemsCount !== 0) {
      setItemsCount(itemsCount - 1);
      handleSelectedItems('decrement');
    }
  };

  return (
    <div key={id} className='d-flex align-items-center menu-item-wrapper'>
      <div className='d-flex justify-content-center align-items-center menu-item-image-wrapper'>
        <img src={getMediaFileFromServer(image)} alt='menu-item' />
      </div>
      <div className='menu-item-info-wrapper'>
        <p className='font-weight-bold'>{itemName}</p>
        <p>{itemRecipe}</p>
        <p>{formatNumber(itemPrice)} ֏</p>
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
