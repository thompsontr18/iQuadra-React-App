import React from "react";

const Home=()=>{
    return(
        <div>
            <br></br>
            <div className="row float-left w-full">
                <div className="leftColumn float-left w-4/12 border-2 border-[#043d5d] rounded shadow px-2">
                    <h1 className="font-sans text-white font-bold text-center text-xl">Filters</h1>
                    <div className="firstForm">

                        <div>
                            <div class="container rounded-lg">
                                <form>
                                    <div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1">
                                        <div class="py-1">
                                            <select id="options" class="text-[#5A5A5A] outline-none border-2 border-[#D3D3D3] bg-[#D3D3D3] rounded-lg mr-4">
                                                <option value="Select" disabled selected >Select</option>
                                                <option value="Colleges">Colleges</option>
                                                <option value="Majors">Majors</option>
                                                <option value="Courses">Courses</option>
                                                <option value="Professors">Professors</option>
                                            </select>
                                            <input class="text-base text-[#043d5d] outline-none  mr-6" type="text" placeholder="Search" />
                                            <button class="border-[#D3D3D3] bg-[#D3D3D3] text-[#5A5A5A] text-base rounded-lg px-2 py-1">Search</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                    <br></br><br></br><br></br><br></br><br></br>
                    </div>
                </div>



                <div className="rightColumn float-right w-8/12 border-2 border-[#043d5d] rounded shadow p-5">
                    <h1 className="font-sans text-white font-bold text-center text-xl">Results</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;