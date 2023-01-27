//@ts-check

import {writeFile} from 'node:fs/promises'

import {stringifyOpérationsHautNiveauYaml} from '../source/format-données/opérationsHautNiveau.js'
import '../source/format-données/types.js'

const PATH = 'tests/etat-des-comptes/operationsHautNiveauLocation.yml'

/** @type {OpérationHautNiveau[]} */
const données = [
    {
        type: "Réception facture fournisseur",
        date: new Date(),
        identifiantOpération: 'dtynjfykyu',
        compteFournisseur: '401001',
        opérations: [
            {
                compte: '613201',
                montant: 500,
                sens: 'Débit'
            }
        ]
    },
    {
        type: "Paiement facture fournisseur",
        date: new Date(),
        identifiantOpération: 'mmrtlvril',
        compteBancaire: '512001',
        opérations: [
            {
                compte: '401001',
                montant: 500,
                sens: 'Débit'
            }
        ]
    }
]

await writeFile(PATH, stringifyOpérationsHautNiveauYaml(données))

console.log(`ayé, créé le fichier ${PATH} avec les bonnes données`)