import chroma from 'chroma-js'
import { UiColor } from './color'

// 16 Base Color
const base = {
  // Dark Color
  black           : chroma(0x2B3E3B),
  red             : chroma(0xA54242),
  green           : chroma(0x28786E),
  yellow          : chroma(0xEB983E),
  blue            : chroma(0x5F819D),
  magenta         : chroma(0x85678F),
  cyan            : chroma(0x5E8D87),
  white           : chroma(0xC5C8C6),

  // Bright Color
  blackBright     : chroma(0x536F6B),
  redBright       : chroma(0xCC6666),
  greenBright     : chroma(0x47C6B5),
  yellowBright    : chroma(0xD29656),
  blueBright      : chroma(0x5F819D),
  magentaBright   : chroma(0x85678F),
  cyanBright      : chroma(0x8ABEB7),
  whiteBright     : chroma(0xCFE3E0),
}

// Back- and Foreground
const fg = chroma(0xC5C8C6)
const bg = chroma(0x18211F)

//// FOR UI ELEMENTS
const ui = {
  panel: {
    primary: new UiColor(bg, fg, base.cyan),
    secondary: new UiColor(bg.darken(0.15), base.white, base.green),
    tertiary: new UiColor(bg.darken(0.25), base.white, base.cyanBright)
  },
  bar: {
    primary: new UiColor(base.cyan, base.white, base.cyanBright),
    secondary: new UiColor(base.green, base.white, base.greenBright),
    tertiary: new UiColor(base.black, base.white, base.blackBright),
  },
  dialog: {
    first: new UiColor(bg, fg, fg),
    second: new UiColor(base.black, base.white, base.white),
    third: new UiColor(base.cyan, base.white, base.white)
  },
  input: {
    button: new UiColor(base.green, base.white, base.greenBright),
    checkbox: new UiColor(base.blue, base.white, base.blueBright),
    text: new UiColor(base.black, base.white, base.blackBright),
  },
  git: {
    added: new UiColor(base.blue.darken(15), base.blueBright, base.blueBright),
    modified: new UiColor(base.green.darken(15), base.greenBright, base.greenBright),
    deleted: new UiColor(base.red.darken(15), base.redBright, base.redBright),
    conflicted: new UiColor(base.yellow.darken(15), base.yellowBright, base.yellow),
    untracked: new UiColor(base.white.darken(15), base.whiteBright, base.whiteBright),
  },
  border: {
    primary: base.cyan, 
    secondary: base.green, 
    tertiary: base.cyanBright,
  },
  message: {
    success: new UiColor(base.green, base.white, base.greenBright),
    info: new UiColor(base.blue, base.white, base.blueBright),
    warning: new UiColor(base.yellowBright, base.white, base.yellow),
    error: new UiColor(base.red, base.white, base.redBright),
  }
}

//// FOR SYNTAX
const syntax = {
  namespace       : base.blueBright,
  class           : base.blue,
  enum 	          : base.cyanBright,
  interface 	    : base.blue,
  struct 	        : base.yellow,
  typeParameter 	: base.blueBright,
  type 	          : base.whiteBright,
  parameter 	    : base.magenta,
  variable 	      : base.cyan,
  property 	      : base.magenta,
  enumMember 	    : base.yellow,
  decorator 	    : base.yellowBright,
  event 	        : base.blueBright,
  function 	      : base.cyan,
  method 	        : base.cyan,
  macro 	        : base.blue,
  label 	        : base.white,
  comment 	      : base.white.alpha(0.75),
  string 	        : base.yellowBright,
  keyword 	      : base.blueBright,
  number 	        : base.whiteBright,
  regexp 	        : base.yellow,
  operator 	      : base.white,
}

export {
  base,
  fg,
  bg,
  ui,
  syntax
}
