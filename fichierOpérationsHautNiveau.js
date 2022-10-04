
import { writeFile, unlink, readFile } from 'node:fs/promises';
import {join} from 'node:path';
import { parse, stringify } from 'yaml'

const OPERATION_HAUT_NIVEAU_FILENAME = 'OpérationsHautNiveau.yml'

export default (directory) => {
    const filename = join(directory, OPERATION_HAUT_NIVEAU_FILENAME)

    return Object.freeze({
        filename,

        createFile(){
            return writeFile(filename, `# Fichier d'opérations haut niveau\n\n`)
        },
        deleteFile(){
            return Promise.resolve()
            
            //return unlink(filename)
        },
        addOpérations(opérations){
            return readFile(filename, 'utf-8')
                .then(parse)
                .then(content => {
                    const newOpérations = (content || []).concat(opérations)
                    const str = stringify(newOpérations)

                    return writeFile(filename, str)
                })
        }

    })
}