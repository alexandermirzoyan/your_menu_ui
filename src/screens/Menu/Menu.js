import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';

import { getMenuItems } from '../../redux/thunks/menuItemThunks';
import { formatNumber } from '../../utils/formatNumber';

import './_style.scss';
import MenuItemTitle from '../../components/MenuItemTitle/MenuItemTitle';
import MenuItem from '../../components/MenuItem/MenuItem';
import Popup from '../../components/Popup/Popup';

const Menu = (props) => {
  const dispatch = useDispatch();
  const menuItemList = useSelector((state) => state.menuItem.menuItemList);
  const selectedItems = useSelector((state) => state.menuItem.selectedItems);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const { entityId, entityTable } = props.match.params;

  const getTotal = () => {
    let total = 0;
    selectedItems.map((item) => {
      total += item.pricePerOne * item.count;
    });

    return total;
  };

  const setItemsOrder = () => {
    let order = '';
    selectedItems.map((item) => {
      order += `${item.name} - ${item.count} հատ \n`;
    });

    axios.post('http://localhost:8080/SetOrder', { order, tableNumber: entityTable })
      .then((response) => {
        if (response.data.resultCode === 1) {
          toast.success(response.data.result, {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setIsPopupVisible(false);
        }
      })
      .catch(() => {
        toast.error('Կապի խնդիր', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
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
            <button onClick={() => setIsPopupVisible(true)} className='total-button'>
              Պատվիրել - {formatNumber(getTotal())} ֏
            </button>
          </div>
          : null
      }

      {
        isPopupVisible
          ? <Popup
              onClose={() => setIsPopupVisible(false)}
              onSubmit={setItemsOrder}
              selectedItems={selectedItems}
              total={formatNumber(getTotal())}
            />
          : null
      }
    </>
  );
};

export default Menu;
