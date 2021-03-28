import React, { useEffect } from 'react';
import axios from 'axios';

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

const filteredMenuItemsList = {
  salads: {
    label: 'Աղցաններ',
    data: [
      {
        image: amarayin,
        itemName: 'Ամառային աղցան',
        itemRecipe: '220գ, լոլիկ, վարունգ, մաղադանոս',
        itemPrice: 1200,
      },
      {
        image: tabule,
        itemName: 'Աղցան Թաբուլե',
        itemRecipe: '220գ, բլղուր, հազար, լոլիկ, վարունգ',
        itemPrice: 1100,
      },
      {
        image: hummus,
        itemName: 'Հումմուս',
        itemRecipe: '220գ, սիսեռ, թահինի սոուս, ձեթ',
        itemPrice: 1000,
      },
    ],
  },
  doughDishes: {
    label: 'Խմորով ուտեստներ',
    data: [
      {
        image: lahmajoAngus,
        itemName: 'Լահմաջո անգուսի մսով',
        itemRecipe: '180գ, 38x24սմ, անգուս տավարի',
        itemPrice: 1100,
      },
      {
        image: lahmajoSpicy,
        itemName: 'Լահմաջո կծու Ուրֆա',
        itemRecipe: '180գ, 38x24սմ, գառան միս, մաղադանոս',
        itemPrice: 1300,
      },
      {
        image: lahmajoGrenade,
        itemName: 'Լահմաջո նռան օշարակով',
        itemRecipe: '180գ, 38x24սմ, գառան միս, մաղադանոս',
        itemPrice: 1400,
      },
    ],
  },
  mainDishes: {
    label: 'Հիմնական ուտեստներ',
    data: [
      {
        image: tawouk,
        itemName: 'Շիշ թաուկ',
        itemRecipe: '4-5 կտոր, 300գ, հավի փափկամիս',
        itemPrice: 2200,
      },
      {
        image: lconacSmbuk,
        itemName: 'Լցոնած սմբուկ',
        itemRecipe: '4-5 կտոր, 300գ, հավի փափկամիս',
        itemPrice: 3200,
      },
    ],
  },
};

const Menu = (props) => {
  const { entityId, entityTable } = props.match.params;

  useEffect(() => {
    axios.get(`http://localhost:8080/MenuItems?entity=${entityId}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className='menu-screen-wrapper'>
      <div className='d-flex flex-column justify-content-center align-items-center menu-item-row-wrapper'>
        {
          Object.keys(filteredMenuItemsList).map((menuItemKey) => (
            <>
              <MenuItemTitle title={filteredMenuItemsList[menuItemKey].label} />
              {
                filteredMenuItemsList[menuItemKey].data.map((menuItems, index) => (
                  <MenuItem
                    id={index}
                    image={menuItems.image}
                    itemName={menuItems.itemName}
                    itemRecipe={menuItems.itemRecipe}
                    itemPrice={menuItems.itemPrice}
                  />
                ))
              }
            </>
          ))
        }
      </div>
    </div>
  );
};

export default Menu;
