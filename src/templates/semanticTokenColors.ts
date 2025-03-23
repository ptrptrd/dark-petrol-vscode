import { syntax } from "../colors";

const semanticTokenColors = {
  "namespace"                         : syntax.namespace.hex(),
  "class"                             : syntax.class.hex(),
  "enum"                              : syntax.enum.hex(),
  "interface"                         : syntax.interface.hex(),
  "struct"                            : syntax.struct.hex(),
  "typeParameter"                     : syntax.typeParameter.hex(),
  "type"                              : syntax.type.hex(),
  "event"                             : syntax.event.hex(),
  "function"                          : syntax.function.hex(),
  "method"                            : syntax.method.hex(),
  "macro"                             : syntax.macro.hex(),
  "label"                             : syntax.label.hex(),
  "comment"                           : syntax.comment.hex(),
  "string"                            : syntax.string.hex(),
  "keyword"                           : syntax.keyword.hex(),
  "number"                            : syntax.number.hex(),
  "regexp"                            : syntax.regexp.hex(),
  "operator"                          : syntax.operator.hex(),
}

export {
  semanticTokenColors
}
