import { v4 } from 'uuid';

const planetSpecs = {
	mercury: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '56.6 DAYS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '87.97 DAYS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '2,439.7 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '430ºC'
			}
		]
	},
	venus: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '243 DAYS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '224.7 DAYS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '6,051.8 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '471ºC'
			}
		]
	},
	earth: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '0.99 DAYS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '365.26 DAYS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '6,371 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '16ºC'
			}
		]
	},
	mars: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '1.03 DAYS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '1.88 YEARS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '3,389.5 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '-28ºC'
			}
		]
	},
	jupiter: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '9.93 DAYS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '11.86 YEARS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '69,911 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '-108ºC'
			}
		]
	},
	saturn: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '10.8 DAYS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '29.46 YEARS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '58,232 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '-138ºC'
			}
		]
	},
	uranus: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '17.2 HOURS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '84 YEARS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '25,362 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '-195ºC'
			}
		]
	},
	neptune: {
		info: [
			{
				id: v4(),
				text: 'ROTATION TIME',
				data: '16.08 HOURS'
			},
			{
				id: v4(),
				text: 'REVOLUTION TIME',
				data: '164.79 YEARS'
			},
			{
				id: v4(),
				text: 'RADIUS',
				data: '24,622 KM'
			},
			{
				id: v4(),
				text: 'AVERAGE TEMP.',
				data: '-201ºC'
			}
		]
	}
};

export { planetSpecs };
