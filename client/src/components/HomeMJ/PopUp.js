import React from 'react';

const PopUp = ({ value, onClose }) => {
    return (
        <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <div className="bg-blue-100 p-4 rounded-s w-3/4">
                <div className='flex items-center'>
                    <h1 className='text-[#043d5d] text-3xl font-bold underline decoration-blue-300 w-4/5'>{value.Colleges}</h1>
                    <div className='w-1/5'>
                        <button className="text-white bg-[#043d5d] text-xs px-2 py-1 rounded-xl float-right" onClick={onClose}>X</button>
                    </div>

                </div>

                {/* {Object.entries(value).map(([key, val]) => (
                    <div key={key}>
                        <span>{key}: </span>
                        <span>{val}</span>
                    </div>
                ))} */}

            </div>
        </div>
    );
};

export default PopUp;
