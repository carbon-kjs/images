UIEvent.MainMenu((event) => {
  event.replace((ui) => {
    // Pack logo
    ui.image((i) => {
      i.height = 529 * 0.000615 * ui.h;
      i.width = 2000 * 0.000615 * ui.h;
      i.x = ui.width / 2 - i.width / 2;
      i.y = ui.height * 0.035;
      i.texture =
        "<your folder name in kubejs assets folder>:textures/ui/<file name>.png";
    });
  });
});
