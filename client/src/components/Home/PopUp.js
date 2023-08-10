import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postComment } from '../../features/recordSlice';
import { getOriginalRecords, getSaveStatus } from '../../features/recordSlice';


const PopUp = ({ value, onClose }) => {
    const dispatch = useDispatch();
    const records = useSelector(getOriginalRecords);
    const save = useSelector(getSaveStatus);
    const desiredRecord = records.find(obj => obj.id === value.id);
    const [commentValue, setCommentValue] = useState(desiredRecord.Notes);
    const handleSubmitComment = (event) => {
        event.preventDefault();
        dispatch(postComment({
            "Comment": commentValue,
            "id": desiredRecord.id
        }));
    };
    const handleCommentChange = (event) => {
        setCommentValue(event.target.value);
    };
    return (
        <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <div className="bg-blue-100 p-4 rounded-lg w-3/4 h-4/5 overflow-auto">
                <div className='collegeAndLink flex items-center'>
                    <div className='w-11/12 flex items-center'>
                        <h1 className='text-[#043d5d] text-3xl font-bold underline decoration-blue-300 pr-5'>{desiredRecord.Colleges}</h1>
                        <h2 className='text-[#043d5d] text-xl pr-5'>●</h2>
                        <h3 className='text-[#043d5d] text-lg underline'><a href={desiredRecord.Link} target='_blank' rel='noreferrer'>{desiredRecord.Link}</a></h3>
                    </div>
                    <div className='float-right w-1/12'>
                        <button className="text-red-700 border-2 border-red-700 rounded-2xl text-xs font-bold px-3 py-1 float-right" onClick={onClose}>X</button>
                    </div>
                </div>

                <div className='majorAndCourse items-center my-10 py-2 border-2 border-[#043d5d] rounded-lg bg-white'>
                    <div className='flex'>
                        <h4 className='text-[#043d5d] font-bold w-3/6 ml-10'>Major</h4>
                        <h4 className='text-[#043d5d] font-bold w-3/6'>Course</h4>
                    </div>
                    <div className='flex'>
                        <h5 className='text-[#043d5d] w-3/6 ml-10'>{desiredRecord.Majors}</h5>
                        <h5 className='text-[#043d5d] w-3/6'>{desiredRecord.Courses}</h5>
                    </div>
                </div>

                <div className='programDetails items-center my-10'>
                    <h2 className='text-[#043d5d] font-bold text-xl'>Program Details:</h2>
                    <div className='flex justify-start my-5'>
                        <h4 className='text-[#043d5d] underline'><a href={`mailto:${desiredRecord.PEmail}`} target="_blank" rel='noreferrer'>{desiredRecord.PEmail}</a></h4>
                        <h4>&emsp;&emsp;&emsp;</h4>
                        <h4 className='text-[#043d5d]'>{desiredRecord.PPhone}</h4>
                    </div>
                    <h4 className='mt-5 border-2 border-[#043d5d] text-[#043d5d] rounded-lg bg-white px-2 py-2'>{desiredRecord.Details}</h4>
                </div>

                <div className='notesDiv items-center my-10'>
                    <h2 className='text-[#043d5d] font-bold text-xl mb-5'>Notes:</h2>
                    <form>
                        <div className="w-full mb-4 border-2 border-[#043d5d] rounded-lg bg-gray-50 ">
                            <div className="px-4 py-2 bg-white rounded-t-lg">
                                <label htmlFor="comment" className="sr-only">Your comment</label>
                                <textarea id="comment" rows="2" className="w-full px-0 text-[#043d5d] bg-white border-0 focus:ring-0" placeholder="Write a comment..." value={commentValue} onChange={handleCommentChange}></textarea>
                            </div>
                            <div className="flex items-center justify-between px-3 py-2 border-t">
                                <input type="reset" className="inline-flex float-right items-center px-2 text-center text-red-700  border-2 border-red-700 rounded-lg cursor-pointer" value="Clear"></input>
                                {save ?
                                    (<button className="inline-flex float-right items-center py-1.5 px-4 text-center text-white bg-green-500 rounded-lg" disabled>Saving...</button>)
                                    :
                                    (<button className="inline-flex float-right items-center py-1.5 px-4 text-center text-white bg-[#043d5d] rounded-lg" onClick={handleSubmitComment}>Save</button>)
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className='businessDetails items-center my-10'>
                    <div className='flex justify-start'>
                        <h4 className='text-[#043d5d] underline'><a href={`mailto:${desiredRecord.BEmail}`} target="_blank" rel='noreferrer'>{desiredRecord.BEmail}</a></h4>
                        <h4>&emsp;&emsp;&emsp;</h4>
                        <h4 className='text-[#043d5d]'>{desiredRecord.BPhone}</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
