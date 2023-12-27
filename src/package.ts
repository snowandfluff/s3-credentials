import path from 'path'
import { ROOT } from './root'

// @ts-ignore
export const PACKAGE_JSON: {
  name: string
  description: string
  version: string
} = require(path.resolve(ROOT, 'package.json'))
