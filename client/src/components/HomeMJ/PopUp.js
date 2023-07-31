import React from 'react';

const PopUp = ({ value, onClose }) => {
    // const formattedValue = formatObjectToString(value);
    return (
        <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <div className="bg-white p-4 rounded-md">
                {Object.entries(value).map(([key, val]) => (
                    <div key={key}>
                        <span>{key}: </span>
                        <span>{val}</span>
                    </div>
                ))}
                <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default PopUp;
