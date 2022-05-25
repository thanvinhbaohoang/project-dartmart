import { combineReducers } from '@reduxjs/toolkit';

import ItemReducer from './item-reducer';

const rootReducer = combineReducers({
  item: ItemReducer,
});

export default rootReducer;