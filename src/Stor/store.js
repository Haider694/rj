import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'
import apiIntigrate from './apiIntigrate';
const store= configureStore({
  reducer: {
    cart:cartReducer,
    apis:apiIntigrate,
  },
  
},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default store;