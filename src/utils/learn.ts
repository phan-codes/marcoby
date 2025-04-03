interface LearnProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const learnList: LearnProps[] = [
	{
		name: "Blog: Beyond IT: Learn with Marcoby",
		sublinks: [
			{
				title: "Automation",
				href: "/",
			},
			{
				title: "Tech for Business",
				href: "/",
			},
			{
				title: "MSP Insights",
				href: "/",
			},
			{
				title: "Productivity",
				href: "/",
			},
			{
				title: "Vendor Deals",
				href: "/",
			},
		],
	},

	{
		name: "Resources",
		sublinks: [
			{
				title: "Guides",
				href: "/",
			},
			{
				title: "Checklists",
				href: "/",
			},
			{
				title: "Whitepapers",
				href: "/",
			},
			{
				title: "Productivity",
				href: "/",
			},
			{
				title: "Integration with OneDrive-based knowledge",
				href: "/",
			},
		],
	},
];
