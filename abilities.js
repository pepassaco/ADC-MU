const championAbilities = {
    caitlyn: {
        P: "Headshot - Every few autos she gets a powered-up shot, especially from bushes. Don't trade when she has this stacked.",
        Q: "Piltover Peacemaker - Long line skillshot that goes through minions. Sidestep it, it's telegraphed.",
        W: "Yordle Snap Trap - Traps on the ground that root you. Avoid them, especially near walls. She follows up with huge damage.",
        E: "90 Caliber Net - Dash backwards and slows you. Her escape tool. She often uses it to get headshot proc.",
        R: "Ace in the Hole - Long range sniper shot that locks onto you. Your support can body block it. Hurts a lot."
    },
    draven: {
        P: "League of Draven - Gets stacks for catching axes, cashes in on kills. Deny him kills or he snowballs insanely hard.",
        Q: "Spinning Axe - His axes bounce and he catches them. These hurt BAD. Force him to choose between catching and dodging your abilities.",
        W: "Blood Rush - Movement speed and attack speed boost. Resets when catching axe. Makes him fast and hurts even more.",
        E: "Stand Aside - Throws axes in a line, pushes you back and slows. He uses this to setup all-ins or interrupt you.",
        R: "Whirling Death - Two big axes fly out and back. Hurts a lot. Can execute low HP targets. Be careful when low."
    },
    vayne: {
        P: "Night Hunter - Gets movement speed when moving toward enemies. Makes her hard to kite. She's mobile.",
        Q: "Tumble - Short dash and next auto hurts more. Low cooldown. She uses this to dodge and reposition constantly.",
        W: "Silver Bolts - Every 3rd hit on same target deals % max HP true damage. Don't let her proc this on you - breaks trades.",
        E: "Condemn - Knocks you back. If you hit a wall, you're stunned. NEVER fight near walls. She uses this to peel or setup kills.",
        R: "Final Hour - Goes invisible when she tumbles, gets AD, more movement speed. Super dangerous. She outplays everything at 6."
    },
    ezreal: {
        P: "Rising Spell Force - Stacks attack speed when hitting abilities. He wants to spam Q to stack this up.",
        Q: "Mystic Shot - Spam skillshot that hurts and reduces his cooldowns. Stand behind minions to block it. His main poke.",
        W: "Essence Flux - Wave that marks enemies. If he hits the mark, it hurts more. Can be hard to see in fights.",
        E: "Arcane Shift - Blink to location and shoots nearest enemy. His only escape (26-19s CD). Bait this before all-in.",
        R: "Trueshot Barrage - Global wave of damage. He uses it to snipe or waveclear. Can hurt if you're low HP."
    },
    kaisa: {
        P: "Second Skin - Stacks plasma on you with autos and abilities. When stacked, she bursts it for big damage. Don't let her stack 5 on you.",
        Q: "Icathian Rain - Missiles that spread or focus if you're isolated (alone). HURTS when isolated. Stay near minions.",
        W: "Void Seeker - Long range skillshot that reveals and stacks plasma. Dodge it. If hit, she might dive you with R.",
        E: "Supercharge - Movement speed burst and becomes invisible briefly. Recharges faster with attacks. Her mobility tool.",
        R: "Killer Instinct - Dashes to champions with plasma stacks and gets a shield. She uses this to dive in or dodge abilities."
    },
    kogmaw: {
        P: "Icathian Surprise - When he dies, he becomes a bomb and chases you. Run away when he dies or you take damage.",
        Q: "Caustic Spittle - Short range that shreds armor/MR. He uses this before attacking you. Less range than autos.",
        W: "Bio-Arcane Barrage - Gains huge attack range and deals % max HP damage. THIS is why he scales. Long range monster with this.",
        E: "Void Ooze - Line slow that leaves slowing zone. He uses this to peel or setup. Sidestep it.",
        R: "Living Artillery - Long range artillery spam. He pokes with this from far away. Costs more mana each cast. Hurts a lot."
    },
    ashe: {
        P: "Frost Shot - All her autos slow you. Annoying to kite. She always slows. Makes her hard to escape from.",
        Q: "Ranger's Focus - Stacks up then activates for attack speed and multiple arrows. Her DPS steroid. Respect when active.",
        W: "Volley - Cone of arrows that slow and damage. Dodge by moving sideways. Her main poke. Annoying in lane.",
        E: "Hawkshot - Sends bird that gives vision. She uses this to scout jungle or check for ganks. Not combat ability.",
        R: "Enchanted Crystal Arrow - Long range stun arrow. Longer it flies, longer the stun. Can change fights. Cleanse or QSS this."
    },
    samira: {
        P: "Daredevil Impulse - Gains style grade (E to S) by hitting different things. At S grade, can use R. Don't let her stack this.",
        Q: "Flair - Shoots or slashes depending on range. Can be cast during dash. Her main damage tool.",
        W: "Blade Whirl - SPINS AND BLOCKS ALL PROJECTILES for a bit. Your abilities and autos are useless. Wait this out (30-26s CD).",
        E: "Wild Rush - Dashes through enemies. Can dash to allies too. Low cooldown. She's super mobile with this.",
        R: "Inferno Trigger - Spins and shoots everything around her. MASSIVE damage. Only at S style. Run away or burst her. Chompers stop this."
    },
    lucian: {
        P: "Lightslinger - Shoots twice after using ability. This is why his trades hurt so much. Never face-tank both shots.",
        Q: "Piercing Light - Line shot that extends from target. Good poke. He uses this to proc passive. Hurts.",
        W: "Ardent Blaze - Shoots mark. If he hits the mark, gets movement speed. He uses this for mobility and passive proc.",
        E: "Relentless Pursuit - Short dash that removes slows. LOW COOLDOWN when he shoots (22-14s, reduced by autos). Super mobile.",
        R: "The Culling - Shoots tons of bullets in direction. He can move while shooting. Dodge sideways. Hurts if you face-tank it."
    },
    missfortune: {
        P: "Love Tap - First auto on new target deals extra damage. She swaps targets to abuse this. Pokes hard with this.",
        Q: "Double Up - Shoots enemy and bounces behind them. Stand away from dying minions. Bounced shot crits and HURTS.",
        W: "Strut - Passive movement speed, way more if not hit. Active gives attack speed. She's fast if you don't poke her.",
        E: "Make It Rain - AoE slow and damage zone. She uses this to zone or slow you for engage. Annoying in fights.",
        R: "Bullet Time - Channels and shoots waves. HUGE damage but she can't move. Interrupt with chompers or get out of cone."
    },
    tristana: {
        P: "Draw a Bead - Gains attack range per level. At 18 she has 669 range, more than you. She outranges late game.",
        Q: "Rapid Fire - Massive attack speed steroid. When active she melts everything. Respect her burst with this + bomb.",
        W: "Rocket Jump - Jumps to location and damages. Resets on kills/assists. She's mobile. Can jump in to kill and jump out. Zap mid-jump.",
        E: "Explosive Charge - Bomb that stacks with autos and explodes for damage. Don't let her stack 4 times or it hurts BAD.",
        R: "Buster Shot - Big knockback and damage. She uses this to execute or peel. Can knock you into her team or away."
    },
    jhin: {
        P: "Whisper - Only 4 shots then reloads. 4th shot crits and executes. Gets movement speed on crit. Trade during reload.",
        Q: "Dancing Grenade - Bouncing grenade that bounces 4 times. Kills give more bounces. Hurts but manageable poke.",
        W: "Deadly Flourish - Long range root on marked targets. He marks you with autos or ally damage. Stand behind minions.",
        E: "Captive Audience - Flower traps that slow and reveal. He uses these to zone and check bushes. Don't step on them.",
        R: "Curtain Call - 4 long range sniper shots. Last shot does missing HP damage. Run sideways. Your support can block. Hurts when low."
    },
    kalista: {
        P: "Martial Poise - Dashes with every auto attack. Makes her super mobile and hard to hit. Predict her dashes for skillshots.",
        Q: "Pierce - Throws spear that goes through units. She uses this to poke and apply spears for rend.",
        W: "Sentinel - Passive: soul bound ally. Both deal more damage together. Active: sends ghost scout for vision.",
        E: "Rend - Rips out all spears from enemies for huge damage. She uses this to execute and secure objectives. Denies CS.",
        R: "Fate's Call - Pulls bound ally to her and they can relaunch. She saves support or support engages. Very synergistic."
    },
    aphelios: {
        P: "The Hitman - Has 5 weapons that rotate. Main hand Q, offhand R. Weapons: Calibrum (range), Severum (lifesteal), Gravitum (slow/root), Infernum (AoE), Crescendum (turret).",
        Q: "Weapon Ability - Different per weapon. Calibrum: long poke. Severum: heal. Gravitum: root all slowed. Infernum: flamethrower. Crescendum: turret.",
        W: "Phase - Swaps weapons. He uses this to get the weapon combo he wants. Track what he swaps to.",
        E: "Moonlight Vigil - Uses offhand weapon. Different per weapon combo. Some hurt way more than others. Watch for Infernum + Crescendum.",
        R: "No R - His R is tied to E and uses offhand weapon effects."
    },
    nilah: {
        P: "Joy Unending - Shares XP, gets extra healing/shields from allies. Gains bonus XP. She's always higher level. Gets more from enchanter shields.",
        Q: "Formless Blade - Whip attack that heals. Extended range. She uses this to poke and sustain. Executioner's counters this.",
        W: "Jubilant Veil - Becomes briefly untargetable and dodges ALL projectiles in an area. Your abilities are useless. Wait this out.",
        E: "Slipstream - Dashes through unit and can store 2 charges. She's super mobile. Can dash to minions to reach you.",
        R: "Apotheosis - AoE burst around her and pulls enemies. She heals from damage dealt. Don't clump. Run away from her R."
    },
    varus: {
        P: "Living Vengeance - Gets attack speed on kills/assists. Not super relevant in lane. He scales with this.",
        Q: "Piercing Arrow - Charges up long range arrow. Longer charge, more damage. He stands still - punish this. Dodge by moving.",
        W: "Blighted Quiver - Marks enemies with blight stacks. When he uses other abilities, blight detonates for % HP damage. Stacks hurt.",
        E: "Hail of Arrows - AoE slow and damage zone. He uses this to zone or peel. Annoying but not super impactful.",
        R: "Chain of Corruption - Root that spreads to nearby champs. Long range engage. QSS this. He locks you down for his team."
    },
    twitch: {
        P: "Deadly Venom - Poisons enemies with autos. Stacks up. His E detonates this for damage. The poison itself doesn't hurt much.",
        Q: "Ambush - Goes invisible and gets attack speed. Resets on kills. He uses this to stealth flank or escape. Pink wards counter.",
        W: "Venom Cask - Slowing poison zone. Applies poison stacks. He uses this to slow or apply stacks for E.",
        E: "Contaminate - Detonates poison stacks for physical damage. More stacks = more damage. His execute tool. Hurts.",
        R: "Spray and Pray - Gains 300 range and piercing autos for duration. THIS is why he teamfights well. He outranges you with this."
    },
    zeri: {
        P: "Living Battery - Her Q is her basic attack (skillshot). Shield from teammates gives her movement speed. Unique mechanics.",
        Q: "Burst Fire - Shoots burst of 7 rounds in line. This is her auto attack. Charges up. Poke with this constantly.",
        W: "Ultrashock Laser - Line skillshot that slows and marks. Can go through walls. If hits terrain first, stuns and gives her big shield.",
        E: "Spark Surge - Dashes and damages nearby. Can dash through walls. She's mobile with this. Chompers predict her dash path.",
        R: "Lightning Crash - AoE burst and gains HUGE movement speed and chain lightning autos. Don't chase her. She kites super well with this."
    },
    sivir: {
        P: "Fleet of Foot - Gains movement speed when hitting with abilities. Makes her faster. Not super impactful in trades.",
        Q: "Boomerang Blade - Throws blade that goes out and back. Does damage both ways. Dodge it or stand behind minions.",
        W: "Ricochet - Autos bounce to nearby enemies. She uses this for waveclear. Not very threatening in 2v2.",
        E: "Spell Shield - Blocks next enemy ability and gives mana. ANNOYING. Break this with auto or W before using real abilities (22-18s CD).",
        R: "On The Hunt - Team-wide movement speed buff. She provides utility with this. Not combat focused but helps engage/disengage."
    },
    yunara: {
        P: "Spirit Bond - Marks enemies hit by abilities. Attacking marked enemies deals bonus damage and can root them. Don't let her proc the root.",
        Q: "Spirit Arrow - Fires arrow that damages and marks. Her main poke tool. Dodge by sidestepping. She uses this to setup her passive root.",
        W: "Spectral Veil - Creates protective zone that blocks damage and gives movement speed. Annoying defensive tool. Wait for it to expire before all-in.",
        E: "Shadow Step - Dashes and can go over walls. Her mobility and escape tool. Track this cooldown - she's vulnerable when it's down.",
        R: "Spirit Reckoning - Large AoE that marks all enemies and empowers her next attacks. Big teamfight ultimate. Spread out to avoid multi-person marks."
    },
};