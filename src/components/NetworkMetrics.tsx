import React from "react";
import Reveal from "./Reveal";
import { Download, Layers, Signal, Upload, Wifi } from "lucide-react";

const NetworkMetrics = ({ elementRef }) => {
	const performanceList = [
		{
			name: "Download Speed",
			record: 25,
			description: "Recommend for small businesses",
			icon: <Download className="w-8 h-8" />,
		},

		{
			name: "Upload Speed",
			record: 25,
			description: "Ideal for video conferencing",
			icon: <Upload className="w-8 h-8" />,
		},
		{
			name: "Ping",
			record: 25,
			description: "Optimal latency range",
			icon: <Signal className="w-8 h-8" />,
		},
		{
			name: "Jitter",
			record: 25,
			description: "For stable connections",
			icon: <Wifi className="w-8 h-8" />,
		},
	];

	return (
		<section className="py-10 flex flex-col items-center w-full px-3 md:pt-32 " ref={elementRef}>
			<Reveal>
				<div className="flex flex-col justify-center items-center text-center gap-2">
					<h1 className="font-Roboto text-[30px] text-[#00A651] md:text-[40px]">Network Performance Hub</h1>
					<p className=" text-gray-600 leading-7 dark:text-gray-400">
						Comprehensive network analysis and monitoring tools
					</p>
				</div>
			</Reveal>

			<div className="flex flex-col gap-y-7 gap-x-7 w-full mt-20 md:flex-row">
				{performanceList.map((performance) => (
					<div
						key={performance.name}
						className="flex flex-col items-start p-5 gap-4 border-none rounded-md shadow-md basis-[25%] w-full dark:shadow-gray-900 duration-200 hover:border hover:border-solid hover:border-[#00A651]">
						<div className="text-[#00A651]">{performance.icon}</div>
						<h1 className="font-Roboto">{performance.name}</h1>
						<h2 className="font-Roboto text-[25px] text-[#00A651]">{performance.record}+ Mbps</h2>
						<p className="text-xs text-gray-600 leading-5 dark:text-gray-400">{performance.description}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default NetworkMetrics;
