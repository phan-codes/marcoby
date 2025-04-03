interface SolutionProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const solutionList: SolutionProps[] = [
	{
		name: "By Business Size",
		sublinks: [
			{
				title: "Individual-owned business",
				href: "/",
			},
			{
				title: "Early-stage growing company",
				href: "/",
			},
			{
				title: "Small to mid-sized business",
				href: "/",
			},
			{
				title: "Large-scale established company",
				href: "/",
			},
		],
	},
	{
		name: "By Service Type",
		sublinks: [
			{
				title: "Website & Hosting",
				href: "/",
			},
			{
				title: "Business Formation and Licensing Services",
				href: "/",
			},
			{
				title: "IT Automation & Support",
				href: "/",
			},
			{
				title: "Process Optimization",
				href: "/",
			},
			{
				title: "Branding & Design",
				href: "/",
			},
			{
				title: "Content & Marketing",
				href: "/",
			},
		],
	},
];
