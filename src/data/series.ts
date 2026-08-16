// Series metadata for multi-part project write-ups.
// Shared by the hub pages and the per-part prev/next navigation.

export interface SeriesPart {
	n: number;
	slug: string;
	title: string;
	blurb: string;
}

export interface SeriesConfig {
	id: string;
	hub: string;
	title: string;
	parts: SeriesPart[];
	partHref: (part: SeriesPart) => string;
}

// -----------------------------------------------------------------------------
// Project CB — MyAir Control Bridge
// -----------------------------------------------------------------------------

export const myairParts: SeriesPart[] = [
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

export const myairHub = '/projects/myair-bridge/';

export function myairPartHref(part: SeriesPart): string {
	return `${myairHub}${part.n}-${part.slug}/`;
}

// -----------------------------------------------------------------------------
// Project Lumen — Reverse Engineering the TLSR8266
// -----------------------------------------------------------------------------

export const tlsr8266Parts: SeriesPart[] = [
	{
		n: 1,
		slug: 'the-silicon-and-the-blob',
		title: 'The silicon and the blob',
		blurb: 'Decompiling proprietary Telink SDKs with Ghidra, understanding TC32, and mapping the Tuya BLE Mesh protocol.',
	},
	{
		n: 2,
		slug: 'single-wire-programmer',
		title: 'The single-wire programmer',
		blurb: "Speaking Telink's proprietary SWS debug protocol with an overclocked RP2040 PIO state machine.",
	},
	{
		n: 3,
		slug: 'toolchain-odyssey',
		title: 'The toolchain odyssey',
		blurb: 'Compiling Rust for an unsupported architecture: from fragile regex scripts to a native LLVM backend.',
	},
	{
		n: 4,
		slug: 'pure-rust-firmware',
		title: 'Pure Rust firmware',
		blurb: 'Achieving 0% vendor dependency: async light fading, custom BLE stack, and conquering the 2-byte alignment bug.',
	},
	{
		n: 5,
		slug: 'verification-and-bridge',
		title: 'Verification, CI, and the smart mesh bridge',
		blurb: 'Mocking hardware MMIO on x86, branch-coverage CI, and bridging the mesh into home automation.',
	},
];

export const tlsr8266Hub = '/projects/tlsr8266-firmware/';

export function tlsr8266PartHref(part: SeriesPart): string {
	return `${tlsr8266Hub}${part.n}-${part.slug}/`;
}

// -----------------------------------------------------------------------------
// Series Registry
// -----------------------------------------------------------------------------

export const seriesRegistry: Record<string, SeriesConfig> = {
	'myair-bridge': {
		id: 'myair-bridge',
		hub: myairHub,
		title: 'Project CB — MyAir Control Bridge',
		parts: myairParts,
		partHref: myairPartHref,
	},
	'tlsr8266-firmware': {
		id: 'tlsr8266-firmware',
		hub: tlsr8266Hub,
		title: 'Reverse Engineering the TLSR8266: From Vendor Blobs to LLVM and Rust',
		parts: tlsr8266Parts,
		partHref: tlsr8266PartHref,
	},
};

export function getSeries(id: string): SeriesConfig {
	const conf = seriesRegistry[id];
	if (!conf) {
		throw new Error(`Unknown series: ${id}`);
	}
	return conf;
}

// Backwards-compatibility aliases for existing myair-bridge code
export const seriesParts = myairParts;
export const seriesHub = myairHub;
export const partHref = myairPartHref;
