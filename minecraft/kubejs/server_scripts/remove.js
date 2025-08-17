ServerEvents.recipes((event) => {
    const recipes = [
        // {
        //     input: 'sample',
        //     output: 'sample',
        //     type: 'sample',
        //     mod: 'sample',
        //     id: 'sample'
        // }

        //cc
        { "output": /computercraft:.*/ },
        { "output": /advancedperipherals:.*/ },
        { "output": /computer_cartographer:.*/ },
        // entangled
        { "output": /entangled:.*/ },

    ];

    recipes.forEach((recipe) => {
        event.remove(recipe);
    });
});
