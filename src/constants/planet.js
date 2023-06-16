import { colors } from './colors';
import { planetInfo } from './planetInfo';
import { planetSize } from './planetSize';
import { planetSpecs } from './planetSpecs';

const planets = {
	mercury: {
		title: 'MERCURY',
		info: planetInfo.mercury,
		specs: planetSpecs.mercury,
		color: colors.mercury,
		size: planetSize.mercury
	},
	venus: {
		title: 'VENUS',
		info: planetInfo.venus,
		specs: planetSpecs.venus,
		color: colors.venus,
		size: planetSize.venus
	},
	earth: {
		title: 'EARTH',
		info: planetInfo.earth,
		specs: planetSpecs.earth,
		color: colors.earth,
		size: planetSize.earth
	},
	mars: {
		title: 'MARS',
		info: planetInfo.mars,
		specs: planetSpecs.mars,
		color: colors.mars,
		size: planetSize.mars
	},
	jupiter: {
		title: 'JUPITER',
		info: planetInfo.jupiter,
		specs: planetSpecs.jupiter,
		color: colors.jupiter,
		size: planetSize.jupiter
	},
	saturn: {
		title: 'SATURN',
		info: planetInfo.saturn,
		specs: planetSpecs.saturn,
		color: colors.saturn,
		size: planetSize.saturn
	},
	uranus: {
		title: 'URANUS',
		info: planetInfo.uranus,
		specs: planetSpecs.uranus,
		color: colors.uranus,
		size: planetSize.uranus
	},
	neptune: {
		title: 'NEPTUNE',
		info: planetInfo.neptune,
		specs: planetSpecs.neptune,
		color: colors.neptune,
		size: planetSize.neptune
	}
};

export { planets };
