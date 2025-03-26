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
      foreground: foreground.brighten(0.15), 
      background: background.brighten(0.15),
      border: border.brighten(0.15)
    }

    this.inactive = {
      foreground: foreground.darken(0.15), 
      background: background.darken(0.15),
      border: border.darken(0.15),
    };

    this.hovered = {
      foreground: foreground.brighten(0.30), 
      background: background.brighten(0.30).alpha(0.5),
      border: border.brighten(0.30).alpha(0.5),
    };
  }
}

export {
  ColorSet, 
  UiColor
}
