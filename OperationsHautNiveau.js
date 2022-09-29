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
let y = {
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
let z = {
    type: "Paiement facture client",
    moment: new Date(),
    identifiant: 'azer',
    compteClient: '402505161',
    montant: 60
}


/** 
    @typedef {
        EnvoiFactureClient | 
        PaiementFactureClient 
    } OpérationsHautNiveau 
*/

/** @type {OpérationsHautNiveau} */
let ophm;

ophm = y;
ophm = z;
