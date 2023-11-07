import { configureStore} from "@reduxjs/toolkit";
import { todoSlice } from './slices/TaskSlice'


const store = configureStore({
  reducer: todoSlice.reducer,
})

export default store