//@ts-check

/**
 * @typedef {Object} BaseOpérationHautNiveau
 * @property {string} identifiant
 * @property {string} type
 * @property {Date} moment
 */

/**
 * @typedef {Object} SpécifiqueEmissionFactureClient
 * @property {'Émission facture client'} type
 * @property {string} compteClient
 * @property {number} montantHorsTaxe
 * @property {number} montantTVA
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiqueEmissionFactureClient} EmissionFactureClient
 */

/** @type {EmissionFactureClient} */
let y = {
    type: "Émission facture client",
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
 * @typedef {BaseOpérationHautNiveau & SpécifiquePaiementFactureClient} PaiementFactureClient
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
        EmissionFactureClient | 
        PaiementFactureClient 
    } OpérationHautNiveau 
*/

/** @type {OpérationHautNiveau} */
let ophm;

ophm = y;
ophm = z;
