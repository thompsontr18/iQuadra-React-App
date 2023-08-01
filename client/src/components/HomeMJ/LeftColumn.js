import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchOriginalRecords,
  fetchSearchInput,
} from "../../features/recordSlice";

const LeftColumn = () => {
  const [formData, setFormData] = useState({
    CollegeSearch: "",
    MajorsSearch: "",
    CourseSearch: "",
    PersonSearch: "",
    SortBy:"Colleges",
    SortOrder:"Ascending"
  });
  const [clear, setClear]=useState(true);
  const dispatch = useDispatch();
  const handleInputChange =(event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    setClear(false);
  };
  useEffect(() => {
    if (clear) {
      dispatch(fetchOriginalRecords());
    } else {
      dispatch(fetchSearchInput(formData));
    }
  }, [formData, clear, dispatch]);
  const handleClear = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      CollegeSearch: "",
      MajorsSearch: "",
      CourseSearch: "",
      PersonSearch: "",
      SortBy:"Colleges",
      SortOrder:"Ascending"
    });
    dispatch(fetchOriginalRecords());
  };
  return (
    <div className="leftColumn w-1/4 p-4">
      <h2 className="text-xl font-bold mb-4 text-[#043d5d] text-center">
        Filter Criteria
      </h2>
      <form className="flex-row items-center justify-center">
        <p className="text-[#043d5d]">Search</p>
        <input
          name="CollegeSearch"
          type="text"
          placeholder="By College..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.CollegeSearch}
          onChange={handleInputChange}
        />
        <input
          name="MajorsSearch"
          type="text"
          placeholder="By Major..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.MajorsSearch}
          onChange={handleInputChange}
        />
        <input
          name="CourseSearch"
          type="text"
          placeholder="By Course..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.CourseSearch}
          onChange={handleInputChange}
        />
        <input
          name="PersonSearch"
          type="text"
          placeholder="By People..."
          className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
          value={formData.PersonSearch}
          onChange={handleInputChange}
        />
        <div className="flex items-center justify-center mt-2 py-2">
          <button
            className="px-1 py-1 bg-[#043d5d] text-white rounded-md w-1/2"
            onClick={handleClear}
          >
            Clear Search
          </button>
        </div>
      </form>
      <p className="text-[#043d5d]">Sort By</p>
      <div className="flex items-center justify-center mt-2">
        <select
          name="SortBy"
          value={formData.SortBy}
          onChange={handleInputChange}
          className="border rounded border-gray-300 border-r-0 px-2 py-1 rounded-l-full w-1/3"
        >
          <option value="Colleges">College</option>
          <option value="Majors">Major</option>
          <option value="Courses">Course</option>
        </select>
        <select
          name="SortOrder"
          value={formData.SortOrder}
          onChange={handleInputChange}
          className="border rounded border-gray-300 boreder-l-0 px-2 py-1 rounded-r-full w-1/2"
        >
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>
        
      </div>
    </div>
  );
};

export default LeftColumn;
