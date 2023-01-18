//@ts-check

import { writeFile, unlink, readFile } from 'node:fs/promises';
import { parse, stringify } from 'yaml'


export default (/** @type {import("fs").PathLike} */ filename) => {

    return Object.freeze({
        filename,

        createFile(){
            return writeFile(filename, `# Fichier d'opérations haut niveau\n\n`)
        },
        deleteFile(){
            //return Promise.resolve()
            
            return unlink(filename)
        },
        /**
         * 
         * @param {OpérationHautNiveau[]} opérations 
         * @returns {Promise<void>} 
         */
        async addOpérations(opérations){
            const src = await readFile(filename, 'utf-8');
            const content = await parse(src);

            /** @type {OpérationHautNiveau[]} */
            const newOpérations = (content || []).concat(opérations);
            const str = stringify(newOpérations);
            return writeFile(filename, str);
        },

        /**
         * 
         * @returns {Promise<OpérationHautNiveau[]>}
         */
        async getOpérations(){
            const src = await readFile(filename, 'utf-8');
            return await parse(src); 
        }
    })
}