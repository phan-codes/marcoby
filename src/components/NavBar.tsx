import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { ChevronDown } from "lucide-react";
import ThemeButton from "./ThemeButton";

const NavBar = ({ scrollToSection, services, hero, contact, about, resources }) => {
	const [isServiceModal, setIsServiceModal] = useState<boolean>();

	const handleIsServiceModal = () => {
		setIsServiceModal(!isServiceModal);
	};

	// ! FOR CLICK EVENT OF HAMBURGER MENU

	const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

	const handleMenuShow = () => {
		setIsMenuShown(!isMenuShown);
	};
	const hideMenu = () => {
		setIsMenuShown(false);
	};

	window.addEventListener("scroll", hideMenu);

	// DATE VARIABLE FOR FOOTER
	const date = new Date().getFullYear();

	// SERVICES LIST

	const servicesList = [
		{
			name: "Nexus",
			description: "Headquarters-as-a-Service Platform",
			href: "www.nexus.marcoby.com",
		},

		{
			name: "Calyst",
			description: "Managed IT Services",
			href: "www.catalyst.marcoby.com",
		},
		{
			name: "Pulse",
			description: "Value-added Reseller Platform",
			href: "www.pulse.marcoby.com",
		},
	];

	return (
		<nav className="fixed right-0 left-0 z-50 bg-white px-5 flex items-center justify-between shadow-sm dark:bg-black">
			{/* NAV LOGO */}
			<a href="/">
				<img src={logo} alt="logo" className="w-20 h-20" />
			</a>
			{/* THEME BUTTON */}

			<ThemeButton />

			{/* NAV LINKS */}

			<ul className="hidden text-sm md:inline-flex gap-x-4">
				<li>
					<button className="hover:text-[#00A651] duration-300 cursor-pointer" onClick={() => scrollToSection(hero)}>
						Home
					</button>
				</li>
				<li className="relative flex items-center group">
					<button
						className="group-hover:text-[#00A651] duration-300 cursor-pointer peer"
						onClick={() => scrollToSection(services)}>
						Services
					</button>
					<span className="group-hover:rotate-180 group-hover:text-[#00A651]">
						<ChevronDown className="h-3 w-3" />
					</span>

					<div
						className={`hidden bg-white absolute top-5 -left-36 w-[320px] shadow-md rounded-lg flex-col items-start text-left peer-hover:flex hover:flex dark:bg-black`}>
						{servicesList.map((service) => (
							<a
								href={service.href}
								key={service.name}
								className="inline-block w-full px-5 py-4 hover:bg-[#e4f0ec] group rounded-lg dark:hover:bg-[#e4f0ec20]">
								<h1 className="font-Roboto group-hover:text-[#00A651]">{service.name}</h1>
								<p className="text-xs text-gray-600 leading-5 dark:text-gray-400">{service.description}</p>
							</a>
						))}
					</div>
				</li>

				<li>
					<button
						className="hover:text-[#00A651] duration-300 cursor-pointer"
						onClick={() => scrollToSection(resources)}>
						Resources & Tools
					</button>
				</li>
				<li>
					<button className="hover:text-[#00A651] duration-300 cursor-pointer" onClick={() => scrollToSection(about)}>
						About
					</button>
				</li>

				<li>
					<button className="hover:text-[#00A651] duration-300 cursor-pointer" onClick={() => scrollToSection(contact)}>
						Contact
					</button>
				</li>
			</ul>

			{/* ! HAMBURGER MENU ICON */}

			<div className="flex flex-col gap-y-1 md:hidden cursor-pointer relative" onClick={handleMenuShow}>
				<div
					className={`w-7 h-[2px] bg-[#006837] rounded-full duration-300 ${
						isMenuShown ? "absolute rotate-45 right-2 duration-300 z-50" : ""
					}`}></div>
				<div className={`w-10 h-[2px] bg-[#006837] rounded-full duration-300 ${isMenuShown ? "hidden" : ""}`}></div>
				<div
					className={`w-7 h-[2px] bg-[#006837] rounded-full self-end duration-300 ${
						isMenuShown ? "absolute -rotate-45 right-2 duration-300 z-50 " : ""
					}`}></div>
			</div>

			{/* HAMNURGER MENU */}

			<div
				className={`fixed right-0 top-0 bottom-0 left-14 bg-white duration-500 md:hidden flex items-end pt-32 text-right flex-col dark:bg-black ${
					isMenuShown ? "translate-x-0" : "translate-x-[200%]"
				}`}>
				<ul className="flex flex-col gap-y-4 border-r-2 border-r-[#006837] border-solid mr-6 pr-5 py-4">
					<li className="px-2 py-2">
						<button className="hover:text-[#00A651] duration-300 cursor-pointer" onClick={() => scrollToSection(hero)}>
							Home
						</button>
					</li>
					<li className="px-2 py-2 cursor-pointer flex items-center group">
						<button
							className="hover:text-[#00A651] duration-300 cursor-pointer"
							onClick={() => scrollToSection(services)}>
							Services
						</button>
					</li>
					<li className="px-2 py-2 rounded-full cursor-pointer">
						<button
							className="hover:text-[#00A651] duration-300 cursor-pointer"
							onClick={() => scrollToSection(resources)}>
							Resorces & Tools
						</button>
					</li>
					<li className="px-2 py-2 rounded-full cursor-pointer">
						<button className="hover:text-[#00A651] duration-300 cursor-pointer" onClick={() => scrollToSection(about)}>
							About
						</button>
					</li>

					<li className="px-2 py-2 rounded-full cursor-pointer">
						<button
							className="hover:text-[#00A651] duration-300 cursor-pointer"
							onClick={() => scrollToSection(contact)}>
							Contact
						</button>
					</li>
				</ul>

				<footer className="w-full mt-auto bg-[#006837] flex justify-center items-center py-5 text-white font-OpenSans">
					&copy; Marcoby {date}
				</footer>
			</div>
		</nav>
	);
};

export default NavBar;
