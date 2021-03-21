import React from 'react';

import amarayin from '../../assets/images/amarayin.jpeg';
import tabule from '../../assets/images/tabule.jpeg';
import hummus from '../../assets/images/hummus.jpeg';
import lahmajoAngus from '../../assets/images/lahmajo_angus.jpeg';
import lahmajoSpicy from '../../assets/images/lahmajo_spicy.jpeg';
import lahmajoGrenade from '../../assets/images/lahmajoGrenade.jpeg';
import tawouk from '../../assets/images/tawouk.jpeg';
import lconacSmbuk from '../../assets/images/lconac_smbuk.jpeg';

import './_style.scss';
import MenuItem from '../../components/MenuItem/MenuItem';

const menuItemsList = [
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
];

const Menu = (props) => {
  const entityName = props.match.params.name;
  const entityTable = props.match.params.table;

  return (
    <div className='menu-screen-wrapper'>
      <div className='d-flex flex-column justify-content-center align-items-center menu-item-row-wrapper'>
        {
          menuItemsList.map((item, index) => (
            <MenuItem
              id={index}
              image={item.image}
              itemName={item.itemName}
              itemRecipe={item.itemRecipe}
              itemPrice={item.itemPrice}
            />
          ))
        }
      </div>
    </div>
  );
};

export default Menu;
