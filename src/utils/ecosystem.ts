interface EcosystemProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const ecosystemList: EcosystemProps[] = [
	{
		name: "Pulse",
		sublinks: [
			{
				title: "Domain & Hosting",
				href: "/",
			},
			{
				title: "Microsoft 365 & Pax8 Tools",
				href: "/",
			},
			{
				title: "Design Services",
				href: "/",
			},
			{
				title: "Custom Tech Packages",
				href: "/",
			},
			{
				title: "Partner Products",
				href: "/",
			},
		],
	},

	{
		name: "Catalyst",
		sublinks: [
			{
				title: "IT-as-a-Service",
				href: "/",
			},
			{
				title: "Web-as-a-Service",
				href: "/",
			},
			{
				title: "Automation & Systems Admin",
				href: "/",
			},
			{
				title: "Marketing-as-a-Service",
				href: "/",
			},
			{
				title: "Monthly plans with features",
				href: "/",
			},
		],
	},
	{
		name: "Nexus",
		sublinks: [
			{
				title: "Executive Agent (AI Assistant)",
				href: "/",
			},
			{
				title: "Advisor System (N.E.X.U.S.)",
				href: "/",
			},
			{
				title: "Workflow Automation",
				href: "/",
			},
			{
				title: "Dashboard",
				href: "/",
			},

			{
				title: "System Health, Insights, Memory, API integrations",
				href: "/",
			},
		],
	},
];
