JEIEvents.hideItems((event) => {
    event.hide("/computercraft:*/");
    event.hide("/advancedperipherals:*/");
});
JEIEvents.information(event => {
  // Creative Fluid Tank
  event.addItem('create:creative_fluid_tank', [
    '§6Note: This recipe requires a fully filled Mekanism Hohlraum! Even through the preview may not show it',
    '§7Make sure it contains Fusion Fuel.'
  ]);

  // Creative Energy Cube
  event.addItem('mekanism:creative_energy_cube', [
    '§6Note: This recipe requires a fully filled Mekanism Hohlraum! Even through the preview may not show it',
    '§7Make sure it contains Fusion Fuel.'
  ]);
});