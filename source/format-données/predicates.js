
import './types.js'

/**
 * @param {any} op
 * @returns {op is OpérationDeCompte}
 */
export function isOpérationDeCompte(op){
    return Object(op) === op &&
        typeof op.compte === 'string' &&
        Number.isFinite(op.montant) && 
        op.sens === 'Crédit' || op.sens === 'Débit';
}
