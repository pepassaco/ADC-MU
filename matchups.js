const championMatchups = {
    jinx: [
        {
            key: "caitlyn",
            champion: "Caitlyn",
            difficulty: "unfavorable",
            general: "She outranges you early and zones with traps. Survive laning phase - you outscale at 2 items. Use rockets to match her range for CS. Avoid trap areas. Farm safely until you spike.",
            hook: "Very dangerous. Cait with hook support (Blitz, Thresh, Naut) controls the lane with traps and hook threat. Stay behind minions. If hooked near traps, you're dead. Farm safely, you scale better.",
            enchanter: "Difficult lane. Cait with enchanter (Lulu, Nami, Soraka) pokes freely while staying healthy. Hard to punish her. Wait for ganks. Focus on CS. You outscale at 2-3 items - be patient.",
            engage: "Risky. Cait with engage support (Leona, Nautilus, Rell) plus traps is deadly if you're caught. Use chompers defensively. Farm safely. Once you have items, you outfight her in teamfights.",
            mage: "Poke hell. Cait with mage support (Lux, Xerath, Brand) means double ranged harassment. Rush tier 2 boots. Farm with rockets from max range. Survive to 2 items and you take over."
        },
        {
            key: "draven",
            champion: "Draven",
            difficulty: "unfavorable",
            general: "His early damage is brutal. Respect his axes - don't trade into them. Use chompers to zone him from catching axes. Survive lane. You massively outscale at 2-3 items. Farm defensively.",
            hook: "Extremely dangerous. Draven with hook support (Blitz, Thresh, Naut) snowballs off one hook. Stay behind minions. Chompers for self-peel. One mistake loses lane. You scale much better - survive.",
            enchanter: "Very difficult early. Draven with enchanter (Lulu, Nami, Soraka) has insane damage with sustain. Farm safely with rockets. Chompers to disengage. Survive to mid game - you outscale hard.",
            engage: "Nightmare lane. Draven with engage support (Leona, Nautilus, Rell) all-ins you repeatedly. Chompers are your only hope. Flash for safety. Survive - you scale infinitely better than him.",
            mage: "Less coordinated but still hard. Draven with mage support (Lux, Brand, Xerath) has kill pressure. Farm from range with rockets. Avoid axes. You become much stronger at 2 items."
        },
        {
            key: "vayne",
            champion: "Vayne",
            difficulty: "skill",
            general: "Both hypercarries. She's stronger in duels, you're better in teamfights. Poke her early with rockets. Respect condemn near walls. Both need 2-3 items. You have better range and teamfight impact.",
            hook: "Skill matchup. Vayne with hook support (Blitz, Thresh, Naut) is vulnerable to hooks. Stay safe yourself. Both scale incredibly. Poke with rockets. You're better in teamfights, she's better in sidelane.",
            enchanter: "Both want to scale. Vayne with enchanter (Lulu, Nami, Soraka) farms safely like you. Relatively passive lane. You have better waveclear and range. She has better 1v1. Farm for teamfights.",
            engage: "Dangerous for both. Vayne with engage support (Leona, Nautilus, Rell) can condemn during engage. Chompers for self-peel. Both weak early, godly late. You're better in 5v5s.",
            mage: "Poke lane. Vayne with mage support (Lux, Brand, Xerath) gets zoned. Coordinate poke with support. Both scale hard. You have range advantage in fights. She has better picks."
        },
        {
            key: "ezreal",
            champion: "Ezreal",
            difficulty: "skill",
            general: "Poke vs scaling. He pokes safely, you scale harder. Dodge Qs with movement. Chompers when he Es forward. Better DPS in fights. He's safer in lane, you're stronger at 2+ items.",
            hook: "Relatively safe. Ezreal with hook support (Blitz, Thresh, Naut) can E away from hooks. If you're hooked, you're in trouble. Both scale well. You have better DPS, he's safer.",
            enchanter: "Both scale decently. Ezreal with enchanter (Lulu, Nami, Soraka) pokes and sustains. Dodge Qs. Farm safely. You scale better for teamfights. He's better for poke comps.",
            engage: "Decent for you. Ezreal with engage support (Leona, Nautilus, Rell) will E away. Chompers to follow up on engages. You're better in extended fights once you have items.",
            mage: "Poke fest. Ezreal with mage support (Lux, Brand, Xerath) means skillshot dodging. Both scale. You have better DPS and teamfight. He's safer but you carry harder."
        },
        {
            key: "kaisa",
            champion: "Kai'Sa",
            difficulty: "skill",
            general: "Both scale well. She bursts, you DPS. Don't let her stack plasma for free. Chompers when she Rs in. You're better in front-to-back teamfights. She's better for picks and flanks.",
            hook: "Dangerous both ways. Kai'Sa with hook support (Blitz, Thresh, Naut) has burst follow-up. Stay behind minions. Chompers for peel. Both scale. You're better in 5v5, she's better in skirmishes.",
            enchanter: "Both scale incredibly. Kai'Sa with enchanter (Lulu, Nami, Soraka) wants to farm and evolve. You want items. Relatively even. You have more range, she has more mobility.",
            engage: "She follows up well. Kai'Sa with engage support (Leona, Nautilus, Rell) dives with R. Chompers to peel yourself. You're better in extended fights. She's better in burst windows.",
            mage: "Skill-based. Kai'Sa with mage support (Lux, Brand, Xerath) has poke and burst. Both scale. Chompers when she dives. You're more consistent in teamfights. Even matchup overall."
        },
        {
            key: "kogmaw",
            champion: "Kog'Maw",
            difficulty: "skill",
            general: "Both hypercarries. He has better range late, you have mobility through passive. Both need peel. He outscales slightly. Whoever gets ahead first or has better peel wins. Farm to 3 items.",
            hook: "Both vulnerable. Kog'Maw with hook support (Blitz, Thresh, Naut) and you both die to hooks. Stay safe. Whoever gets hooked loses lane. Both scale massively. Farm for late game.",
            enchanter: "Scaling war. Kog'Maw with enchanter (Lulu, Nami, Soraka) scales slightly harder with range. You have better waveclear and passive resets. Both need 3 items. Very even.",
            engage: "Both immobile. Kog'Maw with engage support (Leona, Nautilus, Rell) has good follow-up. You both need peel. Farm safely. Both take over late. He has more range, you reset better.",
            mage: "Both scale monsters. Kog'Maw with mage support (Lux, Brand, Xerath) farms like you. Relatively passive. Both want 3 items. He's slightly better raw DPS, you're better in chaos."
        },
        {
            key: "ashe",
            champion: "Ashe",
            difficulty: "favorable",
            general: "You outscale her. Her slows are annoying but your passive gives speed. Cleanse for her R. Better DPS at 2+ items. Use rockets to match her poke range. Farm safely and dominate mid-late.",
            hook: "Dangerous arrows. Ashe with hook support (Blitz, Thresh, Naut) chains CC. Both immobile. Cleanse essential. Farm safely. You scale much harder with DPS. Respect arrow setup.",
            enchanter: "Relatively even early. Ashe with enchanter (Lulu, Nami, Soraka) pokes with W. You poke with rockets. Cleanse for arrow. You outscale significantly at 2-3 items. Better DPS.",
            engage: "Good for you late. Ashe with engage support (Leona, Nautilus, Rell) has good setup. You both lack mobility. Cleanse for R. You scale much better. Survive lane, dominate fights.",
            mage: "Poke lane. Ashe with mage support (Lux, Brand, Xerath) has lots of range. Match with rockets. Cleanse for arrow. You scale better for damage. She brings utility, you bring DPS."
        },
        {
            key: "samira",
            champion: "Samira",
            difficulty: "favorable",
            general: "You counter her hard. Chompers stop her dashes and R. Keep distance with rockets. She needs to get close, you thrive at range. Chomper placement is key. Much easier than most melee matchups.",
            hook: "Dangerous if hooked. Samira with hook support (Blitz, Thresh, Naut) dives hard. Stay behind minions. Chompers when she dashes in. You're much better at range. Don't let her snowball.",
            enchanter: "Very favorable. Samira with enchanter (Lulu, Nami, Soraka) needs to dive. Chompers stop her. Kite with rockets. She can't reach you safely. You outscale and outrange.",
            engage: "She loves dives. Samira with engage support (Leona, Nautilus, Rell) all-ins hard. Chompers to peel. Stay max range with rockets. You're much better in clean fights. Keep distance.",
            mage: "Good for you. Samira with mage support (Lux, Brand, Xerath) has less synergy. She struggles to reach you. Chompers for peel. Range advantage is huge. Kite and shred."
        },
        {
            key: "lucian",
            champion: "Lucian",
            difficulty: "unfavorable",
            general: "His burst and mobility hurt early-mid. He snowballs hard. Chompers to zone his dashes. Survive his power spike. You outscale at 3+ items. Farm safely with rockets. Better late game teamfight.",
            hook: "Very dangerous. Lucian with hook support (Blitz, Thresh, Naut) has brutal burst. Stay behind minions. One hook often means death. Chompers for peel. You scale better - survive lane.",
            enchanter: "Difficult matchup. Lucian with enchanter (Lulu, Nami, Soraka) has strong trades and sustain. Farm with rockets. Chompers to disengage. You outscale at 3 items but lane is rough.",
            engage: "Explosive lane. Lucian with engage support (Leona, Nautilus, Rell) all-ins repeatedly. Chompers are crucial. Flash + heal for safety. Survive - you scale much better for teamfights.",
            mage: "Burst and poke. Lucian with mage support (Lux, Brand, Xerath) has high damage. Farm safely. Chompers to zone. You outscale but lane is challenging. Rush to mid game."
        },
        {
            key: "missfortune",
            champion: "Miss Fortune",
            difficulty: "skill",
            general: "Poke vs scaling. She pokes with Q bounces and wins short trades. You scale harder. Avoid standing behind low minions. Chompers interrupt her R. Better at 2+ items. Farm to power spike.",
            hook: "Dangerous R setup. MF with hook support (Blitz, Thresh, Naut) uses R during CC. Stay behind minions. Chompers to interrupt R. You scale better. Respect her poke and all-in threat.",
            enchanter: "Annoying lane. MF with enchanter (Lulu, Nami, Soraka) pokes constantly with sustain. Farm with rockets. You outscale at 2-3 items. Chompers for R interruption. Be patient.",
            engage: "Her R is deadly. MF with engage support (Leona, Nautilus, Rell) uses R during CC. Chompers to interrupt or avoid clumping. You scale better. Survive her R setups.",
            mage: "Lots of poke. MF with mage support (Lux, Brand, Xerath) pokes hard. Farm with rockets from max range. You scale better with DPS. Chompers interrupt R. Survive to items."
        },
        {
            key: "tristana",
            champion: "Tristana",
            difficulty: "skill",
            general: "Skill matchup decided by supports. Her all-in is stronger early. You outscale at 2-3 items. Chompers when she jumps in. Respect her bomb placement. Match her aggression early. Better in teamfights late.",
            hook: "Skill matchup. Tristana with hook support (Blitz, Thresh, Naut) zones with hook threat. She can jump aggressively. Chompers when she lands. Stay behind minions. You scale better late.",
            enchanter: "Relatively even. Tristana with enchanter (Lulu, Nami, Soraka) scales well like you. Both want to farm. Chompers for defense. You're better at 2-3 items. She's better in skirmishes early.",
            engage: "Dangerous early. Tristana with engage support (Leona, Nautilus, Rell) dives hard. Chompers are crucial. If caught without E, you die. You scale better. Survive her aggression.",
            mage: "More manageable. Tristana with mage support (Lux, Brand, Xerath) has less dive. Chompers when she jumps. You scale slightly better. Both strong in teamfights. Coordinate with support."
        },
        {
            key: "jhin",
            champion: "Jhin",
            difficulty: "skill",
            general: "He wins short trades with 4th shot. You win extended fights with DPS. Respect his burst. Dodge W with movement. Chompers during reload. You scale better for sustained DPS. Farm to 2 items.",
            hook: "Dangerous W setup. Jhin with hook support (Blitz, Thresh, Naut) chains W into hook. Both immobile. Stay behind minions. Dodge W. You have better sustained damage - scale to teamfights.",
            enchanter: "Relatively even. Jhin with enchanter (Lulu, Nami, Soraka) pokes and bursts. You DPS better. Both scale decently. Dodge W. You're better in extended fights. He's better in burst windows.",
            engage: "Both immobile. Jhin with engage support (Leona, Nautilus, Rell) has good burst. Chompers for peel. Both vulnerable. You're better in long fights. He's better in picks.",
            mage: "Burst and poke. Jhin with mage support (Lux, Brand, Xerath) has high damage. Dodge skillshots. You scale better for teamfights. He's better for picks. Chompers during reload."
        },
        {
            key: "kalista",
            champion: "Kalista",
            difficulty: "unfavorable",
            general: "Her early game mobility dominates. Hard to hit with chompers due to hopping. She controls objectives. You heavily outscale in teamfights. Farm defensively. You become much stronger at 2-3 items.",
            hook: "Very dangerous. Kalista with hook support (Blitz, Thresh, Naut) has perfect synergy with R. Hard to land chompers. Farm safely. She falls off hard - you take over mid-late game.",
            enchanter: "Difficult lane. Kalista with enchanter (Lulu, Nami, Soraka) has sustain and mobility. Farm with rockets. She's hard to punish. You scale infinitely better. Survive to teamfights.",
            engage: "Nightmare coordination. Kalista with engage support (Leona, Nautilus, Rell) is brutal synergy. She saves or throws support. Farm defensively. You're much better late - be patient.",
            mage: "Better than melee. Kalista with mage support (Lux, Brand, Xerath) has less coordination. Still mobile. Farm safely. You scale much harder. Better teamfight scaling."
        },
        {
            key: "aphelios",
            champion: "Aphelios",
            difficulty: "skill",
            general: "Both scale incredibly. Track his weapons. Respect Gravitum root and Infernum burst. Both immobile. Chompers for peel. You're simpler to execute. Relatively even at 2-3 items.",
            hook: "Both vulnerable. Aphelios with hook support (Blitz, Thresh, Naut) is dangerous with certain weapons. Both immobile. Chompers for peel. Track his weapons. Relatively even scaling.",
            enchanter: "Scaling war. Aphelios with enchanter (Lulu, Nami, Soraka) farms and rotates weapons. You farm for items. Both strong at 3 items. You're more consistent. He has more versatility.",
            engage: "Both immobile. Aphelios with engage support (Leona, Nautilus, Rell) depends on weapons. Chompers for peel. Both need good positioning. Relatively even in teamfights.",
            mage: "Both scale well. Aphelios with mage support (Lux, Brand, Xerath) pokes and farms. You do the same. Track his weapons. You're easier to execute. Similar power levels."
        },
        {
            key: "nilah",
            champion: "Nilah",
            difficulty: "favorable",
            general: "Your range destroys her. Stay max distance with rockets. Chompers when she dives. She needs to get close, you thrive at range. Executioner's for healing. Much easier than other melee matchups.",
            hook: "Dangerous if hooked. Nilah with hook support (Blitz, Thresh, Naut) dives hard. Stay behind minions. Chompers stop her. Max range with rockets. Don't let her touch you.",
            enchanter: "Still favorable. Nilah with enchanter (Lulu, Nami, Soraka) has massive healing. Executioner's rush. Stay at max rocket range. Chompers for peel. You outrange and outscale.",
            engage: "She wants close combat. Nilah with engage support (Leona, Nautilus, Rell) dives in. Chompers crucial. Stay far with rockets. Range advantage is key. Executioner's for sustain.",
            mage: "Good matchup. Nilah with mage support (Lux, Brand, Xerath) has less synergy. She struggles to reach you. Max rocket range. Chompers for peel. Executioner's. Range wins."
        },
        {
            key: "varus",
            champion: "Varus",
            difficulty: "skill",
            general: "Poke vs scaling. He pokes with Q, you scale with DPS. Both immobile. Dodge Qs. QSS for his R. You're better in extended fights. He's better for picks. Farm to 2-3 items.",
            hook: "Both vulnerable. Varus with hook support (Blitz, Thresh, Naut) chains R into hook. Both immobile. Stay behind minions. QSS essential. You scale better for teamfights. Farm safely.",
            enchanter: "Relatively even. Varus with enchanter (Lulu, Nami, Soraka) pokes and sustains. You farm and scale. QSS for R. You're better in sustained fights. He's better for poke.",
            engage: "Both immobile. Varus with engage support (Leona, Nautilus, Rell) has R setup. Chompers for peel. QSS crucial. You're better in extended fights. He's better in burst.",
            mage: "Poke lane. Varus with mage support (Lux, Brand, Xerath) pokes hard. Dodge abilities. QSS for R. You scale better for DPS. He's better for poke comps."
        },
        {
            key: "twitch",
            champion: "Twitch",
            difficulty: "skill",
            general: "Both hypercarries. He's weaker early, you're both monsters late. Pink wards essential. He has better picks, you have better teamfights. Both need 3 items. Whoever gets there first wins.",
            hook: "Dangerous stealth. Twitch with hook support (Blitz, Thresh, Naut) engages from stealth. Pink wards always. Both scale incredibly. You're better in front-to-back fights. He's better in flanks.",
            enchanter: "Scaling war. Twitch with enchanter (Lulu, Nami, Soraka) farms and scales. Both want 3 items. Pink wards. You're better in 5v5s. He's better in assassinations. Farm peacefully.",
            engage: "Favorable early. Twitch with engage support (Leona, Nautilus, Rell) is weak before 6. Pink wards for stealth. Both scale massively. You're better in teamfights. He's better in picks.",
            mage: "Both scale hard. Twitch with mage support (Lux, Brand, Xerath) is weak early. Pink wards essential. Both need 3 items. You're better in extended fights. He's better in flanks."
        },
        {
            key: "zeri",
            champion: "Zeri",
            difficulty: "skill",
            general: "Mobile vs immobile. She kites well, you have raw DPS. Chompers when she dashes in. Don't chase when she has R. Better in static fights. She's better in kite scenarios. Farm to items.",
            hook: "She's mobile. Zeri with hook support (Blitz, Thresh, Naut) dodges with E. You're vulnerable to hooks. Stay behind minions. Chompers for peel. Better in front-to-back without her kiting.",
            enchanter: "She kites forever. Zeri with enchanter (Lulu, Nami, Soraka) gets shields and speed. Don't chase. Chompers to zone. You have better raw DPS in stationary fights. Farm safely.",
            engage: "She escapes. Zeri with engage support (Leona, Nautilus, Rell) dashes away from engages. Chompers to cut off. You're better in clean fights. Don't chase. Farm and position well.",
            mage: "Skill matchup. Zeri with mage support (Lux, Brand, Xerath) has poke and mobility. You have DPS. Don't chase. Chompers to zone. Better in clean teamfights without chasing."
        },
        {
            key: "sivir",
            champion: "Sivir",
            difficulty: "favorable",
            general: "You outscale her damage. Bait spellshield with W or Zap. She has waveclear, you have DPS. Better scaling for fights. Match her push with rockets. Dominate at 2-3 items.",
            hook: "Favorable. Sivir with hook support (Blitz, Thresh, Naut) blocks hook with spellshield. Bait it first. You scale much better. She brings utility, you bring damage. Farm and outscale.",
            enchanter: "Heavily favored. Sivir with enchanter (Lulu, Nami, Soraka) has no damage. Bait spellshield, then poke. You scale much better for fights. She can't match your DPS. Dominate mid-late.",
            engage: "Good for you. Sivir with engage support (Leona, Nautilus, Rell) blocks first CC. Bait spellshield with W or Zap. You have much better damage. Outscale and dominate fights.",
            mage: "Easy late game. Sivir with mage support (Lux, Brand, Xerath) blocks one ability. Bait spellshield. Your damage is far superior. She brings speed, you bring DPS. Outscale hard."
        },
        {
            key: "yunara",
            champion: "Yunara",
            difficulty: "skill",
            general: "Both have CC and damage. She's mobile, you're immobile. Chompers when she dashes. Respect her root combo. You have better DPS, she has better mobility. Skill-based matchup. Farm to items.",
            hook: "She's mobile. Yunara with hook support (Blitz, Thresh, Naut) can dash away. You're vulnerable. Stay behind minions. Chompers for peel when she dives. Better in extended fights.",
            enchanter: "Relatively even. Yunara with enchanter (Lulu, Nami, Soraka) scales well. Both have good scaling. Chompers vs her dash. You have better raw DPS. She has better mobility.",
            engage: "She's mobile. Yunara with engage support (Leona, Nautilus, Rell) can dash away. Chompers to zone. You're better in clean fights. She's better in skirmishes. Farm safely.",
            mage: "Skill matchup. Yunara with mage support (Lux, Brand, Xerath) has poke and burst. Both scale. Chompers when she dives. You have better sustained DPS. Even scaling patterns."
        }
    ],
    tristana: [
        {
            key: "caitlyn",
            champion: "Caitlyn",
            difficulty: "unfavorable",
            general: "She outranges you until level 13+. Respect her trap placement around objectives. Jump aggressively at level 2-3 if she mispositions. Your all-in beats her poke once you're on top of her.",
            hook: "Dangerous. Cait + hook support (Blitz, Thresh, Naut) zones you completely. Stay behind minions. If hooked near traps, you're dead. Jump only when hook is down. Win at 6 with explosive all-in.",
            enchanter: "Tough lane. Cait with enchanter (Lulu, Nami, Soraka) pokes freely and stays healthy. Hard to jump on her safely. Wait for jungle ganks. Look for level 2-3 all-in if she wastes abilities. Farm to mid game.",
            engage: "Risky but playable. Cait with engage support (Leona, Nautilus, Rell) + traps is deadly. But if they engage on you, jump away and counter. Level 6 all-in is strong. Save jump for after trap placement.",
            mage: "Poke nightmare. Cait with mage support (Lux, Xerath, Brand) means double ranged poke. Rush tier 2 boots. Farm safely, wait for level 6 power spike. Jump on them when abilities are down."
        },
        {
            key: "draven",
            champion: "Draven",
            difficulty: "skill",
            general: "Dangerous but winnable. His axes hurt but you have burst. Jump on him level 2 with E bomb - force him to choose between axes and dodging. All-in at 6 with R. One kill snowballs either way.",
            hook: "Very dangerous. Draven with hook support (Blitz, Thresh, Naut) deletes you if caught. Jump away from hooks. Level 2 all-in can work if you land it. Play around hook cooldown. Flash + jump if needed.",
            enchanter: "Skill matchup. Draven with enchanter (Lulu, Nami, Soraka) stays healthy. All-in at level 2-3 before he gets too strong. Your burst can kill through shields. Commit hard when you jump - no half measures.",
            engage: "Explosive. Draven with engage support (Leona, Nautilus, Rell) is volatile both ways. They can engage you or vice versa. Level 2-3 all-in is crucial. First blood decides lane. Play aggressive.",
            mage: "Chaotic lane. Draven with mage support (Lux, Brand, Xerath) has less coordination. You can jump on him during poke wars. Commit to all-ins. Both immobile once abilities used. High risk, high reward."
        },
        {
            key: "vayne",
            champion: "Vayne",
            difficulty: "favorable",
            general: "Dominate early before she scales. Jump on her level 2-3 with E bomb. Zone her from CS. Respect her condemn near walls. Post-6 she gets stronger but you still win burst trades. End before she scales.",
            hook: "Favorable early. Vayne with hook support (Thresh, Blitz, Naut) is vulnerable to hooks. Jump on her when hook lands. She can condemn you into walls so avoid walls. Dominate lane before she hits items.",
            enchanter: "Your lane to lose. Vayne with enchanter (Lulu, Nami, Soraka) wants to scale safely. Don't let her. Jump aggressively level 2-3. Keep bombing her. She can't match early burst. End before 25 minutes.",
            engage: "Very favorable. Vayne with engage support (Leona, Nautilus, Rell) is weak early. All-in repeatedly before 6. Post-6 she can outplay but you still have burst advantage. Push your lead hard.",
            mage: "Crush her early. Vayne with mage support (Lux, Brand, Xerath) gets zoned hard. Jump on her when mage abilities down. Coordinate burst with support. She can't survive your all-ins early game."
        },
        {
            key: "ezreal",
            champion: "Ezreal",
            difficulty: "favorable",
            general: "You win all-ins hard. Jump on him when his E is down (26-19s CD). Your bomb forces him out or he dies. Better DPS and burst. Push waves to deny CS. Dominate lane phase.",
            hook: "Easy. Ezreal with hook support (Blitz, Thresh, Naut) can dodge with E. Bait E first, then they hook or you jump. When E is down, he's completely vulnerable. Free kills in lane.",
            enchanter: "Heavily favored. Ezreal with enchanter (Lulu, Nami, Soraka) can't match your all-in. Jump when his E is down. Bomb him repeatedly. He can't escape your burst. Push waves and dominate.",
            engage: "Free lane. Ezreal with engage support (Leona, Nautilus, Rell) will E away. Track his E cooldown. When down, engage and you follow with bomb. Easy kills. Build lead quickly.",
            mage: "Poke vs all-in, you win. Ezreal with mage support (Lux, Brand, Xerath) pokes but you burst. Jump when abilities down. Your all-ins are much stronger. Better scaling for teamfights."
        },
        {
            key: "kaisa",
            champion: "Kai'Sa",
            difficulty: "skill",
            general: "Even matchup. Both have burst and mobility. Don't let her stack plasma for free. Jump when her E is down. Your level 2-3 is stronger. She scales better for picks, you're better in teamfights.",
            hook: "Very dangerous both ways. Kai'Sa with hook support (Blitz, Thresh, Naut) means hook into plasma burst kills either side. Jump to avoid hooks. All-in when her plasma isn't stacked. High skill matchup.",
            enchanter: "Relatively even. Kai'Sa with enchanter (Lulu, Nami, Soraka) scales well like you. Trade when plasma down. Both want to all-in at 6. Better in extended fights. Contest push for priority.",
            engage: "Explosive. Kai'Sa with engage support (Leona, Nautilus, Rell) has brutal follow-up. They engage, she follows with R. You can jump away or jump on her. First to land combo wins. Very volatile.",
            mage: "Skill-based. Kai'Sa with mage support (Lux, Brand, Xerath) dodges with E. Both mobile. Wait for her E to be down then jump. Coordinate burst with support. Even scaling patterns."
        },
        {
            key: "kogmaw",
            champion: "Kog'Maw",
            difficulty: "favorable",
            general: "Free matchup early. Jump on him level 2 and he's dead. Zero mobility to escape. Snowball hard before he gets items. End game quickly - he outscales late. Most favorable matchup.",
            hook: "Absolutely free. Kog'Maw with hook support (Blitz, Thresh, Naut) has no escape. Jump on every hook. Dive him repeatedly. Build massive lead. End before 30 minutes or he takes over.",
            enchanter: "Still very favorable. Kog'Maw with enchanter (Lulu, Nami, Soraka) wants to farm and scale. All-in at every opportunity. Bomb him on cooldown. He outscales eventually so push your lead.",
            engage: "Free kills constantly. Kog'Maw with engage support (Leona, Nautilus, Rell) is immobile and vulnerable. Engage + your jump kills him every time. Snowball massively. Close game early.",
            mage: "Dominate early. Kog'Maw with mage support (Lux, Brand, Xerath) wants to farm. Jump when mage abilities down. He can't escape your all-ins. Zone from CS and snowball lead."
        },
        {
            key: "ashe",
            champion: "Ashe",
            difficulty: "favorable",
            general: "You win all-ins easily. Her slows are annoying but your jump cleanses them. Jump on her when R is down. Respect her arrow during fights. Better burst and mobility. Cleanse for mid game.",
            hook: "Dangerous arrow setup. Ashe with hook support (Blitz, Thresh, Naut) follows hooks with arrow. Both immobile so hook decides trades. Jump to engage when safe. Your all-in is stronger if you land it.",
            enchanter: "Favored. Ashe with enchanter (Lulu, Nami, Soraka) pokes with W. Jump when her arrow is down. Your burst beats her poke. Better in all-ins. She can't escape your jump.",
            engage: "Good for you. Ashe with engage support (Leona, Nautilus, Rell) lacks mobility. She arrows your support then vulnerable. Coordinate engages. Your burst is much stronger in all-ins.",
            mage: "All-in beats poke. Ashe with mage support (Lux, Brand, Xerath) pokes from range. Jump when abilities down. Your burst combo kills her. Better in fights. Respect her pick potential with R."
        },
        {
            key: "samira",
            champion: "Samira",
            difficulty: "skill",
            general: "Close range duel. She blocks your E if she's fast with W. Jump when W is down (30-26s CD). Don't let her stack style grade. Whoever gets ahead snowballs. Both thrive in chaos.",
            hook: "Skill matchup. Samira with hook support (Blitz, Thresh, Naut) blocks some hooks with W. Time your jump for after W. She can dash in after hook. High skill, high risk. Bomb during her dash.",
            enchanter: "More manageable. Samira with enchanter (Lulu, Nami, Soraka) gets shields but less engage. Jump when she comes in. Burst beats shields. Better range control. Wait for W cooldown.",
            engage: "Dangerous dive. Samira with engage support (Leona, Nautilus, Rell) is brutal combo. She follows with dash and W. Jump away or R for self-peel. Buy armor. Play around cooldowns.",
            mage: "Better than engage. Samira with mage support (Lux, Brand, Xerath) has less synergy. Poke before she gets close. Jump away when she dives. Coordinate burst when W down."
        },
        {
            key: "lucian",
            champion: "Lucian",
            difficulty: "skill",
            general: "Intense skill matchup. Both have burst and mobility. Track his dash (22-14s CD). Jump when dash is down. Level 2-3 all-in is crucial. Whoever gets first kill snowballs lane hard.",
            hook: "Explosive. Lucian with hook support (Blitz, Thresh, Naut) is high skill both ways. Both can dodge with dashes. Bait abilities first. Commit fully when you jump. Track both dash cooldowns.",
            enchanter: "Skill-based. Lucian with enchanter (Lulu, Nami, Soraka) trades aggressively. Match his aggression. Jump when his dash is down. Your burst is slightly better. Both scale well.",
            engage: "Chaotic. Lucian with engage support (Leona, Nautilus, Rell) means both sides can engage. Jump to dodge or follow up. Track dashes on both sides. Commit to all-ins. High skill ceiling.",
            mage: "Intense trades. Lucian with mage support (Lux, Brand, Xerath) pokes and bursts. Both mobile. Jump to dodge or engage. Save jump for key moments. Similar power curves."
        },
        {
            key: "missfortune",
            champion: "Miss Fortune",
            difficulty: "favorable",
            general: "You counter her hard. Jump on her face and she can't R. Your all-in beats her poke. Avoid Q bounces from dying minions. Jump interrupts her ultimate. Easy matchup.",
            hook: "Dangerous R setup. MF with hook support (Blitz, Thresh, Naut) uses R during hooks. Jump away if hooked. Jump on her to interrupt R. If you engage her, instant win. Better in all-ins.",
            enchanter: "Still favorable. MF with enchanter (Lulu, Nami, Soraka) pokes with sustain. Jump cancels her R. Your burst beats her poke. All-in when abilities down. Dominate teamfights by jumping on her.",
            engage: "Perfect counter. MF with engage support (Leona, Nautilus, Rell) uses R during CC. Jump on her before R or during. Your mobility hard counters her immobility. Very favored.",
            mage: "Easy matchup. MF with mage support (Lux, Brand, Xerath) means she's immobile. Jump to interrupt R. Better in all-ins. Your mobility destroys her. Free lane."
        },
        {
            key: "jinx",
            champion: "Jinx",
            difficulty: "skill",
            general: "Even matchup decided by supports. Your all-in is stronger early. She outscales at 2-3 items. Jump to close gap through her rockets. Respect her chompers - zap you mid-jump. Match her aggression early.",
            hook: "Skill matchup. Jinx with hook support (Blitz, Thresh, Naut) zones with hook threat. She can chomper you mid-jump. Jump when hook down. Track her chompers. All-in when abilities down.",
            enchanter: "Relatively even. Jinx with enchanter (Lulu, Nami, Soraka) scales well. Both want to farm. Win before her 2-3 item spike. Trade aggressively early. Don't let her poke for free. Both strong in teamfights.",
            engage: "Good for you if timed right. Jinx with engage support (Leona, Nautilus, Rell) can chomper the engage. She's immobile though. Jump after chompers used. Better burst in all-ins early.",
            mage: "Poke matchup. Jinx with mage support (Lux, Brand, Xerath) pokes with rockets. Jump when abilities down. Your burst beats her poke. Better early, she scales harder."
        },
        {
            key: "jhin",
            champion: "Jhin",
            difficulty: "favorable",
            general: "You dominate him. Jump during his reload. He's completely immobile. Your burst one-shots him. Respect 4th shot execute. Dodge W with jump. Rush attack speed. Very favorable.",
            hook: "Absolutely free. Jhin with hook support (Blitz, Thresh, Naut) has no escape. Jump after 4th shot during reload. He's helpless. Dodge W with minions or jump. Dominate lane completely.",
            enchanter: "Heavily favored. Jhin with enchanter (Lulu, Nami, Soraka) can't match your mobility and burst. All-in during reload. Zone him completely. Better in everything. Free matchup.",
            engage: "He's helpless. Jhin with engage support (Leona, Nautilus, Rell) is immobile. Engage + your jump deletes him. All-in whenever you want. He can only poke from safety. Completely dominate.",
            mage: "Burst vs poke, you win. Jhin with mage support (Lux, Brand, Xerath) pokes but you kill. Jump during reload. Your DPS and burst are better. Dodge W, all-in for free kills."
        },
        {
            key: "kalista",
            champion: "Kalista",
            difficulty: "unfavorable",
            general: "Her mobility and early game dominates. Hard to jump on due to constant hopping. She controls objectives with rend. Respect her support synergy. You outscale in teamfights. Survive lane.",
            hook: "Very dangerous. Kalista with hook support (Blitz, Thresh, Naut) throws support with R into hook. Hard to jump on her. She dodges with mobility. Build armor. You scale better late - survive.",
            enchanter: "Still difficult. Kalista with enchanter (Lulu, Nami, Soraka) has better trades with sustain. Hard to land jump on her. Farm safely. She falls off hard - you scale better. Wait for teamfights.",
            engage: "Nightmare. Kalista with engage support (Leona, Nautilus, Rell) is perfect synergy. She saves support with R or double engages. Very coordinated. Farm defensively. Much better late game.",
            mage: "Better than melee. Kalista with mage support (Lux, Brand, Xerath) has less synergy. Still mobile and hard to jump on. Farm and scale. You're better in teamfights. Stay patient."
        },
        {
            key: "aphelios",
            champion: "Aphelios",
            difficulty: "favorable",
            general: "Generally favorable. He's immobile. Jump on him when he has weak weapons. Learn weapon rotations. Respect Gravitum root and Infernum burst. Your execution is simpler. Better mobility.",
            hook: "He's vulnerable. Aphelios with hook support (Blitz, Thresh, Naut) is immobile. Jump when hooked. Track his weapons. Gravitum can root you back. Avoid clumping for Infernum. Favorable overall.",
            enchanter: "Both scale but you're simpler. Aphelios with enchanter (Lulu, Nami, Soraka) farms and scales. He needs to manage weapons - you just all-in. Jump on weak weapons. Better in chaotic fights.",
            engage: "Good for you. Aphelios with engage support (Leona, Nautilus, Rell) lacks mobility. Jump to follow engages. Depends on his weapons but generally favorable. He's complex, you're straightforward.",
            mage: "Poke then all-in. Aphelios with mage support (Lux, Brand, Xerath) pokes and scales. Jump when abilities down. You're more consistent. Avoid Infernum burst. Better in sustained fights."
        },
        {
            key: "nilah",
            champion: "Nilah",
            difficulty: "unfavorable",
            general: "Melee ADC that destroys you close range. She dodges abilities with E and W. Don't jump into her - she wants close combat. Keep distance. Build executioner's. Better in long-range teamfights.",
            hook: "Dangerous. Nilah with hook support (Blitz, Thresh, Naut) wants close combat. If hooked, don't jump in - she thrives there. She can dodge hook. Keep max distance. Jump away, not in.",
            enchanter: "Nightmare sustain. Nilah with enchanter (Lulu, Nami, Soraka) gets massive healing. Executioner's rush. Don't jump on her - she wins close range. Keep distance. Farm and scale.",
            engage: "Chaos favors her. Nilah with engage support (Leona, Nautilus, Rell) is brutal dive. Her W dodges your abilities. Don't jump in. Stay far away. Better in clean front-to-back fights.",
            mage: "More manageable. Nilah with mage support (Lux, Brand, Xerath) has less synergy. Don't jump on her. Poke from distance. Executioner's for healing. Range advantage is key."
        },
        {
            key: "varus",
            champion: "Varus",
            difficulty: "favorable",
            general: "Easy matchup. He's immobile. Jump on him when he channels Q. Your burst deletes him. QSS for his R later. Better mobility and all-in. Dominate lane phase completely.",
            hook: "Completely free. Varus with hook support (Blitz, Thresh, Naut) has zero escape. Jump when hook lands. All-in whenever you want. He can only poke from safety. Total domination.",
            enchanter: "Heavily favored. Varus with enchanter (Lulu, Nami, Soraka) pokes but you burst. Jump when abilities down. He can't escape. Better in all-ins and mobility. Easy lane.",
            engage: "Free matchup. Varus with engage support (Leona, Nautilus, Rell) is immobile. Engage + your jump kills him. All-in constantly. He's helpless against your mobility. Dominate.",
            mage: "Burst beats poke. Varus with mage support (Lux, Brand, Xerath) pokes but you all-in. Jump when abilities down. Better burst and mobility. QSS for R. Easy matchup."
        },
        {
            key: "twitch",
            champion: "Twitch",
            difficulty: "skill",
            general: "Weak in lane, scary late. Pressure before he scales. Jump on him when visible. Oracle lens for stealth. Post-6 respect his R range. Both scale incredibly. Better in front-to-back fights.",
            hook: "Vulnerable early. Twitch with hook support (Blitz, Thresh, Naut) tries stealth engages. Pink wards essential. Jump on him when hooked. Dominate before he scales. Oracle lens rush.",
            enchanter: "Both scale incredibly. Twitch with enchanter (Lulu, Nami, Soraka) wants to farm. He's weaker early. Jump aggressively before items. Pink wards always. Both need 3 items to take over.",
            engage: "Favorable early. Twitch with engage support (Leona, Nautilus, Rell) is weak before 6. Jump when visible. Pink wards and oracle. After 6 he can stealth escape. Prevent his scaling.",
            mage: "Punish him hard. Twitch with mage support (Lux, Brand, Xerath) gets zoned hard early. Jump when visible. Pink ward bushes. He's very weak in lane. Snowball before he scales."
        },
        {
            key: "zeri",
            champion: "Zeri",
            difficulty: "skill",
            general: "Mobile vs mobile matchup. Her Q is her auto. Both have mobility and scaling. Jump when her E is down. Don't chase with her R active. Respect wall dashes. Skill-based matchup.",
            hook: "She's mobile. Zeri with hook support (Blitz, Thresh, Naut) dodges with E. Bait E then hook. Jump when E is down. Track cooldowns. Better in static all-ins without her R.",
            enchanter: "Both mobile and scale. Zeri with enchanter (Lulu, Nami, Soraka) kites with R. You have better burst. Jump when E down. Don't chase. Better in stationary teamfights.",
            engage: "She escapes. Zeri with engage support (Leona, Nautilus, Rell) dashes away. Bait E first. Jump when E down. Don't chase when she has R. Better in front-to-back without kiting space.",
            mage: "Skill matchup. Zeri with mage support (Lux, Brand, Xerath) is mobile. Both dodge abilities. Jump when E down. Don't chase. Similar scaling. Coordinate burst with support."
        },
        {
            key: "sivir",
            champion: "Sivir",
            difficulty: "favorable",
            general: "Easy matchup. Jump on her when spellshield is down (22-18s). She has waveclear but no damage. Your burst destroys her. Bait spellshield with E bomb. Better scaling for damage.",
            hook: "Very favorable. Sivir with hook support (Blitz, Thresh, Naut) blocks hook with spellshield. E bomb to bait it, then they hook. Jump when spell shield down. Much better burst and mobility.",
            enchanter: "Heavily favored. Sivir with enchanter (Lulu, Nami, Soraka) has no damage. Bait spellshield, then all-in. She can't match your burst. Dominate lane. Better in fights.",
            engage: "Free matchup. Sivir with engage support (Leona, Nautilus, Rell) blocks first CC. Bait spellshield with E, then engage. She's immobile. Jump on her for free kills. Total domination.",
            mage: "Easy lane. Sivir with mage support (Lux, Brand, Xerath) blocks one ability. Bait spellshield, then burst. Your damage is much better. She brings utility, you bring kills."
        },
        {
            key: "yunara",
            champion: "Yunara",
            difficulty: "skill",
            general: "Mobile ADC matchup. Both have dash and CC. Respect her root combo. Jump when her E is down. She has poke, you have burst. Track mobility cooldowns. Skill-based dueling.",
            hook: "Skill matchup. Yunara with hook support (Blitz, Thresh, Naut) can dash away. If you're hooked, she follows with root. Both mobile. Track E cooldowns. Commit fully to all-ins.",
            enchanter: "Relatively even. Yunara with enchanter (Lulu, Nami, Soraka) has good scaling. She bursts, you burst. Jump when root is down. Better in extended fights with Q steroid.",
            engage: "Both mobile. Yunara with engage support (Leona, Nautilus, Rell) can dash away. Bait E first. Jump when vulnerable. If caught without dashes, commit fully. Coordinate with support.",
            mage: "Skill matchup. Yunara with mage support (Lux, Brand, Xerath) pokes from range. Both dodge abilities. Jump when abilities down. Similar burst patterns. Track cooldowns for all-ins."
        }
    ]
};