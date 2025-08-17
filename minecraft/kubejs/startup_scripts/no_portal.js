ForgeEvents.onEvent("net.minecraftforge.event.level.BlockEvent$PortalSpawnEvent", (event) => {
    let { level, pos } = event;
    event.setCanceled(true);
    let server = level.server;
    let player = level.getNearestPlayer(pos.x, pos.y, pos.z, 10, null);
    let block = level.getBlock(pos.offset(0, -1, 0))
    if (!player) return;

    if (player.stages.has("pack.admin.unlock")) {
        event.setCanceled(false);
        return;
    }
    if (block == "minecraft:obsidian") {
        if (player.stages.has("pack.nether_unlock")) {
            event.setCanceled(false);
            return;
        }
    };
    if (block == "minecraft:stone_bricks") {
        if (player.stages.has("pack.undergarden_unlock.portal")) {
            event.setCanceled(false);
            return;
        }
    };
    player.statusMessage = Text.of("The portal doesn't seem to want to light...");
    server.schedule(2 * 1000, () => player.statusMessage = Text.of("You seem to require something that can contain hellish heat"));
});