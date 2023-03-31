import { colors } from './colors';
import { planetInfo } from './planetInfo';
import { planetSpecs } from './planetSpecs';

const planets = {
	mercury: {
		title: 'MERCURY',
		info: planetInfo.mercury,
		specs: planetSpecs.mercury,
		color: colors.mercury
	},
	venus: {
		title: 'VENUS',
		info: planetInfo.venus,
		specs: planetSpecs.venus,
		color: colors.venus
	},
	earth: {
		title: 'EARTH',
		info: planetInfo.earth,
		specs: planetSpecs.earth,
		color: colors.earth
	},
	mars: {
		title: 'MARS',
		info: planetInfo.mars,
		specs: planetSpecs.mars,
		color: colors.mars
	},
	jupiter: {
		title: 'JUPITER',
		info: planetInfo.jupiter,
		specs: planetSpecs.jupiter,
		color: colors.jupiter
	},
	saturn: {
		title: 'SATURN',
		info: planetInfo.saturn,
		specs: planetSpecs.saturn,
		color: colors.saturn
	},
	uranus: {
		title: 'URANUS',
		info: planetInfo.uranus,
		specs: planetSpecs.uranus,
		color: colors.uranus
	},
	neptune: {
		title: 'NEPTUNE',
		info: planetInfo.neptune,
		specs: planetSpecs.neptune,
		color: colors.neptune
	}
};

export { planets };
