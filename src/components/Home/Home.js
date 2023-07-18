import React from "react";

const Home=()=>{
    return(
        <div>
            <br></br>
            <div className="row float-left w-full">
                <div className="leftColumn float-left w-4/12 border-2 border-[#043d5d] rounded shadow p-5">
                    <h1 className="font-sans text-white font-bold text-center text-xl">Filters</h1>

                    <div className="firstForm">
                    <br></br><br></br><br></br><br></br><br></br>
                    </div>
                </div>


                <div className="rightColumn float-right w-8/12 border-2 border-[#043d5d] rounded shadow p-5">
                    <h1 className="font-sans text-white font-bold text-center text-xl">Results</h1>

                    <div class=" items-center">
                        <div class="container mx-auto rounded-lg p-14">
                            <form>
                                <div class="sm:flex items-center bg-white border-[#043d5d] border-2 rounded-lg overflow-hidden px-2 py-1 justify-between">
                                    <input class="text-base text-[#043d5d] flex-grow outline-none px-2 bg-white" type="text" placeholder="Search" />
                                    <div class="ms:flex items-center px-2 rounded-lg space-x-4 mx-auto ">
                                        <select id="options" class="text-base text-center text-[#043d5d]  border-[#043d5d] border-2 py-2 rounded-lg bg-white" required>
                                        <option value="College" disabled selected >Select</option>
                                            <option value="College">College</option>
                                            <option value="Major">Major</option>
                                            <option value="Course">Course</option>
                                            <option value="Professor">Professor</option>
                                        </select>
                                            <button class="text-base text-[#043d5d] rounded-lg px-4 py-2 border-[#043d5d] border-2">Search</button>
                                        </div>
                                    </div>
                            </form>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Home;