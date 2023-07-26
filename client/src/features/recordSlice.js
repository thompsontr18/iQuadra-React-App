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

export const fetchSearchRecords=createAsyncThunk(
  "records/fetchSearchRecords",
  async (value) => {
    // console.log("Inside Slice");
    // console.log(value);
    // console.log(`http://localhost:8800/search?Category=${value.Category}&SearchFeild=${value.SearchFeild}`);
    const res = await axios.get(`http://localhost:8800/search?Category=${value.Category}&SearchFeild=${value.SearchFeild}`).catch((err)=>{
      console.log(err);
    });
    return res.data;
  }
)

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
    },
    [fetchSearchRecords.pending]:()=>{
      console.log("Pending Query");
    },
    [fetchSearchRecords.fulfilled]:(state, {payload})=>{
      console.log("Fetched Query Successfully");
      return {...state, records:payload}
    },
    [fetchSearchRecords.rejected]:()=>{
      console.log("Rejected");
    }
  }
});

export const { addRecords } = recordSlice.actions;
export const getAllRecords = (state) => state.records.records;
export default recordSlice.reducer;
