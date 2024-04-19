import { combineReducers } from 'redux';
import { myReducer1 } from '@/reducers/module1/reducer';
import { myReducer2 } from '@/reducers/module2/reducer';

// const rootReducer = combineReducers({
//   myReducer1,
//   myReducer2,
//   // Add additional reducers as needed...
// });

export default myReducer1;
