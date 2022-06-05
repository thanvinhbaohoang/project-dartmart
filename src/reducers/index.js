import { combineReducers } from '@reduxjs/toolkit';

import ItemReducer from './item-reducer';
import OrderReducer from './order-reducer';
import UserReducer from './user-reducer';

const rootReducer = combineReducers({
  item: ItemReducer,
  user: UserReducer,
  order: OrderReducer,
});

export default rootReducer;