//@ts-check


/** 
 * facture client émise, 
 * paiement facture par client, 
 * versement salaire, 
 * répartition bénéfice, 
 * déclaration TVA, etc. 
 *
 **/ 

/**
 * @typedef {Object} BaseOpérationHautNiveau
 * @property {string} identifiant
 * @property {string} type
 */

/** @type {BaseOpérationHautNiveau} */
let x = {
    identifiant: 'enhriovenjvrl',
    type: 'yoooooooooooooooo'
};

/**
 * @typedef {Object} SpécifiqueEmissionFactureClient
 * @property {string} compteClient
 * @property {number} montantHorsTaxe
 * @property {number} montantTVA
 */

/**
 * @typedef {BaseOpérationHautNiveau & SpécifiqueEmissionFactureClient} EmissionFactureClient
 */

/** @type {EmissionFactureClient} */
let y = {
    compteClient: '402505161',
    identifiant: 'azer',
    type: 'blabla',
    montantHorsTaxe: 50,
    montantTVA: 10
}



/**
 * @typedef {Object} OpérationHautNiveau
 * @property {string} Prénom
 * @property {string} Nom
 * @property {string} modeContact
 * @property {string} contact
 * @property {string} lieu
 */