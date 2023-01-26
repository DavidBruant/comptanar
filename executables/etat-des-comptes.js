#!/usr/bin/env node

//@ts-check

import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

import FichierOpérationsHautNiveau from '../source/format-données/fichierOpérationsHautNiveau.js'
import FichierOpérationsCompte from '../source/format-données/fichierOpérationsCompte.js'

import traduireOpérationsHautNiveauEnOpérationsDeCompte from '../source/format-données/traduireOpérationsHautNiveauEnOpérationsDeCompte.js'
import produireÉtatDesComptes from '../source/produireÉtatDesComptes.js'

import { Command } from 'commander';
const program = new Command();

program
  .name('etat-des-comptes')
  .description('Créer un état des comptes à partir des opérations ')
  .version('1.0.0');

program
  .option('-e, --entree <entree>', `fichier d'entrée des opérations haut niveau`, e => resolve(e))
  .option('-s, --sortie <sortie>', `dossier de sortie pour les opérations de comptes et état des comptes`, s => resolve(s))

program.parse();

const {entree: opHautNivPath, sortie} = program.opts()

//console.log('entree', entree, 'sortie', sortie)

const opComptesFilename = 'operationsCompteLocation.yml'
const étatDesComptesFilname = 'état-des-comptes.json'

const opComptesPath = resolve(sortie, opComptesFilename)
const étatDesComptesPath = resolve(sortie, étatDesComptesFilname)

const opHautNivFile = FichierOpérationsHautNiveau(opHautNivPath)

const opsHautNiv = await opHautNivFile.getOpérations()

const opsCompte = traduireOpérationsHautNiveauEnOpérationsDeCompte(opsHautNiv)

const opCompteFile = FichierOpérationsCompte(opComptesPath)

await opCompteFile.createFile()
await opCompteFile.addOpérations(opsCompte)

const opsCompteNow = await opCompteFile.getOpérations()

const étatDesComptes = produireÉtatDesComptes(opsCompteNow)

writeFile(étatDesComptesPath, JSON.stringify(Object.fromEntries(étatDesComptes), null, 2), 'utf-8')
