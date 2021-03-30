import axios from 'axios';
import { getMenuItemsActions } from '../actions/menuItemActions';

export const getMenuItems = (entityId) => ((dispatch) => {
  dispatch(getMenuItemsActions.start());

  axios.get(`http://localhost:8080/MenuItems?entity=${entityId}`)
    .then((response) => {
      if (response.data) {
        dispatch(getMenuItemsActions.success({
          menuItemList: response.data,
        }));
      }
    })
    .catch(() => dispatch(getMenuItemsActions.fail('Error')));
});
