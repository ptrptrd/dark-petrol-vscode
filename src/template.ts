// Unused Color 
/*
"semanticTokenColors": {
    "arrow": "#ff0000",
    "bracket": "#ff0000",
    "builtinConstant": "#8ABEB7",
    "class": colors.ui.panel.bg.hex(),
    "clsParameter": "#ff0000",
    "comment": colors.ui.border.hex(),
    "controlKeyword": colors.ui.panel.bg.hex(),
    "decorator": colors.ui.panel.bg.hex(),
    "delegate": "#ff0000",
    "enum": colors.ui.panel.bg.hex(),
    "enumMember": colors.ui.panel.bg.hex(),
    "event": "#CC6666",
    "field": "#C5C8C6",
    "function": colors.ui.panel.bg.hex(),
    "interface": colors.ui.panel.bg.hex(),
    "intrinsic": "#ff0000",
    "keyword": "#5F819D",
    "label": colors.ui.border.hex(),
    "macro": colors.ui.border.hex(),
    "magicFunction": "#ff0000",
    "markupAttribute": "#ff0000",
    "markupComment": "#ff0000",
    "markupCommentPunctuation": "#ff0000",
    "markupElement": "#FF0000",
    "markupOperator": "#ff0000",
    "markupTagDelimiter": "#ff0000",
    "method": colors.ui.panel.bg.hex(),
    "module": "#5F819D",
    "namespace": "#C5C8C6",
    "number": "#85678F",
    "operator": colors.ui.panel.bg.hex(),
    "operatorOverloaded": "#ff0000",
    "parameter": "#C5C8C6",
    "plainKeyword": colors.ui.panel.bg.hex(),
    "property": "#C5C8C6",
    "regexp": colors.ui.panel.bg.hex(),
    "string": colors.ui.panel.bg.hex(),
    "struct": "#B294BB",
    "type": colors.ui.panel.bg.hex(),
    "typeParameter": colors.ui.panel.bg.hex(),
    "variable": "#5F819D",
},*/

