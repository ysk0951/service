import {createAction, handleActions} from 'redux-action';
//Init
const initState = {
  open: false,
};
//Type
const MODAL_STATE = 'modal/MODAL_STATE';

//Action
export const selectMenu = createAction(MODAL_STATE);

//Handler
const modal = handleActions(
  {
    [MODAL_STATE]: (state, action) => action.payload.open,
  },
  initState,
);
export default modal;
