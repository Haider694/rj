import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
 
export const getUserList = createAsyncThunk( async (page, { rejectWithValue }) => {
  
  try {
    const response = await axios.get('https://api.example.com/data');
    return response.data;
    const  {data}  = await axios.get(`http://localhost:3000/menu`);
    
  } catch (error) {
    return rejectWithValue(error.message);
  }
})