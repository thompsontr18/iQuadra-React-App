import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchOriginalRecords,
  fetchSearchInput,
} from "../../features/recordSlice";

const LeftColumn = () => {
  const [initialRender, setInitialRender]=useState(true)
  const [formData, setFormData] = useState({
    CollegeSearch: "",
    MajorsSearch: "",
    CourseSearch: "",
    PersonSearch: "",
    SortBy: "Colleges",
    SortOrder: "Ascending",
    Columns:[true, true, true, true, true, true, true, true, true]
  });
  const [clear, setClear] = useState(true);
  const cols = ["College", "Major", "Course", "Link", "BEmail", "PEmail", "BPhone", "PPhone", "Details"]
  const dispatch = useDispatch();
  const handleInputChange = (event, ind) => {
    const { name, value } = event.target;
    if(name==="Columns"){
      setFormData((prevFormData) => {
        const newColumns = [...prevFormData.Columns]; // Create a copy of the Columns array
        newColumns[ind] = !newColumns[ind]; // Toggle the value at the specified index
        return {
          ...prevFormData,
          Columns: newColumns, // Update the Columns array in the state
        };
      });
    }else{
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
    setClear(false);
    setInitialRender(false);
  };
  useEffect(() => {
    if (clear && !initialRender) {
      dispatch(fetchOriginalRecords());
    } else if(!clear & !initialRender){
      dispatch(fetchSearchInput(formData));
    }
  }, [formData, clear, dispatch, initialRender]);
  const handleClear = (event) => {
    event.preventDefault();
    setFormData({
      CollegeSearch: "",
      MajorsSearch: "",
      CourseSearch: "",
      PersonSearch: "",
      SortBy: "Colleges",
      SortOrder: "Ascending",
      Columns:[true]*9
    });
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
          onChange={(event)=>handleInputChange(event)}
        />
        <input
          name="MajorsSearch"
          type="text"
          placeholder="By Major..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.MajorsSearch}
          onChange={(event)=>handleInputChange(event)}
        />
        <input
          name="CourseSearch"
          type="text"
          placeholder="By Course..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.CourseSearch}
          onChange={(event)=>handleInputChange(event)}
        />
        <input
          name="PersonSearch"
          type="text"
          placeholder="By People..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.PersonSearch}
          onChange={(event)=>handleInputChange(event)}
        />
        <div className="flex items-center justify-center mt-2 py-2">
          <button
            className="px-1 py-1 bg-[#043d5d] text-white rounded-md w-1/2"
            onClick={handleClear}
          >
            Clear Search
          </button>
        </div>
      </div>
      <p className="text-[#043d5d]">Sort By</p>
      <div className="flex items-center justify-center mt-2 px-3">
        <select
          name="SortBy"
          value={formData.SortBy}
          onChange={(event)=>handleInputChange(event)}
          className="border rounded border-gray-300 border-r-0 px-2 py-1 rounded-l-full w-2/3"
        >
          <option value="Colleges">College</option>
          <option value="Majors">Major</option>
          <option value="Courses">Course</option>
        </select>
        <select
          name="SortOrder"
          value={formData.SortOrder}
          onChange={(event)=>handleInputChange(event)}
          className="border rounded border-gray-300 boreder-l-0 px-2 py-1 rounded-r-full w-1/3"
        >
          <option value="Ascending">A-Z</option>
          <option value="Descending">Z-A</option>
        </select>

      </div>
      <p className="text-[#043d5d] py-2">Select Columns to Display</p>
      <div className="grid grid-cols-2">
        {
          cols.map((col, ind) => (
            <div className="flex items-center mx-1" key={ind}>
              <span className="flex-shrink-0 pl-[0.15rem] pr-1">{col}</span>
              <label className="relative inline-flex items-center cursor-pointer ml-auto my-1">
                <input name="Columns" value={formData.Columns[ind]} type="checkbox" className="sr-only peer" onChange={(event)=>handleInputChange(event, ind)} checked={formData.Columns[ind]}/>
                <div className="w-11 h-6 bg-gray-50 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#043d5d]"></div>
              </label>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default LeftColumn;
