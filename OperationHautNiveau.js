//@ts-check

/**
 * @typedef {Object} Opération
 * @property {string} compte
 * @property {number} montant
 * @property {'Crédit' | 'Débit'} sens
 */

/**
 * @typedef {Object} BaseOpérationHautNiveau
 * @property {string} identifiantOpération
 * @property {string} type
 * @property {Date} date
 * @property {Opération | Opération[]} opérations
 */

/**
 * @typedef {Object} SpécifiqueEnvoiFactureClient
 * @property {'Envoi facture client'} type
 * @property {string} numéroFacture
 * @property {string} compteClient
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiqueEnvoiFactureClient} EnvoiFactureClient
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

/**
 * @typedef {Object} SpécifiquePaiementFactureClient
 * @property {'Paiement facture client'} type
 * @property {string=} numéroFacture
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiquePaiementFactureClient} PaiementFactureClient
 */

/** @type {PaiementFactureClient} */
let op2 = {
    type: "Paiement facture client",
    date: new Date(),
    identifiantOpération: 'azer',
    opérations: {
        compte: '402505161',
        montant: 60,
        sens: 'Débit'
    }
    
}

/**
 * @typedef {Object} SpécifiqueRéceptionFactureFournisseur
 * @property {'Réception facture fournisseur'} type
 * @property {string} compteFournisseur
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiqueRéceptionFactureFournisseur} RéceptionFactureFournisseur
 */

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

/**
 * @typedef {Object} SpécifiquePaiementFactureFournisseur
 * @property {'Paiement facture fournisseur'} type
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiquePaiementFactureFournisseur} PaiementFactureFournisseur
 */

/** @type {PaiementFactureFournisseur} */
let op4 = {
    type: "Paiement facture fournisseur",
    date: new Date(),
    identifiantOpération: 'azuji,yhf,er',
    opérations: {
        compte: '402505161',
        montant: 60,
        sens: 'Débit'
    }
}



/** 
    @typedef {
        EnvoiFactureClient | 
        PaiementFactureClient |
        RéceptionFactureFournisseur |
        PaiementFactureFournisseur
    } OpérationHautNiveau 
*/

/** @type {OpérationHautNiveau} */
let ophm;

ophm = op1;
ophm = op2;
ophm = op3;