// "tokenColors": [
//       {
//         "name": "Built-in constant",
//         "scope": "constant.language",
//         "settings": {
//           "foreground": "#8abeb7"
//         }
//       },
//       {
//         "name": "Class name",
//         "scope": "entity.name.class",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Comment",
//         "scope": [
//           "comment",
//           "punctuation.definition.comment",
//           "punctuation.definition.tag"
//         ],
//         "settings": {
//           "foreground": colors.ui.border.hex()
//         }
//       },
//       {
//         "name": "Comment - javascript",
//         "scope": ["comment.line.double-slash.js"],
//         "settings": {
//           "foreground": "#707880"
//         }
//       },
//       {
//         "name": "Enum",
//         "scope": ["entity.name.type.enum", "entity.name.variable.enum-member"],
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Function argument",
//         "scope": ["entity.name.variable.parameter", "variable.parameter.cpp"],
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Field",
//         "scope": "entity.name.variable.field",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Function name",
//         "scope": "entity.name.function",
//         "settings": {
//           "fontStyle": "",
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Function name - javascript",
//         "scope": "entity.name.function.js",
//         "settings": {
//           "fontStyle": "",
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Inherited class",
//         "scope": "entity.other.inherited-class",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Invalid",
//         "scope": "invalid",
//         "settings": {
//           "fontStyle": "",
//           "foreground": "#a54242"
//         }
//       },
//       {
//         "name": "Invalid deprecated",
//         "scope": "invalid.deprecated",
//         "settings": {
//           "foreground": "#a54242"
//         }
//       },
//       {
//         "name": "JSON String",
//         "scope": "meta.structure.dictionary.json string.quoted.double.json",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Keyword",
//         "scope": "keyword",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Keyword",
//         "scope": "keyword.other.class",
//         "settings": {
//           "foreground": "#5F819D"
//         }
//       },
//       {
//         "name": "Keyword control",
//         "scope": "keyword.control",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Keyword control from",
//         "scope": "keyword.control.from",
//         "settings": {
//           "foreground": "#81a2be"
//         }
//       },
//       {
//         "name": "Keyword control import",
//         "scope": "keyword.control.import",
//         "settings": {
//           "foreground": "#81a2be"
//         }
//       },
//       {
//         "name": "Keyword other",
//         "scope": "keyword.other",
//         "settings": {
//           "foreground": "#81a2be"
//         }
//       },
//       {
//         "name": "Keyword other unit",
//         "scope": "keyword.other.unit",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Keyword other using",
//         "scope": "keyword.other.using",
//         "settings": {
//           "foreground": colors.ui.panel.fg.hex()
//         }
//       },
//       {
//         "name": "Keyword type",
//         "scope": "keyword.type",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Library class/type",
//         "scope": ["support.type", "support.class"],
//         "settings": {
//           "foreground": "#5F819D"
//         }
//       },
//       {
//         "name": "Library class/type - css",
//         "scope": ["support.type.property-name.css"],
//         "settings": {
//           "foreground": "#5E8D87"
//         }
//       },
//       {
//         "name": "Library constant",
//         "scope": "support.constant",
//         "settings": {
//           "fontStyle": "",
//           "foreground": "#5F819D"
//         }
//       },
//       {
//         "name": "Library constant - css",
//         "scope": [
//           "support.constant.color.w3c-standard-color-name.css",
//           "support.constant.font-name.css"
//         ],
//         "settings": {
//           "fontStyle": "",
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Library function",
//         "scope": "support.function",
//         "settings": {
//           "fontStyle": "",
//           "foreground": "#5F819D"
//         }
//       },
//       {
//         "name": "Meta",
//         "scope": "meta",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Number",
//         "scope": "constant.numeric",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Property",
//         "scope": "entity.name.variable.property",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Punctuation",
//         "scope": "punctuation",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Source",
//         "scope": "source",
//         "settings": {
//           "fontStyle": "",
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Storage",
//         "scope": "storage",
//         "settings": {
//           "fontStyle": "",
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Storage modifier",
//         "scope": "storage.modifier",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Storage type",
//         "scope": "storage.type",
//         "settings": {
//           "foreground": "#8abeb7"
//         }
//       },
//       {
//         "name": "String",
//         "scope": "string",
//         "settings": {
//           "foreground": "#e6aa6a"
//         }
//       },
//       {
//         "name": "String - yaml",
//         "scope": "string.unquoted.plain.out.yaml",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Symbol",
//         "scope": "meta.symbol",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Tag attribute",
//         "scope": "entity.other.attribute-name",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Tag attribute",
//         "scope": "entity.other.attribute-name.html",
//         "settings": {
//           "foreground": "#5E8D87"
//         }
//       },
//       {
//         "name": "Tag attribute - css",
//         "scope": "entity.other.attribute-name.class.css",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Tag attribute id - css",
//         "scope": "entity.other.attribute-name.id.css",
//         "settings": {
//           "foreground": "#B294BB"
//         }
//       },
//       {
//         "name": "Tag name",
//         "scope": "entity.name.tag",
//         "settings": {
//           "foreground": "#5e8d87"
//         }
//       },
//       {
//         "name": "Tag name - css",
//         "scope": "entity.name.tag.css",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Tag name - YAML",
//         "scope": "entity.name.tag",
//         "settings": {
//           "foreground": "#5F819D"
//         }
//       },
//       {
//         "name": "Text",
//         "scope": "text",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "This self",
//         "scope": "variable.language",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Type",
//         "scope": "entity.name.type",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "User-defined constant",
//         "scope": ["constant.character", "constant.other"],
//         "settings": {
//           "foreground": "#eb983e"
//         }
//       },
//       {
//         "name": "Variable",
//         "scope": "variable",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Variable local",
//         "scope": "entity.name.variable.local",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Variable object property",
//         "scope": "variable.object.property",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Variable object property - javascript",
//         "scope": "variable.other.property",
//         "settings": {
//           "foreground": colors.ui.panel.bg.hex()
//         }
//       },
//       {
//         "name": "Variable other constant",
//         "scope": "variable.other.constant",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Variable other object",
//         "scope": "variable.other.object",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Variable other readwrite",
//         "scope": "variable.other.readwrite",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       },
//       {
//         "name": "Variable parameter",
//         "scope": "variable.parameter",
//         "settings": {
//           "foreground": "#C5C8C6"
//         }
//       }
//     ]

