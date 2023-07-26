import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncRecords, fetchSearchRecords } from "../../features/recordSlice";

const LeftColumn = () => {
  const [formData, setFormData] = useState({
    Category: 'Colleges',
    SearchFeild: '',
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchSearchRecords(formData));
    console.log("Form submitted:", formData);
  };
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleClear = ()=>{
    setFormData({
      Category: 'Colleges',
      SearchFeild: '',
    });
    dispatch(fetchAsyncRecords());
  };
  return (
    <div className="leftColumn w-1/3 p-4">
      <h2 className="text-xl font-bold mb-4 text-[#043d5d] text-center">
        Search Criteria
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
          <select
            name="Category"
            className="px-4 py-2 border border-gray-300 rounded-l-md w-1/4"
            value={formData.Category}
            onChange={handleDropdownChange}
          >
            <option value="Colleges">Colleges</option>
            <option value="Majors">Major</option>
            <option value="Courses">Courses</option>
            <option value="Details">People</option>
          </select>
          <input
            name="SearchFeild"
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-l-0 rounded-r-md border-gray-300 w-3/4"
            value={formData.SearchFeild}
            onChange={handleDropdownChange}
          />
        </div>
        <div className="flex items-center space-x-4 justify-center py-2">
          <button
            type="submit"
            className="px-4 py-2 bg-[#043d5d] text-white rounded-md w-1/3"
          >
            Search
          </button>
          <button
            className="px-4 py-2 bg-[#043d5d] text-white rounded-md w-1/3"
            onClick={handleClear}
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeftColumn;
