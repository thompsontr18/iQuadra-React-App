import React from "react";

const LeftColumn = () => {
	return (
	<div className="leftColumn w-1/3 pl-4 pr-2 pt-4">
		<h2 class="text-xl font-bold mb-4 text-[#043d5d] text-center">Search Criteria</h2>
		<div>
			<div class="container rounded-lg">
				<form>
					<div class="sm:flex items-center bg-white rounded-lg overflow-hidden px-2 py-1">
						<div class="py-2">
							<select id="options" class="pl-2 py-2 border-[#D3D3D3] rounded-lg outline-none bg-[#D3D3D3] text-[#5A5A5A] text-xs mr-3">
								<option value="Select" disabled selected >Select</option>
								<option value="Colleges">Colleges</option>
								<option value="Majors">Majors</option>
								<option value="Courses">Courses</option>
								<option value="Professors">Professors</option>
							</select>
							<input class="text-[#043d5d] text-xs outline-none border-none  mr-10 md:w-fit" type="text" placeholder="Search" />
							<button class="border-[#D3D3D3] bg-[#D3D3D3] text-[#5A5A5A] text-xs rounded-lg px-2 py-2 ml-3">Search</button>
						</div>
					</div>
				</form>
			</div>
        </div>
	</div>
	);
};

export default LeftColumn;
