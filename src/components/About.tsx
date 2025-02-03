import React from "react";

const About = () => {
	return (
		<section className="mt-36 flex flex-col-reverse md:flex-row">
			<div className="bg-[#f3f9f5] basis-[50%] py-28 flex flex-col items-center text-center px-3 gap-y-5 md:items-start md:text-left">
				<h1 className="bg-white rounded-full px-4 py-1 font-OpenSans text-[#006837]">Our Philosophy</h1>
				<h2 className="font-Roboto tracking-wide text-xl md:text-[25px] lg:text-[30px] lg:pr-24">
					Building the Future of Business Operations
				</h2>
				<p className="text-sm text-gray-600 lg:pr-16">
					At Marcoby, we're more than a business -- we're a movement aimed at revolutionizing how companies operate,
					scale, and succeed through innovative solutions and strategic implementation.
				</p>
				<div className="flex flex-col items-start gap-5">
					<p className="">
						<span className="text-[#006837] pr-3">&#10003;</span>
						Innovation in scalable solutions
					</p>
					<p className="">
						<span className="text-[#006837] pr-3">&#10003;</span>
						Seamless platform intergration
					</p>
					<p className="">
						<span className="text-[#006837] pr-3">&#10003;</span>
						Business empowerment
					</p>
					<p className="">
						<span className="text-[#006837] pr-3">&#10003;</span>
						Client-centric approach
					</p>
				</div>
			</div>

			<div className="basis-[50%] flex justify-center items-center">
				<img src="../src/assets/logo.jpg" alt="logo" />
			</div>
		</section>
	);
};

export default About;
