import React from "react";

const Solutions = () => {
	return (
		<section className="pt-36 flex flex-col items-center px-3">
			<div className="text-center gap-2">
				<h1 className="font-Roboto text-[30px]">Our Core Solutions</h1>
				<p className="text-sm text-gray-600">Intergrated platform designed to transform your business operations</p>
			</div>

			<div className="flex flex-col gap-y-7 gap-x-7 mt-20 md:flex-row">
				<div className="flex flex-col items-start p-5 gap-4 border border-solid border-gray-100 rounded-md shadow-xs basis-[33%]">
					<h1 className="font-Roboto">Nexus</h1>
					<p className="text-xs text-gray-600">
						Headquarters-as-a-Service platform intergrating tools, workflows and insights.
					</p>
					<a href="" className="text-xs font-OpenSans text-[#006837] hover:text-[#00A651] hover:underline duration-300">
						Learn more &#8594;
					</a>
				</div>

				<div className="flex flex-col items-start p-5 gap-4 border border-solid border-gray-100 rounded-md shadow-xs basis-[33%]">
					<h1 className="font-Roboto">Catalyst</h1>
					<p className="text-xs text-gray-600">Managed IT services tailored to businesses of all sizes.</p>
					<a href="" className="text-xs font-OpenSans text-[#006837] hover:text-[#00A651] hover:underline duration-300">
						Learn more &#8594;
					</a>
				</div>

				<div className="flex flex-col items-start p-5 gap-4 border border-solid border-gray-100 rounded-md shadow-xs basis-[33%]">
					<h1 className="font-Roboto">Pulse</h1>
					<p className="text-xs text-gray-600">
						Value added reseller platform for hardware, software, and hosting solutions.
					</p>
					<a href="" className="text-xs font-OpenSans text-[#006837] hover:text-[#00A651] hover:underline duration-300">
						Learn more &#8594;
					</a>
				</div>
			</div>
		</section>
	);
};

export default Solutions;
