import { base } from "../colors";

const textmateTokenColors = [
  {
    "name": "Built-in constant",
    "scope": "constant.language",
    "settings": {
      "foreground": "#8abeb7"
    }
  },
  {
    "name": "Class name",
    "scope": "entity.name.class",
    "settings": {
      "foreground": "#47c6b5"
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
      "foreground": "#536f6b"
    }
  },
  {
    "name": "Comment - javascript",
    "scope": ["comment.line.double-slash.js"],
    "settings": {
      "foreground": "#707880"
    }
  },
  {
    "name": "Enum",
    "scope": ["entity.name.type.enum", "entity.name.variable.enum-member"],
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Function argument",
    "scope": ["entity.name.variable.parameter", "variable.parameter.cpp"],
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Field",
    "scope": "entity.name.variable.field",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Function name",
    "scope": "entity.name.function",
    "settings": {
      "fontStyle": "",
      "foreground": "#47c6b5"
    }
  },
  {
    "name": "Function name - javascript",
    "scope": "entity.name.function.js",
    "settings": {
      "fontStyle": "",
      "foreground": "#81A2BE"
    }
  },
  {
    "name": "Inherited class",
    "scope": "entity.other.inherited-class",
    "settings": {
      "foreground": "#47c6b5"
    }
  },
  {
    "name": "Invalid",
    "scope": "invalid",
    "settings": {
      "fontStyle": "",
      "foreground": "#a54242"
    }
  },
  {
    "name": "Invalid deprecated",
    "scope": "invalid.deprecated",
    "settings": {
      "foreground": "#a54242"
    }
  },
  {
    "name": "JSON String",
    "scope": "meta.structure.dictionary.json string.quoted.double.json",
    "settings": {
      "foreground": "#CFE3E0"
    }
  },
  {
    "name": "Keyword",
    "scope": "keyword",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Keyword",
    "scope": "keyword.other.class",
    "settings": {
      "foreground": "#5F819D"
    }
  },
  {
    "name": "Keyword control",
    "scope": "keyword.control",
    "settings": {
      "foreground": "#28786e"
    }
  },
  {
    "name": "Keyword control from",
    "scope": "keyword.control.from",
    "settings": {
      "foreground": "#81a2be"
    }
  },
  {
    "name": "Keyword control import",
    "scope": "keyword.control.import",
    "settings": {
      "foreground": "#81a2be"
    }
  },
  {
    "name": "Keyword other",
    "scope": "keyword.other",
    "settings": {
      "foreground": "#81a2be"
    }
  },
  {
    "name": "Keyword other unit",
    "scope": "keyword.other.unit",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Keyword other using",
    "scope": "keyword.other.using",
    "settings": {
      "foreground": "#cc6666"
    }
  },
  {
    "name": "Keyword type",
    "scope": "keyword.type",
    "settings": {
      "foreground": "#81A2BE"
    }
  },
  {
    "name": "Library class/type",
    "scope": ["support.type", "support.class"],
    "settings": {
      "foreground": "#5F819D"
    }
  },
  {
    "name": "Library class/type - css",
    "scope": ["support.type.property-name.css"],
    "settings": {
      "foreground": "#5E8D87"
    }
  },
  {
    "name": "Library constant",
    "scope": "support.constant",
    "settings": {
      "fontStyle": "",
      "foreground": "#5F819D"
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
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Library function",
    "scope": "support.function",
    "settings": {
      "fontStyle": "",
      "foreground": "#5F819D"
    }
  },
  {
    "name": "Meta",
    "scope": "meta",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Number",
    "scope": "constant.numeric",
    "settings": {
      "foreground": "#D29656"
    }
  },
  {
    "name": "Property",
    "scope": "entity.name.variable.property",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Punctuation",
    "scope": "punctuation",
    "settings": {
      "foreground": "#CFE3E0"
    }
  },
  {
    "name": "Source",
    "scope": "source",
    "settings": {
      "fontStyle": "",
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Storage",
    "scope": "storage",
    "settings": {
      "fontStyle": "",
      "foreground": "#CFE3E0"
    }
  },
  {
    "name": "Storage modifier",
    "scope": "storage.modifier",
    "settings": {
      "foreground": "#47C6B5"
    }
  },
  {
    "name": "Storage type",
    "scope": "storage.type",
    "settings": {
      "foreground": "#8abeb7"
    }
  },
  {
    "name": "String",
    "scope": "string",
    "settings": {
      "foreground": "#e6aa6a"
    }
  },
  {
    "name": "String - yaml",
    "scope": "string.unquoted.plain.out.yaml",
    "settings": {
      "foreground": "#CFE3E0"
    }
  },
  {
    "name": "Symbol",
    "scope": "meta.symbol",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Tag attribute",
    "scope": "entity.other.attribute-name",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Tag attribute",
    "scope": "entity.other.attribute-name.html",
    "settings": {
      "foreground": "#5E8D87"
    }
  },
  {
    "name": "Tag attribute - css",
    "scope": "entity.other.attribute-name.class.css",
    "settings": {
      "foreground": "#81A2BE"
    }
  },
  {
    "name": "Tag attribute id - css",
    "scope": "entity.other.attribute-name.id.css",
    "settings": {
      "foreground": "#B294BB"
    }
  },
  {
    "name": "Tag name",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": "#5e8d87"
    }
  },
  {
    "name": "Tag name - css",
    "scope": "entity.name.tag.css",
    "settings": {
      "foreground": "#47C6B5"
    }
  },
  {
    "name": "Tag name - YAML",
    "scope": "entity.name.tag",
    "settings": {
      "foreground": "#5F819D"
    }
  },
  {
    "name": "Text",
    "scope": "text",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "This self",
    "scope": "variable.language",
    "settings": {
      "foreground": "#81A2BE"
    }
  },
  {
    "name": "Type",
    "scope": "entity.name.type",
    "settings": {
      "foreground": "#81A2BE"
    }
  },
  {
    "name": "User-defined constant",
    "scope": ["constant.character", "constant.other"],
    "settings": {
      "foreground": "#eb983e"
    }
  },
  {
    "name": "Variable",
    "scope": "variable",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Variable local",
    "scope": "entity.name.variable.local",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Variable object property",
    "scope": "variable.object.property",
    "settings": {
      "foreground": "#47c6b5"
    }
  },
  {
    "name": "Variable object property - javascript",
    "scope": "variable.other.property",
    "settings": {
      "foreground": "#47c6b5"
    }
  },
  {
    "name": "Variable other constant",
    "scope": "variable.other.constant",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Variable other object",
    "scope": "variable.other.object",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Variable other readwrite",
    "scope": "variable.other.readwrite",
    "settings": {
      "foreground": "#C5C8C6"
    }
  },
  {
    "name": "Variable parameter",
    "scope": "variable.parameter",
    "settings": {
      "foreground": "#C5C8C6"
    }
  }
]

export {
  textmateTokenColors
}
