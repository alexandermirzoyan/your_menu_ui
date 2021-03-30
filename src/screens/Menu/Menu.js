import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuItems } from '../../redux/thunks/menuItemThunks';

import amarayin from '../../assets/images/amarayin.jpeg';
import tabule from '../../assets/images/tabule.jpeg';
import hummus from '../../assets/images/hummus.jpeg';
import lahmajoAngus from '../../assets/images/lahmajo_angus.jpeg';
import lahmajoSpicy from '../../assets/images/lahmajo_spicy.jpeg';
import lahmajoGrenade from '../../assets/images/lahmajoGrenade.jpeg';
import tawouk from '../../assets/images/tawouk.jpeg';
import lconacSmbuk from '../../assets/images/lconac_smbuk.jpeg';

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
                    image={amarayin}
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
