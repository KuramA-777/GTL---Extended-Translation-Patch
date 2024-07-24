ItemEvents.tooltip(event => {
event.add("kubejs:basic_control_circuit", "§aULV level circuit")
event.add("kubejs:advanced_control_circuit", "§cLV level circuit")
event.add("kubejs:elite_control_circuit", "§bMV-level circuit")
event.add("kubejs:ultimate_control_circuit", "§5HV level circuit")
event.add("kubejs:ultima_control_circuit", "§4EV level circuit")
event.add("kubejs:warped_ender_pearl", "Shift + right click to set personal teleport point, right click to teleport to the set point")
event.add("kubejs:hyper_stable_self_healing_adhesive", "§7Selectively fully bond, effective even when torn or damaged")
event.add("kubejs:black_body_naquadria_supersolid", "§7 Flows like liquid, does not reflect any electromagnetic waves, absorbs and transmits them perfectly")
event.add("kubejs:stellar_containment_casing", "§7 Generates a force field that can protect against supernova explosions")
event.add("kubejs:command_wand", "You need to hold the command block in your left hand and can only place it above the creation stable core")
event.add("kubejs:uruium_coil_block", ["can provide 32000K furnace temperature for the hyperdimensional plasma forge", "only this coil can be used in the star forge mode"])
event.add(["gtceu:space_elevator", "gtceu:door_of_create", "gtceu:large_rotary", "gtceu:block_conversion_room", "gtceu:create_aggregation"], "The circuit needs to be set to 1 before running")
event.add("gtceu:advanced_assembly_line", ["Time consumption x0.6", "Can be expanded to 64 grids", "Can only use data target warehouse"])
event.add("gtceu:weather_control", ["Circuit 1 switches to sunny day", "Circuit 2 switches to rainy day", "Circuit 3 switches to thunderstorm"])
event.add("gtceu:create_aggregation", ["can only run in the creation dimension", "need to create a computer to provide computing power"])
event.add("gtceu:greenhouse", ["Needs sunlight to run", "If there is insufficient sunlight, the speed will slow down"])
event.add("gtceu:large_greenhouse", "Does not require sunlight to run")
event.add("gtceu:star_ultimate_material_forge_factory", "Maximum number of parallel operations: 1000")
event.add("gtceu:create_computation", "Requires input of MAX voltage")
event.add("gtceu:slaughterhouse", ["Electric monster spawning tower, automatic monster killing", "For every MV1 higher voltage level, the number of processing times each time is +8", "Circuit 1 is a non-hostile creature, circuit 2 is a hostile creature", "Entity generation mode is the actual drop killed by the player, non-peaceful mode is required", "Non-entity generation mode is a virtual drop, peaceful mode is available, and the drops killed by the player cannot be obtained", "Note that any entity inside the machine except the player will be attacked"])
event.add("gtceu:aggregation_device", "Startup energy consumption is 4800MEU")
event.add("gtceu:dimensionally_transcendent_steam_boiler", ["Maximum steam output: 4096000mB/t", "Requires 1 hour of continuous operation to reach maximum output"])
event.add("kubejs:essence_block", "Place the bone block in the conversion room to obtain")
event.add("kubejs:draconium_block_charged", "Place the obsidian infused with dragon power in the conversion room")
event.add("gtceu:block_conversion_room", ["Randomly select a block at a position inside the machine for conversion every second", "For every MV1 level higher than the voltage level, the number of blocks converted each time +4, and there will be no duplication"])
event.add("minecraft:crimson_stem", "Obtained by placing an oak log in a conversion chamber")
event.add("minecraft:warped_stem", "Obtained by placing a birch log in a conversion chamber")
event.add("minecraft:bone_block", "Obtained by placing a calcium block in a conversion chamber")
event.add("minecraft:moss_block", "Obtained by placing grass blocks in the conversion chamber")
event.add("minecraft:sculk", "Obtained by placing moss blocks in a conversion chamber")
event.add("minecraft:command_block", "Throw the magnetic fluid bound star matter block into the gate of creation to obtain")
event.add("minecraft:chain_command_block", "Get the chain command block core by combining it with the command block to be destroyed")
event.add("minecraft:repeating_command_block", "The core of the looping command block is obtained by combining the pulse command block that is about to be destroyed")
event.add("gtceu:large_rotary", ["Able to execute all gas-to-liquid recipes", "Need to place a gas tank next to the pipe block and output automatically", "The maximum number of conversions per second is 1000x2^(4+voltage level)"])
event.add("gtceu:void_miner", "Read data to collect void minerals")
event.add("gtceu:large_recycler", "For every EV1 higher voltage level, the maximum number of parallel recyclers is x4")
event.add("gtceu:void_fluid_drilling_rig", "Read data to drill void fluid")
event.add("gtceu:large_void_miner", ["Precision mode consumes essence to collect specified ore veins", "Random mode consumes 10KB of drilling fluid and takes longer to randomly collect all ores", "In random mode, please note that the output space must be sufficient. It is recommended to use ME output assembly"])
event.add("gtceu:stellar_forge", ["Every 4 times the power increases the speed by 3 times", "Use the huge energy generated by the bomb in an instant to fuse the material", "§7 Insufficient energy supply during operation may cause the destruction of the planet"])
event.add("gtceu:large_rock_crusher", "Need to put the corresponding fluid in the input bin")
event.add("gtceu:plasma_condenser", "Plasma condenser")
event.add("gtceu:rare_earth_centrifugal", "Rare Earth Centrifuge")
event.add("gtceu:magic_manufacturer", "Convert electrical energy into magic power")
event.add("gtceu:chemical_distort", ["Add 4 in parallel for every 100K the coil temperature is above the recipe temperature", "Higher voltage does not provide additional temperature"])
event.add(["gtceu:dimensional_focus_engraving_array", "gtceu:mega_wiremill", "gtceu:mega_presser"], "For every 900K increase in coil temperature, the number of parallel operations is x2")
event.add("gtceu:sps_crafting", "Use magic to craft special items")
event.add("gtceu:matter_fabricator", "Produces special substances")
event.add(["gtceu:nano_forge_1", "gtceu:nano_forge_2", "gtceu:nano_forge_3"], ["Only laser chamber can be used", "Put in the corresponding nano-swarm to work, and parallelize according to the number of swarms"])
event.add("gtceu:nano_forge_1", ["The number of parallel operations is the number of bee colonies"])
event.add("gtceu:nano_forge_2", ["When processing the 2nd order recipe, the number of parallel operations is the number of bee colonies", "When processing the 1st order recipe, the number of parallel operations is doubled, and the overclocking mode is changed to lossless overclocking"])
event.add("gtceu:nano_forge_3", ["When processing 3rd order recipes, the number of parallel operations is the number of bee colonies", "When processing 2nd order recipes, the number of parallel operations is doubled", "When processing 1st order recipes, the number of parallel operations is quadrupled, and the overclocking mode is changed to 8 times the speed increase for every 4 times increase in power"])
event.add("ad_astra:oxygen_loader", "§cSynthesis only, cannot produce oxygen")
event.add(["gtceu:dimensionally_transcendent_dirt_forge", "gtceu:dimensionally_transcendent_steam_oven"], ["has a maximum parallelism of 524288", "and completes the recipe directly"])
event.add(["gtceu:large_chemical_plant", "gtceu:chemical_plant"], "Energy consumption is reduced by 5% for every coil level higher than white copper")
event.add(["gtceu:processing_plant", "gtceu:assemble_plant", "gtceu:separated_plant", "gtceu:mixed_plant"], ["Energy consumption multiple x0.8", "Time consumption multiple x0.9", "Each mode requires a machine of corresponding voltage level to run", "For each LV higher than the voltage level, the maximum number of parallel operations increases by 4, with an upper limit of 16"])
event.add("gtceu:space_elevator", ["Up to 8 expansion modules can be installed", "Query JEI multi-block information to obtain module location"])
event.add("gtceu:suprachronal_assembly_line_module", "Installed on both sides of the suprachronal assembly line")
event.add("gtceu:suprachronal_assembly_line", ["§8§lInvisible Touch", "Modules can be expanded on both sides, and the modules and the host share the same parallel number", "Query JEI multi-block information to obtain module location"])
event.add(["gtceu:suprachronal_assembly_line_module", "gtceu:suprachronal_assembly_line"], "Time-consuming multiplier x0.4")
event.add("gtceu:hyper_reactor", ["Providing an additional 1mb of plasma before each run will gain 16 parallelism", "Different fuels require different plasma", "The order from 1-4 is:", "Orichalcum, Ender, Magic Gold, Metastable 𬭶"])
event.add("gtceu:advanced_hyper_reactor", ["Provide different plasmas to obtain different parallelism", "Starlight: 8, Dense Neutron: 16"])
event.add("gtceu:a_mass_fabricator", ["Energy consumption multiple x0.8", "Time consumption multiple x0.5"])
event.add("gtceu:dimensionally_transcendent_mixer", "Add 1 extra second of progress per second when running a mixer recipe")
event.add("gtceu:pcb_factory", ["Put in nanobee colony to get exemption", "You can use gold and vibranium, each increases the speed by 1%", "Vibranium can also reduce energy consumption by 4 times"])
event.add("gtceu:space_probe_surface_reception", "Do not block")
event.add(["gtceu:mega_alloy_blast_smelter", "gtceu:mega_blast_furnace"], "Time consumption multiple x0.8")
event.add("gtceu:super_blast_smelter", "Time consumption multiple x0.2")
event.add("gtceu:dyson_sphere", ["Start working after launching the Dyson sphere module", "Each operation has a (number of modules/128 + 1)% chance of damaging a module", "When the damage reaches 100%, reduce the number of modules launched", "The production power is determined by the number of modules launched", "Each launch can increase the power by 536870912EU/t"])
event.add("gtceu:bedrock_drilling_rig", ["Requires bedrock below the drill", "10% chance of destroying bedrock each time it runs"])
event.add("gtceu:super_computation", ["Get computing power output according to different voltage levels", "Each computing power output requires a different circuit host", "When providing UIV-level voltage, you need to put in an optical processor host and provide 512CWU/t", "When providing UXV-level voltage, you need to put in a singular processor host and provide 1024CWU/t", "When providing OpV-level voltage, you need to put in a universal processor host and provide 2048CWU/t", "When providing MAX-level voltage, you need to put in a super causal processor host and provide 4096CWU/t"])
event.add("gtceu:blaze_blast_furnace", ["Need to provide §b10x(power÷120)^1/2§r§eLiquid flame§r per second", "Time consumption multiplier x0.5", "Maximum number of parallel operations is fixed at 4"])
event.add("gtceu:cold_ice_freezer", ["§b10x voltage level^2§r of §bliquid ice§r needs to be provided per second", "time consumption multiple x0.5", "maximum number of parallel operations is fixed to 4"])
event.add("gtceu:annihilate_generator", ["Ultimate mass-energy conversion"])
event.add("gtceu:sphere_of_harmony", ["Create a miniature universe and obtain the resources inside", "This multi-block machine requires too much EU to be powered by conventional means", "Directly supplied with EU by wireless EU network, specific values ​​can be viewed in GUI", "The circuit needs to be set up before working", "Execute special overclocking mode, every 16 times increase in power increases the speed by 2 times, overclocking is adjusted by the programmed circuit", "No. 1 does not perform overclocking, 2-4 perform 1, 2, and 3 overclocking respectively", "Startup requires 1024B of cosmic elements and 1024KB of hydrogen and helium", "Hydrogen and helium are stored inside the machine and will continue to be consumed before the machine is ready to work"])
event.add("gtceu:integrated_ore_processor", ["Ore processing is completed in one step", "Circuit No. 1 is grinding-grinding-centrifugation", "Circuit No. 2 is grinding-washing-thermal separation-grinding", "Circuit No. 3 is grinding-washing-grinding-centrifugation", "Circuit No. 4 is grinding-washing-screening-centrifugation", "Circuit No. 5 is grinding-leaching-thermal separation-grinding", "Circuit No. 6 is grinding-leaching-grinding-centrifugation", "Circuit No. 7 is grinding-leaching-screening-centrifugation"])
event.add(["gtceu:dimensionally_transcendent_plasma_forge",
"gtceu:advanced_sps_crafting",
"gtceu:naquadah_reactor",
"gtceu:hyper_reactor",
"gtceu:advanced_hyper_reactor",
"gtceu:mage_assembler",
"gtceu:suprachronal_assembly_line",
"gtceu:superconducting_electromagnetism",
"gtceu:dimensionally_transcendent_mixer",
"gtceu:dimensional_focus_engraving_array",
"gtceu:qft",
"gtceu:matter_fabricator",
"gtceu:field_extruder_factory",
"gtceu:mega_presser",
"gtceu:mega_wiremill",
"gtceu:holy_separator",
"gtceu:crystalline_infinity",
"gtceu:a_mass_fabricator",
"gtceu:field_extrusion_factory",
"gtceu:cooling_tower",
"gtceu:super_blast_smelter",
"gtceu:super_particle_collider",
"gtceu:large_chemical_plant"], "Allows simultaneous use of laser chambers")
event.add(["gtceu:magic_manufacturer",
"gtceu:sps_crafting",
"gtceu:chemical_plant",
"gtceu:large_chemical_reactor",
"gtceu:space_probe_surface_reception",
"gtceu:dimensionally_transcendent_plasma_forge",
"gtceu:dimensional_focus_engraving_array",
"gtceu:advanced_sps_crafting",
"gtceu:precision_assembler",
"gtceu:large_infuser",
"gtceu:pcb_factory",
"gtceu:large_gas_collector",
"gtceu:aggregation_device",
"gtceu:assembler_module",
"gtceu:gravitation_shockburst",
"gtceu:suprachronal_assembly_line",
"gtceu:resource_collection",
"gtceu:engraving_laser_plant",
"gtceu:dimensionally_transcendent_mixer",
"gtceu:field_extruder_factory",
"gtceu:mage_assembler",
"gtceu:mega_presser",
"gtceu:mega_wiremill",
"gtceu:mass_fabricator",
"gtceu:a_mass_fabricator",
"gtceu:star_ultimate_material_forge_factory",
"gtceu:dragon_egg_copier",
"gtceu:cooling_tower",
"gtceu:large_chemical_plant"], Text.keybind("gtceu.machine.perfect_oc"))
event.add(["gtceu:plasma_condenser",
"gtceu:rare_earth_centrifugal",
"gtceu:chemical_plant",
"gtceu:matter_fabricator",
"gtceu:advanced_assembly_line",
"gtceu:mass_fabricator",
"gtceu:holy_separator",
"gtceu:a_mass_fabricator",
"gtceu:crystalline_infinity",
"gtceu:superconducting_electromagnetism",
"gtceu:suprachronal_assembly_line",
"gtceu:dimensionally_transcendent_plasma_forge",
"gtceu:decay_hastener",
"gtceu:advanced_sps_crafting",
"gtceu:mage_assembler",
"gtceu:field_extruder_factory",
"gtceu:precision_assembler",
"gtceu:fishing_ground",
"gtceu:pcb_factory",
"gtceu:super_particle_collider",
"gtceu:engraving_laser_plant",
"gtceu:dimensionally_transcendent_mixer",
"gtceu:field_extrusion_factory",
"gtceu:qft",
"gtceu:large_pyrolyse_oven",
"gtceu:large_chemical_plant",
"gtceu:large_incubator",
"gtceu:large_greenhouse",
"gtceu:cooling_tower",
"gtceu:large_cracker",
"gtceu:mega_alloy_blast_smelter",
"gtceu:super_blast_smelter"], Text.keybind("gtceu.multiblock.parallelizable.tooltip"))
event.addAdvanced('infinitycells:infinity_cell', (item, adv, text) => {
    text.add(1, Text.red('WARNING: While this cell can contain an infinite amount of items and item types,'))
    text.add(2, Text.red('It is highly not recommended you do this!'))
    text.add(3, Text.red('This can lead to NBT overflow and potentially corrupt your entire save!'))
})
event.addAdvanced('infinitycells:infinity_fluidcell', (item, adv, text) => {
    text.add(1, Text.red('WARNING: While this cell can contain an infinite amount of fluids and fluid types,'))
    text.add(2, Text.red('It is highly not recommended you do this!'))
    text.add(3, Text.red('This can lead to NBT overflow and potentially corrupt your entire save!'))
})
})
