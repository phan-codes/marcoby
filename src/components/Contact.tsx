import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import Reveal from "./Reveal";
import toast, { Toaster } from "react-hot-toast";
import useTechCheckStore, { OptionType, TechCheckProps } from "../store/techCheckStore";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

interface PayLoadProps {
	fullname: string;
	businessEmail: string;
	companyName: string;
	helpWith: OptionType | null;
	teamSize: OptionType | null;
}

const Contact = ({ elementRef }) => {
	const { createTechCheck } = useTechCheckStore();
	const contactDetails = [
		{
			type: "Phone",
			details: "+1 (909) 280 0170",
			href: "tel:+19092800170",
			icon: <Phone className="w-8 h-8" />,
		},
		{
			type: "Email",
			details: "learnmore@marcoby.com",
			href: "mailto:learnmore@marcoby.com",
			icon: <Mail className="w-8 h-8" />,
		},
		{
			type: "Location",
			details: "Southern California",
			href: "",
			icon: <MapPin className="w-8 h-8" />,
		},
	];

	const [newTechCheck, setNewTechCheck] = useState<TechCheckProps>({
		fullname: "",
		businessEmail: "",
		companyName: "",
		helpWith: null,
		teamSize: null,
	});

	const helpOptions = [
		{ value: "Hosting & Domains", label: "Hosting & Domains" },
		{ value: "IT Support / Managed Services", label: "IT Support / Managed Services" },
		{ value: "Business Automation", label: "Business Automation" },
		{ value: "Tool Consolidation", label: "Tool Consolidation" },
		{ value: "Not sure yet", label: "Not sure yet" },
	];

	const teamSizeOptions = [
		{ value: "1-5", label: "1-5" },
		{ value: "6-20", label: "6-20" },
		{ value: "21-50", label: "21-50" },
		{ value: "50+", label: "50+" },
	];

	const handleSubmit = async () => {
		const payload = {
			...newTechCheck,
			helpWith: newTechCheck.helpWith?.value || null,
			teamSize: newTechCheck.teamSize?.value || null,
		};

		const { success, message } = await createTechCheck(payload as PayLoadProps);

		if (!success) {
			toast.error(message);
		} else {
			toast.success(message);
			setNewTechCheck({ fullname: "", businessEmail: "", companyName: "", helpWith: null, teamSize: null });
		}
	};

	const handleHelpChange = (value: string) => {
		setNewTechCheck({ ...newTechCheck, helpWith: { value, label: value } });
	};

	const handleTeamSizeChange = (value: string) => {
		setNewTechCheck({ ...newTechCheck, teamSize: { value, label: value } });
	};

	const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setNewTechCheck((prev) => ({ ...prev, [name]: value }));
	};
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
							className="flex flex-col items-start p-5 gap-2 border-none rounded-md basis-[33.3%] shadow-[0px_0px_8px_rgba(0,0,0,0.1)] dark:shadow-[0px_0px_10px_rgb(17,24,39)]">
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
						<div className="relative">
							<input
								type="text"
								name="fullname"
								value={newTechCheck.fullname}
								onChange={handleChange}
								required
								placeholder="Your Name"
								className="p-2 mb-6 peer w-full placeholder-transparent bg-white outline-none caret-black peer border border-gray-200 rounded-md focus:shadow-md dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
							/>
							<label
								htmlFor="fullname"
								className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-1 peer-focus:-top-8
								peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:peer-focus:text-gray-400">
								Full Name *
							</label>
						</div>
						<div className="relative py-2">
							<input
								type="email"
								name="businessEmail"
								value={newTechCheck.businessEmail}
								onChange={handleChange}
								required
								placeholder="Your Email*"
								className="p-2 mb-6 peer w-full placeholder-transparent bg-white outline-none caret-black border border-gray-200 rounded-md focus:shadow-lg dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
							/>
							<label
								htmlFor="businessEmail"
								className="absolute -top-6 left-0
								text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6
								peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:peer-focus:text-gray-400">
								Business Email *
							</label>
						</div>
						<div className="relative py-2">
							<input
								type="text"
								name="companyName"
								value={newTechCheck.companyName}
								onChange={handleChange}
								placeholder="Company Name"
								className="p-2 mb-6 peer w-full placeholder-transparent bg-white outline-none caret-black peer border border-gray-200 rounded-md focus:shadow-lg dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900"
							/>
							<label
								htmlFor="companyName"
								className="absolute -top-6 left-0 text-gray-400 text-sm p-2 pointer-events-none peer-placeholder-shown:top-2 peer-focus:-top-6 peer-focus:text-gray-800 duration-500 dark:peer-placeholder-shown:text-gray-700 dark:peer-focus:text-gray-400">
								Company Name
							</label>
						</div>

						<div className="flex flex-col gap-5 text-gray-400 text-sm duration-500">
							<Select value={newTechCheck.helpWith?.value || ""} onValueChange={handleHelpChange}>
								<SelectTrigger className="w-full p-2 mb-6 bg-white outline-none caret-black border border-gray-200 rounded-md focus:shadow-lg dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900 ">
									<SelectValue placeholder="What do you need?"></SelectValue>
								</SelectTrigger>
								<SelectContent className="bg-gray-50 dark:bg-[#181818]">
									<SelectGroup>
										{helpOptions.map((option, index) => (
											<SelectItem key={index} value={option.value} className="hover:bg-[#00A651]">
												{option.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>

						<div className="flex flex-col gap-5 text-gray-400 text-sm py-2 duration-500">
							<Select value={newTechCheck.teamSize?.value || ""} onValueChange={handleTeamSizeChange}>
								<SelectTrigger className="w-full p-2 mb-6 bg-white outline-none caret-black border border-gray-200 rounded-md focus:shadow-lg dark:caret-gray-400 dark:bg-transparent dark:border dark:border-gray-900 dark:focus:border-gray-800 dark:focus:shadow-slate-900 ">
									<SelectValue placeholder="Select Team Size"></SelectValue>
								</SelectTrigger>
								<SelectContent className="bg-gray-50 dark:bg-[#181818]">
									<SelectGroup>
										{teamSizeOptions.map((option, index) => (
											<SelectItem key={index} value={option.value} className="hover:bg-[#00A651]">
												{option.label}
											</SelectItem>
										))}
									</SelectGroup>
								</SelectContent>
							</Select>
						</div>

						<button
							type="submit"
							onClick={handleSubmit}
							className="shadow-lg px-4 py-2 w-full outline-none border-none text-white rounded-md bg-[#006837] text-xs font-OpenSans hover:bg-[#00A651] duration-300 cursor-pointer">
							Get My Free Tech Check
						</button>
					</div>
				</Reveal>
				<Toaster />
			</div>
		</section>
	);
};

export default Contact;
