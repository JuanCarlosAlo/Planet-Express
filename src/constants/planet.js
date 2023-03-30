import { planetInfo } from './planetInfo';
import { planetSpecs } from './planetSpecs';

const planets = {
	mercury: {
		title: 'MERCURY',
		info: planetInfo.mercury,
		specs: planetSpecs.mercury,
		imgPlanet: './assets/planet-mercury.svg'
	},
	venus: {
		title: 'VENUS',
		info: planetInfo.venus,
		specs: planetSpecs.venus,
		imgPlanet: './assets/planet-venus.svg'
	},
	earth: {
		title: 'EARTH',
		info: planetInfo.earth,
		specs: planetSpecs.earth,
		imgPlanet: './assets/planet-earth.svg'
	},
	mars: {
		title: 'MARS',
		info: planetInfo.mars,
		specs: planetSpecs.mars,
		imgPlanet: './assets/planet-mars.svg'
	},
	jupiter: {
		title: 'JUPITER',
		info: planetInfo.jupiter,
		specs: planetSpecs.jupiter,
		imgPlanet: './assets/planet-jupiter.svg'
	},
	saturn: {
		title: 'SATURN',
		info: planetInfo.saturn,
		specs: planetSpecs.saturn,
		imgPlanet: './assets/planet-saturn.svg'
	},
	uranus: {
		title: 'URANUS',
		info: planetInfo.uranus,
		specs: planetSpecs.uranus,
		imgPlanet: './assets/planet-uranus.svg'
	},
	neptune: {
		title: 'NEPTUNE',
		info: planetInfo.neptune,
		specs: planetSpecs.neptune,
		imgPlanet: './assets/planet-neptune.svg'
	}
};

export { planets };
