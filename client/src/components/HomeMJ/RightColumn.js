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
    <div className="rightColumn w-3/4 p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-[#043d5d] text-center">Results</h2>
      <div className="px-4 h-96 flex flex-grow overflow-y-scroll overflow-scroll">
        <table className="table-auto">
          <thead>
            <tr>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                College
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Major
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Course
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Link
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Business Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Program Email
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Business Phone Number
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Program Phone Number
              </th>
              <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Contact Person
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            
            {records.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.Colleges}
                </td>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.Majors}
                </td>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.Courses}
                </td>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.Link}
                </td>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.BEmail}
                </td>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.PEmail}
                </td>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.BPhone}
                </td>
                <td className="px-2 py-1 border whitespace-nowrap">
                  {item.PPhone}
                </td>
                <td className="px-2 py-1 border">
                  {item.Details}
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
