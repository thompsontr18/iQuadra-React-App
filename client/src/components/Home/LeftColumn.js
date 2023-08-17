import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOriginalRecords,
  fetchSearchInput,
  getFormData,
  changeFormData
} from "../../features/recordSlice";

const LeftColumn = () => {
  const formData=useSelector(getFormData);
  const [initialRender, setInitialRender] = useState(true);
  const cols = ["College", "Major", "Course", "Link", "PEmail", "PPhone", "BPhone","BEmail",  "Details", "Notes"];
  // const [formData, setFormData] = useState({
  //   CollegeSearch: "",
  //   MajorsSearch: "",
  //   CourseSearch: "",
  //   PersonSearch: "",
  //   SortBy: "Colleges",
  //   SortOrder: "Ascending",
  //   Columns: Array(cols.length + 1).fill(true),
  //   Distinct: false,
  //   SelectionChanged: ""
  // });
  const [clear, setClear] = useState(true);
  const dispatch = useDispatch();
  const handleInputChange = (event, ind) => {
    const { name, value } = event.target;
    if (name === "Columns") {
      const newColumns = [...formData.Columns]; // Create a copy of the Columns array
      newColumns[ind] = !newColumns[ind]; // Toggle the value at the specified index
      dispatch(changeFormData({
          ...formData,
          Columns: newColumns, // Update the Columns array in the state
          SelectionChanged: name
        }
      ));

    } else if (name === "Distinct") {
      const copy={...formData};
      var toggle=!copy.Distinct;
      dispatch(changeFormData({
          ...formData,
          [name]: toggle,
          SelectionChanged: name
        }
      ));
    }
    else {
      dispatch(changeFormData({
        ...formData,
        [name]: value,
        SelectionChanged: name
      }));
    }
    setClear(false);
    setInitialRender(false);
  };
  useEffect(() => {
    if (clear && !initialRender) {
      dispatch(fetchOriginalRecords());
    }
    if (formData.SelectionChanged !== "CollegeSearch" && formData.SelectionChanged !== "MajorsSearch" && formData.SelectionChanged !== "CourseSearch" && formData.SelectionChanged !== "PersonSearch" && !initialRender && !clear) {
      dispatch(fetchSearchInput());
    }
  }, [clear, dispatch, initialRender, formData]);
  const handleSubmit = () => {
    dispatch(fetchSearchInput());
  };
  const handleClear = (event) => {
    event.preventDefault();
    dispatch(changeFormData({
      CollegeSearch: "",
      MajorsSearch: "",
      CourseSearch: "",
      PersonSearch: "",
      SortBy: "Colleges",
      SortOrder: "Ascending",
      Columns: Array(cols.length+1).fill(true),
      Distinct: false,
      SelectionChanged: ""
    }));
    setClear(true);
  };
  return (
    <div className="leftColumn w-1/4 p-4">
      <h2 className="text-xl font-bold mb-4 text-[#043d5d] text-center">
        Filter Criteria
      </h2>
      <div className="flex-row items-center justify-center">
        <p className="text-[#043d5d]">Search</p>
        <input
          name="CollegeSearch"
          type="text"
          placeholder="By College..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.CollegeSearch}
          onChange={(event) => handleInputChange(event)}
        />
        <input
          name="MajorsSearch"
          type="text"
          placeholder="By Major..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.MajorsSearch}
          onChange={(event) => handleInputChange(event)}
        />
        <input
          name="CourseSearch"
          type="text"
          placeholder="By Course..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.CourseSearch}
          onChange={(event) => handleInputChange(event)}
        />
        <input
          name="PersonSearch"
          type="text"
          placeholder="By People..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.PersonSearch}
          onChange={(event) => handleInputChange(event)}
        />
        <div className="flex items-center justify-center mt-2 py-2 space-x-3">
          <button
            className="px-3 py-1 text-center text-red-700 border-2 border-red-700 rounded-lg cursor-pointer"
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            className="px-3 py-1 bg-[#043d5d] text-white border-2 rounded-lg border-[#043d5d] cursor-pointer"
            onClick={handleSubmit}
          >
            Search
          </button>
        </div>
      </div>
      <p className="text-[#043d5d] pt-3">Sort By</p>
      <div className="flex items-center justify-center mt-2 px-3">
        <select
          name="SortBy"
          value={formData.SortBy}
          onChange={(event) => handleInputChange(event)}
          className="border rounded border-gray-300 border-r-0 px-2 py-1 rounded-l-full w-2/3"
        >
          <option value="Colleges">College</option>
          <option value="Majors">Major</option>
          <option value="Courses">Course</option>
        </select>
        <select
          name="SortOrder"
          value={formData.SortOrder}
          onChange={(event) => handleInputChange(event)}
          className="border rounded border-gray-300 boreder-l-0 px-2 py-1 rounded-r-full w-1/3"
        >
          <option value="Ascending">A-Z</option>
          <option value="Descending">Z-A</option>
        </select>
      </div>
      <p className="text-[#043d5d] pt-4 pb-2">Select Columns to Display</p>
      <div className="grid grid-cols-2">
        {
          cols.map((col, ind) => (
            <div className="flex items-center mx-1" key={ind}>
              <span className="flex-shrink-0 pl-[0.15rem] pr-1">{col}</span>
              <label className="relative inline-flex items-center cursor-pointer ml-auto my-1">
                <input name="Columns" value={formData.Columns[ind]} type="checkbox" className="sr-only peer" onChange={(event) => handleInputChange(event, ind)} checked={formData.Columns[ind]} />
                <div className="w-11 h-6 bg-gray-50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#043d5d]"></div>
              </label>
            </div>
          ))
        }
      </div>
      <div className="flex items-center py-2">
        <span className="flex-shrink-0 text-[#043d5d]">Show Distinct Records</span>
        <label className="relative inline-flex items-center cursor-pointer ml-auto my-1 pr-1">
          <input name="Distinct" type="checkbox" value={formData.Distinct} className="sr-only peer" onChange={(event) => handleInputChange(event)} checked={formData.Distinct} />
          <div className="w-11 h-6 bg-gray-50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#043d5d]"></div>
        </label>
      </div>
    </div>
  );
};

export default LeftColumn;


