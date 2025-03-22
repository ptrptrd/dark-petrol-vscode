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
    primary: new UiColor(bg, fg, fg),
    secondary: new UiColor(bg.darken(0.25), fg.darken(0.25), fg.darken(0.25)),
    tertiary: new UiColor(bg.darken(0.25), fg.darken(0.25), fg.darken(0.25))
  },
  bar: {
    primary: new UiColor(base.black, base.white, base.white),
    secondary: new UiColor(base.blackBright, base.white, base.white),
    tertiary: new UiColor(base.cyan, base.white, base.white),
  },
  dialog: {
    first: new UiColor(bg, fg, fg),
    second: new UiColor(base.black, base.white, base.white),
    third: new UiColor(base.cyan, base.white, base.white)
  },
  input: {
    button: new UiColor(base.green, fg, fg),
    checkbox: new UiColor(base.blue, fg, fg),
    text: new UiColor(base.black, base.white, base.white),
  },
  git: {
    added: new UiColor(base.black.brighten(50), base.blueBright, base.blueBright),
    modified: new UiColor(base.black.brighten(50), base.greenBright, base.greenBright),
    deleted: new UiColor(base.black.brighten(50), base.redBright, base.redBright),
    conflicted: new UiColor(base.black.brighten(50), base.yellowBright, base.yellow),
    untracked: new UiColor(base.black.brighten(50), base.whiteBright, base.whiteBright),
  },
  border: {
    primary: fg, 
    secondary: fg.darken(50), 
    tertiary: fg.darken(100)
  },
  message: {
    success: new UiColor(base.green, base.white),
    info: new UiColor(base.blue, base.white),
    warning: new UiColor(base.yellowBright, base.white),
    error: new UiColor(base.red, base.white),
  }
}

//// FOR SYNTAX
const syntax = {
  namespace       : fg,
  class           : fg,
  enum 	          : fg,
  interface 	    : fg,
  struct 	        : fg,
  typeParameter 	: fg,
  type 	          : fg,
  parameter 	    : fg,
  variable 	      : fg,
  property 	      : fg,
  enumMember 	    : fg,
  decorator 	    : fg,
  event 	        : fg,
  function 	      : fg,
  method 	        : fg,
  macro 	        : fg,
  label 	        : fg,
  comment 	      : fg,
  string 	        : fg,
  keyword 	      : fg,
  number 	        : fg,
  regexp 	        : fg,
  operator 	      : fg,
}

export {
  base,
  fg,
  bg,
  ui,
  syntax
}
