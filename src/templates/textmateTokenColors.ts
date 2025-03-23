import { base, fg, syntax, ui } from "../colors";

const textmateTokenColors = [
  {
    "name": "Built-in constant",
    "scope": "constant.language",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Class name",
    "scope": "entity.name.class",
    "settings": {
      "foreground": syntax.class.hex()
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
      "foreground": syntax.comment.hex()
    }
  },
  {
    "name": "Comment - javascript",
    "scope": ["comment.line.double-slash.js"],
    "settings": {
      "foreground": syntax.comment.hex()
    }
  },
  {
    "name": "Enum",
    "scope": ["entity.name.type.enum", "entity.name.variable.enum-member"],
    "settings": {
      "foreground": syntax.enum.hex()
    }
  },
  {
    "name": "Function argument",
    "scope": ["entity.name.variable.parameter", "variable.parameter.cpp"],
    "settings": {
      "foreground": syntax.parameter.hex()
    }
  },
  {
    "name": "Field",
    "scope": "entity.name.variable.field",
    "settings": {
      "foreground": syntax.variable.hex()
    }
  },
  {
    "name": "Function name",
    "scope": "entity.name.function",
    "settings": {
      "fontStyle": "",
      "foreground": syntax.function.hex()
    }
  },
  {
    "name": "Function name - javascript",
    "scope": "entity.name.function.js",
    "settings": {
      "fontStyle": "",
      "foreground": syntax.function.hex()
    }
  },
  {
    "name": "Inherited class",
    "scope": "entity.other.inherited-class",
    "settings": {
      "foreground": syntax.class.hex()
    }
  },
  {
    "name": "Invalid",
    "scope": "invalid",
    "settings": {
      "fontStyle": "",
      "foreground": ui.message.error.normal.foreground.hex()
    }
  },
  {
    "name": "Invalid deprecated",
    "scope": "invalid.deprecated",
    "settings": {
      "foreground": ui.message.warning.normal.foreground.hex()
    }
  },
  {
    "name": "JSON String",
    "scope": "meta.structure.dictionary.json string.quoted.double.json",
    "settings": {
      "foreground": syntax.string.hex()
    }
  },
  {
    "name": "Keyword",
    "scope": "keyword",
    "settings": {
      "foreground": syntax.keyword.hex()
    }
  },
  {
    "name": "Keyword",
    "scope": "keyword.other.class",
    "settings": {
      "foreground": syntax.keyword.hex()
    }
  },
  {
    "name": "Keyword control",
    "scope": "keyword.control",
    "settings": {
      "foreground": syntax.keyword.hex()
    }
  },
  {
    "name": "Keyword control from",
    "scope": "keyword.control.from",
    "settings": {
      "foreground": syntax.keyword.hex()
    }
  },
  {
    "name": "Keyword control import",
    "scope": "keyword.control.import",
    "settings": {
      "foreground": syntax.operator.hex()
    }
  },
  {
    "name": "Keyword other",
    "scope": "keyword.other",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Keyword other unit",
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Keyword other using",
    "scope": "keyword.other.using",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Keyword type",
    "scope": "keyword.type",
    "settings": {
      "foreground": syntax.type.hex()
    }
  },
  {
    "name": "Library class/type",
    "scope": ["support.type", "support.class"],
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Library class/type - css",
    "scope": ["support.type.property-name.css"],
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Library constant",
    "scope": "support.constant",
    "settings": {
      "fontStyle": "",
      "foreground": fg.hex()
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
      "foreground": fg.hex()
    }
  },
  {
    "name": "Library function",
    "scope": "support.function",
    "settings": {
      "fontStyle": "",
      "foreground": fg.hex()
    }
  },
  {
    "name": "Meta",
    "scope": "meta",
    "settings": {
      "foreground": syntax.comment.hex()
    }
  },
  {
    "name": "Number",
    "scope": "constant.numeric",
    "settings": {
      "foreground": syntax.number.hex()
    }
  },
  {
    "name": "Property",
    "scope": "entity.name.variable.property",
    "settings": {
      "foreground": syntax.property.hex()
    }
  },
  {
    "name": "Punctuation",
    "scope": "punctuation",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Source",
    "scope": "source",
    "settings": {
      "fontStyle": "",
      "foreground": fg.hex()
    }
  },
  {
    "name": "Storage",
    "scope": "storage",
    "settings": {
      "fontStyle": "",
      "foreground": fg.hex()
    }
  },
  {
    "name": "Storage modifier",
    "scope": "storage.modifier",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Storage type",
    "scope": "storage.type",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "String",
    "scope": "string",
    "settings": {
      "foreground": syntax.string.hex()
    }
  },
  {
    "name": "String - yaml",
    "scope": "string.unquoted.plain.out.yaml",
    "settings": {
      "foreground": syntax.string.hex()
    }
  },
  {
    "name": "Symbol",
    "scope": "meta.symbol",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Tag attribute",
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Tag attribute",
    "scope": "entity.other.attribute-name.html",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Tag attribute - css",
    "scope": "entity.other.attribute-name.class.css",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Tag attribute id - css",
    "scope": "entity.other.attribute-name.id.css",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Tag name",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Tag name - css",
    "scope": "entity.name.tag.css",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Tag name - YAML",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": fg.hex()
    }
  },
  {
    "name": "Text",
    "scope": "text",
    "settings": {
      "foreground": syntax.string.hex()
    }
  },
  {
    "name": "This self",
    "scope": "variable.language",
    "settings": {
      "foreground": syntax.operator.hex()
    }
  },
  {
    "name": "Type",
    "scope": "entity.name.type",
    "settings": {
      "foreground": syntax.type.hex()
    }
  },
  {
    "name": "User-defined constant",
    "scope": ["constant.character", "constant.other"],
    "settings": {
      "foreground": syntax.variable.hex()
    }
  },
  {
    "name": "Variable",
    "scope": "variable",
    "settings": {
      "foreground": syntax.variable.hex()
    }
  },
  {
    "name": "Variable local",
    "scope": "entity.name.variable.local",
    "settings": {
      "foreground": syntax.variable.hex()
    }
  },
  {
    "name": "Variable object property",
    "scope": "variable.object.property",
    "settings": {
      "foreground": syntax.parameter.hex()
    }
  },
  {
    "name": "Variable object property - javascript",
    "scope": "variable.other.property",
    "settings": {
      "foreground": syntax.parameter.hex()
    }
  },
  {
    "name": "Variable other constant",
    "scope": "variable.other.constant",
    "settings": {
      "foreground": syntax.variable.hex()
    }
  },
  {
    "name": "Variable other object",
    "scope": "variable.other.object",
    "settings": {
      "foreground": syntax.variable.hex()
    }
  },
  {
    "name": "Variable other readwrite",
    "scope": "variable.other.readwrite",
    "settings": {
      "foreground": syntax.variable.hex()
    }
  },
  {
    "name": "Variable parameter",
    "scope": "variable.parameter",
    "settings": {
      "foreground": syntax.parameter.hex()
    }
  }
]

export {
  textmateTokenColors
}
