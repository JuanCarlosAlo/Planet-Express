import { v4 } from 'uuid';

const menuItems = [
	{
		id: v4(),
		text: 'MERCURY',
		color: 'rgb(65, 158, 187)',
		route: '/'
	},
	{
		id: v4(),
		text: 'VENUS',
		color: 'rgb(237, 162, 73)',
		route: '/venus'
	},
	{
		id: v4(),
		text: 'EARTH',
		color: 'rgb(109, 46, 213)',
		route: '/earth'
	},
	{
		id: v4(),
		text: 'MARS',
		color: 'rgb(209, 76, 50)',
		route: '/mars'
	},
	{
		id: v4(),
		text: 'JUPITER',
		color: 'rgb(216, 58, 52)',
		route: '/jupiter'
	},
	{
		id: v4(),
		text: 'SATURN',
		color: 'rgb(205, 81, 32)',
		route: '/saturn'
	},
	{
		id: v4(),
		text: 'URANUS',
		color: 'rgb(30, 193, 162)',
		route: '/uranus'
	},
	{
		id: v4(),
		text: 'NEPTUNE',
		color: 'rgb(45, 104, 240)',
		route: '/neptune'
	}
];

export { menuItems };
