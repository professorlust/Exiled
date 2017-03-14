'use strict';

exports.BattleScripts = {
	randomSeasonalMeleeTeam: function(side) {
		let userid = toId(side.name);
		let team = [];
		var variant = (this.random(2) === 1);
		var sets = {
			'Pikachu': {
				species: 'Pikachu',
				ability: 'Static',
				item: 'Light Ball',
				moves: ['volttackle', 'knockoff', 'fakeout'],
				signatureMove: 'Extreme Speed',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Butterfree': {
				species: 'Butterfree',
				ability: 'Compound Eyes',
				item: 'Focus Sash',
				moves: ['quiverdance', 'hurricane', 'sleeppowder'],
				signatureMove: 'Bug Buzz',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Primeape': {
				species: 'Primeape',
				ability: 'Vital Spirit',
				item: 'Choice Scarf',
				moves: ['uturn', 'earthquake', 'stoneedge'],
				signatureMove: 'Close Combat',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Charizard': {
				species: 'Charizard',
				ability: 'Solar Power',
				item: 'Life Orb',
				moves: ['flamethrower', 'airslash', 'sunnyday'],
				signatureMove: 'Solar Beam',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Venusaur': {
				species: 'Venusaur',
				ability: 'Chlorophyll',
				item: 'Black Sludge',
				moves: ['gigadrain', 'knockoff', 'synthesis'],
				signatureMove: 'Sludge Bomb',
				evs: {
					hp: 248,
					def: 204,
					spa: 24,
					spd: 16,
					spe: 16
				},
				nature: 'Bold',
			},
			'Blastoise': {
				species: 'Blastoise',
				ability: 'Rain Dish',
				item: 'Leftovers',
				moves: ['rapidspin', 'refresh', 'toxic'],
				signatureMove: 'Scald',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Bold',
			},
			'Pidgeot': {
				species: 'Pidgeot',
				ability: 'Tangled Feet',
				item: 'Life Orb',
				moves: ['bravebird', 'doubleedge', 'defog'],
				signatureMove: 'uturn',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Kingler': {
				species: 'Kingler',
				ability: 'Sheer Force',
				item: 'Life Orb',
				moves: ['knockoff', 'rockslide', 'swordsdance'],
				signatureMove: 'Crabhammer',
				evs: {
					atk: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Jolly',
			},
			'Snorlax': {
				species: 'Snorlax',
				ability: 'Immunity',
				item: 'Leftovers',
				moves: ['bodyslam', 'rest', 'sleeptalk'],
				signatureMove: 'Curse',
				evs: {
					hp: 252,
					spd: 252,
					def: 4
				},
				nature: 'Careful',
			},
			'Muk': {
				species: 'Muk',
				ability: 'Poison Touch',
				item: 'Black Sludge',
				moves: ['gunkshot', 'curse', 'painsplit'],
				signatureMove: 'Shadow Sneak',
				evs: {
					atk: 252,
					hp: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Bayleef': {
				species: 'Bayleef',
				item: 'Eviolite',
				ability: 'Leaf Guard',
				moves: ['gigadrain', 'toxic', 'synthesis'],
				signatureMove: 'Aromatherapy',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Bold',
			},
			'Noctowl': {
				species: 'Noctowl',
				ability: 'Insomnia',
				item: 'Leftovers',
				shiny: true,
				moves: ['defog', 'roost', 'nightshade'],
				signatureMove: 'Toxic',
				evs: {
					hp: 248,
					spd: 252,
					def: 8
				},
				nature: 'Calm',
			},
			'Tauros': {
				species: 'Tauros',
				ability: 'Sheer Force',
				item: 'Life Orb',
				moves: ['zenheadbutt', 'ironhead', 'rockslide'],
				signatureMove: 'Body Slam',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Haunter': {
				species: 'Haunter',
				ability: 'Levitate',
				item: 'Choice Scarf',
				moves: ['shadowball', 'sludgebomb', 'trick'],
				signatureMove: 'Destiny Bond',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Staraptor': {
				species: 'Staraptor',
				ability: 'Reckless',
				item: 'Choice Band',
				moves: ['doubleedge', 'closecombat', 'uturn'],
				signatureMove: 'Brave Bird',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Aipom': {
				species: 'Aipom',
				ability: 'Skill Link',
				item: 'Life Orb',
				moves: ['furyswipes', 'knockoff', 'brickbreak'],
				signatureMove: 'Fake Out',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Floatzel': {
				species: 'Floatzel',
				ability: 'Water Veil',
				item: 'Choice Band',
				moves: ['waterfall', 'icepunch', 'aquajet'],
				signatureMove: 'Pursuit',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Swellow': {
				species: 'Swellow',
				ability: 'Guts',
				item: 'Flame Orb',
				moves: ['bravebird', 'return', 'uturn'],
				signatureMove: 'Protect',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Crawdaunt': {
				species: 'Crawdaunt',
				ability: 'Adaptability',
				item: 'Focus Sash',
				moves: ['knockoff', 'aquajet', 'dragondance'],
				signatureMove: 'Crabhammer',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Serperior': {
				species: 'Serperior',
				ability: 'Contrary',
				item: 'Life Orb',
				moves: ['leafstorm', 'gigadrain', 'glare'],
				signatureMove: 'Dragon Pulse',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Samurott': {
				species: 'Samurott',
				ability: 'Shell Armor',
				item: 'Leftovers',
				moves: ['waterfall', 'knockoff', 'swordsdance'],
				signatureMove: 'Aqua Jet',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Emboar': {
				species: 'Emboar',
				ability: 'Reckless',
				item: 'Life Orb',
				moves: ['flareblitz', 'suckerpunch', 'wildcharge'],
				signatureMove: 'Head Smash',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Gliscor': {
				species: 'Gliscor',
				ability: 'Toxic Heal',
				item: 'Toxic Orb',
				moves: ['earthquake', 'toxic', 'roost'],
				signatureMove: 'Protect',
				evs: {
					hp: 252,
					def: 252,
					spd: 4
				},
				nature: 'Impish',
			},
			'Fletchinder': {
				species: 'Fletchinder',
				ability: 'Gale Wings',
				moves: ['acrobatics', 'roost', 'swordsdance'],
				signatureMove: 'Will-O-Wisp',
				evs: {
					atk: 252,
					hp: 152,
					def: 78,
					spd: 28
				},
				nature: 'Adamant',
			},
			'Sceptile': {
				species: 'Sceptile',
				ability: 'Overgrow',
				item: 'Life Orb',
				moves: ['leafstorm', 'hiddenpowerice', 'focusblast'],
				signatureMove: 'Giga Drain',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Glalie': {
				species: 'Glalie',
				ability: 'Ice Body',
				item: 'Focus Sash',
				moves: ['freezedry', 'spikes', 'earthquake'],
				signatureMove: 'Explosion',
				evs: {
					atk: 252,
					spe: 252,
					spa: 4
				},
				nature: 'Naive',
			},
			'Greninja': {
				species: 'Greninja',
				ability: 'Protean',
				item: 'Life Orb',
				moves: ['scald', 'uturn', 'icebeam'],
				signatureMove: 'Dark Pulse',
				evs: {
					spa: 252,
					spe: 252,
					atk: 4
				},
				nature: 'Hasty',
			},
			'Donphan': {
				species: 'Donphan',
				ability: 'Sturdy',
				item: 'Leftovers',
				moves: ['earthquake', 'stealthrock', 'rapidspin'],
				signatureMove: 'Ice Shard',
				evs: {
					hp: 252,
					def: 252,
					atk: 4
				},
				nature: 'Impish',
			},
			'Infernape': {
				species: 'Infernape',
				ability: 'Iron Fist',
				item: 'Life Orb',
				moves: ['flareblitz', 'closecombat', 'uturn'],
				signatureMove: 'Mach Punch',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Feraligatr': {
				species: 'Feraligatr',
				ability: 'Sheer Force',
				item: 'Life Orb',
				moves: ['dragondance', 'waterfall', 'icepunch'],
				signatureMove: 'Aqua Jet',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Adamant',
			},
			'Typhlosion': {
				species: 'Typhlosion',
				ability: 'Flash Fire',
				item: 'Choice Scarf',
				moves: ['eruption', 'flamethrower', 'extrasensory'],
				signatureMove: 'Hidden Power Grass',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Housekeeper': {
				species: 'Mr. Mime',
				ability: 'Filter',
				item: 'Choice Scarf',
				moves: ['psychic', 'dazzlinggleam', 'trick'],
				signatureMove: 'Thunderbolt',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Lapras': {
				species: 'Lapras',
				ability: 'Water Absorb',
				item: 'Leftovers',
				moves: ['waterfall', 'dragondance', 'iceshard'],
				signatureMove: 'Drill Run',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'Heracross': {
				species: 'Heracross',
				ability: 'Moxie',
				item: 'Choice Scarf',
				moves: ['closecombat', 'earthquake', 'knockoff'],
				signatureMove: 'Megahorn',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly'
			},
			'Torkoal': {
				species: 'Torkoal',
				ability: 'Shell Armor',
				item: 'Leftovers',
				moves: ['stealthrock', 'lavaplume', 'toxic'],
				signatureMove: 'rapidspin',
				evs: {
					hp: 248,
					def: 252,
					spa: 8
				},
				nature: 'Relaxed',
			},
			'Torterra': {
				species: 'Torterra',
				ability: 'Overgrow',
				item: 'Leftovers',
				moves: ['rockpolish', 'woodhammer', 'stoneedge'],
				signatureMove: 'Earthquake',
				evs: {
					atk: 252,
					spe: 252,
					def: 4
				},
				nature: 'Jolly',
			},
			'Garchomp': {
				species: 'Garchomp',
				ability: 'Rough Skin',
				item: 'Rocky Helmet',
				moves: ['earthquake', 'swordsdance', 'stealthrock'],
				signatureMove: 'Outrage',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Unfezant': {
				species: 'Unfezant',
				ability: 'Super Luck',
				item: 'Life Orb',
				gender: 'F',
				moves: ['nightslash', 'return', 'uturn'],
				signatureMove: 'Quick Attack',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Noivern': {
				species: 'Noivern',
				ability: 'Infiltrator',
				item: 'Life Orb',
				moves: ['dracometeor', 'flamethrower', 'hurricane'],
				signatureMove: 'Focus Blast',
				evs: {
					spa: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Timid',
			},
			'Goodra': {
				species: 'Goodra',
				ability: 'Gooey',
				item: 'Assault Vest',
				moves: ['dracometeor', 'sludgewave', 'thunderbolt'],
				signatureMove: 'Ice Beam',
				evs: {
					spa: 252,
					hp: 252,
					spd: 4
				},
				nature: 'Modest',
			},
			'Hawlucha': {
				species: 'Hawlucha',
				ability: 'Unburden',
				item: 'Sitrus Berry',
				moves: ['acrobatics', 'highjumpkick', 'swordsdance'],
				signatureMove: 'Substitute',
				evs: {
					atk: 244,
					spe: 252,
					hp: 16
				},
				nature: 'Jolly',
			},
			'Tyranitar': {
				species: 'Tyranitar',
				ability: 'Sand Stream',
				item: 'Leftovers',
				moves: ['crunch', 'stoneedge', 'dragondance'],
				signatureMove: 'Stealth Rock',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Adamant',
			},
			'Raticate': {
				species: 'Raticate',
				ability: 'Guts',
				item: 'Flame Orb',
				moves: ['quickattack', 'suckerpunch', 'protect'],
				signatureMove: 'Facade',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Beedrill': {
				species: 'Beedrill',
				ability: 'Swarm',
				item: 'Focus Sash',
				moves: ['xscissor', 'knockoff', 'drillrun'],
				signatureMove: 'Poison Jab',
				evs: {
					atk: 252,
					spe: 252,
					spd: 4
				},
				nature: 'Jolly',
			},
			'Krookodile': {
				species: 'Krookodile',
				ability: 'Moxie',
				item: 'Choice Scarf',
				moves: ['earthquake', 'stoneedge', 'crunch'],
				signatureMove: 'Knock Off',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
			'Gigalith': {
				species: 'Gigalith',
				ability: 'Sturdy',
				item: 'Assault Vest',
				moves: ['return', 'earthquake', 'ironhead'],
				signatureMove: 'Stone Edge',
				evs: {
					def: 252,
					hp: 252,
					atk: 4
				},
				nature: 'Impish',
			},
			'Seismotoad': {
				species: 'Seismitoad',
				ability: 'Water Absorb',
				item: 'Leftovers',
				moves: ['scald', 'earthpower', 'icebeam'],
				signatureMove: 'Sludge Wave',
				evs: {
					spa: 252,
					hp: 252,
					spd: 4
				},
				nature: 'Modest',
			},
			'Leavanny': {
				species: 'Leavanny',
				ability: 'Swarm',
				item: 'Focus Sash',
				moves: ['xscissor', 'knockoff', 'leafblade'],
				signatureMove: 'Sticky Web',
				evs: {
					atk: 252,
					spe: 252,
					hp: 4
				},
				nature: 'Jolly',
			},
		};

		let pool = Object.keys(sets);
		for (let i = 0; i < 6; i++) {
			let name = this.sampleNoReplace(pool);
			let set = sets[name];
			set.name = name;
			set.level = 100;
			if (!set.ivs) {
				set.ivs = {
					hp: 31,
					atk: 31,
					def: 31,
					spa: 31,
					spd: 31,
					spe: 31
				};
			}
			else {
				for (let iv in {
						hp: 31,
						atk: 31,
						def: 31,
						spa: 31,
						spd: 31,
						spe: 31
					}) {
					set.ivs[iv] = iv in set.ivs ? set.ivs[iv] : 31;
				}
			}
			// Assuming the hardcoded set evs are all legal.
			if (!set.evs) set.evs = {
				hp: 84,
				atk: 84,
				def: 84,
				spa: 84,
				spd: 84,
				spe: 84
			};
			set.moves = [this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves), this.sampleNoReplace(set.moves)].concat(set.signatureMove);
			team.push(set);
		}

		return team;
	},
};
