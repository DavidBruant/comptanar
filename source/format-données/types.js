//@ts-check

/**
 * @typedef {Object} OpérationDeCompte
 * @property {string} compte
 * @property {number} montant
 * @property {'Crédit' | 'Débit'} sens
 */

/**
 * @typedef {Object} BaseOpérationHautNiveau
 * @property {string} identifiantOpération
 * @property {string} type
 * @property {Date} date
 * @property {OpérationDeCompte[]} opérations
 */

/**
 * @typedef {Object} SpécifiqueEnvoiFactureClient
 * @property {'Envoi facture client'} type
 * @property {string} numéroFacture
 * @property {string} compteClient
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiqueEnvoiFactureClient} EnvoiFactureClient
 */

/**
 * @typedef {Object} SpécifiquePaiementFactureClient
 * @property {'Paiement facture client'} type
 * @property {string=} numéroFacture
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiquePaiementFactureClient} PaiementFactureClient
 */

/**
 * @typedef {Object} SpécifiqueRéceptionFactureFournisseur
 * @property {'Réception facture fournisseur'} type
 * @property {string} compteFournisseur
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiqueRéceptionFactureFournisseur} RéceptionFactureFournisseur
 */

/**
 * @typedef {Object} SpécifiquePaiementFactureFournisseur
 * @property {'Paiement facture fournisseur'} type
 * @property {string} compteBancaire
 * 
 * @typedef {BaseOpérationHautNiveau & SpécifiquePaiementFactureFournisseur} PaiementFactureFournisseur
 */

/** 
    @typedef {
        EnvoiFactureClient | 
        PaiementFactureClient |
        RéceptionFactureFournisseur |
        PaiementFactureFournisseur
    } OpérationHautNiveau 
*/