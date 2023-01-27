#!/usr/bin/env node

//@ts-check
import { readFileInStream, writeFileInStream } from '../source/stream-helpers.js'

import {parseOpérationsHautNiveauYaml} from '../source/format-données/opérationsHautNiveau.js'
import {stringifyOpérationsDeCompteYaml} from '../source/format-données/opérationsDeCompte.js'

import traduireOpérationsHautNiveauEnOpérationsDeCompte from '../source/format-données/traduireOpérationsHautNiveauEnOpérationsDeCompte.js'

const inputFileStr = await readFileInStream(process.stdin)
const opérationsHautNiveau = parseOpérationsHautNiveauYaml(inputFileStr)

const opsCompte = traduireOpérationsHautNiveauEnOpérationsDeCompte(opérationsHautNiveau)

const opsCompteString = stringifyOpérationsDeCompteYaml(opsCompte)
await writeFileInStream(opsCompteString, process.stdout)

