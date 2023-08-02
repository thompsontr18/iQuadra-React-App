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
    SortBy: "Colleges",
    SortOrder: "Ascending",
  });
  const [clear, setClear] = useState(true);
  const cols = ["College", "Major", "Course", "Link", "Bus. Email", "Prog. Email", "Bus. Phone", "Prog. Phone", "Details"]
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
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
      SortBy: "Colleges",
      SortOrder: "Ascending"
    });
    dispatch(fetchOriginalRecords());
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
      </div>
      <p className="text-[#043d5d]">Sort By</p>
      <div className="flex items-center justify-center mt-2 px-3">
        <select
          name="SortBy"
          value={formData.SortBy}
          onChange={handleInputChange}
          className="border rounded border-gray-300 border-r-0 px-2 py-1 rounded-l-full w-2/3"
        >
          <option value="Colleges">College</option>
          <option value="Majors">Major</option>
          <option value="Courses">Course</option>
        </select>
        <select
          name="SortOrder"
          value={formData.SortOrder}
          onChange={handleInputChange}
          className="border rounded border-gray-300 boreder-l-0 px-2 py-1 rounded-r-full w-1/3"
        >
          <option value="Ascending">ASC</option>
          <option value="Descending">DSC</option>
        </select>

      </div>
      <p className="text-[#043d5d] py-2">Select Columns to Display</p>
      <div className="grid grid-cols-2">
        {
          cols.map((col, ind) => (
            <div className="flex items-center mx-3" key={ind}>
              {/* <label
                className="flex-shrink-0 pl-[0.15rem] pr-1"
              >{col}</label>
              <input
                className="w-8 ml-auto appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                type="checkbox" checked="false" /> */}
              <span class="flex-shrink-0 pl-[0.15rem] pr-1">{col}</span>
              <label class="relative inline-flex items-center cursor-pointer ml-auto my-1">

                <input type="checkbox" value="" class="sr-only peer" checked="false"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#043d5d]"></div>

              </label>
            </div>

          ))
        }


      </div>
    </div>
  );
};

export default LeftColumn;
