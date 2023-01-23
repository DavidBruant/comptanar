//@ts-check

import { writeFile, unlink, readFile } from 'node:fs/promises';
import { parse, stringify } from 'yaml'

import { isOpérationDeCompte } from './predicates.js';

export default (/** @type {import("fs").PathLike} */ filename) => {

    return Object.freeze({
        filename,

        createFile(){
            return writeFile(filename, `# Fichier d'opérations de compte\n\n`)
        },
        deleteFile(){
            //return Promise.resolve()
            
            return unlink(filename)
        },
        /**
         * 
         * @param {OpérationDeCompte[]} opérations 
         * @returns {Promise<void>} 
         */
        async addOpérations(opérations){
            const src = await readFile(filename, 'utf-8');
            const content = await parse(src);

            /** @type {OpérationDeCompte[]} */
            const newOpérations = (content || []).concat(opérations);
            const str = stringify(newOpérations);
            return writeFile(filename, str);
        },

        /**
         * 
         * @returns {Promise<OpérationDeCompte[]>}
         */
        async getOpérations(){
            const src = await readFile(filename, 'utf-8');
            const parsed = await parse(src); 

            if(Array.isArray(parsed) && parsed.every( isOpérationDeCompte )) 
                return parsed
            else{
                throw new TypeError(
                    `Problème dans le format de fichier ${filename} qui n'est pas reconnu (devrait être un liste d'opérations de compte). Début du fichier:\n\n---\n${src.slice(0, 50)}\n---`
                )
            }
        }

    })
}