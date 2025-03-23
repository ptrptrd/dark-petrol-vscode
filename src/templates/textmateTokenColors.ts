import { base } from "../colors";

const textmateTokenColors = [
  {
    "name": "Built-in constant",
    "scope": "constant.language",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Class name",
    "scope": "entity.name.class",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Comment",
    "scope": [
      "comment",
      "punctuation.definition.comment",
      "punctuation.definition.tag"
    ],
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Comment - javascript",
    "scope": ["comment.line.double-slash.js"],
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Enum",
    "scope": ["entity.name.type.enum", "entity.name.variable.enum-member"],
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Function argument",
    "scope": ["entity.name.variable.parameter", "variable.parameter.cpp"],
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Field",
    "scope": "entity.name.variable.field",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Function name",
    "scope": "entity.name.function",
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Function name - javascript",
    "scope": "entity.name.function.js",
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Inherited class",
    "scope": "entity.other.inherited-class",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Invalid",
    "scope": "invalid",
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Invalid deprecated",
    "scope": "invalid.deprecated",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "JSON String",
    "scope": "meta.structure.dictionary.json string.quoted.double.json",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword",
    "scope": "keyword",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword",
    "scope": "keyword.other.class",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword control",
    "scope": "keyword.control",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword control from",
    "scope": "keyword.control.from",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword control import",
    "scope": "keyword.control.import",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword other",
    "scope": "keyword.other",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword other unit",
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword other using",
    "scope": "keyword.other.using",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Keyword type",
    "scope": "keyword.type",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Library class/type",
    "scope": ["support.type", "support.class"],
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Library class/type - css",
    "scope": ["support.type.property-name.css"],
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Library constant",
    "scope": "support.constant",
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Library constant - css",
    "scope": [
      "support.constant.color.w3c-standard-color-name.css",
      "support.constant.font-name.css"
    ],
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Library function",
    "scope": "support.function",
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Meta",
    "scope": "meta",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Number",
    "scope": "constant.numeric",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Property",
    "scope": "entity.name.variable.property",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Punctuation",
    "scope": "punctuation",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Source",
    "scope": "source",
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Storage",
    "scope": "storage",
    "settings": {
      "fontStyle": "",
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Storage modifier",
    "scope": "storage.modifier",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Storage type",
    "scope": "storage.type",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "String",
    "scope": "string",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "String - yaml",
    "scope": "string.unquoted.plain.out.yaml",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Symbol",
    "scope": "meta.symbol",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Tag attribute",
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Tag attribute",
    "scope": "entity.other.attribute-name.html",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Tag attribute - css",
    "scope": "entity.other.attribute-name.class.css",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Tag attribute id - css",
    "scope": "entity.other.attribute-name.id.css",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Tag name",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Tag name - css",
    "scope": "entity.name.tag.css",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Tag name - YAML",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Text",
    "scope": "text",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "This self",
    "scope": "variable.language",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Type",
    "scope": "entity.name.type",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "User-defined constant",
    "scope": ["constant.character", "constant.other"],
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable",
    "scope": "variable",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable local",
    "scope": "entity.name.variable.local",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable object property",
    "scope": "variable.object.property",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable object property - javascript",
    "scope": "variable.other.property",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable other constant",
    "scope": "variable.other.constant",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable other object",
    "scope": "variable.other.object",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable other readwrite",
    "scope": "variable.other.readwrite",
    "settings": {
      "foreground": base.red.hex()
    }
  },
  {
    "name": "Variable parameter",
    "scope": "variable.parameter",
    "settings": {
      "foreground": base.red.hex()
    }
  }
]

export {
  textmateTokenColors
}
