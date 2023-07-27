import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOriginalRecords, fetchSearchInput } from "../../features/recordSlice";

const LeftColumn = () => {
  const [formData, setFormData] = useState({
    CollegeSearch: "",
    MajorsSearch: "",
    CourseSearch: "",
    PersonSearch: ""
  });
  const dispatch = useDispatch();
  const handleInputChange = async(event) => {
    const { name, value } = event.target;
    await setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
    dispatch(fetchSearchInput(formData));
  };
  const handleClear = (event)=>{
    event.preventDefault();
    console.log(formData);
    setFormData({
      CollegeSearch: "",
    });
    dispatch(fetchOriginalRecords());
  };
  return (
    <div className="leftColumn w-1/4 p-4">
      <h2 className="text-xl font-bold mb-4 text-[#043d5d] text-center">
        Filter Criteria
      </h2>
      <form className="items-center justify-center">
          <input
            name="CollegeSearch"
            type="text"
            placeholder="Search By College..."
            className="px-4 py-2 border rounded-md border-gray-300 w-full"
            value={formData.CollegeSearch}
            onChange={handleInputChange}
          />
          <input
            name="MajorsSearch"
            type="text"
            placeholder="Search By Major..."
            className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
            value={formData.MajorsSearch}
            onChange={handleInputChange}
          />
          <input
            name="CourseSearch"
            type="text"
            placeholder="Search By Course..."
            className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
            value={formData.CourseSearch}
            onChange={handleInputChange}
          />
          <input
            name="PersonSearch"
            type="text"
            placeholder="Search By People..."
            className="px-4 py-2 border rounded-md border-gray-300 w-full mt-2"
            value={formData.PersonSearch}
            onChange={handleInputChange}
          />
        <div className="flex items-center justify-center mt-2 py-2">
          <button
            className="px-4 py-2 bg-[#043d5d] text-white rounded-md w-1/2"
            onClick={handleClear}
          >
            Clear Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeftColumn;
