//@ts-check

import { parse, stringify } from 'yaml'

import { isOpérationHautNiveau } from './predicates.js';


/**
 * @param {string} str
 * @returns {OpérationHautNiveau[]}
 */
export function parseOpérationsHautNiveauYaml(str){
    const parsed = parse(str, (key, value) => {
        if(key === 'date' && typeof value === 'string'){
            return new Date(value)
        }

        return value;
    });

    if(Array.isArray(parsed) && parsed.every( isOpérationHautNiveau )) 
        return parsed
    else{
        throw new TypeError(
            `Problème dans le format de fichier qui n'est pas reconnu (devrait être un liste d'opérations haut niveau). Début du fichier:\n\n---\n${str.slice(0, 100)}\n---`
        )
    }
}

/**
 * @param {OpérationHautNiveau[]} ops
 * @returns {string}
 */
export function stringifyOpérationsHautNiveauYaml(ops){
    return stringify(ops)
}

