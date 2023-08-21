import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
//trigers get request to fetch all the records
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
//trigers post request to update notes
export const postComment = createAsyncThunk(
  "records/postComment",
  async (value, thunkAPI) => {
    console.log("Comment getting passed");
    console.log(value);
    const res = await axios.post("http://localhost:8800/comment", value).catch((err) => {
      console.log(err);
    });
    console.log('Comment Posted');
    await thunkAPI.dispatch(fetchAsyncRecords());
    await thunkAPI.dispatch(fetchSearchInput())
    return res.data;
  }
);
// makes a copy of original records and updates display to be used for filtering
export const fetchOriginalRecords = createAsyncThunk(
  "records/fetchOriginalRecords",
  async (value, thunkAPI) => {
    return thunkAPI.getState().records.records;
  }
);
// handles when there is change in filter criteria
export const fetchSearchInput = createAsyncThunk(
  "records/fetchSearchInput",
  async (val, thunkAPI) => {
    var state = thunkAPI.getState();
    const value=state.records.formData;
    const getItems = state => state.records.records;
    var data = [...getItems(state)];
    console.log("showing data to be operated on");
    console.log(data);
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
    data = data.sort((a, b) => {//Sorting
      if (value.SortOrder === "Ascending") {
        return a[value.SortBy].localeCompare(b[value.SortBy]);
      } else {
        return b[value.SortBy].localeCompare(a[value.SortBy]);
      }
    }).map(item => {//Column Selection
      return value.Columns.reduce((result, select, index) => {
        if (select) {
          const key = Object.keys(item)[index];
          result[key] = item[key];
        }
        return result;
      }, {});
    });
    if(value.Distinct===true){
      function findDistinctObjectsWithId(inputArray) {
        const distinctObjectsMap = new Map();
      
        inputArray.forEach(obj => {
          const objWithoutId = { ...obj };
          delete objWithoutId.id;
      
          const objKey = JSON.stringify(objWithoutId);
          if (!distinctObjectsMap.has(objKey)) {
            distinctObjectsMap.set(objKey, obj);
          }
        });
      
        const distinctObjectsWithId = Array.from(distinctObjectsMap.values());
        return distinctObjectsWithId;
      }
      data = findDistinctObjectsWithId(data);
    }
    return data;
  }
);

const initialState = {
  records: [],
  display: [],
  loading: true,
  saving:false,
  formData:{
    CollegeSearch: "",
    MajorsSearch: "",
    CourseSearch: "",
    PersonSearch: "",
    SortBy: "Colleges",
    SortOrder: "Ascending",
    Columns: Array(11).fill(true),
    Distinct: false,
    SelectionChanged: ""
  }
};

const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    // to change formData whenever something is changes in LeftColumn.js
    changeFormData:(state,action)=>{
      console.log(action.payload);
      return {...state, formData:action.payload};
    }
  },
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
      console.log(payload);
      console.log("payload");
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
      console.log(payload);
      return { ...state, display: payload, loading: false };
    },
    [fetchSearchInput.rejected]: (state, action) => {
      console.log("Colleges rejected ");
      console.log(action.error);
    },
    [postComment.pending]: (state) => {
      console.log("Pending");
      return {...state, saving:true}
    },
    [postComment.fulfilled]: (state) => {
      console.log("Fetched Records After Post");
      return { ...state, saving:false };
    },
    [postComment.rejected]: (state, action) => {
      console.log("Post Comment Failed");
      console.log(action.error);
    },
  },
});

export const { addRecords } = recordSlice.actions;
export const getAllRecords = (state) => state.records.display;
export const getOriginalRecords = (state)=> state.records.records;
export const getLoadStatus = (state) => state.records.loading;
export const getSaveStatus = (state)=>state.records.save;
export const getFormData=(state)=>state.records.formData;
export const { changeFormData } = recordSlice.actions;
export default recordSlice.reducer;
