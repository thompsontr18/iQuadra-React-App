import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncRecords, getAllRecords, getLoadStatus } from "../../features/recordSlice";
import PopUp from "./PopUp";

const RightColumn = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncRecords());
  },[dispatch]);
  const records = useSelector(getAllRecords);
  const loading = useSelector(getLoadStatus);
  console.log(loading);
  console.log(records);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
  // console.log(Object.keys(records[1]));
  const handleRowClick = (rowData) => {
    setSelectedRowData(rowData);
    setShowPopup(true);
  };
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="rightColumn w-3/4 p-4 flex flex-col">
      <h2 className="text-xl font-bold mb-4 text-[#043d5d] text-center">Results</h2>
      {
        loading === true ? (
            <div class="bg-white flex space-x-2 p-5 top-1/3 relative rounded-full justify-center items-center mx-96">
              <div class="bg-[#043d5d] w-4 h-4 rounded-full animate-bounce animation-delay-100"></div>
              <div class="bg-[#043d5d] w-4 h-4 rounded-full animate-bounce animation-delay-200"></div>
              <div class="bg-[#043d5d] w-4 h-4 rounded-full animate-bounce animation-delay-300"></div>
            </div>
        )
          : (
            <div className="px-4 h-96 flex flex-grow overflow-y-scroll overflow-scroll">
              <table className="table-auto">
                <thead>
                  <tr className="border border-x-2 border-t-2 border-b-2 border-[#043d5d]">
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      College
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Major
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Course
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Link
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Business Email
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Program Email
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Business Phone Number
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Program Phone Number
                    </th>
                    <th className="px-6 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider">
                      Contact Person
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white text-sm">

                  {records.map((item, index) => (
                    <tr key={index} className="cursor-pointer hover:bg-blue-100 border" onClick={() => handleRowClick(item)}>
                      <td className="px-2 py-1 border border-blue-100 border-l-[#043d5d] border-l-2 whitespace-nowrap">
                        {item.Colleges}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 whitespace-nowrap">
                        {item.Majors}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 whitespace-nowrap">
                        {item.Courses}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 whitespace-nowrap">
                        {item.Link}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 whitespace-nowrap">
                        {item.BEmail}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 whitespace-nowrap">
                        {item.PEmail}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 whitespace-nowrap">
                        {item.BPhone}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 whitespace-nowrap">
                        {item.PPhone}
                      </td>
                      <td className="px-2 py-1 border border-blue-100 border-r-[#043d5d] border-r-2">
                        {item.Details}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {showPopup && (
                <PopUp value={selectedRowData} onClose={handleClosePopup} />
              )}
            </div>
          )
      }
    </div>
  );
};

export default RightColumn;
