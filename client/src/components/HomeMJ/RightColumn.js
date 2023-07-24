import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const RightColumn = () => {
  const [records, setRecords] = useState([]);
  useEffect(() => {
    const fetchRecords = async () => {
      try {
        const res = await axios.get("http://localhost:8800/");
        setRecords(res.data);
        console.log(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRecords();
  }, []);
  return (
    <div className="rightColumn w-2/3 p-4">
      <h2 class="text-xl font-bold mb-4 text-[#043d5d] text-center">Results</h2>
      <div class="px-4 h-96 overflow-y-scroll overflow-scroll">
        <table class="table-auto">
          <thead>
            <tr>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                College
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Major
              </th>
              <th class="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
            </tr>
          </thead>
          <tbody class="bg-white">
            {records.map((record) => (
              <tr
                key={
                  record.Colleges + "-" + record.Majors + "-" + record.Courses
                }
              >
                <td class="px-2 py-1 border whitespace-nowrap">{record.Colleges}</td>
                <td class="px-2 py-1 border whitespace-nowrap">{record.Majors}</td>
                <td class="px-2 py-1 border whitespace-nowrap">{record.Courses}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightColumn;
