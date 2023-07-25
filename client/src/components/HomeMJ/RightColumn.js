import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncRecords, getAllRecords } from "../../features/recordSlice";

const RightColumn = () => {
  const records = useSelector(getAllRecords);
  console.log(records);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncRecords())
  }, [dispatch]);
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
            
            {records.map((item, index) => (
              <tr key={index}>
                <td class="px-2 py-1 border whitespace-nowrap">
                  {item.Colleges}
                </td>
                <td class="px-2 py-1 border whitespace-nowrap">
                  {item.Colleges}
                </td>
                <td class="px-2 py-1 border whitespace-nowrap">
                  {item.Colleges}
                </td>
              </tr>
            ))}
            {/* <tr
              key={
                record.Colleges + "-" + record.Majors + "-" + record.Courses
              }
            >
              <td class="px-2 py-1 border whitespace-nowrap">{record.Colleges}</td>
              <td class="px-2 py-1 border whitespace-nowrap">{record.Majors}</td>
              <td class="px-2 py-1 border whitespace-nowrap">{record.Courses}</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RightColumn;
