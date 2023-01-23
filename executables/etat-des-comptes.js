//@ts-check

import { writeFile } from 'node:fs/promises';

import FichierOpérationsHautNiveau from '../source/format-données/fichierOpérationsHautNiveau.js'
import FichierOpérationsCompte from '../source/format-données/fichierOpérationsCompte.js'

import traduireOpérationsHautNiveauEnOpérationsDeCompte from '../source/format-données/traduireOpérationsHautNiveauEnOpérationsDeCompte.js'
import produireÉtatDesComptes from '../source/produireÉtatDesComptes.js'


const opHautNivPath = 'tests/etat-des-comptes/operationsHautNiveauLocation.yml'
const opComptesPath = 'tests/etat-des-comptes/operationsCompteLocation.yml'
const étatDesComptesPath = 'tests/etat-des-comptes/état-des-comptes.json'

const opHautNivFile = FichierOpérationsHautNiveau(opHautNivPath)

const opsHautNiv = await opHautNivFile.getOpérations()

const opsCompte = traduireOpérationsHautNiveauEnOpérationsDeCompte(opsHautNiv)

const opCompteFile = FichierOpérationsCompte(opComptesPath)

await opCompteFile.createFile()
await opCompteFile.addOpérations(opsCompte)

const opsCompteNow = await opCompteFile.getOpérations()

const étatDesComptes = produireÉtatDesComptes(opsCompteNow)

writeFile(étatDesComptesPath, JSON.stringify(Object.fromEntries(étatDesComptes), null, 2), 'utf-8')
