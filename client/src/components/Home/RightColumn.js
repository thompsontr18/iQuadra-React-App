import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncRecords, getAllRecords, getLoadStatus } from "../../features/recordSlice";
import PopUp from "./PopUp";

const RightColumn = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncRecords());
  }, [dispatch]);
  const records = useSelector(getAllRecords);
  console.log(records);
  var loading = useSelector(getLoadStatus);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedRowData, setSelectedRowData] = useState(null);
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
          <div className="flex flex-col items-center justify-center h-full">

            <div className="bg-white text-[#043d5d] flex space-x-2 py-1 relative rounded-full justify-center items-center w-1/4">
              <h1 className="text-4xl font-bold">Loading</h1>
              <div className="mb-3 animate-bounce animation-delay-100 text-6xl">.</div>
              <div className="mb-3 animate-bounce animation-delay-200 text-6xl">.</div>
              <div className="mb-3 animate-bounce animation-delay-300 text-6xl">.</div>
            </div>
          </div>
        )
          : (
            <div className="px-4 h-96 flex flex-grow overflow-y-scroll overflow-scroll">
              <table className="table-auto">
                <thead>
                  <tr className="border border-x-2 border-t-2 border-b-2 border-[#043d5d]">
                    {
                      Object.keys(records[0]).map((col, ind) => (
                        <th className="p-3 bg-gray-50 text-left text-xs font-medium text-[#043d5d] uppercase tracking-wider" key={ind}>
                          {col}
                        </th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody className="bg-white text-sm">
                  {records.map((cols, index) => (
                    <tr key={index} className="cursor-pointer hover:bg-blue-100 border" onClick={() => handleRowClick(cols)}>
                      {
                        Object.entries(cols).map(([key, value]) => (
                          <td className="px-2 py-1 border border-blue-100 whitespace-nowrap" key={key}>
                            {value}
                          </td>
                        ))
                      }
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
