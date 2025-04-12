import crypto from 'node:crypto'
import { readFileSync } from 'node:fs'

const fileBuffer = readFileSync('someFile')
const hash = crypto.createHash('sha512')
hash.update(fileBuffer)
