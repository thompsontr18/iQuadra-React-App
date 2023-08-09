import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAsyncRecords = createAsyncThunk(
  "records/fetchAsyncRecords",
  async () => {
    const res = await axios.get("http://localhost:8800/").catch((err) => {
      console.log(err);
    });
    console.log("calling api");
    return res.data;
  }
);

export const postComment = createAsyncThunk(
  "records/postComment",
  async (value) => {
    console.log("Comment getting passed");
    console.log(value);
    const res = await axios.post("http://localhost:8800/comment", value).catch((err) => {
      console.log(err);
    });
    console.log('Comment Posted');
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
    var state = thunkAPI.getState();
    const getItems = state => state.records.records;
    var data = [...getItems(state)];

    //search filters
    if (value.CollegeSearch !== "" || value.MajorsSearch !== "" || value.CourseSearch !== "" || value.PersonSearch !== "") {
      data = data.filter((item) => {
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
      });
    };
    //Sort
    // let sortedData = data.sort((a, b) => {
    //   if (value.SortOrder === "Ascending") {
    //     return a[value.SortBy].localeCompare(b[value.SortBy]);
    //   } else {
    //     return b[value.SortBy].localeCompare(a[value.SortBy]);
    //   }
    // });
    //Column selection
    data = data.sort((a, b) => {
      if (value.SortOrder === "Ascending") {
        return a[value.SortBy].localeCompare(b[value.SortBy]);
      } else {
        return b[value.SortBy].localeCompare(a[value.SortBy]);
      }
    }).map(item => {
      return value.Columns.reduce((result, select, index) => {
        if (select) {
          const key = Object.keys(item)[index];
          result[key] = item[key];
        }
        return result;
      }, {});
    });
    return data;
  }
);

const initialState = {
  records: [],
  display: [],
  loading: true
};

const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncRecords.pending]: (state) => {
      console.log("Pending");
      return { ...state, loading: true };
    },
    [fetchAsyncRecords.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, records: payload, display: payload, loading: false };
    },
    [fetchAsyncRecords.rejected]: () => {
      console.log("rejected");
    },
    [fetchOriginalRecords.pending]: (state) => {
      console.log("Pending");
      return { ...state, loading: true };
    },
    [fetchOriginalRecords.fulfilled]: (state, { payload }) => {
      console.log("Fetched Originals Successfully");
      return { ...state, display: payload, loading: false };
    },
    [fetchOriginalRecords.rejected]: (state, action) => {
      console.log("rejected");
      console.log(action.error);
    },
    [fetchSearchInput.pending]: (state) => {
      console.log("Pending");
      return { ...state, loading: true };
    },
    [fetchSearchInput.fulfilled]: (state, { payload }) => {
      console.log("Fetched Colleges Successfully");
      return { ...state, display: payload, loading: false };
    },
    [fetchSearchInput.rejected]: (state, action) => {
      console.log("Colleges rejected ");
      console.log(action.error);
    },
    [postComment.pending]: (state) => {
      console.log("Pending");
    },
    [postComment.fulfilled]: (state, { payload }) => {
      console.log("Fetched Records After Post");
      console.log(payload);
      return { ...state, records: payload, display: payload };
    },
    [postComment.rejected]: (state, action) => {
      console.log("Post Comment Failed");
      console.log(action.error);
    },
  },
});

export const { addRecords } = recordSlice.actions;
export const getAllRecords = (state) => state.records.display;
export const getLoadStatus = (state) => state.records.loading;
export default recordSlice.reducer;
