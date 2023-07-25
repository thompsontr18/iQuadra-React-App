import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncRecords = createAsyncThunk(
  "records/fetchAsyncRecords",
  async () => {
    const res = await axios.get("http://localhost:8800/").catch((err) => {
      console.log(err);
    });
    return res.data;
  }
);

const initialState = {
  records: [],
};

const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    
  },
  extraReducers:{
    [fetchAsyncRecords.pending]:()=>{
        console.log("Pending");
    },
    [fetchAsyncRecords.fulfilled]:(state,{payload})=>{
        console.log("Fetched Successfully");
        return {...state,records: payload}
    },
    [fetchAsyncRecords.rejected]:()=>{
        console.log("rejected");
    }
  }
});

export const { addRecords } = recordSlice.actions;
export const getAllRecords = (state) => state.records.records;
export default recordSlice.reducer;
