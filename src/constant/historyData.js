import { v4 as uuidv4 } from 'uuid';

export const historyData = [
	{
		id: uuidv4(),
		year: 1926,
		image: '/images/1926pic.jpeg',
		content: [
			'Company founded by W. Grant Peirce Jr., J. Trevor Peirce, and Charles M. Phelps.',
			'Acquires the Spitdorf (manufacturers of radios) from R.C. Allen Company, distributors of adding machines, calculators and like instruments.',
			'Opens business at 222 North 13th Street, Philadelphia.',
		],
	},
	{
		id: uuidv4(),
		year: 1927,
		image: '/images/1927pic.jpeg',
		content: [
			'Opens four-story building at 224 N 13th Street.',
			'Starts distributing Mohawk six tube radios and Sonora radios and phonographs along with Majestic Eliminators and numerous other lines of batteries, speakers and accessories.',
		],
	},
	{
		id: uuidv4(),
		year: 1933,
		image: '/images/1933pic.jpeg',
		content: [
			'Majestic goes bankrupt.',
			'Wilkes-Barre and Harrisburg closes, company broadens products with vacuum cleaners, washers, HVAC, space heaters, first white goods product Crosly appliances and gas ranges.',
		],
	},
	{
		id: uuidv4(),
		year: 1946,
		image: '/images/1946pic.jpeg',
		content: [
			'Company resumes distribution with an expanded line of products including Admiral radios and refrigerators, Whirlpool laundry equipment, Youngstown kitchen cabinets, Smithway water heaters, Carrier air conditioning, gas ranges, heating equipment, Hamilton dryers, deep freezers, electric houseware and a number of other items.',
			'Company re-establishes branch in Harrisburg on South 10th Street.',
			'Business expands and Company uses four outside warehouses in Philadelphia, along with expanded space at 5th and Noble Street.',
		],
	},
];
