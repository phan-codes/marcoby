import React from "react";

const Footer = () => {
	const date = new Date().getFullYear();
	return (
		<footer className="mt-auto bg-[#006837] flex justify-center items-center py-10 text-white font-OpenSans">
			&copy; Marcoby {date}
		</footer>
	);
};

export default Footer;
