import chroma from 'chroma-js'

type ColorSet = {
  foreground: chroma.Color; 
  background: chroma.Color;
  border: chroma.Color;
}

class UiColor {

  normal: ColorSet;
  active: ColorSet;
  inactive: ColorSet; 
  hovered: ColorSet;

  constructor(
    background: chroma.Color = chroma('000000'), 
    foreground: chroma.Color = chroma('FFFFFF'), 
    border: chroma.Color = chroma('FFFFFF')) {
    this.normal = {
      foreground: foreground, 
      background: background,
      border: border
    };

    this.active = {
      foreground: foreground.brighten(1.5), 
      background: background.brighten(1.5),
      border: border.brighten(1.5)
    }

    this.inactive = {
      foreground: foreground.darken(1.5), 
      background: background.darken(1.5),
      border: border.darken(1.5),
    };

    this.hovered = {
      foreground: foreground.brighten(2), 
      background: background.brighten(2).alpha(0.5),
      border: border.brighten(2).alpha(0.5),
    };
  }
}

export {
  ColorSet, 
  UiColor
}
