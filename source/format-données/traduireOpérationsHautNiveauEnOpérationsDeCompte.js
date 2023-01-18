//@ts-check

import {sum} from 'd3-array';
import './types.js'

/**
 * @param {EnvoiFactureClient} efc  
 * @returns {OpérationDeCompte[]}
 */
function traduireEnvoiFactureClientEnOpérationsDeCompte(efc){
    /** @type {OpérationDeCompte} */
    const op = {
        compte: efc.compteClient,
        montant: sum(efc.opérations.map(op => op.montant)),
        sens: 'Débit'
    }

    return [op].concat(efc.opérations)
}


/**
 * @param {RéceptionFactureFournisseur} rff
 * @returns {OpérationDeCompte[]}
 */
 function traduireRécéptionFactureFournisseurEnOpérationsDeCompte(rff){
    /** @type {OpérationDeCompte} */
    const op = {
        compte: rff.compteFournisseur,
        montant: sum(rff.opérations.map(op => op.montant)),
        sens: 'Crédit'
    }

    return [op].concat(rff.opérations)
}

/**
 * @param {PaiementFactureFournisseur} rff
 * @returns {OpérationDeCompte[]}
 */
 function traduirePaiementFactureFournisseurEnOpérationsDeCompte(rff){
    /** @type {OpérationDeCompte} */
    const op = {
        compte: rff.compteBancaire,
        montant: sum(rff.opérations.map(op => op.montant)),
        sens: 'Crédit'
    }

    return [op].concat(rff.opérations)
}


/**
 * @param {OpérationHautNiveau[]} opérationsHautNiveau 
 * @returns {OpérationDeCompte[]}
 */
export default (opérationsHautNiveau) => {
    /** @type {OpérationDeCompte[]} */
    let result = []

    for(const ophn of opérationsHautNiveau){
        let newOps;
        
        switch(ophn.type){
            case 'Envoi facture client': 
                newOps = traduireEnvoiFactureClientEnOpérationsDeCompte(ophn)
                break;
            case 'Paiement facture client':
                throw 'pas implémenté'
                break;
            case 'Réception facture fournisseur':
                newOps = traduireRécéptionFactureFournisseurEnOpérationsDeCompte(ophn)
                break;
            case 'Paiement facture fournisseur':
                newOps = traduirePaiementFactureFournisseurEnOpérationsDeCompte(ophn)
                break;

            default: 
                /** @type {never} */
                const _exhaustiveCheck = ophn;
                return _exhaustiveCheck;
        }

        result = result.concat(newOps)

        //console.log(ophn, newOps)
    }

    return result;
}