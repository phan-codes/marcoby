import { LocateFixed, Mail, MapPin, Phone } from "lucide-react";
import React from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Contact = ({ elementRef }) => {
	const contactDetails = [
		{
			type: "Phone",
			details: "+1 (555) 123-4567",
			href: "tel:+15551234567",
			icon: <Phone className="w-8 h-8" />,
		},
		{
			type: "Email",
			details: "contact@marcoby.com",
			href: "mailto:contact@marcoby.com",
			icon: <Mail className="w-8 h-8" />,
		},
		{
			type: "Location",
			details: "Southern California",
			href: "",
			icon: <MapPin className="w-8 h-8" />,
		},
	];
	return (
		<section
			className="py-10 flex flex-col items-center px-3 bg-[#f5f9f5] md:pt-32 dark:bg-[#f3f9f507]"
			ref={elementRef}>
			<Reveal>
				<div className="flex flex-col items-center text-center gap-3 mb-7">
					<h1 className="font-OpenSans text-[#00A651] rounded-full px-3 py-1 bg-[#e4f0ec] w-fit dark:bg-[#e4f0ec20]">
						Get in Touch
					</h1>
					<p className="font-Roboto text-[30px]">Contact Us</p>
					<p className="text-sm text-gray-600 leading-7 dark:text-gray-400">
						Ready to transform your business? Reach out to us and let's discuss how we can help you scale
					</p>
				</div>
			</Reveal>

			<div className="mt-5 w-full md:mt-10">
				<div className="py-10 flex flex-col gap-y-7 gap-x-7 md:flex-row">
					{contactDetails.map(({ details, href, icon, type }) => (
						<div
							key={type}
							className="flex flex-col items-start p-5 gap-2 border-none rounded-md shadow-md basis-[33.3%] dark:shadow-gray-900">
							<Reveal>
								<div className="text-[#006837] mb-2">{icon}</div>
								<h1 className="font-Roboto">{type}</h1>
								<a href={href} className="text-sm text-gray-600 hover:underline dark:text-gray-400">
									{details}
								</a>
							</Reveal>
						</div>
					))}
				</div>

				<Reveal>
					<div className="py-10 flex flex-col gap-y-5 mx-auto max-w-[600px]">
						<h1 className="font-Roboto text-[25px] text-center md:text-[30px]">Write us a message</h1>
						<form action="submit">
							<div className="relative">
								<input
									type="text"
									name="name"
									required
									placeholder="Your Name"
									className="p-2 mb-6 peer w-full placeholder-transparent text-black bg-white outline-none caret-black peer border border-gray-200 rounded-md focus:shadow-md dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
								/>
								<label
									htmlFor="name"
									className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-1 peer-focus:-top-8
								peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:peer-focus:text-gray-400">
									Your Name *
								</label>
							</div>
							<div className="relative py-2">
								<input
									type="email"
									name="email"
									required
									placeholder="Your Email*"
									className="p-2 mb-6 peer w-full placeholder-transparent text-black bg-white outline-none caret-black border border-gray-200 rounded-md focus:shadow-lg dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
								/>
								<label
									htmlFor="email"
									className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6
								peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:peer-focus:text-gray-400">
									Your Email *
								</label>
							</div>
							<div className="relative py-2">
								<input
									type="text"
									name="subject"
									placeholder="Subject"
									className="p-2 mb-6 peer w-full placeholder-transparent text-black bg-white outline-none caret-black peer border border-gray-200 rounded-md focus:shadow-lg dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
								/>
								<label
									htmlFor="subject"
									className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6
								peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:peer-focus:text-gray-400">
									Subject
								</label>
							</div>
							<div className="relative py-2">
								<textarea
									name="message"
									required
									placeholder="Message"
									className="text-black outline-none p-3 mb-6 caret-black peer w-full border bg-white border-gray-200 min-h-44 placeholder-transparent rounded-md focus:shadow-lg dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
								/>
								<label
									htmlFor="message"
									className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6
								peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:peer-focus:text-gray-400">
									Message *
								</label>
							</div>
							<button
								type="submit"
								className="shadow-lg px-4 py-2 w-full outline-none border-none text-white rounded-md bg-[#006837] text-xs font-OpenSans hover:bg-[#00A651] duration-300">
								Send Message
							</button>
						</form>
					</div>
				</Reveal>
			</div>
		</section>
	);
};

export default Contact;
