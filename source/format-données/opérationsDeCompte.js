//@ts-check

import { parse, stringify } from 'yaml'

import { isOpérationDeCompte } from './predicates.js';
/**
 * @param {string} str
 * @returns {OpérationDeCompte[]}
 */
export function parseOpérationsDeCompteYaml(str){
    const parsed = parse(str);

    if(Array.isArray(parsed) && parsed.every( isOpérationDeCompte )) 
        return parsed
    else{
        throw new TypeError(
            `Problème dans le format de fichier qui n'est pas reconnu (devrait être un liste d'opérations de compte). Début du fichier:\n\n---\n${str.slice(0, 100)}\n---`
        )
    }
}

/**
 * @param {OpérationDeCompte[]} ops
 * @returns {string}
 */
export function stringifyOpérationsDeCompteYaml(ops){
    return stringify(ops)
}