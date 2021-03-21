import produce from 'immer';
import { SET_MENU_ITEM_COUNT } from '../constants';

const initialState = {
  selectedItemsCount: 0,
};

const menuItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MENU_ITEM_COUNT:
      return produce(state, (draft) => {
        draft.selectedItemsCount = action.payload;
      });
    case 'SOME_OTHER_CASE':
      // some other case stuff
      break;
    default:
      return state;
  }

  return null;
};

export default menuItemReducer;
