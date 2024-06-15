import * as chroma from 'chroma-js'

// 16 Base Color 
const base = {
    // Dark Color
    black           : chroma('2B3E3B'),
    red             : chroma('A54242'),
    green           : chroma('28786E'),
    yellow          : chroma('EB983E'),
    blue            : chroma('5F819D'),
    magenta         : chroma('85678F'),
    cyan            : chroma('5E8D87'),
    white           : chroma('C5C8C6'),

    // Bright Color
    blackBright     : chroma('536F6B'),
    redBright       : chroma('CC6666'),
    greenBright     : chroma('47C6B5'),
    yellowBright    : chroma('D29656'),
    blueBright      : chroma('5F819D'),
    magentaBright   : chroma('85678F'),
    cyanBright      : chroma('8ABEB7'),
    whiteBright     : chroma('CFE3E0'),
}

// Back- and Foreground
const fg = chroma('C5C8C6')
const bg = chroma('18211F')

//// FOR UI ELEMENTS
const ui = {
    panel: {
        fg: fg, 
        bg: bg, 
        active: {
            bg: bg.brighten(10),
            fg: fg.brighten(10)
        }
    },
    input: {
        fg: fg, 
        bg: bg, 
    },
    border: fg, 
    info: {
        fg: base.blueBright,
        bg: base.blue
    },
    warning: {
        fg: base.yellowBright, 
        bg: base.yellow
    },
    error: {
        fg: base.redBright,
        bg: base.red,
    }
}

//// FOR SYNTAX
const syntax = {
    namespace       : fg,
    class           : fg, 
    enum 	        : fg,
    interface 	    : fg,
    struct 	        : fg,
    typeParameter 	: fg,
    type 	        : fg,
    parameter 	    : fg,
    variable 	    : fg,
    property 	    : fg,
    enumMember 	    : fg,
    decorator 	    : fg,
    event 	        : fg,
    function 	    : fg,
    method 	        : fg,
    macro 	        : fg,
    label 	        : fg,
    comment 	    : fg,
    string 	        : fg,
    keyword 	    : fg,
    number 	        : fg,
    regexp 	        : fg,
    operator 	    : fg,
}

export default {
    base,
    fg, 
    bg, 
    ui, 
    syntax
}