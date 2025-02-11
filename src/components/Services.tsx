import React, { useRef } from "react";
import { Layers, Zap, Box } from "lucide-react";
import Reveal from "./Reveal";

const Services = ({ elementRef }) => {
	const servicesList = [
		{
			name: "Nexus",
			description: "Headquarters-as-a-Service platform intergrating tools, workflows and insights.",
			href: "www.nexus.marcoby.com",
			icon: <Layers className="w-8 h-8" />,
		},

		{
			name: "Calyst",
			description: "Managed IT services tailored to businesses of all sizes.",
			href: "www.catalyst.marcoby.com",

			icon: <Zap className="w-8 h-8" />,
		},
		{
			name: "Pulse",
			description: "Value added reseller platform for hardware, software, and hosting solutions.",
			href: "www.pulse.marcoby.com",
			icon: <Box className="w-8 h-8" />,
		},
	];

	return (
		<section className="pt-10 flex flex-col items-center px-3 md:pt-32" ref={elementRef}>
			<Reveal>
				<div className="flex flex-col justify-center items-center text-center gap-2">
					<h1 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] w-fit dark:bg-[#e4f0ec20]">
						Our Services
					</h1>
					<p className="font-Roboto text-[30px] md:text-[40px]">Comprehensive Solutions</p>
				</div>
			</Reveal>

			<div className="flex flex-col gap-y-7 gap-x-7 mt-20 md:flex-row">
				{servicesList.map((service) => (
					<Reveal>
						<div
							key={service.name}
							className="flex flex-col items-start p-5 gap-4 border-none rounded-md shadow-md basis-[33.3%] dark:shadow-gray-900">
							<div className="text-[#00A651]">{service.icon}</div>
							<h1 className="font-Roboto">{service.name}</h1>
							<p className="text-xs text-gray-600 leading-5 dark:text-gray-400">{service.description}</p>
							<a
								href={service.href}
								className="text-xs font-OpenSans text-[#006837] hover:text-[#00A651] hover:underline duration-300">
								Learn more &#8594;
							</a>
						</div>
					</Reveal>
				))}
			</div>
		</section>
	);
};

export default Services;
