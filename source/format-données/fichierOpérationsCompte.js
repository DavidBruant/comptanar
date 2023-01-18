//@ts-check

import { writeFile, unlink, readFile } from 'node:fs/promises';
import { parse, stringify } from 'yaml'


export default (filename) => {

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
        }

    })
}