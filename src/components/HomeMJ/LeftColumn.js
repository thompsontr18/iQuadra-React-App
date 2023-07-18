import React from "react";

const LeftColumn = () => {
  return (
    <div className="leftColumn w-1/3 p-4">
      <h2 class="text-xl font-bold mb-4 text-[#043d5d]">Filters</h2>
      <form action="">
        <div className="flex items-center">
          <select className="px-4 py-2 border border-gray-300 rounded-l-md">
            <option value="college">College</option>
            <option value="program">Major</option>
            <option value="courses">Courses</option>
            <option value="people">People</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-l-0 border-gray-300"
          />
          <button className="px-4 py-2 bg-[#043d5d] text-white rounded-r-md">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default LeftColumn;
