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
    const filtered_data=data.filter((item) => {
      return value.CollegeSearch.toLowerCase() === ""
        ? item
        : item.Colleges.toLowerCase().includes(value.CollegeSearch.toLowerCase());
    }).filter((item) => {
      return value.MajorsSearch.toLowerCase() === ""
        ? item
        : item.Majors.toLowerCase().includes(value.MajorsSearch.toLowerCase());
    }).filter((item) => {
      return value.CourseSearch.toLowerCase() === ""
        ? item
        : item.Courses.toLowerCase().includes(value.CourseSearch.toLowerCase());
    }).filter((item) => {
      return value.PersonSearch.toLowerCase() === ""
        ? item
        : item.Details.toLowerCase().includes(value.PersonSearch.toLowerCase());
    }).sort((a, b) =>{
      if (value.SortOrder === "Ascending") {
        return a[value.SortBy].localeCompare(b[value.SortBy]);
      } else {
        return b[value.SortBy].localeCompare(a[value.SortBy]);
      }
    });
    const colmnData = filtered_data.map(item => {
      return value.Columns.reduce((result, select, index) => {
        if (select) {
          const key = Object.keys(item)[index];
          result[key] = item[key];
        }
        return result;
      }, {});
    });
    console.log(colmnData);
    return colmnData
  }
);

const initialState = {
  records: [],
  display: []
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
      console.log(payload);
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
