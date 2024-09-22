import * as chroma from 'chroma-js'

type ColorSet = {
  foreground: chroma.Color; 
  background: chroma.Color;
}

class UiColor {

  active: ColorSet;
  inactive: ColorSet; 
  hovered: ColorSet;

  constructor(background: chroma.Color, foreground: chroma.Color) {
    this.active = {
      foreground: foreground, 
      background: background
    };

    this.inactive = {
      foreground: foreground.darken(10), 
      background: background.darken(10)
    };

    this.hovered = {
      foreground: foreground.alpha(0.5), 
      background: background.alpha(0.5)
    };
  }
}

export {
  ColorSet, 
  UiColor
}
