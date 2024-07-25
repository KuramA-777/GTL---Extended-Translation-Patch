//priority: 99


event.remove({ id: "mininggadgets:upgrade_empty" })

event.shaped("mininggadgets:upgrade_empty", [
        "ACA",
        "CDC",
        "ACA"
    ], {
        A: "gtceu:vanadium_steel_plate",
        C: "gtceu:plastic_circuit_board",
        D: "#gtceu:circuits/mv"
    })