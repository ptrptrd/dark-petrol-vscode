# To parse the available properties from https://code.visualstudio.com/api/references/theme-color
# Clone repo https://github.com/microsoft/vscode-docs/blob/main/api/references/theme-color.md
# From repo folder execute: 
cat api/references/theme-color.md | grep -oP '`[aA-zZ.]+`:' > test.txt
