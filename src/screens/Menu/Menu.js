import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../../redux/thunks/menuItemThunks';

import './_style.scss';
import MenuItemTitle from '../../components/MenuItemTitle/MenuItemTitle';
import MenuItem from '../../components/MenuItem/MenuItem';

const Menu = (props) => {
  const dispatch = useDispatch();
  const menuItemList = useSelector((state) => state.menuItem.menuItemList);
  const { entityId, entityTable } = props.match.params;

  useEffect(() => {
    dispatch(getMenuItems(entityId));
  }, []);

  return (
    <div className='menu-screen-wrapper'>
      <div className='d-flex flex-column justify-content-center align-items-center menu-item-row-wrapper'>
        {menuItemList
          ? Object.keys(menuItemList.menu).map((menuItemKey) => (
            <>
              <MenuItemTitle title={menuItemList.menu[menuItemKey].label} />
              {
                menuItemList.menu[menuItemKey].data.map((menuItem, index) => (
                  <MenuItem
                    id={index}
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
  );
};

export default Menu;
