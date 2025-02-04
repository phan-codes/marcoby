import React from "react";

const Hero = () => {
	return (
		<section className="pt-28 px-2 flex justify-center items-center bg-[#f3f9f5] h-screen md:pt-44 md:pb-20">
			<div className="flex flex-col items-center gap-y-7 max-w-[600px] text-center">
				<h1 className="text-[#00A651] font-OpenSans"> Welcome to the Future Of Business Operations</h1>
				<p className="text-4xl text-[#00A651] font-Roboto tracking-wide md:leading-[70px] md:text-6xl">
					Revolutionizing How Companies Scale
				</p>
				<p className="px-1 font-Noto text-sm text-gray-600">
					Empowering businesses with intergrated solutions through our innovative Business Operating System.
				</p>
				<a
					href=""
					className="px-5 py-3 rounded-md bg-[#006837] text-xs font-OpenSans text-white hover:bg-[#00A651] duration-300">
					Explore Our Solutions &#8594;
				</a>
			</div>
		</section>
	);
};

export default Hero;
