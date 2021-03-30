import { SET_MENU_ITEM_COUNT, GET_MENU_ITEMS } from '../constants';

export const setMenuItemCount = (payload) => ({
  type: SET_MENU_ITEM_COUNT,
  payload,
});

export const getMenuItemsActions = {
  start: () => ({ type: GET_MENU_ITEMS.start }),
  success: (payload) => ({ type: GET_MENU_ITEMS.success, payload }),
  fail: (error) => ({ type: GET_MENU_ITEMS.fail, error }),
};
