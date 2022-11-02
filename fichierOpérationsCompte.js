//@ts-check

import { writeFile, unlink, readFile } from 'node:fs/promises';
import {join} from 'node:path';
import { parse, stringify } from 'yaml'

const OPERATION_COMPTE_FILENAME = 'OpérationsCompte.yml'

export default (directory) => {
    const filename = join(directory, OPERATION_COMPTE_FILENAME)

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