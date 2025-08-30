StartupEvents.registry('item', event => {
    // an item to disable joinning the server as dark removed the autoupdater at one point commit e06703ff8e9a37b9b264a129c1685dddc6efae72
    event.create('check1').texture('kubejs:item/example_item')

});