import colors from './colors';

export default () => {
  return {
  "name": "Dark Petrol - Dev",
  "type": "dark",
  "semanticHighlighting": true,
  "colors": {
      "activityBar.activeFocusBorder": colors.ui.panel.bg.hex(),
      "activityBar.background": colors.ui.panel.bg.hex(),
      "activityBar.border": colors.ui.border.hex(),
      "activityBar.foreground": colors.ui.panel.fg.hex(),
      "activityBarBadge.background": colors.ui.panel.bg.hex(),
      "activityBarBadge.foreground": colors.ui.panel.fg.hex(),
      "badge.background": colors.ui.panel.bg.hex(),
      "button.background": colors.ui.panel.bg.hex(),
      "debugToolBar.background": colors.ui.panel.bg.hex(),
      "descriptionForeground": colors.ui.panel.fg.hex(),
      "diffEditor.insertedTextBackground": colors.ui.panel.bg.hex(),
      "dropdown.background": colors.ui.panel.bg.hex(),
      "dropdown.listBackground": colors.ui.panel.bg.hex(),
      "editor.background": colors.ui.panel.bg.hex(),
      "editor.foreground": colors.ui.panel.fg.hex(),
      "editor.findMatchBackground": colors.ui.panel.bg.hex(),
      "editor.findMatchBorder": colors.ui.border.hex(),
      "editor.selectionBackground": colors.ui.panel.bg.hex(),
      "editor.selectionHighlightBackground": colors.ui.panel.bg.hex(),
      "editor.selectionHighlightBorder": colors.ui.border.hex(),
      "editor.wordHighlightBackground": colors.ui.panel.bg.hex(),
      "editor.wordHighlightBorder": colors.ui.border.hex(),
      "editor.wordHighlightStrongBackground": colors.ui.panel.bg.hex(),
      "editor.wordHighlightStrongBorder": colors.ui.border.hex(),
      "editor.findMatchHighlightBackground": colors.ui.panel.bg.hex(),
      "editorBracketHighlight.foreground1": colors.ui.panel.bg.hex(),
      "editorBracketHighlight.foreground2": colors.ui.panel.bg.hex(),
      "editorBracketHighlight.foreground3": colors.ui.panel.bg.hex(),
      "editorCursor.foreground": colors.ui.panel.fg.hex(),
      "editorError.foreground": colors.ui.error.fg.hex(),
      "editorGroup.dropBackground": colors.ui.panel.bg.hex(),
      "editorGroup.border": colors.ui.border.hex(),
      "editorGroup.emptyBackground": colors.ui.panel.bg.hex(),
      "editorGroupHeader.noTabsBackground": colors.ui.panel.bg.hex(),
      "editorGroupHeader.tabsBackground": colors.ui.panel.bg.hex(),
      "editorGutter.addedBackground": colors.ui.panel.bg.hex(),
      "editorGutter.deletedBackground": colors.ui.error.bg.hex(),
      "editorGutter.modifiedBackground": colors.ui.panel.bg.hex(),
      "editorHoverWidget.background": colors.ui.panel.bg.hex(),
      "editorHoverWidget.border": colors.ui.border.hex(),
      "editorHoverWidget.foreground": colors.ui.panel.fg.hex(),
      "editorInlayHint.background": colors.ui.panel.bg.hex(),
      "editorInlayHint.foreground": colors.ui.panel.fg.hex(),
      "editorWidget.foreground": colors.ui.panel.fg.hex(),
      "editorIndentGuide.activeBackground1": colors.ui.panel.bg.hex(),
      "editorIndentGuide.background1": colors.ui.panel.bg.hex(),
      "editorWhitespace.foreground": colors.ui.panel.fg.hex(),
      "extensionBadge.remoteBackground": colors.ui.panel.bg.hex(),
      "extensionBadge.remoteForeground": colors.ui.panel.fg.hex(),
      "extensionButton.prominentBackground": colors.ui.panel.bg.hex(),
      "extensionButton.prominentForeground": colors.ui.panel.fg.hex(),
      "extensionButton.prominentHoverBackground": colors.ui.panel.bg.hex(),
      "extensionIcon.preReleaseForeground": colors.ui.panel.fg.hex(),
      "extensionIcon.starForeground": colors.ui.panel.fg.hex(),
      "extensionIcon.verifiedForeground": colors.ui.panel.fg.hex(),
      "focusBorder": colors.ui.border.hex(),
      "gitDecoration.addedResourceForeground": colors.ui.panel.fg.hex(),
      "gitDecoration.conflictingResourceForeground": colors.ui.panel.fg.hex(),
      "gitDecoration.deletedResourceForeground": colors.ui.error.fg.hex(),
      "gitDecoration.ignoredResourceForeground": colors.ui.panel.fg.hex(),
      "gitDecoration.modifiedResourceForeground": colors.ui.panel.fg.hex(),
      "gitDecoration.renamedResourceForeground": colors.ui.panel.fg.hex(),
      "gitDecoration.stageDeletedResourceForeground": colors.ui.panel.fg.hex(),
      "gitDecoration.stageModifiedResourceForeground": colors.ui.panel.fg.hex(),
      "gitDecoration.submoduleResourceForeground": colors.ui.info.fg.hex(),
      "gitDecoration.untrackedResourceForeground": colors.ui.info.fg.hex(),
      "input.background": colors.ui.panel.bg.hex(),
      "input.foreground": colors.ui.panel.fg.hex(),
      "inputValidation.errorBackground": colors.ui.error.bg.hex(),
      "inputValidation.errorBorder": colors.ui.error.bg.hex(),
      "inputValidation.warningBackground": colors.ui.warning.bg.hex(),
      "inputValidation.warningBorder": colors.ui.warning.bg.hex(),
      "list.activeSelectionBackground": colors.ui.panel.bg.hex(),
      "list.activeSelectionForeground": colors.ui.panel.fg.hex(),
      "list.hoverBackground": colors.ui.panel.active.bg.hex(),
      "list.hoverForeground": colors.ui.panel.active.fg.hex(),
      "list.inactiveSelectionBackground": colors.ui.panel.bg.hex(),
      "list.inactiveSelectionForeground": colors.ui.panel.fg.hex(),
      "list.warningForeground": colors.ui.warning.fg.hex(),
      "minimapGutter.addedBackground": colors.ui.panel.bg.hex(),
      "minimapGutter.deletedBackground": colors.ui.error.bg.hex(),
      "minimapGutter.modifiedBackground": colors.ui.panel.bg.hex(),
      "notifications.foreground": colors.ui.panel.fg.hex(),
      "panel.background": colors.ui.panel.bg.hex(),
      "panelInput.border": colors.ui.panel.bg.hex(),
      "panelTitle.activeBorder": colors.ui.border.hex(),
      "panelTitle.activeForeground": colors.ui.panel.fg.hex(),
      "panelTitle.inactiveForeground": colors.ui.panel.fg.hex(),
      "peekView.border": colors.ui.border.hex(),
      "peekViewEditor.background": colors.ui.panel.bg.hex(),
      "peekViewEditorGutter.background": colors.ui.panel.bg.hex(),
      "peekViewResult.background": colors.ui.panel.bg.hex(),
      "peekViewResult.selectionBackground": colors.ui.panel.bg.hex(),
      "peekViewResult.lineForeground": colors.ui.panel.fg.hex(),
      "peekViewResult.matchHighlightBackground": colors.ui.panel.bg.hex(),
      "scrollbarSlider.activeBackground": colors.ui.panel.active.bg.hex(),
      "scrollbarSlider.background": colors.ui.panel.bg.hex(),
      "scrollbarSlider.hoverBackground": colors.ui.panel.active.bg.hex(),
      "settings.focusedRowBackground": colors.ui.panel.bg.hex(),
      "sideBar.background": colors.ui.panel.bg.hex(),
      "sideBar.border": colors.ui.border.hex(),
      "sideBar.foreground": colors.ui.panel.fg.hex(),
      "sideBarSectionHeader.background": colors.ui.panel.bg.hex(),
      "sideBarSectionHeader.foreground": colors.ui.panel.fg.hex(),
      "statusBar.background": colors.ui.panel.bg.hex(),
      "statusBar.debuggingBackground": colors.ui.panel.bg.hex(),
      "statusBar.debuggingBorder": colors.ui.border.hex(),
      "statusBar.debuggingForeground": colors.ui.panel.bg.hex(),
      "statusBar.foreground": colors.ui.panel.fg.hex(),
      "statusBar.focusBorder": colors.ui.border.hex(),
      "statusBar.noFolderForeground": colors.ui.panel.fg.hex(),
      "statusBar.noFolderBackground": colors.ui.panel.bg.hex(),
      "statusBarItem.remoteBackground": colors.ui.panel.bg.hex(),
      "statusBarItem.remoteForeground": colors.ui.panel.fg.hex(),
      "statusBarItem.warningBackground": colors.ui.panel.bg.hex(),
      "statusBarItem.warningForeground": colors.ui.panel.fg.hex(),
      "tab.activeBackground": colors.ui.panel.bg.hex(),
      "tab.activeBorderTop": colors.ui.border.hex(),
      "tab.activeForeground": colors.ui.panel.fg.hex(),
      "tab.hoverBorder": colors.ui.border.hex(),
      "tab.inactiveBackground": colors.ui.panel.bg.hex(),
      "tab.inactiveForeground": colors.ui.panel.fg.hex(),
      "tab.unfocusedActiveBackground": colors.ui.panel.bg.hex(),
      "tab.unfocusedActiveForeground": colors.ui.panel.fg.hex(),
      "terminal.ansiBlack": colors.base.black.hex(),
      "terminal.ansiBlue": colors.base.blue.hex(),
      "terminal.ansiBrightBlack": colors.base.blackBright.hex(),
      "terminal.ansiBrightBlue": colors.base.blueBright.hex(),
      "terminal.ansiBrightCyan": colors.base.cyanBright.hex(),
      "terminal.ansiBrightGreen": colors.base.greenBright.hex(),
      "terminal.ansiBrightMagenta": colors.base.magentaBright.hex(),
      "terminal.ansiBrightRed": colors.base.redBright.hex(),
      "terminal.ansiBrightWhite": colors.base.whiteBright.hex(),
      "terminal.ansiBrightYellow": colors.base.yellowBright.hex(),
      "terminal.ansiCyan": colors.base.cyan.hex(),
      "terminal.ansiGreen": colors.base.green.hex(),
      "terminal.ansiMagenta": colors.base.magenta.hex(),
      "terminal.ansiRed": colors.base.red.hex(),
      "terminal.ansiWhite": colors.base.white.hex(),
      "terminal.ansiYellow": colors.base.yellow.hex(),
      "terminal.background": colors.ui.panel.bg.hex(),
      "textLink.foreground": colors.ui.panel.bg.hex()
    },
  }
}