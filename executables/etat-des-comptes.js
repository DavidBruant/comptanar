#!/usr/bin/env node

//@ts-check
import { readFileInStream, writeFileInStream } from '../source/stream-helpers.js'

import {parseOpérationsDeCompteYaml} from '../source/format-données/opérationsDeCompte.js'

import produireÉtatDesComptes from '../source/produireÉtatDesComptes.js'

const inputFileStr = await readFileInStream(process.stdin)
const opsCompte = parseOpérationsDeCompteYaml(inputFileStr)

const étatDesComptes = produireÉtatDesComptes(opsCompte)

const étatDesComptesString = JSON.stringify(Object.fromEntries(étatDesComptes), null, 2)
await writeFileInStream(étatDesComptesString, process.stdout)

