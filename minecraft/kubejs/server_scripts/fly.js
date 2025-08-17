ServerEvents.commandRegistry(e => {
    const { commands: Commands, arguments: Arguments } = e

    e.register(Commands.literal('fly')
        .requires(s => s.hasPermission(2))
        .executes(c => fly(c.source.player))
        .then(Commands.argument('target', Arguments.PLAYER.create(e))
            .executes(c => fly(Arguments.PLAYER.getResult(c, 'target')))
        )
    )

    let fly = (player) => {
        console.log(player)
        if (player.abilities.mayfly) {
            player.abilities.mayfly = false
            player.abilities.flying = false
            player.displayClientMessage(Component.gold('Flying: ').append(Component.red('disabled')), true)
        } else {
            player.abilities.mayfly = true
            player.displayClientMessage(Component.gold('Flying: ').append(Component.green('enabled')), true)
        }

        player.onUpdateAbilities()
        return 1
    }
})