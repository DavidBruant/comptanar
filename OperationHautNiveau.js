//@ts-check

import './types.js'

/**
 * Ce fichier n'existe que pour faire des tests de types statiques
 */


/** @type {EnvoiFactureClient} */
let op1 = {
    type: "Envoi facture client",
    date: new Date(),
    identifiantOpération: 'azer',
    numéroFacture: 'F2022-10-001',
    compteClient: '402563',
    opérations: [
        {
            compte: '602561',
            montant: 50,
            sens: 'Débit'
        },
        {
            compte: '44566', // TVA
            montant: 10,
            sens: 'Débit'
        }
    ]
}



/** @type {PaiementFactureClient} */
let op2 = {
    type: "Paiement facture client",
    date: new Date(),
    identifiantOpération: 'azer',
    opérations: [
        {
            compte: '402505161',
            montant: 60,
            sens: 'Débit'
        }
    ]
    
}



/** @type {RéceptionFactureFournisseur} */
let op3 = {
    type: "Réception facture fournisseur",
    date: new Date(),
    identifiantOpération: 'azuji,yhf,er',
    compteFournisseur: '402505161',
    opérations: [
        {
            compte: '702561',
            montant: 50,
            sens: 'Crédit'
        },
        {
            compte: '44566', // TVA
            montant: 10,
            sens: 'Crédit'
        }
    ]
}


/** @type {PaiementFactureFournisseur} */
let op4 = {
    type: "Paiement facture fournisseur",
    date: new Date(),
    identifiantOpération: 'azuji,yhf,er',
    compteBancaire: '58756',
    opérations: [
        {
            compte: '402505161',
            montant: 60,
            sens: 'Débit'
        }
    ]
}





/** @type {OpérationHautNiveau} */
let ophm;

ophm = op1;
ophm = op2;
ophm = op3;


