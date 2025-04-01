import React from "react";
import { Link } from "react-router-dom";
import atlassian from "../assets/svgs/atlassian.svg";
import fortinet from "../assets/svgs/fortinet-logo.svg";
import hubspot from "../assets/svgs/hubspot.svg";
import intuitreal from "../assets/svgs/intuitreal.svg";
import lenovo from "../assets/svgs/lenovo-1.svg";
import microsoft from "../assets/svgs/microsoft-6.svg";
// import ninjaone from "../assets/svgs/ninjaone.svg";
// import nordpass from "../assets/svgs/nordpass.svg";
// import paypal from "../assets/svgs/paypal-3.svg";
// import sentinelone from "../assets/svgs/sentinelone-logo.svg";
// import stripe from "../assets/svgs/stripe-4.svg";

const Partners = () => {
	return (
		<div className="flex overflow-hidden group">
			<div className="flex min-w-full justify-around items-center py-5 px-2 gap-x-6 animate-slide group-hover:paused">
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={atlassian} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.fortinet.com/" className="inline-block max-w-none" target="_blank">
					<img src={fortinet} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={hubspot} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={intuitreal} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={lenovo} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={microsoft} alt=" wolf gordon" width={150} height={70} />
				</a>
			</div>

			{/* Duplicate */}

			<div className="flex min-w-full justify-around items-center py-3 px-2 gap-x-6 animate-slide group-hover:paused">
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={atlassian} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.fortinet.com/" className="inline-block max-w-none" target="_blank">
					<img src={fortinet} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={hubspot} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={intuitreal} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={lenovo} alt=" wolf gordon" width={150} height={70} />
				</a>
				<a href="https://www.atlassian.com/" className="inline-block max-w-none" target="_blank">
					<img src={microsoft} alt=" wolf gordon" width={150} height={70} />
				</a>
			</div>
		</div>
	);
};

export default Partners;
