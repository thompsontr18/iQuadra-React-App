import React from 'react';

const PopUp = ({ value, onClose }) => {
    // const formattedValue = formatObjectToString(value);
    return (
        <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <div className="bg-blue-100 p-4 rounded-md">
            <button className="text-white bg-[#043d5d] text-xs px-2 py-1 rounded-xl float-right" onClick={onClose}>X</button>
                {Object.entries(value).map(([key, val]) => (
                    <div key={key}>
                        <span>{key}: </span>
                        <span>{val}</span>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PopUp;
