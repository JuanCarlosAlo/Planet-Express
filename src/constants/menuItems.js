import { v4 } from 'uuid';
import { colors } from './colors';

const menuItems = [
	{
		id: v4(),
		text: 'MERCURY',
		color: colors.mercury,
		route: '/'
	},
	{
		id: v4(),
		text: 'VENUS',
		color: colors.venus,
		route: '/venus'
	},
	{
		id: v4(),
		text: 'EARTH',
		color: colors.earth,
		route: '/earth'
	},
	{
		id: v4(),
		text: 'MARS',
		color: colors.mars,
		route: '/mars'
	},
	{
		id: v4(),
		text: 'JUPITER',
		color: colors.jupiter,
		route: '/jupiter'
	},
	{
		id: v4(),
		text: 'SATURN',
		color: colors.saturn,
		route: '/saturn'
	},
	{
		id: v4(),
		text: 'URANUS',
		color: colors.uranus,
		route: '/uranus'
	},
	{
		id: v4(),
		text: 'NEPTUNE',
		color: colors.neptune,
		route: '/neptune'
	}
];

export { menuItems };
