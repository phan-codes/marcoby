interface AboutProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const aboutList: AboutProps[] = [
	{
		name: "About Marcoby",
		sublinks: [
			{
				title: "Vision, mission, and values",
				href: "/",
			},
			{
				title: "Founder story (Von & Kristin – the family + legacy vision)",
				href: "/",
			},
			{
				title: "Timeline of growth / milestones",
				href: "/",
			},
			{
				title: "Why Marcoby?",
				href: "/",
			},
		],
	},
];
