//@ts-check

import FichierOpérationsHautNiveau from '../source/format-données/fichierOpérationsHautNiveau.js'
import FichierOpérationsCompte from '../source/format-données/fichierOpérationsCompte.js'

import traduireOpérationsHautNiveauEnOpérationsDeCompte from '../source/format-données/traduireOpérationsHautNiveauEnOpérationsDeCompte.js'

const opHautNivPath = 'tests/etat-des-comptes/operationsHautNiveauLocation.yml'
const opComptesPath = 'tests/etat-des-comptes/operationsCompteLocation.yml'

const opHautNivFile = FichierOpérationsHautNiveau(opHautNivPath)

const opHautNiv = await opHautNivFile.getOpérations()

console.log('opHautNiv', opHautNiv)

const opCompte = traduireOpérationsHautNiveauEnOpérationsDeCompte(opHautNiv)

console.log('opCompte', opCompte)
