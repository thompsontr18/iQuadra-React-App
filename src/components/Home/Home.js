import React from "react";

const Home=()=>{
    return(
        <div>
            <br></br>
            <div className="row float-left w-full">
                <div className="leftColumn float-left w-4/12 border-2 border-[#043d5d] rounded shadow p-5">
                    <h1 className="font-sans text-white font-bold text-center text-xl">Filters</h1>
                    <div className="firstForm">

                    <form>
                        <div class="flex">
                            <div class="relative w-full">
                                <input type="search" id="search-dropdown" class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-100 border-l-2 border border-gray-300" placeholder="Search" required></input>
                                <button type="submit" class="absolute top-0 right-0 p-2.5 h-full text-sm font-medium text-white bg-[#043d5d] rounded-r-lg"><svg class="w-4 h-4"  fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg></button>
                            </div>
                        </div>
                    </form>
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