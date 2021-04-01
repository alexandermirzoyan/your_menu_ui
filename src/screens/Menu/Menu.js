import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../../redux/thunks/menuItemThunks';
import { formatNumber } from '../../utils/formatNumber';

import './_style.scss';
import MenuItemTitle from '../../components/MenuItemTitle/MenuItemTitle';
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = (props) => {
  const dispatch = useDispatch();
  const menuItemList = useSelector((state) => state.menuItem.menuItemList);
  const selectedItems = useSelector((state) => state.menuItem.selectedItems);
  const { entityId, entityTable } = props.match.params;

  const getTotal = () => {
    let total = 0;
    selectedItems.map((item) => {
      total += item.pricePerOne * item.count;
    });

    return total;
  };

  useEffect(() => {
    dispatch(getMenuItems(entityId));
  }, []);

  return (
    <>
      <div className='menu-screen-wrapper'>
        <div className='d-flex flex-column justify-content-center align-items-center menu-item-row-wrapper'>
          {menuItemList
            ? Object.keys(menuItemList.menu).map((menuItemKey) => (
              <>
                <MenuItemTitle title={menuItemList.menu[menuItemKey].label} />
                {
                  menuItemList.menu[menuItemKey].data.map((menuItem, index) => (
                    <MenuItem
                      id={menuItem.id}
                      image={menuItem.image}
                      itemName={menuItem.name}
                      itemRecipe={menuItem.ingridient}
                      itemPrice={menuItem.price}
                    />
                  ))
                }
              </>
            ))
            : null
          }
        </div>
      </div>
      {
        getTotal() !== 0
          ? <div className='total-button-wrapper'>
            <button className='total-button'>
              Հաստատել - {formatNumber(getTotal())} ֏
            </button>
          </div>
          : null
      }
    </>
  );
};

export default Menu;
