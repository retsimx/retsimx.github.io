// Project CB — MyAir Control Bridge series metadata.
// Shared by the hub page and the per-part prev/next navigation.

export interface SeriesPart {
	n: number;
	slug: string;
	title: string;
	blurb: string;
}

export const seriesHub = '/projects/myair-bridge/';

export const seriesParts: SeriesPart[] = [
	{
		n: 1,
		slug: 'why-own-the-bus',
		title: 'Why own the bus',
		blurb: 'Vendor lock-in, a $1,697 on/off switch, and the case for a proactive migration.',
	},
	{
		n: 2,
		slug: 'wall-tablet',
		title: 'Vendor software on my hardware',
		blurb: 'A 2015 Galaxy Tab A, LineageOS, Magisk, and one very important build prop.',
	},
	{
		n: 3,
		slug: 'app-surgery',
		title: 'Lobotomising the vendor apps',
		blurb: 'Broadcast-based IPC, a signature permission, and how to relax it with apktool.',
	},
	{
		n: 4,
		slug: 'cb-daemon',
		title: 'cb-daemon: a Rust mailbox for the control box',
		blurb: 'Reverse-engineered RS-485 framing, a register sync engine, and a WebSocket API.',
	},
	{
		n: 5,
		slug: 'pi-in-the-ceiling',
		title: 'A Pi Zero W in the ceiling',
		blurb: 'BOM, wiring, a tupperware enclosure, and cutover day.',
	},
];

export function partHref(part: SeriesPart): string {
	return `${seriesHub}${part.n}-${part.slug}/`;
}
