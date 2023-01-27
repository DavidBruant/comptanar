//@ts-check

import './format-données/types.js'

/**
 * Cette fonction retourne un résultat faux (certains comptes 5 sont des passifs)
 * mais suffisamment vrai
 * 
 * @param {string} compte
 */
 function isActif(compte){
    return compte.startsWith('2') || compte.startsWith('3') || compte.startsWith('5')
}

/**
 * Cette fonction retourne un résultat faux (certains comptes 1 sont des actifs)
 * mais suffisamment vrai
 * 
 * @param {string} compte
 */
 function isPassif(compte){
    return compte.startsWith('1')
}

/**
 * @param {string} compte
 */
function isCompteDeTiers(compte){
    return compte.startsWith('4')
}

/**
 * @param {string} compte
 */
 function isProduit(compte){
    return compte.startsWith('7')
}
/**
 * @param {string} compte
 */
function isCharge(compte){
    return compte.startsWith('6')
}


/**
 * 
Un compte d’actif augmente avec un débit et diminue avec un crédit.
Un compte de passif augmente avec un crédit diminue avec un débit.
Un compte de charges augmente avec un débit diminue avec un crédit.
Un compte de produits augmente avec un crédit diminue avec un débit.

 * @param {OpérationDeCompte[]} opérationsDeCompte 
 * @returns {Map<string, number>}
 */
export default (opérationsDeCompte) => {
    /** @type {Map<string, number>} */
    const étatDesComptes = new Map()

    for(const {sens, compte, montant} of opérationsDeCompte){
        
        const montantActuel = étatDesComptes.get(compte) || 0;
        
        if(isActif(compte) || isCharge(compte)){
            if(sens === 'Débit')
                étatDesComptes.set(compte, montantActuel + montant)
            else
                étatDesComptes.set(compte, montantActuel - montant)
        }
        else{
            if(isPassif(compte) || isProduit(compte) || isCompteDeTiers(compte)){
                if(sens === 'Crédit')
                    étatDesComptes.set(compte, montantActuel + montant)
                else
                    étatDesComptes.set(compte, montantActuel - montant)
            }
            else{
                throw new Error(`Compte inconnu: ${compte}`)
            }
        }
    }

    return étatDesComptes
}