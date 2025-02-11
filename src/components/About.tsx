import React from "react";
import aboutImg from "../assets/images/logo.png";
import herobg from "../assets/aboutbg.mp4";
import Reveal from "./Reveal";

const About = ({ elementRef }) => {
	return (
		<section className="relative mt-10 flex flex-col pt-4 items-center pb-24 px-5 md:mt-32" ref={elementRef}>
			<video
				autoPlay
				loop
				muted
				className="absolute w-full h-full top-[50%] left-[50%] object-cover -translate-x-[50%] -translate-y-[50%] z-0">
				<source src={herobg} type="video/mp4" />
			</video>

			<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_top,rgba(228,240,236,0.95),rgba(228,240,236,0.9),rgba(228,240,236,0.8))] dark:bg-[linear-gradient(to_top,rgba(0,0,0,0.95),rgba(0,0,0,0.9),rgba(0,0,0,0.8))] z-1"></div>

			<div className="relative z-3">
				<Reveal>
					<div className="flex flex-col items-center gap-3 mb-14">
						<h1 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] w-fit dark:bg-[#e4f0ec20]">
							Our Story
						</h1>
						<p className="font-Roboto text-[30px]">About Marcoby</p>
					</div>
				</Reveal>

				<div className="flex flex-col gap-10 md:flex-row">
					<div className="basis-[50%] flex justify-center items-center rounded-lg shadow-lg dark:shadow-gray-900">
						<Reveal>
							<img src={aboutImg} alt="logo" />
						</Reveal>
					</div>
					<div className="basis-[50%] flex leading-7 flex-col text-gray-600 items-start text-sm text-center px-3 gap-y-5 md:items-start md:text-left dark:text-gray-400">
						<Reveal>
							<p>
								Born and raised in Jackson, MS, our founder now calls sunny Southern California home. With over a decade
								of experience in the IT services industry, Marcoby was launched in 2021 with a vision to build a company
								that not only thrives but becomes a legacy.
							</p>

							<p className="mt-4">
								At Marcoby, we believe in innovation intergration, and empowerment. Our journey began with a simple
								mission to revolutionize how companies operate scale and succeed.
							</p>
						</Reveal>

						<div className="w-full flex gap-x-3 mt-auto">
							<div className="basis-1/2 py-5 rounded-lg bg-[#e4f0ec] flex flex-col justify-center items-center dark:bg-[#e4f0ec20]">
								<Reveal>
									<h1 className="font-Roboto text-3xl text-[#00A651]">10+</h1>
									<p className="text-xs text-gray-600 dark:text-gray-400">Years Experience</p>
								</Reveal>
							</div>
							<div className="basis-1/2 py-5 rounded-lg bg-[#e4f0ec] flex flex-col justify-center items-center dark:bg-[#e4f0ec20]">
								<Reveal>
									<h1 className="font-Roboto text-3xl text-[#00A651]">100+</h1>
									<p className="text-xs text-gray-600 dark:text-gray-400">Clients Served</p>
								</Reveal>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
