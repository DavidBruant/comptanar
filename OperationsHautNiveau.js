//@ts-check

/**
 * @typedef {Object} BaseOpérationsHautNiveau
 * @property {string} identifiant
 * @property {string} type
 * @property {Date} moment
 */

/**
 * @typedef {Object} SpécifiqueEnvoiFactureClient
 * @property {'Envoi facture client'} type
 * @property {string} compteClient
 * @property {number} montantHorsTaxe
 * @property {number} montantTVA
 * 
 * @typedef {BaseOpérationsHautNiveau & SpécifiqueEnvoiFactureClient} EnvoiFactureClient
 */

/** @type {EnvoiFactureClient} */
let op1 = {
    type: "Envoi facture client",
    moment: new Date(),
    identifiant: 'azer',
    compteClient: '402505161',
    montantHorsTaxe: 50,
    montantTVA: 10
}

/**
 * @typedef {Object} SpécifiquePaiementFactureClient
 * @property {'Paiement facture client'} type
 * @property {string} compteClient
 * @property {number} montant
 * 
 * @typedef {BaseOpérationsHautNiveau & SpécifiquePaiementFactureClient} PaiementFactureClient
 */

/** @type {PaiementFactureClient} */
let op2 = {
    type: "Paiement facture client",
    moment: new Date(),
    identifiant: 'azer',
    compteClient: '402505161',
    montant: 60
}

/**
 * @typedef {Object} SpécifiqueRéceptionFactureFournisseur
 * @property {'Réception facture fournisseur'} type
 * @property {string} compteClient
 * @property {string} compteUsage
 * @property {number} montantHorsTaxe
 * @property {number} montantTVA
 * 
 * @typedef {BaseOpérationsHautNiveau & SpécifiqueRéceptionFactureFournisseur} RéceptionFactureFournisseur
 */

/** @type {RéceptionFactureFournisseur} */
let op3 = {
    type: "Réception facture fournisseur",
    moment: new Date(),
    identifiant: 'azuji,yhf,er',
    compteClient: '402505161',
    compteUsage: '9857852',
    montantHorsTaxe: 50,
    montantTVA: 10
}

/**
 * @typedef {Object} SpécifiquePaiementFactureFournisseur
 * @property {'Paiement facture fournisseur'} type
 * @property {string} compteClient
 * @property {number} montant
 * 
 * @typedef {BaseOpérationsHautNiveau & SpécifiquePaiementFactureFournisseur} PaiementFactureFournisseur
 */

/** @type {PaiementFactureFournisseur} */
let op4 = {
    type: "Paiement facture fournisseur",
    moment: new Date(),
    identifiant: 'azuji,yhf,er',
    compteClient: '402505161',
    montant: 50
}



/** 
    @typedef {
        EnvoiFactureClient | 
        PaiementFactureClient |
        RéceptionFactureFournisseur |
        PaiementFactureFournisseur
    } OpérationsHautNiveau 
*/

/** @type {OpérationsHautNiveau} */
let ophm;

ophm = op1;
ophm = op2;
ophm = op3;


