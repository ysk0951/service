import {createAction, createReducer} from 'redux-action';
import ISelectMenu from '../interface/interface';
//Init
const initState: ISelectMenu = {
  selectMenu: '',
};
//Type
const MENU_STAT = 'menu/SELECT_MENU';

//Action
export const selectMenu = createAction(MENU_STAT);

//reducer
const menu = createReducer(initState, {
  [MENU_STAT]: (state, action) => {
    state;
  },
});
export default menu;
