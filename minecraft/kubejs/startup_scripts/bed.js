ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$EntityPlaceEvent", event => {
    let level = event.getLevel();
    let entity = event.getEntity();
    // console.log(event.getPlacedBlock());
    // console.log(event.getPos());
    // console.log(level.getBlock(event.getPos()));
    // console.log(level.getBlock(event.getPos()).toString());
    // console.log(event.getPlacedBlock().getBlock());
    // console.log(event.getPlacedBlock().getBlock().toString());
    // console.log(level.getBlock(event.getPos()).toString().startsWith("minecraft:"));
    // console.log(level.getBlock(event.getPos()).toString().endsWith("bed"));
    let pattern = /minecraft:.*_bed.*|handcrafted:.*_fancy_bed.*/;
    // console.log(pattern.test(level.getBlock(event.getPos()).toString()));
    const bedBlocks = ["minecraft:white_bed", "minecraft:gray_bed", "minecraft:light_gray_bed", "minecraft:black_bed", "minecraft:brown_bed", "minecraft:red_bed", "minecraft:orange_bed", "minecraft:yellow_bed", "minecraft:lime_bed", "minecraft:green_bed", "minecraft:cyan_bed", "minecraft:light_blue_bed", "minecraft:blue_bed", "minecraft:purple_bed", "minecraft:magenta_bed", "minecraft:pink_bed"];
    if (pattern.test(level.getBlock(event.getPos()).toString())) {
        console.log("Bed placed");
        event.setCanceled(true);
    }
    let player = entity;
    if (player && player.stages && player.stages.has("pack.admin.unlock.bed")) {
        event.setCanceled(false);
        return
    }
});