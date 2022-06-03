import { combineReducers } from '@reduxjs/toolkit';

import ItemReducer from './item-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  item: ItemReducer,
  user: UserReducer
});

export default rootReducer;