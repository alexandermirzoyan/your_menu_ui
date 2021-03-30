import produce from 'immer';
import { SET_MENU_ITEM_COUNT, GET_MENU_ITEMS } from '../constants';

const initialState = {
  loading: { type: '', status: false },
  errorMessage: { type: '', text: '' },
  selectedItems: [],
  menuItemList: null,
};

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_ITEM_COUNT:
      return produce(state, (draft) => {
        draft.selectedItems.push(action.payload);
      });
    case GET_MENU_ITEMS.start:
      return produce(state, (draft) => {
        draft.loading.type = 'GetMenuItems';
        draft.loading.status = true;
        draft.errorMessage.type = '';
        draft.errorMessage.text = '';
      });
    case GET_MENU_ITEMS.success:
      return produce(state, (draft) => {
        draft.loading.status = false;
        draft.menuItemList = action.payload.menuItemList;
      });
    case GET_MENU_ITEMS.fail:
      return produce(state, (draft) => {
        draft.loading.status = false;
        draft.errorMessage.type = 'GetMenuItems';
        draft.errorMessage.text = action.error;
      });
    default:
      return state;
  }

  return null;
};

export default menuItemReducer;
