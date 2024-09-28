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
      foreground: foreground.brighten(0.25), 
      background: background.brighten(0.25),
      border: border.brighten(0.25)
    }

    this.inactive = {
      foreground: foreground.darken(0.25), 
      background: background.darken(0.25),
      border: border.darken(0.25),
    };

    this.hovered = {
      foreground: foreground.brighten(0.5), 
      background: background.alpha(0.5),
      border: border.alpha(0.5),
    };
  }
}

export {
  ColorSet, 
  UiColor
}
