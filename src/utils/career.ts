interface CareerProps {
	name: string;
	sublinks: {
		title: string;
		href: string;
	}[];
}

export const careerList: CareerProps[] = [
	{
		name: "Careers / Join Us",
		sublinks: [
			{
				title: "Culture, mission-aligned hiring",
				href: "/",
			},
			{
				title: "Open roles at Marcoby and within Space Krashers",
				href: "/",
			},
			{
				title: "Internships, volunteer roles, remote-first opportunities",
				href: "/",
			},
			{
				title: "Build With Us – highlight impact and vision",
				href: "/",
			},
		],
	},
];
