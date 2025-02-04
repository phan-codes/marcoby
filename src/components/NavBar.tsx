import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";

const NavBar = () => {
	// ! FOR CLICK EVENT OF HAMBURGER MENU

	const [isMenuShown, setIsMenuShown] = useState(false);

	const handleMenuShow = () => {
		setIsMenuShown(!isMenuShown);
	};
	const hideMenu = () => {
		setIsMenuShown(false);
	};

	window.addEventListener("scroll", hideMenu);

	// DATE VARIABLE FOR FOOTER
	const date = new Date().getFullYear();

	return (
		<nav className="fixed right-0 left-0 z-50 bg-white px-5 flex items-center justify-between shadow-sm">
			<a href="/">
				<img src={logo} alt="logo" className="w-20 h-20" />
			</a>
			<ul className="hidden text-sm md:inline-flex">
				<li className="px-2">
					<a href="" className="hover:text-[#00A651] duration-300">
						Solutions
					</a>
				</li>
				<li className="px-2">
					<a href="" className="hover:text-[#00A651] duration-300">
						About
					</a>
				</li>
				<li className="px-2">
					<a href="" className="hover:text-[#00A651] duration-300">
						Contact
					</a>
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
				className={`fixed right-0 top-0 bottom-0 left-14 bg-white duration-500 md:hidden flex items-end pt-32 text-center md:left-28 flex-col ${
					isMenuShown ? "translate-x-0" : "translate-x-[200%]"
				}`}>
				<ul className="flex flex-col gap-y-7 border-r-2 border-r-[#006837] border-solid mr-6 pr-10">
					<li className="px-2">
						<a href="" className="hover:text-[#00A651] duration-300">
							Solutions
						</a>
					</li>
					<li className="px-2">
						<a href="" className="hover:text-[#00A651] duration-300">
							About
						</a>
					</li>
					<li className="px-2">
						<a href="" className="hover:text-[#00A651] duration-300">
							Contact
						</a>
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
