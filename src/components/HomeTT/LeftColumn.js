import React from "react";
import Popup from 'reactjs-popup';

const LeftColumn = () => {
	return (
	<div className="leftColumn w-1/3 pl-4 pr-2 pt-4">
		<div className="">
		<h2 className="heading text-xl font-bold mb-4 text-[#043d5d] text-center">
			Search Criteria
            <Popup trigger=
                {<button className="bg-white rounded-full text-sm px-1 float-right mt-1">?</button>}
                position="top center">
                <div>
					<p className="bg-white rounded-sm text-[#043d5d] text-center text-sm px-2">
						Fill out the search box/boxes accordingly.<br></br>
						More than one search box can be used<br></br>
						to further narrow your results.
					</p>
				</div>
            </Popup>
		</h2>
		</div>
		
		
		<div>
			<div className="container rounded-lg">
				<form>
					<div className="formDiv sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1">
						<div className="optionDiv py-2">
							<select id="options" className="pl-2 py-2 border-[#D3D3D3] rounded-lg outline-none bg-[#D3D3D3] text-[#5A5A5A] text-xs mr-3">
								<option value="Select" disabled selected >Select</option>
								<option value="Colleges">Colleges</option>
								<option value="Majors">Majors</option>
								<option value="Courses">Courses</option>
								<option value="Professors">Professors</option>
							</select>
							<input className=" inputDiv text-[#043d5d] text-xs outline-none border-none  mr-10 md:w-fit" type="text" placeholder="Search" />
							<button className="buttonDiv border-[#D3D3D3] bg-[#D3D3D3] text-[#5A5A5A] text-xs rounded-lg px-2 py-2 ml-3">Search</button>
						</div>
					</div>
				</form>
				<br></br>
				<form>
					<div className="formDiv sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1">
						<div className="optionDiv py-2">
							<select id="options" className="pl-2 py-2 border-[#D3D3D3] rounded-lg outline-none bg-[#D3D3D3] text-[#5A5A5A] text-xs mr-3">
								<option value="Select" disabled selected >Select</option>
								<option value="Colleges">Colleges</option>
								<option value="Majors">Majors</option>
								<option value="Courses">Courses</option>
								<option value="Professors">Professors</option>
							</select>
							<input className=" inputDiv text-[#043d5d] text-xs outline-none border-none  mr-10 md:w-fit" type="text" placeholder="Search" />
							<button className="buttonDiv border-[#D3D3D3] bg-[#D3D3D3] text-[#5A5A5A] text-xs rounded-lg px-2 py-2 ml-3">Search</button>
						</div>
					</div>
				</form>
				<br></br>
			</div>
        </div>
	</div>
	);
};

export default LeftColumn;
