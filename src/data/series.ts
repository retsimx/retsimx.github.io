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
// Project Tap Timer — Hunter BTT BLE Irrigation Bridge
// -----------------------------------------------------------------------------

export const hunterbttParts: SeriesPart[] = [
	{
		n: 1,
		slug: 'beacons-and-blobs',
		title: 'Beacons and blobs',
		blurb: 'Does the tap timer broadcast its state, or only speak over GATT? Decompiling the OEM app to find out — and finding a byte-offset bug in the bridge already in production.',
	},
	{
		n: 2,
		slug: 'probing-the-silence',
		title: 'Probing the silence',
		blurb: 'A purpose-built BLE probe, a flaky host controller, an idle connection that refuses to drop, and a button-press that arrives uninvited.',
	},
	{
		n: 3,
		slug: 'holding-the-line',
		title: 'Holding the line',
		blurb: 'Rewriting the bridge around one persistent connection: notifications, device auth, and a resilience ladder for when the radio gives up.',
	},
	{
		n: 4,
		slug: 'the-zone-that-was-always-on',
		title: 'The zone that was always on',
		blurb: 'Six zones reported as watering, none of them wet: the status byte was never a boolean.',
	},
	{
		n: 5,
		slug: 'the-interval-war',
		title: 'The interval war',
		blurb: 'The firmware keeps negotiating the connection interval back to fast. Beating it took two kernel-encoding bugs, a connect/disconnect/connect dance, and an event-driven guard.',
	},
];

export const hunterbttHub = '/projects/rshunterbtt/';

export function hunterbttPartHref(part: SeriesPart): string {
	return `${hunterbttHub}${part.n}-${part.slug}/`;
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
	'rshunterbtt': {
		id: 'rshunterbtt',
		hub: hunterbttHub,
		title: 'Project Tap Timer — Rebuilding the Hunter BTT BLE Bridge',
		parts: hunterbttParts,
		partHref: hunterbttPartHref,
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
