// Unused Color
/*
"semanticTokenColors": {
    "arrow": "#ff0000",
    "bracket": "#ff0000",
    "builtinConstant": "#8ABEB7",
    "class": ui.panel.primary.active.background.hex(),
    "clsParameter": "#ff0000",
    "comment": ui.border.primary.hex(),
    "controlKeyword": ui.panel.primary.active.background.hex(),
    "decorator": ui.panel.primary.active.background.hex(),
    "delegate": "#ff0000",
    "enum": ui.panel.primary.active.background.hex(),
    "enumMember": ui.panel.primary.active.background.hex(),
    "event": "#CC6666",
    "field": "#C5C8C6",
    "function": ui.panel.primary.active.background.hex(),
    "interface": ui.panel.primary.active.background.hex(),
    "intrinsic": "#ff0000",
    "keyword": "#5F819D",
    "label": ui.border.primary.hex(),
    "macro": ui.border.primary.hex(),
    "magicFunction": "#ff0000",
    "markupAttribute": "#ff0000",
    "markupComment": "#ff0000",
    "markupCommentPunctuation": "#ff0000",
    "markupElement": "#FF0000",
    "markupOperator": "#ff0000",
    "markupTagDelimiter": "#ff0000",
    "method": ui.panel.primary.active.background.hex(),
    "module": "#5F819D",
    "namespace": "#C5C8C6",
    "number": "#85678F",
    "operator": ui.panel.primary.active.background.hex(),
    "operatorOverloaded": "#ff0000",
    "parameter": "#C5C8C6",
    "plainKeyword": ui.panel.primary.active.background.hex(),
    "property": "#C5C8C6",
    "regexp": ui.panel.primary.active.background.hex(),
    "string": ui.panel.primary.active.background.hex(),
    "struct": "#B294BB",
    "type": ui.panel.primary.active.background.hex(),
    "typeParameter": ui.panel.primary.active.background.hex(),
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.border.primary.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
//         }
//       },
//       {
//         "name": "Function name - javascript",
//         "scope": "entity.name.function.js",
//         "settings": {
//           "fontStyle": "",
//           "foreground": ui.panel.primary.active.background.hex()
//         }
//       },
//       {
//         "name": "Inherited class",
//         "scope": "entity.other.inherited-class",
//         "settings": {
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.foreground.hex()
//         }
//       },
//       {
//         "name": "Keyword type",
//         "scope": "keyword.type",
//         "settings": {
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
//         }
//       },
//       {
//         "name": "Storage modifier",
//         "scope": "storage.modifier",
//         "settings": {
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
//         }
//       },
//       {
//         "name": "Type",
//         "scope": "entity.name.type",
//         "settings": {
//           "foreground": ui.panel.primary.active.background.hex()
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
//           "foreground": ui.panel.primary.active.background.hex()
//         }
//       },
//       {
//         "name": "Variable object property - javascript",
//         "scope": "variable.other.property",
//         "settings": {
//           "foreground": ui.panel.primary.active.background.hex()
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
// "activityBar.activeFocusBorder": ui.border.primary.hex(),
//     "activityBar.background": ui.panel.primary.active.background.hex(),
//     "activityBar.border.primary": ui.border.primary.hex(),
//     "activityBar.foreground": ui.panel.primary.active.foreground.hex(),
//     "activityBarBadge.background": ui.panel.primary.active.background.hex(),
//     "activityBarBadge.foreground": ui.panel.primary.active.foreground.hex(),
//     "badge.background": ui.panel.primary.active.background.hex(),
//     "button.background": ui.panel.primary.active.background.hex(),
//     "debugToolBar.background": ui.panel.primary.active.background.hex(),
//     "descriptionForeground": ui.panel.primary.active.foreground.hex(),
//     "diffEditor.insertedTextBackground": ui.panel.primary.active.background.hex(),
//     "dropdown.background": ui.panel.primary.active.background.hex(),
//     "dropdown.listBackground": ui.panel.primary.active.background.hex(),
//     "editor.background": ui.panel.primary.active.background.hex(),
//     "editor.foreground": ui.panel.primary.active.foreground.hex(),
//     "editor.findMatchBackground": ui.panel.primary.active.background.hex(),
//     "editor.findMatchBorder": ui.border.primary.hex(),
//     "editor.selectionBackground": ui.panel.primary.active.background.hex(),
//     "editor.selectionHighlightBackground": ui.panel.primary.active.background.hex(),
//     "editor.selectionHighlightBorder": ui.border.primary.hex(),
//     "editor.wordHighlightBackground": ui.panel.primary.active.background.hex(),
//     "editor.wordHighlightBorder": ui.border.primary.hex(),
//     "editor.wordHighlightStrongBackground": ui.panel.primary.active.background.hex(),
//     "editor.wordHighlightStrongBorder": ui.border.primary.hex(),
//     "editor.findMatchHighlightBackground": ui.panel.primary.active.background.hex(),
//     "editorBracketHighlight.foreground1": ui.panel.primary.active.background.hex(),
//     "editorBracketHighlight.foreground2": ui.panel.primary.active.background.hex(),
//     "editorBracketHighlight.foreground3": ui.panel.primary.active.background.hex(),
//     "editorCursor.foreground": ui.panel.primary.active.foreground.hex(),
//     "editorError.foreground": ui.message.error.active.foreground.hex(),
//     "editorGroup.dropBackground": ui.panel.primary.active.background.hex(),
//     "editorGroup.border.primary": ui.border.primary.hex(),
//     "editorGroup.emptyBackground": ui.panel.primary.active.background.hex(),
//     "editorGroupHeader.noTabsBackground": ui.panel.primary.active.background.hex(),
//     "editorGroupHeader.tabsBackground": ui.panel.primary.active.background.hex(),
//     "editorGutter.addedBackground": ui.panel.primary.active.background.hex(),
//     "editorGutter.deletedBackground": ui.message.error.active.background.hex(),
//     "editorGutter.modifiedBackground": ui.panel.primary.active.background.hex(),
//     "editorHoverWidget.background": ui.panel.primary.active.background.hex(),
//     "editorHoverWidget.border.primary": ui.border.primary.hex(),
//     "editorHoverWidget.foreground": ui.panel.primary.active.foreground.hex(),
//     "editorInlayHint.background": ui.panel.primary.active.background.hex(),
//     "editorInlayHint.foreground": ui.panel.primary.active.foreground.hex(),
//     "editorWidget.foreground": ui.panel.primary.active.foreground.hex(),
//     "editorIndentGuide.activeBackground1": ui.panel.primary.active.background.hex(),
//     "editorIndentGuide.background1": ui.panel.primary.active.background.hex(),
//     "editorWhitespace.foreground": ui.panel.primary.active.foreground.hex(),
//     "extensionBadge.remoteBackground": ui.panel.primary.active.background.hex(),
//     "extensionBadge.remoteForeground": ui.panel.primary.active.foreground.hex(),
//     "extensionButton.prominentBackground": ui.panel.primary.active.background.hex(),
//     "extensionButton.prominentForeground": ui.panel.primary.active.foreground.hex(),
//     "extensionButton.prominentHoverBackground": ui.panel.primary.active.background.hex(),
//     "extensionIcon.preReleaseForeground": ui.panel.primary.active.foreground.hex(),
//     "extensionIcon.starForeground": ui.panel.primary.active.foreground.hex(),
//     "extensionIcon.verifiedForeground": ui.panel.primary.active.foreground.hex(),
//     "focusBorder": ui.border.primary.hex(),
//     "gitDecoration.addedResourceForeground": ui.panel.primary.active.foreground.hex(),
//     "gitDecoration.conflictingResourceForeground": ui.panel.primary.active.foreground.hex(),
//     "gitDecoration.deletedResourceForeground": ui.message.error.active.foreground.hex(),
//     "gitDecoration.ignoredResourceForeground": ui.panel.primary.active.foreground.hex(),
//     "gitDecoration.modifiedResourceForeground": ui.panel.primary.active.foreground.hex(),
//     "gitDecoration.renamedResourceForeground": ui.panel.primary.active.foreground.hex(),
//     "gitDecoration.stageDeletedResourceForeground": ui.panel.primary.active.foreground.hex(),
//     "gitDecoration.stageModifiedResourceForeground": ui.panel.primary.active.foreground.hex(),
//     "gitDecoration.submoduleResourceForeground": ui.message.info.active.foreground.hex(),
//     "gitDecoration.untrackedResourceForeground": ui.message.info.active.foreground.hex(),
//     "input.background": ui.panel.primary.active.background.hex(),
//     "input.foreground": ui.panel.primary.active.foreground.hex(),
//     "inputValidation.errorBackground": ui.message.error.active.background.hex(),
//     "inputValidation.errorBorder": ui.message.error.active.background.hex(),
//     "inputValidation.warningBackground": ui.message.warning.active.background.hex(),
//     "inputValidation.warningBorder": ui.message.warning.active.background.hex(),
//     "list.activeSelectionBackground": ui.panel.primary.active.background.hex(),
//     "list.activeSelectionForeground": ui.panel.primary.active.foreground.hex(),
//     "list.hoverBackground": ui.panel.primary.active.background.hex(),
//     "list.hoverForeground": ui.panel.primary.active.foreground.hex(),
//     "list.inactiveSelectionBackground": ui.panel.primary.active.background.hex(),
//     "list.inactiveSelectionForeground": ui.panel.primary.active.foreground.hex(),
//     "list.warningForeground": ui.message.warning.active.foreground.hex(),
//     "minimapGutter.addedBackground": ui.panel.primary.active.background.hex(),
//     "minimapGutter.deletedBackground": ui.message.error.active.background.hex(),
//     "minimapGutter.modifiedBackground": ui.panel.primary.active.background.hex(),
//     "notifications.foreground": ui.panel.primary.active.foreground.hex(),
//     "panel.background": ui.panel.primary.active.background.hex(),
//     "panelInput.border.primary": ui.panel.primary.active.background.hex(),
//     "panelTitle.activeBorder": ui.border.primary.hex(),
//     "panelTitle.activeForeground": ui.panel.primary.active.foreground.hex(),
//     "panelTitle.inactiveForeground": ui.panel.primary.active.foreground.hex(),
//     "peekView.border.primary": ui.border.primary.hex(),
//     "peekViewEditor.background": ui.panel.primary.active.background.hex(),
//     "peekViewEditorGutter.background": ui.panel.primary.active.background.hex(),
//     "peekViewResult.background": ui.panel.primary.active.background.hex(),
//     "peekViewResult.selectionBackground": ui.panel.primary.active.background.hex(),
//     "peekViewResult.lineForeground": ui.panel.primary.active.foreground.hex(),
//     "peekViewResult.matchHighlightBackground": ui.panel.primary.active.background.hex(),
//     "scrollbarSlider.activeBackground": ui.panel.primary.active.background.hex(),
//     "scrollbarSlider.background": ui.panel.primary.active.background.hex(),
//     "scrollbarSlider.hoverBackground": ui.panel.primary.active.background.hex(),
//     "settings.focusedRowBackground": ui.panel.primary.active.background.hex(),
//     "sideBar.background": ui.panel.primary.active.background.hex(),
//     "sideBar.border.primary": ui.border.primary.hex(),
//     "sideBar.foreground": ui.panel.primary.active.foreground.hex(),
//     "sideBarSectionHeader.background": ui.panel.primary.active.background.hex(),
//     "sideBarSectionHeader.foreground": ui.panel.primary.active.foreground.hex(),
//     "statusBar.background": ui.panel.primary.active.background.hex(),
//     "statusBar.debuggingBackground": ui.panel.primary.active.background.hex(),
//     "statusBar.debuggingBorder": ui.border.primary.hex(),
//     "statusBar.debuggingForeground": ui.panel.primary.active.background.hex(),
//     "statusBar.foreground": ui.panel.primary.active.foreground.hex(),
//     "statusBar.focusBorder": ui.border.primary.hex(),
//     "statusBar.noFolderForeground": ui.panel.primary.active.foreground.hex(),
//     "statusBar.noFolderBackground": ui.panel.primary.active.background.hex(),
//     "statusBarItem.remoteBackground": ui.panel.primary.active.background.hex(),
//     "statusBarItem.remoteForeground": ui.panel.primary.active.foreground.hex(),
//     "statusBarItem.warningBackground": ui.panel.primary.active.background.hex(),
//     "statusBarItem.warningForeground": ui.panel.primary.active.foreground.hex(),
//     "tab.activeBackground": ui.panel.primary.active.background.hex(),
//     "tab.activeBorderTop": ui.border.primary.hex(),
//     "tab.activeForeground": ui.panel.primary.active.foreground.hex(),
//     "tab.hoverBorder": ui.border.primary.hex(),
//     "tab.inactiveBackground": ui.panel.primary.inactive.background.hex(),
//     "tab.inactiveForeground": ui.panel.primary.inactive.foreground.hex(),
//     "tab.unfocusedActiveBackground": ui.panel.primary.inactive.background.hex(),
//     "tab.unfocusedActiveForeground": ui.panel.primary.inactive.foreground.hex(),
//     "terminal.ansiBlack": base.black.hex(),
//     "terminal.ansiBlue": base.blue.hex(),
//     "terminal.ansiBrightBlack": base.blackBright.hex(),
//     "terminal.ansiBrightBlue": base.blueBright.hex(),
//     "terminal.ansiBrightCyan": base.cyanBright.hex(),
//     "terminal.ansiBrightGreen": base.greenBright.hex(),
//     "terminal.ansiBrightMagenta": base.magentaBright.hex(),
//     "terminal.ansiBrightRed": base.redBright.hex(),
//     "terminal.ansiBrightWhite": base.whiteBright.hex(),
//     "terminal.ansiBrightYellow": base.yellowBright.hex(),
//     "terminal.ansiCyan": base.cyan.hex(),
//     "terminal.ansiGreen": base.green.hex(),
//     "terminal.ansiMagenta": base.magenta.hex(),
//     "terminal.ansiRed": base.red.hex(),
//     "terminal.ansiWhite": base.white.hex(),
//     "terminal.ansiYellow": base.yellow.hex(),
//     "terminal.background": ui.panel.primary.active.background.hex(),
//     "textLink.foreground": ui.panel.primary.active.background.hex()

import { base, fg, bg, ui, syntax} from './colors';

export default () => {
  return {
    "name": "Dark Petrol - Dev",
    "type": "dark",
    "semanticHighlighting": true,
    "colors": {
      // Contrast colors
      "contrastActiveBorder"    : ui.border.primary.hex(),
      "contrastBorder"          : ui.border.primary.hex(),
      // Base Colors
      "focusBorder"             : ui.panel.primary.active.foreground.hex(),
      "foreground"              : fg.hex(),
      "disabledForeground"      : ui.panel.primary.inactive.foreground.hex(),
      "widget.border"           : ui.border.primary.hex(),
      "selection.background"    : ui.panel.secondary.active.background.hex(),
      "descriptionForeground"   : fg.hex(),
      "errorForeground"         : ui.message.error.normal.foreground.hex(),
      "icon.foreground"         : fg.hex(),
      "sash.hoverBorder"        : fg.hex(),
      // Window Border
      "window.activeBorder"     : ui.panel.primary.active.border.hex(),
      "window.inactiveBorder"   : ui.panel.primary.inactive.border.hex(),
      // Text Colors
      "textBlockQuote.background"   : ui.panel.primary.normal.background.hex(),
      "textBlockQuote.border"       : ui.panel.primary.normal.border.hex(),
      "textCodeBlock.background"    : ui.panel.primary.normal.background.hex(),
      "textLink.activeForeground"   : ui.message.info.active.foreground.hex(),
      "textLink.foreground"         : ui.message.info.normal.foreground.hex(),
      "textPreformat.foreground"    : fg.hex(),
      "textPreformat.background"    : ui.panel.primary.normal.background.hex(),
      "textSeparator.foreground"    : fg.hex(),
      // Action Colors
      "toolbar.hoverBackground"           : ui.bar.primary.hovered.background.hex(),
      "toolbar.hoverOutline"              : ui.bar.primary.normal.border.hex(),
      "toolbar.activeBackground"          : ui.bar.primary.active.background.hex(),
      "editorActionList.background"       : ui.bar.secondary.normal.background.hex(),
      "editorActionList.foreground"       : ui.bar.secondary.normal.foreground.hex(),
      "editorActionList.focusForeground"  : ui.bar.secondary.active.foreground.hex(),
      "editorActionList.focusBackground"  : ui.bar.secondary.active.background.hex(),
      // Button Control
      "button.background"                 : ui.input.button.normal.background.hex(),
      "button.foreground"                 : ui.input.button.normal.foreground.hex(),
      "button.border"                     : ui.input.button.normal.border.hex(),
      "button.separator"                  : ui.input.button.normal.border.hex(),
      "button.hoverBackground"            : ui.input.button.hovered.background.hex(),
      "button.secondaryForeground"        : ui.input.button.normal.foreground.hex(),
      "button.secondaryBackground"        : ui.input.button.normal.background.hex(),
      "button.secondaryHoverBackground"   : ui.input.button.hovered.background.hex(),
      "checkbox.background"               : ui.input.checkbox.normal.background.hex(),
      "checkbox.foreground"               : ui.input.checkbox.normal.foreground.hex(),
      "checkbox.border"                   : ui.input.checkbox.normal.border.hex(),
      "checkbox.selectBackground"         : ui.input.checkbox.active.background.hex(),
      "checkbox.selectBorder"             : ui.input.checkbox.active.border.hex(),
      "radio.activeForeground"            : ui.input.checkbox.active.foreground.hex(),
      "radio.activeBackground"            : ui.input.checkbox.active.background.hex(),
      "radio.activeBorder"                : ui.input.checkbox.active.border.hex(),
      "radio.inactiveForeground"          : ui.input.checkbox.inactive.foreground.hex(),
      "radio.inactiveBackground"          : ui.input.checkbox.inactive.background.hex(),
      "radio.inactiveBorder"              : ui.input.checkbox.inactive.border.hex(),
      "radio.inactiveHoverBackground"     : ui.input.checkbox.hovered.background.hex(),
      // Dropdown Control
      "dropdown.background"       : ui.input.button.normal.background.hex(),
      "dropdown.listBackground"   : ui.input.button.normal.background.hex(),
      "dropdown.border"           : ui.input.button.normal.border.hex(),
      "dropdown.foreground"       : ui.input.button.normal.foreground.hex(),
      // Input Control
      "input.background"                  : ui.input.button.normal.background.hex(),
      "input.border"                      : ui.input.button.normal.border.hex(),
      "input.foreground"                  : ui.input.button.normal.foreground.hex(),
      "input.placeholderForeground"       : ui.input.button.inactive.foreground.hex(),
      "inputOption.activeBackground"      : ui.input.checkbox.active.background.hex(),
      "inputOption.activeBorder:"         : ui.input.checkbox.active.border.hex(),
      "inputOption.activeForeground:"     : ui.input.checkbox.active.foreground.hex(),
      "inputOption.hoverBackground:"      : ui.input.checkbox.hovered.background.hex(),
      "inputValidation.errorBackground"   : ui.message.error.normal.background.hex(),
      "inputValidation.errorForeground"   : ui.message.error.normal.foreground.hex(),
      "inputValidation.errorBorder"       : ui.message.error.normal.border.hex(),
      "inputValidation.infoBackground"    : ui.message.info.normal.background.hex(),
      "inputValidation.infoForeground"    : ui.message.info.normal.foreground.hex(),
      "inputValidation.infoBorder"        : ui.message.info.normal.border.hex(),
      "inputValidation.warningBackground" : ui.message.warning.normal.background.hex(),
      "inputValidation.warningForeground" : ui.message.warning.normal.foreground.hex(),
      "inputValidation.warningBorder"     : ui.message.warning.normal.border.hex(),
      // Scrollbar Control
      "scrollbar.shadow"                  : ui.dialog.first.normal.background.hex(),
      "scrollbarSlider.activeBackground"  : ui.dialog.first.active.background.hex(),
      "scrollbarSlider.background"        : ui.dialog.first.normal.background.hex(),
      "scrollbarSlider.hoverBackground"   : ui.dialog.first.hovered.background.hex(),
      // Badge
      "badge.foreground"  : ui.input.button.normal.foreground.hex(),
      "badge.background"  : ui.input.button.normal.background.hex(),
      // Progress Bar
      "progressBar.background": ui.message.info.normal.background.hex(),
      // List and Trees
      "list.activeSelectionBackground"        : ui.panel.secondary.active.background.hex(),
      "list.activeSelectionForeground"        : ui.panel.secondary.active.foreground.hex(),
      "list.activeSelectionIconForeground"    : ui.panel.secondary.active.foreground.hex(),
      "list.dropBackground"                   : ui.panel.secondary.normal.background.hex(),
      "list.focusBackground"                  : ui.panel.secondary.active.background.hex(),
      "list.focusForeground"                  : ui.panel.secondary.active.foreground.hex(),
      "list.focusHighlightForeground"         : ui.panel.secondary.hovered.foreground.hex(),
      "list.focusOutline"                     : ui.panel.secondary.hovered.border.hex(),
      "list.focusAndSelectionOutline"         : ui.panel.secondary.active.border.hex(),
      "list.highlightForeground"              : ui.panel.secondary.hovered.foreground.hex(),
      "list.hoverBackground"                  : ui.panel.secondary.hovered.background.hex(),
      "list.hoverForeground"                  : ui.panel.secondary.hovered.foreground.hex(),
      "list.inactiveSelectionBackground"      : ui.panel.secondary.inactive.background.hex(),
      "list.inactiveSelectionForeground"      : ui.panel.secondary.inactive.foreground.hex(),
      "list.inactiveSelectionIconForeground"  : ui.panel.secondary.inactive.foreground.hex(),
      "list.inactiveFocusBackground"          : ui.panel.secondary.inactive.background.hex(),
      "list.inactiveFocusOutline"             : ui.panel.secondary.inactive.border.hex(),
      "list.invalidItemForeground"            : ui.message.error.normal.foreground.hex(),
      "list.errorForeground"                  : ui.message.error.normal.foreground.hex(),
      "list.warningForeground"                : ui.message.warning.normal.foreground.hex(),
      "listFilterWidget.background"           : ui.input.checkbox.normal.background.hex(),
      "listFilterWidget.outline"              : ui.input.checkbox.normal.border.hex(),
      "listFilterWidget.noMatchesOutline"     : ui.message.error.normal.border.hex(),
      "listFilterWidget.shadow"               : ui.input.checkbox.normal.background.hex(),
      "list.filterMatchBackground"            : ui.message.success.normal.background.hex(),
      "list.filterMatchBorder"                : ui.message.success.normal.border.hex(),
      "list.deemphasizedForeground"           : ui.input.checkbox.normal.background.hex(),
      "list.dropBetweenBackground"            : ui.input.checkbox.normal.background.hex(),
      "tree.indentGuidesStroke"               : ui.panel.secondary.normal.border.hex(),
      "tree.inactiveIndentGuidesStroke"       : ui.panel.secondary.inactive.border.hex(),
      "tree.tableColumnsBorder"               : ui.panel.secondary.normal.border.hex(),
      "tree.tableOddRowsBackground"           : ui.panel.secondary.normal.background.hex(),
      // Activity Bar
      "activityBar.background"            : ui.panel.secondary.normal.background.hex(),
      "activityBar.dropBorder"            : ui.panel.secondary.normal.border.hex(),
      "activityBar.foreground"            : ui.panel.secondary.normal.foreground.hex(),
      "activityBar.inactiveForeground"    : ui.panel.secondary.inactive.foreground.hex(),
      "activityBar.border"                : ui.panel.secondary.normal.border.hex(),
      "activityBarBadge.background"       : ui.dialog.first.normal.background.hex(),
      "activityBarBadge.foreground"       : ui.dialog.first.normal.foreground.hex(),
      "activityBar.activeBorder"          : ui.panel.secondary.active.border.hex(),
      "activityBar.activeBackground"      : ui.panel.secondary.active.background.hex(),
      "activityBar.activeFocusBorder"     : ui.panel.secondary.active.border.hex(),
      "activityBarTop.foreground"         : ui.panel.secondary.normal.foreground.hex(),
      "activityBarTop.activeBorder"       : ui.panel.secondary.active.border.hex(),
      "activityBarTop.inactiveForeground" : ui.panel.secondary.inactive.border.hex(),
      "activityBarTop.dropBorder"         : ui.panel.secondary.normal.border.hex(),
      "activityBarTop.background"         : ui.panel.secondary.normal.background.hex(),
      "activityBarTop.activeBackground"   : ui.panel.secondary.active.background.hex(),
      // Profiles
      "profileBadge.background" : ui.dialog.first.normal.background.hex(),
      "profileBadge.foreground" : ui.dialog.first.normal.foreground.hex(),
      "profiles.sashBorder"     : ui.dialog.first.normal.border.hex(),
      // Side Bar
      "sideBar.background"              : ui.panel.tertiary.normal.background.hex(),
      "sideBar.foreground"              : ui.panel.tertiary.normal.foreground.hex(),
      "sideBar.border"                  : ui.panel.tertiary.normal.border.hex(),
      "sideBar.dropBackground"          : ui.panel.tertiary.normal.background.hex(),
      "sideBarTitle.foreground"         : ui.panel.tertiary.normal.foreground.hex(),
      "sideBarSectionHeader.background" : ui.panel.primary.normal.background.hex(),
      "sideBarSectionHeader.foreground" : ui.panel.primary.normal.foreground.hex(),
      "sideBarSectionHeader.border"     : ui.panel.primary.normal.border.hex(),
      "sideBarActivityBarTop.border"    : ui.panel.primary.normal.border.hex(),
      "sideBarTitle.background"         : ui.panel.primary.normal.background.hex(),
      "sideBarStickyScroll.background"  : ui.input.checkbox.normal.background.hex(),
      "sideBarStickyScroll.border"      : ui.input.checkbox.normal.border.hex(),
      "sideBarStickyScroll.shadow"      : ui.input.checkbox.normal.background.hex(),
      // Minimap
      "minimap.findMatchHighlight"            : ui.message.success.hovered.background.hex(),
      "minimap.selectionHighlight"            : ui.message.info.hovered.background.hex(),
      "minimap.errorHighlight"                : ui.message.error.hovered.background.hex(),
      "minimap.warningHighlight"              : ui.message.warning.hovered.background.hex(),
      "minimap.background"                    : ui.dialog.first.hovered.background.hex(),
      "minimap.selectionOccurrenceHighlight"  : ui.message.info.hovered.background.hex(),
      "minimap.foregroundOpacity"             : ui.dialog.first.hovered.foreground.hex(),
      "minimap.infoHighlight"                 : ui.message.info.hovered.foreground.hex(),
      "minimapSlider.background"              : ui.dialog.first.active.background.hex(),
      "minimapSlider.hoverBackground"         : ui.dialog.first.hovered.background.hex(),
      "minimapSlider.activeBackground"        : ui.dialog.first.active.background.hex(),
      "minimapGutter.addedBackground"         : ui.git.added.hovered.background.hex(),
      "minimapGutter.modifiedBackground"      : ui.git.modified.hovered.background.hex(),
      "minimapGutter.deletedBackground"       : ui.git.deleted.hovered.background.hex(),
      // Editor Groups and Tabs
      "editorGroup.border"                    : ui.panel.secondary.normal.border.hex(),
      "editorGroup.dropBackground"            : ui.panel.secondary.normal.background.hex(),
      "editorGroupHeader.noTabsBackground"    : ui.panel.secondary.normal.background.hex(),
      "editorGroupHeader.tabsBackground"      : ui.dialog.first.normal.background.hex(),
      "editorGroupHeader.tabsBorder"          : ui.dialog.first.normal.border.hex(),
      "editorGroupHeader.border"              : ui.dialog.first.normal.border.hex(),
      "editorGroup.emptyBackground"           : ui.dialog.first.normal.background.hex(),
      "editorGroup.focusedEmptyBorder"        : ui.dialog.first.active.border.hex(),
      "editorGroup.dropIntoPromptForeground"  : ui.dialog.first.hovered.foreground.hex(),
      "editorGroup.dropIntoPromptBackground"  : ui.dialog.first.hovered.background.hex(),
      "editorGroup.dropIntoPromptBorder"      : ui.dialog.first.hovered.border.hex(),
      "tab.activeBackground"                  : ui.panel.tertiary.active.background.hex(),
      "tab.unfocusedActiveBackground"         : ui.panel.tertiary.inactive.background.hex(),
      "tab.activeForeground"                  : ui.panel.tertiary.active.foreground.hex(),
      "tab.border"                            : ui.panel.tertiary.normal.border.hex(),
      "tab.activeBorder"                      : ui.panel.tertiary.active.border.hex(),
      "tab.selectedBorderTop"                 : ui.panel.tertiary.active.border.hex(),
      "tab.selectedBackground"                : ui.panel.tertiary.active.background.hex(),
      "tab.selectedForeground"                : ui.panel.tertiary.active.foreground.hex(),
      "tab.dragAndDropBorder"                 : ui.panel.tertiary.hovered.border.hex(),
      "tab.unfocusedActiveBorder"             : ui.panel.tertiary.inactive.border.hex(),
      "tab.activeBorderTop"                   : ui.panel.tertiary.active.border.hex(),
      "tab.unfocusedActiveBorderTop"          : ui.panel.tertiary.active.border.hex(),
      "tab.lastPinnedBorder"                  : ui.panel.tertiary.normal.border.hex(),
      "tab.inactiveBackground"                : ui.panel.tertiary.inactive.background.hex(),
      "tab.unfocusedInactiveBackground"       : ui.panel.tertiary.inactive.background.hex(),
      "tab.inactiveForeground"                : ui.panel.tertiary.inactive.foreground.hex(),
      "tab.unfocusedActiveForeground"         : ui.panel.tertiary.active.foreground.hex(),
      "tab.unfocusedInactiveForeground"       : ui.panel.tertiary.inactive.foreground.hex(),
      "tab.hoverBackground"                   : ui.panel.tertiary.hovered.background.hex(),
      "tab.unfocusedHoverBackground"          : ui.panel.tertiary.hovered.background.hex(),
      "tab.hoverForeground"                   : ui.panel.tertiary.hovered.foreground.hex(),
      "tab.unfocusedHoverForeground"          : ui.panel.tertiary.hovered.foreground.hex(),
      "tab.hoverBorder"                       : ui.panel.tertiary.hovered.border.hex(),
      "tab.unfocusedHoverBorder"              : ui.panel.tertiary.hovered.border.hex(),
      "tab.activeModifiedBorder"              : ui.git.modified.active.border.hex(),
      "tab.inactiveModifiedBorder"            : ui.git.modified.inactive.border.hex(),
      "tab.unfocusedActiveModifiedBorder"     : ui.git.modified.inactive.border.hex(),
      "tab.unfocusedInactiveModifiedBorder"   : ui.git.modified.inactive.border.hex(),
      "editorPane.background"                 : ui.panel.primary.normal.background.hex(),
      "sideBySideEditor.horizontalBorder"     : ui.panel.primary.normal.border.hex(),
      "sideBySideEditor.verticalBorder"       : ui.panel.primary.normal.border.hex(),
      // Editor Colors
      "editor.background"                       : ui.panel.primary.normal.background.hex(),
      "editor.foreground"                       : ui.panel.primary.normal.foreground.hex(),
      "editorLineNumber.foreground"             : ui.panel.primary.inactive.foreground.hex(),
      "editorLineNumber.activeForeground"       : ui.panel.primary.active.foreground.hex(),
      "editorLineNumber.dimmedForeground"       : ui.panel.primary.inactive.foreground.hex(),
      "editorCursor.background"                 : ui.panel.primary.hovered.background.hex(),
      "editorCursor.foreground"                 : ui.panel.primary.hovered.foreground.hex(),
      "editorMultiCursor.primary.foreground"    : ui.panel.primary.hovered.foreground.hex(),
      "editorMultiCursor.primary.background"    : ui.panel.primary.hovered.background.hex(),
      "editorMultiCursor.secondary.foreground"  : ui.panel.secondary.hovered.foreground.hex(),
      "editorMultiCursor.secondary.background"  : ui.panel.secondary.hovered.background.hex(),
      "editor.placeholder.foreground"           : ui.panel.primary.normal.foreground.hex(),
      "editor.selectionBackground"              : ui.panel.primary.active.background.hex(),
      "editor.selectionForeground"              : ui.panel.primary.active.foreground.hex(),
      "editor.inactiveSelectionBackground"      : ui.panel.primary.inactive.background.hex(),
      "editor.selectionHighlightBackground"     : ui.panel.primary.hovered.background.hex(),
      "editor.selectionHighlightBorder"         : ui.panel.primary.hovered.border.hex(),
      "editor.wordHighlightBackground"          : fg.hex(),
      "editor.wordHighlightBorder"              : fg.hex(),
      "editor.wordHighlightStrongBackground"    : fg.hex(),
      "editor.wordHighlightStrongBorder"        : fg.hex(),
      "editor.wordHighlightTextBackground"      : fg.hex(),
      "editor.wordHighlightTextBorder"          : fg.hex(),
      "editor.findMatchBackground"              : fg.hex(),
      "editor.findMatchForeground"              : fg.hex(),
      "editor.findMatchHighlightForeground"     : fg.hex(),
      "editor.findMatchHighlightBackground"     : fg.hex(),
      "editor.findRangeHighlightBackground"     : fg.hex(),
      "editor.findMatchBorder"                  : fg.hex(),
      "editor.findMatchHighlightBorder"         : fg.hex(),
      "editor.findRangeHighlightBorder"         : fg.hex(),
      "search.resultsInfoForeground"            : fg.hex(),
      "searchEditor.findMatchBackground"        : fg.hex(),
      "searchEditor.findMatchBorder"            : fg.hex(),
      "searchEditor.textInputBorder"            : fg.hex(),
      "editor.hoverHighlightBackground"         : fg.hex(),
      "editor.lineHighlightBackground"          : fg.hex(),
      "editor.lineHighlightBorder"              : fg.hex(),
      "editorWatermark.foreground"              : fg.hex(),
      "editorUnicodeHighlight.border"           : fg.hex(),
      "editorUnicodeHighlight.background"       : fg.hex(),
      "editorLink.activeForeground"             : fg.hex(),
      "editor.rangeHighlightBackground"         : fg.hex(),
      "editor.rangeHighlightBorder"             : fg.hex(),
      "editor.symbolHighlightBackground"        : fg.hex(),
      "editor.symbolHighlightBorder"            : fg.hex(),
      "editorWhitespace.foreground"             : fg.hex(),
      "editorIndentGuide.background"            : fg.hex(),
      "editorIndentGuide.background1"           : fg.hex(),
      "editorIndentGuide.background2"           : fg.hex(),
      "editorIndentGuide.background3"           : fg.hex(),
      "editorIndentGuide.background4"           : fg.hex(),
      "editorIndentGuide.background5"           : fg.hex(),
      "editorIndentGuide.background6"           : fg.hex(),
      "editorIndentGuide.activeBackground"      : fg.hex(),
      "editorIndentGuide.activeBackground1"     : fg.hex(),
      "editorIndentGuide.activeBackground2"     : fg.hex(),
      "editorIndentGuide.activeBackground3"     : fg.hex(),
      "editorIndentGuide.activeBackground4"     : fg.hex(),
      "editorIndentGuide.activeBackground5"     : fg.hex(),
      "editorIndentGuide.activeBackground6"     : fg.hex(),
      "editorInlayHint.background"              : fg.hex(),
      "editorInlayHint.foreground"              : fg.hex(),
      "editorInlayHint.typeForeground"          : fg.hex(),
      "editorInlayHint.typeBackground"          : fg.hex(),
      "editorInlayHint.parameterForeground"     : fg.hex(),
      "editorInlayHint.parameterBackground"     : fg.hex(),
      "editorRuler.foreground"                  : fg.hex(),
      "editor.linkedEditingBackground"          : fg.hex(),
      // Editor Colors - Codelens
      "editorCodeLens.foreground"               : fg.hex(),
      // Editor Colors - Lightbulb
      "editorLightBulb.foreground"              : fg.hex(),
      "editorLightBulbAutoFix.foreground"       : fg.hex(),
      "editorLightBulbAi.foreground"            : fg.hex(),
      // Editor Colors - Matching Brackets
      "editorBracketMatch.background"                       : fg.hex(),
      "editorBracketMatch.border"                           : fg.hex(),
      "editorBracketHighlight.foreground1"                  : fg.hex(),
      "editorBracketHighlight.foreground2"                  : fg.hex(),
      "editorBracketHighlight.foreground3"                  : fg.hex(),
      "editorBracketHighlight.foreground4"                  : fg.hex(),
      "editorBracketHighlight.foreground5"                  : fg.hex(),
      "editorBracketHighlight.foreground6"                  : fg.hex(),
      "editorBracketHighlight.unexpectedBracket.foreground" : fg.hex(),
      "editorBracketPairGuide.activeBackground1"            : fg.hex(),
      "editorBracketPairGuide.activeBackground2"            : fg.hex(),
      "editorBracketPairGuide.activeBackground3"            : fg.hex(),
      "editorBracketPairGuide.activeBackground4"            : fg.hex(),
      "editorBracketPairGuide.activeBackground5"            : fg.hex(),
      "editorBracketPairGuide.activeBackground6"            : fg.hex(),
      "editorBracketPairGuide.background1"                  : fg.hex(),
      "editorBracketPairGuide.background2"                  : fg.hex(),
      "editorBracketPairGuide.background3"                  : fg.hex(),
      "editorBracketPairGuide.background4"                  : fg.hex(),
      "editorBracketPairGuide.background5"                  : fg.hex(),
      "editorBracketPairGuide.background6"                  : fg.hex(),
      // Editor Colors - Folding
      "editor.foldBackground"             : fg.hex(),
      "editor.foldPlaceholderForeground"  : fg.hex(),
      // Editor Colors - Overview Ruler
      "editorOverviewRuler.background"                    : fg.hex(),
      "editorOverviewRuler.border"                        : fg.hex(),
      "editorOverviewRuler.findMatchForeground"           : fg.hex(),
      "editorOverviewRuler.rangeHighlightForeground"      : fg.hex(),
      "editorOverviewRuler.selectionHighlightForeground"  : fg.hex(),
      "editorOverviewRuler.wordHighlightForeground"       : fg.hex(),
      "editorOverviewRuler.wordHighlightStrongForeground" : fg.hex(),
      "editorOverviewRuler.wordHighlightTextForeground"   : fg.hex(),
      "editorOverviewRuler.modifiedForeground"            : fg.hex(),
      "editorOverviewRuler.addedForeground"               : fg.hex(),
      "editorOverviewRuler.deletedForeground"             : fg.hex(),
      "editorOverviewRuler.errorForeground"               : fg.hex(),
      "editorOverviewRuler.warningForeground"             : fg.hex(),
      "editorOverviewRuler.infoForeground"                : fg.hex(),
      "editorOverviewRuler.bracketMatchForeground"        : fg.hex(),
      "editorOverviewRuler.inlineChatInserted"            : fg.hex(),
      "editorOverviewRuler.inlineChatRemoved"             : fg.hex(),
      // Editor Colors - Errors and Warnings
      "editorError.foreground"          : ui.message.error.normal.foreground.hex(),
      "editorError.border"              : ui.message.error.normal.border.hex(),
      "editorError.background"          : ui.message.error.normal.background.hex(),
      "editorWarning.foreground"        : ui.message.warning.normal.foreground.hex(),
      "editorWarning.border"            : ui.message.warning.normal.border.hex(),
      "editorWarning.background"        : ui.message.warning.normal.background.hex(),
      "editorInfo.foreground"           : ui.message.info.normal.foreground.hex(),
      "editorInfo.border"               : ui.message.info.normal.border.hex(),
      "editorInfo.background"           : ui.message.info.normal.background.hex(),
      "editorHint.foreground"           : ui.message.success.normal.foreground.hex(),
      "editorHint.border"               : ui.message.success.normal.border.hex(),
      "problemsErrorIcon.foreground"    : ui.message.error.normal.foreground.hex(),
      "problemsWarningIcon.foreground"  : ui.message.warning.normal.foreground.hex(),
      "problemsInfoIcon.foreground"     : ui.message.info.normal.foreground.hex(),
      // Editor Colors - Unused Source Code
      "editorUnnecessaryCode.border"    : ui.message.warning.normal.border.hex(),
      "editorUnnecessaryCode.opacity"   : ui.message.warning.normal.border.hex(),
      // Editor Colors - Gutter
      "editorGutter.background"                       : ui.panel.secondary.normal.background.hex(),
      // "editorGutter.modifiedBackground"               : base.red.hex(),
      // "editorGutter.addedBackground"                  : base.green.hex(),
      // "editorGutter.deletedBackground"                : base.green.hex(),
      // "editorGutter.commentRangeForeground"           : base.red.hex(),
      // "editorGutter.commentGlyphForeground"           : base.red.hex(),
      // "editorGutter.commentUnresolvedGlyphForeground" : base.red.hex(),
      // "editorGutter.foldingControlForeground"         : base.red.hex(),
      // "editorCommentsWidget.resolvedBorder"           : base.red.hex(),
      // "editorCommentsWidget.unresolvedBorder"         : base.red.hex(),
      // "editorCommentsWidget.rangeBackground"          : base.red.hex(),
      // "editorCommentsWidget.rangeActiveBackground"    : base.red.hex(),
      // "editorCommentsWidget.replyInputBackground"     : base.red.hex(),
      // Diff Editor Colors
      "diffEditor.insertedTextBackground"       : ui.git.added.hovered.foreground.alpha(0.25).hex(),
      // "diffEditor.insertedTextBorder"           : ui.git.added.hovered.border.hex(),
      "diffEditor.removedTextBackground"        : ui.git.deleted.hovered.foreground.alpha(0.25).hex(),
      // "diffEditor.removedTextBorder"            : ui.git.deleted.hovered.border.hex(),
      // "diffEditor.border"                       : ui.panel.primary.normal.border.hex(),
      "diffEditor.diagonalFill"                 : ui.panel.primary.normal.background.hex(),
      "diffEditor.insertedLineBackground"       : ui.git.added.hovered.foreground.alpha(0.2).hex(),
      "diffEditor.removedLineBackground"        : ui.git.deleted.hovered.foreground.alpha(0.2).hex(),
      "diffEditorGutter.insertedLineBackground" : ui.git.added.hovered.foreground.alpha(0.2).hex(),
      "diffEditorGutter.removedLineBackground"  : ui.git.deleted.hovered.foreground.alpha(0.2).hex(),
      // "diffEditorOverview.insertedForeground"   : ui.git.added.normal.foreground.hex(),
      // "diffEditorOverview.removedForeground"    : ui.git.deleted.normal.foreground.hex(),
      // "diffEditor.unchangedRegionBackground"    : ui.panel.primary.normal.background.hex(),
      // "diffEditor.unchangedRegionForeground"    : ui.panel.primary.normal.foreground.hex(),
      // "diffEditor.unchangedRegionShadow"        : ui.panel.primary.normal.background.hex(),
      // "diffEditor.unchangedCodeBackground"      : ui.panel.primary.normal.background.hex(),
      // "diffEditor.move.border"                  : ui.panel.primary.normal.border.hex(),
      // "diffEditor.moveActive.border"            : ui.panel.primary.active.border.hex(),
      // "multiDiffEditor.headerBackground"        : ui.panel.primary.normal.background.hex(),
      // "multiDiffEditor.background"              : ui.panel.primary.normal.background.hex(),
      // "multiDiffEditor.border"                  : ui.panel.primary.normal.border.hex(),
      // Chat Colors
      "chat.requestBorder"          : ui.dialog.first.normal.border.hex(),
      "chat.requestBackground"      : ui.dialog.first.normal.background.hex(),
      "chat.slashCommandBackground" : ui.dialog.first.normal.background.hex(),
      "chat.slashCommandForeground" : ui.dialog.first.normal.foreground.hex(),
      "chat.avatarBackground"       : ui.dialog.first.normal.background.hex(),
      "chat.avatarForeground"       : ui.dialog.first.normal.foreground.hex(),
      // Inline Chat Colors
      "inlineChat.background"                 : ui.input.text.normal.background.hex(),
      "inlineChat.foreground"                 : ui.input.text.normal.foreground.hex(),
      "inlineChat.border"                     : ui.input.text.normal.border.hex(),
      "inlineChat.shadow"                     : ui.input.text.normal.background.hex(),
      "inlineChatInput.border"                : ui.input.text.normal.border.hex(),
      "inlineChatInput.focusBorder"           : ui.input.text.active.border.hex(),
      "inlineChatInput.placeholderForeground" : ui.input.text.normal.foreground.hex(),
      "inlineChatInput.background"            : ui.input.text.normal.background.hex(),
      "inlineChatDiff.inserted"               : ui.git.added.normal.background.hex(),
      "inlineChatDiff.removed"                : ui.git.deleted.normal.background.hex(),
      // Panel Chat Colors
      "interactive.activeCodeBorder"    : ui.dialog.first.active.background.hex(),
      "interactive.inactiveCodeBorder"  : ui.dialog.first.inactive.background.hex(),
      // Editor Widget Colors
      "editorWidget.foreground"                         : ui.dialog.first.normal.foreground.hex(),
      "editorWidget.background"                         : ui.dialog.first.normal.background.hex(),
      "editorWidget.border"                             : ui.dialog.first.normal.border.hex(),
      "editorWidget.resizeBorder"                       : ui.dialog.first.normal.border.hex(),
      "editorSuggestWidget.background"                  : ui.dialog.second.normal.background.hex(),
      "editorSuggestWidget.border"                      : ui.dialog.second.normal.border.hex(),
      "editorSuggestWidget.foreground"                  : ui.dialog.second.normal.foreground.hex(),
      "editorSuggestWidget.focusHightlightForeground"   : ui.dialog.second.active.foreground.hex(),
      "editorSuggestWidget.highlightForeground"         : ui.dialog.second.hovered.foreground.hex(),
      "editorSuggestWidget.selectedBackground"          : ui.dialog.second.active.background.hex(),
      "editorSuggestWidget.selectedForeground"          : ui.dialog.second.active.foreground.hex(),
      "editorSuggestWidget.selectedIconForeground"      : ui.dialog.second.active.foreground.hex(),
      "editorSuggestWidgetStatus.foreground"            : ui.dialog.second.active.foreground.hex(),
      "editorHoverWidget.foreground"                    : ui.dialog.first.hovered.foreground.hex(),
      "editorHoverWidget.background"                    : ui.dialog.first.hovered.background.hex(),
      "editorHoverWidget.border"                        : ui.dialog.first.hovered.border.hex(),
      "editorHoverWidget.highlightForeground"           : ui.dialog.first.hovered.foreground.hex(),
      "editorHoverWidget.statusBarBackground"           : ui.dialog.first.hovered.background.hex(),
      "editorGhostText.border"                          : ui.dialog.third.normal.border.hex(),
      "editorGhostText.background"                      : ui.dialog.third.normal.background.hex(),
      "editorGhostText.foreground"                      : ui.dialog.third.normal.foreground.hex(),
      "editorStickyScroll.background"                   : ui.dialog.third.normal.background.hex(),
      "editorStickyScroll.border"                       : ui.dialog.third.normal.border.hex(),
      "editorStickyScroll.shadow"                       : ui.dialog.third.normal.background.hex(),
      "editorStickyScrollHover.background"              : ui.dialog.third.hovered.background.hex(),
      "debugExceptionWidget.background"                 : ui.message.error.normal.background.hex(),
      "debugExceptionWidget.border"                     : ui.message.error.normal.border.hex(),
      "editorMarkerNavigation.background"               : ui.dialog.first.normal.background.hex(),
      "editorMarkerNavigationError.background"          : ui.message.error.normal.background.hex(),
      "editorMarkerNavigationWarning.background"        : ui.message.warning.normal.background.hex(),
      "editorMarkerNavigationInfo.background"           : ui.message.info.normal.background.hex(),
      "editorMarkerNavigationError.headerBackground"    : ui.message.error.normal.background.hex(),
      "editorMarkerNavigationWarning.headerBackground"  : ui.message.warning.normal.background.hex(),
      "editorMarkerNavigationInfo.headerBackground"     : ui.message.info.normal.background.hex(),
      // Peek View Colors
      "peekView.border"                         : ui.dialog.first.normal.border.hex(),
      "peekViewEditor.background"               : ui.dialog.first.normal.background.hex(),
      "peekViewEditorGutter.background"         : ui.dialog.first.normal.background.hex(),
      "peekViewEditor.matchHighlightBackground" : ui.dialog.first.active.background.hex(),
      "peekViewEditor.matchHighlightBorder"     : ui.dialog.first.active.border.hex(),
      "peekViewResult.background"               : ui.dialog.first.normal.background.hex(),
      "peekViewResult.fileForeground"           : ui.dialog.first.normal.foreground.hex(),
      "peekViewResult.lineForeground"           : ui.dialog.first.inactive.foreground.hex(),
      "peekViewResult.matchHighlightBackground" : ui.dialog.first.active.foreground.hex(),
      "peekViewResult.selectionBackground"      : ui.dialog.first.active.background.hex(),
      "peekViewResult.selectionForeground"      : ui.dialog.first.active.foreground.hex(),
      "peekViewTitle.background"                : ui.dialog.first.normal.background.hex(),
      "peekViewTitleDescription.foreground"     : ui.dialog.first.normal.foreground.hex(),
      "peekViewTitleLabel.foreground"           : ui.dialog.first.normal.foreground.hex(),
      "peekViewEditorStickyScroll.background"   : ui.dialog.first.normal.background.hex(),
      // Merge Conflicts Colors
      "merge.currentHeaderBackground"                       : fg.hex(),
      "merge.currentContentBackground"                      : fg.hex(),
      "merge.incomingHeaderBackground"                      : fg.hex(),
      "merge.incomingContentBackground"                     : fg.hex(),
      "merge.border"                                        : fg.hex(),
      "merge.commonContentBackground"                       : fg.hex(),
      "merge.commonHeaderBackground"                        : fg.hex(),
      "editorOverviewRuler.currentContentForeground"        : fg.hex(),
      "editorOverviewRuler.incomingContentForeground"       : fg.hex(),
      "editorOverviewRuler.commonContentForeground"         : fg.hex(),
      "editorOverviewRuler.commentForeground"               : fg.hex(),
      "editorOverviewRuler.commentUnresolvedForeground"     : fg.hex(),
      "mergeEditor.change.background"                       : fg.hex(),
      "mergeEditor.change.word.background"                  : fg.hex(),
      "mergeEditor.conflict.unhandledUnfocused.border"      : fg.hex(),
      "mergeEditor.conflict.unhandledFocused.border"        : fg.hex(),
      "mergeEditor.conflict.handledUnfocused.border"        : fg.hex(),
      "mergeEditor.conflict.handledFocused.border"          : fg.hex(),
      "mergeEditor.conflict.handled.minimapOverViewRuler"   : fg.hex(),
      "mergeEditor.conflict.unhandled.minimapOverViewRuler" : fg.hex(),
      "mergeEditor.conflictingLines.background"             : fg.hex(),
      "mergeEditor.changeBase.background"                   : fg.hex(),
      "mergeEditor.changeBase.word.background"              : fg.hex(),
      "mergeEditor.conflict.input1.background"              : fg.hex(),
      "mergeEditor.conflict.input2.background"              : fg.hex(),
      // Panel Colors
      "panel.background"                  : fg.hex(),
      "panel.border"                      : fg.hex(),
      "panel.dropBorder"                  : fg.hex(),
      "panelTitle.activeBorder"           : fg.hex(),
      "panelTitle.activeForeground"       : fg.hex(),
      "panelTitle.inactiveForeground"     : fg.hex(),
      "panelInput.border"                 : fg.hex(),
      "panelSection.border"               : fg.hex(),
      "panelSection.dropBackground"       : fg.hex(),
      "panelSectionHeader.background"     : fg.hex(),
      "panelSectionHeader.foreground"     : fg.hex(),
      "panelStickyScroll.background"      : fg.hex(),
      "panelStickyScroll.border"          : fg.hex(),
      "panelStickyScroll.shadow"          : fg.hex(),
      "panelSectionHeader.border"         : fg.hex(),
      "outputView.background"             : fg.hex(),
      "outputViewStickyScroll.background" : fg.hex(),
      // Status Bar Colors
      "statusBar.background"                    : fg.hex(),
      "statusBar.foreground"                    : fg.hex(),
      "statusBar.border"                        : fg.hex(),
      "statusBar.debuggingBackground"           : fg.hex(),
      "statusBar.debuggingForeground"           : fg.hex(),
      "statusBar.debuggingBorder"               : fg.hex(),
      "statusBar.noFolderForeground"            : fg.hex(),
      "statusBar.noFolderBackground"            : fg.hex(),
      "statusBar.noFolderBorder"                : fg.hex(),
      "statusBarItem.activeBackground"          : fg.hex(),
      "statusBarItem.hoverForeground"           : fg.hex(),
      "statusBarItem.hoverBackground"           : fg.hex(),
      "statusBarItem.prominentForeground"       : fg.hex(),
      "statusBarItem.prominentBackground"       : fg.hex(),
      "statusBarItem.prominentHoverForeground"  : fg.hex(),
      "statusBarItem.prominentHoverBackground"  : fg.hex(),
      "statusBarItem.remoteBackground"          : fg.hex(),
      "statusBarItem.remoteForeground"          : fg.hex(),
      "statusBarItem.remoteHoverBackground"     : fg.hex(),
      "statusBarItem.remoteHoverForeground"     : fg.hex(),
      "statusBarItem.errorBackground"           : fg.hex(),
      "statusBarItem.errorForeground"           : fg.hex(),
      "statusBarItem.errorHoverBackground"      : fg.hex(),
      "statusBarItem.errorHoverForeground"      : fg.hex(),
      "statusBarItem.warningBackground"         : fg.hex(),
      "statusBarItem.warningForeground"         : fg.hex(),
      "statusBarItem.warningHoverBackground"    : fg.hex(),
      "statusBarItem.warningHoverForeground"    : fg.hex(),
      "statusBarItem.compactHoverBackground"    : fg.hex(),
      "statusBarItem.focusBorder"               : fg.hex(),
      "statusBar.focusBorder"                   : fg.hex(),
      "statusBarItem.offlineBackground"         : fg.hex(),
      "statusBarItem.offlineForeground"         : fg.hex(),
      "statusBarItem.offlineHoverForeground"    : fg.hex(),
      "statusBarItem.offlineHoverBackground"    : fg.hex(),
      // Title Bar Colors
      "titleBar.activeBackground"     : ui.panel.secondary.normal.background.hex(),
      "titleBar.activeForeground"     : ui.panel.secondary.normal.foreground.hex(),
      "titleBar.inactiveBackground"   : ui.panel.secondary.inactive.background.hex(),
      "titleBar.inactiveForeground"   : ui.panel.secondary.inactive.foreground.hex(),
      // "titleBar.border"               : base.red.hex(),
      // Menu Bar Colors
      "menubar.selectionForeground" : fg.hex(),
      "menubar.selectionBackground" : fg.hex(),
      "menubar.selectionBorder"     : fg.hex(),
      "menu.foreground"             : fg.hex(),
      "menu.background"             : fg.hex(),
      "menu.selectionForeground"    : fg.hex(),
      "menu.selectionBackground"    : fg.hex(),
      "menu.selectionBorder"        : fg.hex(),
      "menu.separatorBackground"    : fg.hex(),
      "menu.border"                 : fg.hex(),
      // Command Center Colors
      "commandCenter.foreground"          : ui.input.text.normal.foreground.hex(),
      "commandCenter.activeForeground"    : ui.input.text.active.foreground.hex(),
      "commandCenter.background"          : ui.input.text.normal.background.hex(),
      "commandCenter.activeBackground"    : ui.input.text.active.background.hex(),
      // "commandCenter.border"              : base.red.hex(),
      "commandCenter.inactiveForeground"  : ui.input.text.inactive.foreground.hex(),
      // "commandCenter.inactiveBorder"      : base.red.hex(),
      "commandCenter.activeBorder"        : ui.input.text.active.border.hex(),
      // "commandCenter.debuggingBackground" : base.red.hex(),
      // Notification Colors
      // "notificationCenter.border"           : base.red.hex(),
      "notificationCenterHeader.foreground" : ui.dialog.first.normal.foreground.hex(),
      "notificationCenterHeader.background" : ui.dialog.first.normal.background.hex(),
      // "notificationToast.border"            : base.red.hex(),
      "notifications.foreground"            : ui.dialog.second.normal.foreground.hex(),
      "notifications.background"            : ui.dialog.second.normal.background.hex(),
      // "notifications.border"                : base.red.hex(),
      "notificationLink.foreground"         : ui.message.info.normal.foreground.hex(),
      "notificationsErrorIcon.foreground"   : ui.message.error.normal.foreground.hex(),
      "notificationsWarningIcon.foreground" : ui.message.warning.normal.foreground.hex(),
      "notificationsInfoIcon.foreground"    : ui.message.info.normal.foreground.hex(),
      // Banner Colors
      // "banner.background"     : base.red.hex(),
      // "banner.foreground"     : base.red.hex(),
      // "banner.iconForeground" : base.red.hex(),
      // Extension Colors
      "extensionButton.prominentForeground"       : fg.hex(),
      "extensionButton.prominentBackground"       : fg.hex(),
      "extensionButton.prominentHoverBackground"  : fg.hex(),
      "extensionButton.background"                : fg.hex(),
      "extensionButton.foreground"                : fg.hex(),
      "extensionButton.hoverBackground"           : fg.hex(),
      "extensionButton.separator"                 : fg.hex(),
      "extensionBadge.remoteBackground"           : fg.hex(),
      "extensionBadge.remoteForeground"           : fg.hex(),
      "extensionIcon.starForeground"              : fg.hex(),
      "extensionIcon.verifiedForeground"          : fg.hex(),
      "extensionIcon.preReleaseForeground"        : fg.hex(),
      "extensionIcon.sponsorForeground"           : fg.hex(),
      // Quick Picker Colors
      "pickerGroup.border"                  : ui.panel.tertiary.normal.border.hex(),
      "pickerGroup.foreground"              : ui.panel.tertiary.active.foreground.hex(),
      "quickInput.background"               : ui.panel.tertiary.normal.background.hex(),
      "quickInput.foreground"               : ui.panel.tertiary.normal.foreground.hex(),
      "quickInputList.focusBackground"      : ui.panel.tertiary.active.background.hex(),
      "quickInputList.focusForeground"      : ui.panel.tertiary.active.foreground.hex(),
      "quickInputList.focusIconForeground"  : ui.panel.tertiary.active.foreground.hex(),
      "quickInputTitle.background"          : ui.panel.tertiary.normal.background.hex(),
      // Keybinding Label Colors
      "keybindingLabel.background"        : ui.input.button.normal.background.hex(),
      "keybindingLabel.foreground"        : ui.input.button.normal.foreground.hex(),
      // "keybindingLabel.border"            : base.red.hex(),
      // "keybindingLabel.bottomBorder"      : base.red.hex(),
      // "keybindingTable.headerBackground"  : base.red.hex(),
      // "keybindingTable.rowsBackground"    : base.red.hex(),
      // Integrated Terminal Colors
      "terminal.background"                         : ui.panel.tertiary.normal.background.hex(),
      // "terminal.border"                             : fg.hex(),
      "terminal.foreground"                         : ui.panel.tertiary.normal.foreground.hex(),
      "terminal.ansiBlack"                          : base.black.hex(),
      "terminal.ansiBlue"                           : base.blue.hex(),
      "terminal.ansiBrightBlack"                    : base.blackBright.hex(),
      "terminal.ansiBrightBlue"                     : base.blueBright.hex(),
      "terminal.ansiBrightCyan"                     : base.cyanBright.hex(),
      "terminal.ansiBrightGreen"                    : base.greenBright.hex(),
      "terminal.ansiBrightMagenta"                  : base.magentaBright.hex(),
      "terminal.ansiBrightRed"                      : base.redBright.hex(),
      "terminal.ansiBrightWhite"                    : base.whiteBright.hex(),
      "terminal.ansiBrightYellow"                   : base.yellowBright.hex(),
      "terminal.ansiCyan"                           : base.cyan.hex(),
      "terminal.ansiGreen"                          : base.green.hex(),
      "terminal.ansiMagenta"                        : base.magenta.hex(),
      "terminal.ansiRed"                            : base.red.hex(),
      "terminal.ansiWhite"                          : base.white.hex(),
      "terminal.ansiYellow"                         : base.yellow.hex(),
      "terminal.selectionBackground"                : ui.panel.primary.active.foreground.alpha(0.1).hex(),
      // "terminal.selectionForeground"                : fg.hex(),
      "terminal.inactiveSelectionBackground"        : ui.panel.primary.inactive.foreground.alpha(0.1).hex(),
      "terminal.findMatchBackground"                : ui.message.info.inactive.foreground.alpha(0.1).hex(),
      // "terminal.findMatchBorder"                    : fg.hex(),
      "terminal.findMatchHighlightBackground"       : ui.message.info.active.foreground.alpha(0.1).hex(),
      // "terminal.findMatchHighlightBorder"           : fg.hex(),
      "terminal.hoverHighlightBackground"           : ui.message.info.hovered.foreground.alpha(0.1).hex(),
      "terminalCursor.background"                   : ui.panel.tertiary.normal.background.hex(),
      "terminalCursor.foreground"                   : ui.panel.tertiary.active.foreground.hex(),
      "terminal.dropBackground"                     : fg.hex(),
      "terminal.tab.activeBorder"                   : ui.panel.tertiary.active.background.hex(),
      "terminalCommandDecoration.defaultBackground" : fg.hex(),
      "terminalCommandDecoration.successBackground" : fg.hex(),
      "terminalCommandDecoration.errorBackground"   : fg.hex(),
      "terminalOverviewRuler.cursorForeground"      : fg.hex(),
      "terminalOverviewRuler.findMatchForeground"   : fg.hex(),
      "terminalStickyScroll.background"             : fg.hex(),
      "terminalStickyScroll.border"                 : fg.hex(),
      "terminalStickyScrollHover.background"        : fg.hex(),
      "terminal.initialHintForeground"              : fg.hex(),
      "terminalOverviewRuler.border"                : fg.hex(),
      "terminalCommandGuide.foreground"             : fg.hex(),
      // Debug Colors
      "debugToolBar.background"                     : fg.hex(),
      "debugToolBar.border"                         : fg.hex(),
      "editor.stackFrameHighlightBackground"        : fg.hex(),
      "editor.focusedStackFrameHighlightBackground" : fg.hex(),
      "editor.inlineValuesForeground"               : fg.hex(),
      "editor.inlineValuesBackground"               : fg.hex(),
      "debugView.exceptionLabelForeground"          : fg.hex(),
      "debugView.exceptionLabelBackground"          : fg.hex(),
      "debugView.stateLabelForeground"              : fg.hex(),
      "debugView.stateLabelBackground"              : fg.hex(),
      "debugView.valueChangedHighlight"             : fg.hex(),
      "debugTokenExpression.name"                   : fg.hex(),
      "debugTokenExpression.value"                  : fg.hex(),
      "debugTokenExpression.string"                 : fg.hex(),
      "debugTokenExpression.boolean"                : fg.hex(),
      "debugTokenExpression.number"                 : fg.hex(),
      "debugTokenExpression.error"                  : fg.hex(),
      "debugTokenExpression.type"                   : fg.hex(),
      // Testing Colors
      "testing.runAction"                           : fg.hex(),
      "testing.iconErrored"                         : fg.hex(),
      "testing.iconFailed"                          : fg.hex(),
      "testing.iconPassed"                          : fg.hex(),
      "testing.iconQueued"                          : fg.hex(),
      "testing.iconUnset"                           : fg.hex(),
      "testing.iconSkipped"                         : fg.hex(),
      "testing.iconErrored.retired"                 : fg.hex(),
      "testing.iconFailed.retired"                  : fg.hex(),
      "testing.iconPassed.retired"                  : fg.hex(),
      "testing.iconQueued.retired"                  : fg.hex(),
      "testing.iconUnset.retired"                   : fg.hex(),
      "testing.iconSkipped.retired"                 : fg.hex(),
      "testing.peekBorder"                          : fg.hex(),
      "testing.peekHeaderBackground"                : fg.hex(),
      "testing.message.error.decorationForeground"  : fg.hex(),
      "testing.message.error.lineBackground"        : fg.hex(),
      "testing.message.info.decorationForeground"   : fg.hex(),
      "testing.message.info.lineBackground"         : fg.hex(),
      "testing.messagePeekBorder"                   : fg.hex(),
      "testing.messagePeekHeaderBackground"         : fg.hex(),
      "testing.coveredBackground"                   : fg.hex(),
      "testing.coveredBorder"                       : fg.hex(),
      "testing.coveredGutterBackground"             : fg.hex(),
      "testing.uncoveredBranchBackground"           : fg.hex(),
      "testing.uncoveredBackground"                 : fg.hex(),
      "testing.uncoveredBorder"                     : fg.hex(),
      "testing.uncoveredGutterBackground"           : fg.hex(),
      "testing.coverCountBadgeBackground"           : fg.hex(),
      "testing.coverCountBadgeForeground"           : fg.hex(),
      // Welcome Page Colors
      // "welcomePage.background"                : fg.hex(),
      // "welcomePage.progress.background"       : fg.hex(),
      // "welcomePage.progress.foreground"       : fg.hex(),
      // "welcomePage.tileBackground"            : fg.hex(),
      // "welcomePage.tileHoverBackground"       : fg.hex(),
      // "welcomePage.tileBorder"                : fg.hex(),
      // "walkThrough.embeddedEditorBackground"  : fg.hex(),
      // "walkthrough.stepTitle.foreground"      : fg.hex(),
      // Git Colors
      "gitDecoration.addedResourceForeground"         : ui.git.added.normal.foreground.hex(),
      "gitDecoration.modifiedResourceForeground"      : ui.git.modified.normal.foreground.hex(),
      "gitDecoration.deletedResourceForeground"       : ui.git.deleted.normal.foreground.hex(),
      "gitDecoration.renamedResourceForeground"       : ui.git.modified.normal.foreground.hex(),
      "gitDecoration.stageModifiedResourceForeground" : ui.git.modified.active.foreground.hex(),
      "gitDecoration.stageDeletedResourceForeground"  : ui.git.deleted.active.foreground.hex(),
      "gitDecoration.untrackedResourceForeground"     : ui.git.untracked.normal.foreground.hex(),
      "gitDecoration.ignoredResourceForeground"       : ui.git.untracked.normal.foreground.hex(),
      "gitDecoration.conflictingResourceForeground"   : ui.message.error.normal.foreground.hex(),
      "gitDecoration.submoduleResourceForeground"     : fg.hex(),
      // Source Control Graph Colors
      "scmGraph.historyItemGroupLocal"                : fg.hex(),
      "scmGraph.historyItemGroupRemote"               : fg.hex(),
      "scmGraph.historyItemGroupBase"                 : fg.hex(),
      "scmGraph.historyItemHoverLabelForeground"      : fg.hex(),
      "scmGraph.historyItemHoverAdditionsForeground"  : ui.git.added.hovered.foreground.hex(),
      "scmGraph.historyItemHoverDeletionsForeground"  : ui.git.deleted.hovered.foreground.hex(),
      // Settings Editor Colors
      // "settings.headerForeground"               : base.red.hex(),
      // "settings.modifiedItemIndicator"          : base.red.hex(),
      // "settings.dropdownBackground"             : base.red.hex(),
      // "settings.dropdownForeground"             : base.red.hex(),
      // "settings.dropdownBorder"                 : base.red.hex(),
      // "settings.dropdownListBorder"             : base.red.hex(),
      // "settings.checkboxBackground"             : base.red.hex(),
      // "settings.checkboxForeground"             : base.red.hex(),
      // "settings.checkboxBorder"                 : base.red.hex(),
      // "settings.rowHoverBackground"             : base.red.hex(),
      // "settings.textInputBackground"            : base.red.hex(),
      // "settings.textInputForeground"            : base.red.hex(),
      // "settings.textInputBorder"                : base.red.hex(),
      // "settings.numberInputBackground"          : base.red.hex(),
      // "settings.numberInputForeground"          : base.red.hex(),
      // "settings.numberInputBorder"              : base.red.hex(),
      // "settings.focusedRowBackground"           : base.red.hex(),
      // "settings.focusedRowBorder"               : base.red.hex(),
      // "settings.headerBorder"                   : base.red.hex(),
      // "settings.sashBorder"                     : base.red.hex(),
      // "settings.settingsHeaderHoverForeground"  : base.red.hex(),
      // Breadcrumbs Colors
      // "breadcrumb.foreground"                 : base.red.hex(),
      // "breadcrumb.background"                 : base.red.hex(),
      // "breadcrumb.focusForeground"            : base.red.hex(),
      // "breadcrumb.activeSelectionForeground"  : base.red.hex(),
      // "breadcrumbPicker.background"           : base.red.hex(),
      // // Snippets Colors
      // "editor.snippetTabstopHighlightBackground"      : base.red.hex(),
      // "editor.snippetTabstopHighlightBorder"          : base.red.hex(),
      // "editor.snippetFinalTabstopHighlightBackground" : base.red.hex(),
      // "editor.snippetFinalTabstopHighlightBorder"     : base.red.hex(),
      // Symbol Icons Colors
      // "symbolIcon.arrayForeground"            : base.red.hex(),
      // "symbolIcon.booleanForeground"          : base.red.hex(),
      // "symbolIcon.classForeground"            : base.red.hex(),
      // "symbolIcon.colorForeground"            : base.red.hex(),
      // "symbolIcon.constantForeground"         : base.red.hex(),
      // "symbolIcon.constructorForeground"      : base.red.hex(),
      // "symbolIcon.enumeratorForeground"       : base.red.hex(),
      // "symbolIcon.enumeratorMemberForeground" : base.red.hex(),
      // "symbolIcon.eventForeground"            : base.red.hex(),
      // "symbolIcon.fieldForeground"            : base.red.hex(),
      // "symbolIcon.fileForeground"             : base.red.hex(),
      // "symbolIcon.folderForeground"           : base.red.hex(),
      // "symbolIcon.functionForeground"         : base.red.hex(),
      // "symbolIcon.interfaceForeground"        : base.red.hex(),
      // "symbolIcon.keyForeground"              : base.red.hex(),
      // "symbolIcon.keywordForeground"          : base.red.hex(),
      // "symbolIcon.methodForeground"           : base.red.hex(),
      // "symbolIcon.moduleForeground"           : base.red.hex(),
      // "symbolIcon.namespaceForeground"        : base.red.hex(),
      // "symbolIcon.nullForeground"             : base.red.hex(),
      // "symbolIcon.numberForeground"           : base.red.hex(),
      // "symbolIcon.objectForeground"           : base.red.hex(),
      // "symbolIcon.operatorForeground"         : base.red.hex(),
      // "symbolIcon.packageForeground"          : base.red.hex(),
      // "symbolIcon.propertyForeground"         : base.red.hex(),
      // "symbolIcon.referenceForeground"        : base.red.hex(),
      // "symbolIcon.snippetForeground"          : base.red.hex(),
      // "symbolIcon.stringForeground"           : base.red.hex(),
      // "symbolIcon.structForeground"           : base.red.hex(),
      // "symbolIcon.textForeground"             : base.red.hex(),
      // "symbolIcon.typeParameterForeground"    : base.red.hex(),
      // "symbolIcon.unitForeground"             : base.red.hex(),
      // "symbolIcon.variableForeground"         : base.red.hex(),
      // Debug Icons Colors
      // "debugIcon.breakpointForeground"                  : base.red.hex(),
      // "debugIcon.breakpointDisabledForeground"          : base.red.hex(),
      // "debugIcon.breakpointUnverifiedForeground"        : base.red.hex(),
      // "debugIcon.breakpointCurrentStackframeForeground" : base.red.hex(),
      // "debugIcon.breakpointStackframeForeground"        : base.red.hex(),
      // "debugIcon.startForeground"                       : base.red.hex(),
      // "debugIcon.pauseForeground"                       : base.red.hex(),
      // "debugIcon.stopForeground"                        : base.red.hex(),
      // "debugIcon.disconnectForeground"                  : base.red.hex(),
      // "debugIcon.restartForeground"                     : base.red.hex(),
      // "debugIcon.stepOverForeground"                    : base.red.hex(),
      // "debugIcon.stepIntoForeground"                    : base.red.hex(),
      // "debugIcon.stepOutForeground"                     : base.red.hex(),
      // "debugIcon.continueForeground"                    : base.red.hex(),
      // "debugIcon.stepBackForeground"                    : base.red.hex(),
      // "debugConsole.infoForeground"                     : base.red.hex(),
      // "debugConsole.warningForeground"                  : base.red.hex(),
      // "debugConsole.errorForeground"                    : base.red.hex(),
      // "debugConsole.sourceForeground"                   : base.red.hex(),
      // "debugConsoleInputIcon.foreground"                : base.red.hex(),
      // Notebook Colors
      // "notebook.editorBackground"                         : base.red.hex(),
      // "notebook.cellBorderColor"                          : base.red.hex(),
      // "notebook.cellHoverBackground"                      : base.red.hex(),
      // "notebook.cellInsertionIndicator"                   : base.red.hex(),
      // "notebook.cellStatusBarItemHoverBackground"         : base.red.hex(),
      // "notebook.cellToolbarSeparator"                     : base.red.hex(),
      // "notebook.cellEditorBackground"                     : base.red.hex(),
      // "notebook.focusedCellBackground"                    : base.red.hex(),
      // "notebook.focusedCellBorder"                        : base.red.hex(),
      // "notebook.focusedEditorBorder"                      : base.red.hex(),
      // "notebook.inactiveFocusedCellBorder"                : base.red.hex(),
      // "notebook.inactiveSelectedCellBorder"               : base.red.hex(),
      // "notebook.outputContainerBackgroundColor"           : base.red.hex(),
      // "notebook.outputContainerBorderColor"               : base.red.hex(),
      // "notebook.selectedCellBackground"                   : base.red.hex(),
      // "notebook.selectedCellBorder"                       : base.red.hex(),
      // "notebook.symbolHighlightBackground"                : base.red.hex(),
      // "notebookScrollbarSlider.activeBackground"          : base.red.hex(),
      // "notebookScrollbarSlider.background"                : base.red.hex(),
      // "notebookScrollbarSlider.hoverBackground"           : base.red.hex(),
      // "notebookStatusErrorIcon.foreground"                : base.red.hex(),
      // "notebookStatusRunningIcon.foreground"              : base.red.hex(),
      // "notebookStatusSuccessIcon.foreground"              : base.red.hex(),
      // "notebookEditorOverviewRuler.runningCellForeground" : base.red.hex(),
      // Chart Colors
      // "charts.foreground" : base.red.hex(),
      // "charts.lines"      : base.red.hex(),
      // "charts.red"        : base.red.hex(),
      // "charts.blue"       : base.red.hex(),
      // "charts.yellow"     : base.red.hex(),
      // "charts.orange"     : base.red.hex(),
      // "charts.green"      : base.red.hex(),
      // "charts.purple"     : base.red.hex(),
      // Ports Colors
      // "ports.iconRunningProcessForeground"  : base.red.hex(),
      // Comments View Colors
      // "commentsView.resolvedIcon"   : base.red.hex(),
      // "commentsView.unresolvedIcon" : base.red.hex(),
      // "actionBar.toggledBackground" : base.red.hex(),
      // Simple Find Widget
      // "simpleFindWidget.sashBorder"             : base.red.hex(),
      // SCM
      // "scm.historyItemAdditionsForeground"      : base.red.hex(),
      // "scm.historyItemDeletionsForeground"      : base.red.hex(),
      // "scm.historyItemStatisticsBorder"         : base.red.hex(),
      // "scm.historyItemSelectedStatisticsBorder" : base.red.hex(),
    }
  }
}
