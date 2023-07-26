import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchSearchRecords } from "../../features/recordSlice";

const LeftColumn = () => {
  const [formData, setFormData] = useState({
    Category:'',
    SearchFeild:'',
  });
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchSearchRecords(formData))
    console.log('Form submitted:', formData);
  };
  const handleDropdownChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  return (
    <div className="leftColumn w-1/3 p-4">
      <h2 className="text-xl font-bold mb-4 text-[#043d5d] text-center">Search Criteria</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center">
        <select name="Category" className="px-4 py-2 border border-gray-300 rounded-l-md w-1/4" value={formData.Category} onChange={handleDropdownChange}>
            <option value="Colleges">Colleges</option>
            <option value="Majors">Major</option>
            <option value="Courses">Courses</option>
            <option value="Details">People</option>
          </select>
          <input
            name="SearchFeild"
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-l-0 border-gray-300 w-1/2"
            value={formData.SearchFeild}
            onChange={handleDropdownChange}
          />
          <button type="submit" className="px-4 py-2 bg-[#043d5d] text-white rounded-r-md w-1/4">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeftColumn;
