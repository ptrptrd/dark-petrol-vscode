import chroma from 'chroma-js'

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