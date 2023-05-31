import { createSlice } from "@reduxjs/toolkit";
import { getUserList } from "./actions";
import { BsBuilding } from "react-icons/bs";
 
const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  errorMessage: ''
}
 
export const apiIntigrate = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder)=>{
    builder.addCase
    (getUserList.pending, (state) => {
      state.isLoading = true;
      console.log(state)
    }).addCase(getUserList.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = payload;
    }).addCase(
      getUserList.rejected,(state, { payload }) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.errorMessage = payload
      }
    )
    
  }
})
 
export default apiIntigrate.reducer;