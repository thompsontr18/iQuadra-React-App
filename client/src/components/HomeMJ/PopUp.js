import React from 'react';


const PopUp = ({ value, onClose }) => {
    return (
        <div className="fixed inset-0 bg-opacity-50 bg-black flex items-center justify-center">
            <div className="bg-blue-100 p-4 rounded-lg w-3/4 h-4/5 overflow-auto">

                <div className='collegeAndLink flex items-center'>
                    <div className='w-11/12 flex'>
                        <h1 className='text-[#043d5d] text-3xl font-bold underline decoration-blue-300 pr-5'>{value.Colleges}</h1>
                        <h2 className='text-[#043d5d] text-xl pr-5'>●</h2>
                        <h3 className='text-[#043d5d] text-lg underline'><a href={value.Link} target='_blank'>{value.Link}</a></h3>
                    </div>
                    <div className='float-right w-1/12'>
                        <button className="text-white bg-[#043d5d] text-xs font-bold px-2 py-1 rounded-xl float-right" onClick={onClose}>X</button>
                    </div>
                </div>

                <div className='majorAndCourse items-center my-10 py-2 border-2 border-[#043d5d] rounded-lg bg-white'>
                    <div className='flex'>
                        <h4 className='text-[#043d5d] font-bold w-3/6 ml-10'>Major</h4>
                        <h4 className='text-[#043d5d] font-bold w-3/6'>Course</h4>
                    </div>
                    <div className='flex'>
                        <h5 className='text-[#043d5d] w-3/6 ml-10'>{value.Majors}</h5>
                        <h5 className='text-[#043d5d] w-3/6'>{value.Courses}</h5>
                    </div>
                </div>

                <div className='programDetails items-center my-10'>
                    <h2 className='text-[#043d5d] font-bold text-xl'>Program Details:</h2>
                    <div className='flex justify-start my-5'>
                        <h4 className='text-[#043d5d] underline'><a href= {`mailto:${value.PEmail}`} target="_blank">{value.PEmail}</a></h4>
                        <h4>&emsp;&emsp;&emsp;</h4>
                        <h4 className='text-[#043d5d]'>{value.PPhone}</h4>
                    </div>
                    <h4 className='mt-5 border-2 border-[#043d5d] text-[#043d5d] rounded-lg bg-white px-2 py-2'>{value.Details}</h4>
                </div>

                <div className='notesDiv items-center my-10'>
                    <h2 className='text-[#043d5d] font-bold text-xl mb-5'>Notes:</h2>
                    <form>
                        <div class="w-full mb-4 border-2 border-[#043d5d] rounded-lg bg-gray-50 ">
                            <div class="px-4 py-2 bg-white rounded-t-lg">
                                <label for="comment" class="sr-only">Your comment</label>
                                <textarea id="comment" rows="2" class="w-full px-0 text-[#043d5d] bg-white border-0 focus:ring-0" placeholder="Write a comment..."></textarea>
                            </div>
                            <div class="flex items-center justify-between px-3 py-2 border-t">
                                <input type="reset" class="inline-flex float-right items-center py-1 px-2 text-center text-xs font-bold text-white bg-[#043d5d] rounded-xl" value="Clear"></input>
                                <button type="submit" class="inline-flex float-right items-center py-2.5 px-4 text-center text-white bg-[#043d5d] rounded-lg">Post comment</button>
                            </div>
                        </div>
                    </form>
                </div>

                <div className='businessDetails items-center my-10'>
                    <div className='flex justify-start'>
                        <h4 className='text-[#043d5d] underline'><a href= {`mailto:${value.BEmail}`} target="_blank">{value.BEmail}</a></h4>
                        <h4>&emsp;&emsp;&emsp;</h4>
                        <h4 className='text-[#043d5d]'>{value.BPhone}</h4>
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
