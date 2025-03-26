import * as fs from 'fs'
import * as path from 'path'
import template from './template'


const theme = JSON.stringify(template(), null, '\t')
fs.writeFileSync(path.join(process.cwd(), `themes/dark-petrol-dev.json`), theme)
