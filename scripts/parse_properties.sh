# To parse the available properties from VSCode Github Repo to get properties for color theme
# Clone repo https://github.com/microsoft/vscode-docs/blob/main/api/references/theme-color.md
# From repo folder execute: 
cat api/references/theme-color.md | grep -oP '`[aA-zZ.]+`:' > test.txt
cat api/language-extensions/semantic-highlight-guide.md | grep -oP '\|\s`[aA-zZ.]+`\|' | tr -d '\|' > test.txt
