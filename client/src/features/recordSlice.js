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

export const fetchOriginalRecords = createAsyncThunk(
  "records/fetchOriginalRecords",
  async (value, thunkAPI) => {
    return thunkAPI.getState().records.records;
  }
);

export const fetchSearchInput = createAsyncThunk(
  "records/fetchSearchInput",
  async (value, thunkAPI) => {
    const data = thunkAPI.getState().records.records;
    console.log(value);
    return data.filter((item) => {
      return value.CollegeSearch === ""
        ? item
        : item.Colleges.includes(value.CollegeSearch);
    }).filter((item) => {
      return value.MajorsSearch === ""
        ? item
        : item.Majors.includes(value.MajorsSearch);
    }).filter((item) => {
      return value.CourseSearch === ""
        ? item
        : item.Courses.includes(value.CourseSearch);
    }).filter((item) => {
      return value.PersonSearch === ""
        ? item
        : item.Details.includes(value.PersonSearch);
    });
  }
);

const initialState = {
  records: [],
  display: [],
};

const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncRecords.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncRecords.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, records: payload, display: payload };
    },
    [fetchAsyncRecords.rejected]: () => {
      console.log("rejected");
    },
    // [fetchSearchRecords.pending]: () => {
    //   console.log("Pending Query");
    // },
    // [fetchSearchRecords.fulfilled]: (state, { payload }) => {
    //   console.log("Fetched Query Successfully");
    //   return { ...state, records: payload };
    // },
    // [fetchSearchRecords.rejected]: () => {
    //   console.log("Rejected");
    // },
    [fetchOriginalRecords.pending]: () => {
      console.log("Pending");
    },
    [fetchOriginalRecords.fulfilled]: (state, { payload }) => {
      console.log("Fetched Originals Successfully");
      return { ...state, display: payload };
    },
    [fetchOriginalRecords.rejected]: (state, action) => {
      console.log("rejected");
      console.log(action.error);
    },
    [fetchSearchInput.pending]: () => {
      console.log("Pending");
    },
    [fetchSearchInput.fulfilled]: (state, { payload }) => {
      console.log("Fetched Colleges Successfully");
      console.log(payload.length);
      return { ...state, display: payload };
    },
    [fetchSearchInput.rejected]: (state, action) => {
      console.log("Colleges rejected ");
      console.log(action.error);
    },
  },
});

export const { addRecords } = recordSlice.actions;
export const getAllRecords = (state) => state.records.display;
export default recordSlice.reducer;
