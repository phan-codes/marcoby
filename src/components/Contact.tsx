import React from "react";

const Contact = () => {
	return (
		<section className="pt-36 flex flex-col items-center px-3 bg-[#f3f9f5]">
			<div className="text-center gap-2">
				<h1 className="font-Roboto text-[30px]">Get in Touch</h1>
				<p className="text-sm text-gray-600">
					Ready to transform your business operations? Let's start a conversation.
				</p>
			</div>

			<div className="flex flex-col mt-5 w-full md:mt-20 md:flex-row">
				<div className="basis-[50%] py-10 flex flex-col items-center text-center px-5 gap-y-7 md:items-start md:text-left">
					<div className="flex flex-col gap-y-2">
						<h1 className="font-Roboto">Phone</h1>
						<a href="tel:+15551234567" className="text-sm text-gray-600 hover:underline">
							+1 (555) 123-4567
						</a>
					</div>

					<div className="flex flex-col gap-y-2">
						<h1 className="font-Roboto">Email</h1>
						<a href="mailto:contact@marcoby.com" className="text-sm text-gray-600 hover:underline">
							contact@marcoby.com
						</a>
					</div>

					<div className="flex flex-col gap-y-2">
						<h1 className="font-Roboto">Location</h1>
						<a href="" className="text-sm text-gray-600 hover:underline">
							Southern California
						</a>
					</div>
				</div>

				<div className="basis-[50%] py-10 flex flex-col px-5 gap-y-5">
					<form action="submit">
						<div className="relative">
							<input
								type="text"
								name="name"
								required
								placeholder="Your Name"
								className="p-2 mb-6 peer w-full placeholder-transparent text-black bg-white outline-none caret-black peer border border-gray-200 rounded-md focus:shadow-md"
							/>
							<label
								htmlFor="name"
								className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-1 peer-focus:-top-8
								peer-focus:text-gray-800 duration-500">
								Your Name *
							</label>
						</div>
						<div className="relative py-2">
							<input
								type="email"
								name="email"
								required
								placeholder="Your Email*"
								className="p-2 mb-6 peer w-full placeholder-transparent text-black bg-white outline-none caret-black border border-gray-200 rounded-md focus:shadow-lg"
							/>
							<label
								htmlFor="email"
								className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6
								peer-focus:text-gray-800 duration-500">
								Your Email *
							</label>
						</div>
						<div className="relative py-2">
							<input
								type="text"
								name="subject"
								placeholder="Subject"
								className="p-2 mb-6 peer w-full placeholder-transparent text-black bg-white outline-none caret-black peer border border-gray-200 rounded-md focus:shadow-lg"
							/>
							<label
								htmlFor="subject"
								className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6
								peer-focus:text-gray-800 duration-500">
								Subject
							</label>
						</div>
						<div className="relative py-2">
							<textarea
								name="message"
								required
								placeholder="Message"
								className="text-black outline-none p-3 mb-6 caret-black peer w-full border bg-white border-gray-200 min-h-44 placeholder-transparent rounded-md focus:shadow-lg"
							/>
							<label
								htmlFor="message"
								className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6
								peer-focus:text-gray-800 duration-500">
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
			</div>
		</section>
	);
};

export default Contact;
